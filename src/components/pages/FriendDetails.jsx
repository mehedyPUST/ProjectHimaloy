import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { TimelineContextCreate } from "../../context/TimelineContextCreator";
import { FriendsContextCreate } from "../../context/FriendsContextCreator";

import VoiceCallIcon from "../voiceCallIcon/VoiceCallIcon";
import TextMsgIcon from "../textMsgIcon/TextMsgIcon";
import VideoCallIcon from "../videoCallIcon/VideoCallIcon";

const FriendDetails = () => {
    const { friendId } = useParams();
    const { friends } = useContext(FriendsContextCreate);

    const expectedFriend = friends?.find(
        (f) => String(f.id) === String(friendId)
    );

    const setTimeline =
        useContext(TimelineContextCreate)?.setTimeline || (() => { });

    const [history, setHistory] = useState([]);

    const formatPrettyDate = (dateString) => {
        if (!dateString) return "";
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const createTimelineEvent = (type) => ({
        id: Date.now(),
        type,
        name: expectedFriend?.name,
        date: new Date().toISOString(),
    });

    const addAction = (type, message) => {
        toast.success(message);

        setHistory((prev) => [...prev, { type, name: expectedFriend?.name }]);

        setTimeline((prev) => [...prev, createTimelineEvent(type)]);
    };

    if (!expectedFriend) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-400 text-lg animate-pulse">
                    Loading friend details...
                </p>
            </div>
        );
    }

    const {
        image,
        name,
        mobile,
        total_deposit,
        current_loan,
        loan_due_date,
    } = expectedFriend;

    return (
        <div className="w-11/12 mx-auto py-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* LEFT PROFILE */}
                <div className="lg:col-span-4">
                    <div className="sticky top-24">

                        <div className="relative overflow-hidden rounded-xl bg-white shadow-md p-6 text-center">

                            <img
                                className="w-28 h-28 mx-auto rounded-full object-cover shadow-sm"
                                src={image}
                                alt={name}
                            />

                            <h2 className="mt-5 text-2xl font-semibold text-gray-800">
                                {name}
                            </h2>

                            <p className="text-gray-500 mt-1 text-sm">
                                📞 0{mobile}
                            </p>

                            <p className="mt-4 text-xs text-gray-400 italic">
                                Strengthening friendship through trust & support
                            </p>

                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="lg:col-span-8 space-y-8">

                    {/* STATS */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

                        <div className="bg-white rounded-xl shadow-sm p-5 text-center">
                            <p className="text-gray-500 text-sm">Total Deposit</p>
                            <h3 className="text-2xl font-bold text-emerald-600 mt-1">
                                {total_deposit}
                            </h3>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-5 text-center">
                            <p className="text-gray-500 text-sm">Current Loan</p>
                            <h3 className="text-2xl font-bold text-red-500 mt-1">
                                {current_loan}
                            </h3>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-5 text-center">
                            <p className="text-gray-500 text-sm">Due Date</p>
                            <h3 className="text-sm font-bold text-gray-800 mt-1">
                                {formatPrettyDate(loan_due_date)}
                            </h3>
                        </div>

                    </div>

                    {/* ACTIONS */}
                    <div className="grid grid-cols-3 gap-4">

                        <button
                            onClick={() => addAction("call", "Voice Call Done")}
                            className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center gap-2 hover:shadow-md transition"
                        >
                            <VoiceCallIcon />
                            <span className="text-sm">Call</span>
                        </button>

                        <button
                            onClick={() => addAction("text", "Text Sent")}
                            className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center gap-2 hover:shadow-md transition"
                        >
                            <TextMsgIcon />
                            <span className="text-sm">Text</span>
                        </button>

                        <button
                            onClick={() => addAction("video", "Video Call Done")}
                            className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center gap-2 hover:shadow-md transition"
                        >
                            <VideoCallIcon />
                            <span className="text-sm">Video</span>
                        </button>

                    </div>

                    {/* HISTORY */}
                    <div className="bg-white rounded-xl shadow-sm p-6">

                        <h3 className="text-lg font-semibold mb-4">
                            Recent Activity
                        </h3>

                        {history.length === 0 ? (
                            <p className="text-gray-400 text-sm">
                                No interactions yet
                            </p>
                        ) : (
                            <div className="space-y-3">
                                {history.map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between bg-gray-50 p-3 rounded-lg"
                                    >
                                        <span className="capitalize font-medium text-gray-700">
                                            {h.type}
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            {h.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;