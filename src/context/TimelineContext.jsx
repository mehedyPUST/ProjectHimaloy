import { useState } from "react";
import { TimelineContextCreate } from "./TimelineContextCreator";
const TimelineContext = ({ children }) => {
    const [timeline, setTimeline] = useState([]);

    const data = {
        timeline, setTimeline

    };
    return (
        <TimelineContextCreate.Provider value={data}>
            {children}
        </TimelineContextCreate.Provider>
    );
};

export default TimelineContext;

