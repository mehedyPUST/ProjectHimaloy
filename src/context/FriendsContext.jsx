import { useState, useEffect } from "react";
import { FriendsContextCreate } from "./FriendsContextCreator";

const API_URL =
    "https://docs.google.com/spreadsheets/d/1QKWqcFdRjIHwQ5lbtAb464h6X_HVla3xHXDj0SSxdgU/gviz/tq?tqx=out:json&gid=918833718";


const formatDate = (value) => {
    if (!value) return value;


    if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
        return value;
    }

    if (typeof value === "string" && value.startsWith("Date")) {
        const match = value.match(/\d+/g);

        if (!match) return value;

        const [year, month, day] = match;

        const date = new Date(Number(year), Number(month), Number(day));

        return date.toISOString().split("T")[0];
    }

    return value;
};

const FriendsContext = ({ children }) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(API_URL);
                const text = await res.text();

                const json = JSON.parse(
                    text.substring(
                        text.indexOf("{"),
                        text.lastIndexOf("}") + 1
                    )
                );

                const cols = json.table.cols.map(col => col.label);

                const data = json.table.rows.map(row => {
                    let obj = {};

                    row.c?.forEach((cell, i) => {
                        obj[cols[i]] = formatDate(cell?.v); // 🔥 HERE FIXED
                    });

                    return obj;
                });

                setFriends(data);
            } catch (err) {
                console.error(err);
                setFriends([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <FriendsContextCreate.Provider value={{ friends, loading }}>
            {children}
        </FriendsContextCreate.Provider>
    );
};

export default FriendsContext;
