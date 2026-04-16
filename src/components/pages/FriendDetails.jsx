import React, { useState, useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TimelineContextCreate } from '../../context/TimelineContextCreator';
import VoiceCallIcon from '../voiceCallIcon/VoiceCallIcon';
import TextMsgIcon from '../textMsgIcon/TextMsgIcon';
import VideoCallIcon from '../videoCallIcon/VideoCallIcon';
import { MdDeleteForever, MdOutlineTextsms } from 'react-icons/md';
import { IoMdNotificationsOff } from 'react-icons/io';
import { FaBoxArchive } from 'react-icons/fa6';

const FriendDetails = () => {
    const { friendId } = useParams();
    const friends = useLoaderData();
    const expectedFriend = friends?.find(friend => friend.id === Number(friendId));
    const { tags, status, days_since_contact, picture, name, id, goal, next_due_date, bio, contactPreference } = expectedFriend;
    const getStatusColor = (status) => {
        if (status === 'Overdue') return 'bg-red-100 text-red-700 border-red-200';
        if (status === 'Almost Due') return 'bg-amber-100 text-amber-700 border-amber-200';
        if (status === 'On-Track') return 'bg-emerald-100 text-emerald-700 border-emerald-200';
        return 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const { setTimeline } = useContext(TimelineContextCreate);

    const [history, setHistory] = useState([]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    };

    const createTimelineEvent = (type, friend) => ({
        id: Date.now(),
        type,
        name: friend.name,
        date: new Date().toISOString(),
    });

    const interactionHandlerVoiceCall = () => {
        if (!expectedFriend) return;
        toast.success(`You Called ${expectedFriend.name}`);
        setHistory(prev => [...prev, { ...expectedFriend, type: "call" }]);
        setTimeline(prev => [...prev, createTimelineEvent("call", expectedFriend)]);
    };

    const interactionHandlerVideoCall = () => {
        if (!expectedFriend) return;
        toast.success(`You Made Video Call With ${expectedFriend.name}`);
        setHistory(prev => [...prev, { ...expectedFriend, type: "video" }]);
        setTimeline(prev => [...prev, createTimelineEvent("video", expectedFriend)]);
    };

    const interactionHandlerTextMsg = () => {
        if (!expectedFriend) return;
        toast.success(`  Text Sent to ${expectedFriend.name}`);

        setHistory(prev => [...prev, { ...expectedFriend, type: "text" }]);
        setTimeline(prev => [...prev, createTimelineEvent("text", expectedFriend)]);
    };

    if (!expectedFriend) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-lg text-gray-600">Loading friend details...</p>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Sidebar - Profile */}
                <div className="lg:col-span-4">
                    <div className="    sticky top-25">
                        <div className="flex flex-col items-center text-center  p-6 shadow-md rounded-xl">
                            <img
                                className="w-32 h-32 rounded-full object-cover ring-3 ring-emerald-100"
                                src={picture}

                                alt={name}
                            />
                            <h2 className="mt-6 text-3xl font-semibold text-gray-900">
                                {name}
                            </h2>

                            <div className={`mt-6 px-4 py-2 rounded-3xl text-sm font-semibold border ${getStatusColor(status)}`}>
                                {status}
                            </div>


                            <div className="flex flex-wrap gap-2 mt-4 justify-center">
                                {tags?.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-5 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-2xl"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className='mt-4 space-y-2 text-gray-500'>
                                <p className='italic'>"{bio}"</p>
                                <p> Preferred: {contactPreference}</p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-4">
                            <button className="w-full py-4 bg-gray-100 shadow-md hover:bg-gray-200 transition rounded-xl font-medium flex items-center justify-center gap-1">
                                <IoMdNotificationsOff />  Snooze 2 Weeks
                            </button>
                            <button className="w-full py-4 bg-gray-100 shadow-md hover:bg-gray-200 transition rounded-xl font-medium flex items-center justify-center gap-1">
                                <FaBoxArchive />  Archive
                            </button>
                            <button className="w-full py-4 bg-red-50 shadow-md hover:bg-red-100 text-red-600 transition rounded-xl font-medium flex items-center justify-center gap-1">
                                <MdDeleteForever /> Delete Friend
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-8 shadow-xl text-center flex flex-col items-center justify-center">
                            <h3 className="text-4xl font-bold text-gray-800">{days_since_contact}</h3>
                            <p className="text-gray-500 mt-2">Days Since Contact</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-xl text-center flex flex-col items-center justify-center">
                            <h3 className="text-4xl font-bold text-gray-800">{goal}</h3>
                            <p className="text-gray-500 mt-2">Goal (Days)</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-xl text-center flex flex-col items-center justify-center">
                            <h3 className="text-4xl font-bold text-gray-800">{formatDate(next_due_date)}</h3>
                            <p className="text-gray-500 mt-2">Next Due Date</p>
                        </div>
                    </div>

                    {/* Relationship Goal */}
                    <div className="bg-white rounded-xl p-8 shadow-xl">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold">Relationship Goal</h3>
                            <button className="px-6 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition">
                                Edit
                            </button>
                        </div>
                        <p className="text-gray-600">
                            Connect every <span className="font-semibold text-emerald-700">30 days</span>
                        </p>
                    </div>

                    {/* Quick Check-In */}
                    <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl p-8 shadow-xl">
                        <h3 className="text-2xl font-semibold mb-6">Quick Check-In</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <button
                                onClick={interactionHandlerVoiceCall}
                                className="bg-white hover:shadow-xl transition-all p-8 rounded-xl flex flex-col items-center gap-4 group"
                            >
                                <VoiceCallIcon></VoiceCallIcon>
                                <p className="font-medium">Voice Call</p>
                            </button>

                            <button
                                onClick={interactionHandlerTextMsg}
                                className="bg-white hover:shadow-xl transition-all p-8 rounded-xl flex flex-col items-center gap-4 group"
                            >
                                <TextMsgIcon></TextMsgIcon>
                                <p className="font-medium">Text Message</p>
                            </button>

                            <button
                                onClick={interactionHandlerVideoCall}
                                className="bg-white hover:shadow-xl transition-all p-8 rounded-xl flex flex-col items-center gap-4 group"
                            >
                                <VideoCallIcon></VideoCallIcon>
                                <p className="font-medium">Video Call</p>
                            </button>
                        </div>
                    </div>

                    {/* Recent Interactions */}
                    <div className="bg-white rounded-xl p-8 shadow-xl">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold">Recent Interactions</h3>
                            <button className="text-emerald-600 font-medium hover:underline">Full History →</button>
                        </div>

                        {history.length === 0 ? (
                            <p className="text-gray-500 py-8 text-center">No interactions yet. Start connecting!</p>
                        ) : (
                            <div className="space-y-4">
                                {history.map((info, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl">
                                        <div className="text-2xl">
                                            {info.type === "call" && <VoiceCallIcon></VoiceCallIcon>}
                                            {info.type === "text" && <TextMsgIcon></TextMsgIcon>}
                                            {info.type === "video" && <VideoCallIcon></VideoCallIcon>}
                                        </div>
                                        <div>
                                            <p className="font-medium capitalize">
                                                {info.type} with {info.name}
                                            </p>
                                            <p className="text-sm text-gray-500">Just now</p>
                                        </div>
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

