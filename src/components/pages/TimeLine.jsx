import { useContext, useState } from "react";
import { TimelineContextCreate } from "../../context/TimelineContextCreator";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { ImFilesEmpty } from "react-icons/im";

const TimeLine = () => {
    const { timeline } = useContext(TimelineContextCreate);
    const [sortBy, setSortBy] = useState("date-desc");

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    const getIcon = (type) => {
        if (type === "call") return <FiPhoneCall className="text-3xl text-blue-600" />;
        if (type === "text") return <MdOutlineTextsms className="text-3xl text-purple-600" />;
        if (type === "video") return <CiVideoOn className="text-3xl text-rose-600" />;
    };

    const getSortedTimeline = () => {
        const timelineCopy = [...timeline];

        switch (sortBy) {
            case "date-asc":
                return timelineCopy.sort((a, b) => new Date(a.date) - new Date(b.date));
            case "date-desc":
                return timelineCopy.sort((a, b) => new Date(b.date) - new Date(a.date));
            case "name-asc":
                return timelineCopy.sort((a, b) => a.name.localeCompare(b.name));
            case "name-desc":
                return timelineCopy.sort((a, b) => b.name.localeCompare(a.name));
            case "type-asc":
                return timelineCopy.sort((a, b) => a.type.localeCompare(b.type));
            case "type-desc":
                return timelineCopy.sort((a, b) => b.type.localeCompare(a.type));
            default:
                return timelineCopy;
        }
    };

    const sortedTimeline = getSortedTimeline();

    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
                <h2 className="text-4xl font-bold text-emerald-900 ">Timeline</h2>

                <div className="relative">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="appearance-none bg-white border border-gray-200 rounded-xl px-5 py-2.5 pr-12 text-gray-700 font-medium focus:outline-none focus:border-emerald-500 focus:ring focus:ring-emerald-200 transition cursor-pointer"
                    >
                        <option value="" disabled>Sort By</option>
                        <option value="date-desc"> Newest First</option>
                        <option value="date-asc">Oldest First</option>
                        <option value="name-asc">Name (A-Z)</option>
                        <option value="name-desc">Name (Z-A)</option>
                        <option value="type-asc">Type (A-Z)</option>
                        <option value="type-desc">Type (Z-A)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                        {sortBy.includes("asc") ? <FaSortAmountUp /> : <FaSortAmountDown />}
                    </div>
                </div>
            </div>

            {timeline.length === 0 ? (
                <div className="bg-white rounded-xl p-16 flex flex-col items-center justify-center text-center shadow">
                    <div className="text-6xl mb-6 "><ImFilesEmpty /></div>
                    <h3 className="text-2xl font-semibold mb-2">No interactions yet</h3>
                    <p className="text-gray-500">Start calling, texting, or video calling your friends to see the timeline here.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {sortedTimeline.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition flex items-center gap-6"
                        >
                            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                                {getIcon(item.type)}
                            </div>

                            <div className="flex-1">
                                <p className="text-xl">
                                    <span className="font-semibold capitalize">{item.type}</span> with{" "}
                                    <span className="font-medium">{item.name}</span>
                                </p>
                                <p className="text-gray-500 mt-1">{formatDate(item.date)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TimeLine;