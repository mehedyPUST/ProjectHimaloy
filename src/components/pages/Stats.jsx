import React, { useContext, useMemo } from "react";
import { TimelineContextCreate } from "../../context/TimelineContextCreator";
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
import CustomTooltip from "../customTooltip/CustomToolTip";
import { ImFilesEmpty } from "react-icons/im";

const Stats = () => {
    const { timeline } = useContext(TimelineContextCreate);

    const { data, totalInteractions } = useMemo(() => {
        const counts = { text: 0, call: 0, video: 0 };

        timeline.forEach((item) => {
            if (counts[item.type] !== undefined) {
                counts[item.type]++;
            }
        });


        const chartData = [
            { name: "Text", value: counts.text, fill: "#7e22ce" },
            { name: "Call", value: counts.call, fill: "#1B1212" },
            { name: "Video", value: counts.video, fill: "#15803D" },
        ].filter((item) => item.value > 0);

        return { data: chartData, totalInteractions: timeline.length };
    }, [timeline]);



    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-emerald-900">Friendship Analytics</h1>
                <p className="text-gray-600 mt-2">
                    Total Interactions: <span className="font-semibold text-emerald-600">{totalInteractions}</span>
                </p>
            </div>

            {timeline.length === 0 ? (
                <div className="bg-white rounded-xl p-20 text-center shadow flex flex-col items-center justify-center">
                    <div className="text-7xl mb-6"><ImFilesEmpty /></div>
                    <h3 className="text-2xl font-semibold mb-3">No Data Available</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                        Start interacting with your friends to see beautiful analytics here.
                    </p>
                </div>
            ) : (
                <div className="bg-white rounded-xl p-10 shadow-xl">
                    <h2 className="text-center text-xl font-medium text-gray-600 mb-8">
                        Interactions by Type
                    </h2>

                    <div className="flex flex-col items-center">
                        <ResponsiveContainer width="100%" height={380}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius={85}
                                    outerRadius={130}
                                    paddingAngle={8}
                                >

                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                            </PieChart>
                        </ResponsiveContainer>


                        <div className="flex flex-wrap justify-center gap-8 mt-10">
                            {data.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div
                                        className="w-5 h-5 rounded-full"
                                        style={{ backgroundColor: item.fill }}
                                    />
                                    <span className="font-medium">{item.name}</span>
                                    <span className="text-gray-500">({item.value})</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stats;


