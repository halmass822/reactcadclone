import { useState, useEffect } from "react";
import MissionClock from "./components/MissionClock/MissionClock";
import "./ReactCadClone.css";
import CallViewer from "./components/CallViewer/CallViewer";
import CallQueue from "./components/CallQueue/CallQueue";
import UnitStatus from "./components/UnitStatus/UnitStatus";
import {sampleCall, sampleCallTypes, sampleQueue, sampleUnits} from "./utils/sampleData"
// import serverCall from "./utils/serverCall";

export default function ReactCadClone(props) {

    const initialTime = new Date()
    const [mainMissionClock, setMainMissionClock] = useState(initialTime);
    const [currentCalls, setCurrentCalls] = useState(sampleQueue);
    const [pollingRate, setPollingRate] = useState(2000);
    const [selectedCallDetails, setSelectedCallDetails] = useState(sampleCall);
    const [callTypes, setCallTypes] = useState(sampleCallTypes);
    const [units, setUnits] = useState(sampleUnits);

    const updateMissionClock = (input) => {
        setMainMissionClock(input);
    }

    // const updateCurrentCalls = () => {
    //     setCurrentCalls(serverCall.getCurrentCalls());
    // }

    const updatePollingRate = (newPollRate) => {
        setPollingRate(newPollRate);
    }

    useEffect(() => {
        const getCurrentCallsInterval = setInterval(() => {
            // updateCurrentCalls()
        }, pollingRate);
    }, [pollingRate, currentCalls]);

    return(
        <div className="ReactCadClone">
            <MissionClock updateMissionClock={updateMissionClock}/>
            <CallViewer  callTypes={callTypes} callDetails={selectedCallDetails}/>
            <CallQueue currentCalls={currentCalls} />
            <UnitStatus units={units} />
        </div>
    )
}