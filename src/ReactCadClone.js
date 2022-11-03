import { useState, useEffect } from "react";
import MissionClock from "./components/MissionClock/MissionClock";
import "./ReactCadClone.css";
import NewCall from "./components/NewCall/NewCall";
// import serverCall from "./utils/serverCall";

export default function ReactCadClone(props) {

    const initialTime = new Date()
    const [mainMissionClock, setMainMissionClock] = useState(initialTime);
    const [currentCalls, setCurrentCalls] = useState([]);
    const [pollingRate, setPollingRate] = useState(2000);
    //to determine if the user is currently creating a new call or viewing an existing one
    //as one UI element will display both forms
    const [creatingNewCall, setCreatingNewCall] = useState(true);

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

    const addNewCall = (newCall) => {
        // serverCall.addNewCall(newCall);
        setCurrentCalls((prev) => [...prev, newCall]);
    }

    return(
        <div className="ReactCadClone">
            <MissionClock updateMissionClock={updateMissionClock}/>
            <div className="callViewer">
                {creatingNewCall ? <NewCall addNewCall={addNewCall} /> : null /* <ExistingCall editExistingCall={}/>*/}
            </div>
            {/* <CurrentCalls /> */}
            {/* <CurrentUnits /> */}
        </div>
    )
}