// src/context/FriendsContext.js
import { useState, useEffect } from "react";
import { FriendsContextCreate } from "./FriendsContextCreator";

const FriendsContext = ({ children }) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/friendsData.json')
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load friends:", err);
                setLoading(false);
            });
    }, []);

    const data = {
        friends,
        loading,
        setFriends
    };

    return (
        <FriendsContextCreate.Provider value={data}>
            {children}
        </FriendsContextCreate.Provider>
    );
};

export default FriendsContext;