import { useEffect,useState } from "react";

export default function MissionClock(props) {

    //digitize turns 3:14 into 03:14
    const digitize = (input) => {
        if(typeof input !== 'number' || input >= 100){
            console.error(`digitize() only accepts positive integers under 100, input digitize${input} invalid`);
            return;
        }
        return input < 10 ? `0${input}` : `${input}`;
    }
    
    //missionClock is left as a dateObject so UTC and local time can be collected
    const currentTime = new Date()
    const [missionClock, setMissionClock] = useState(currentTime);
    
    useEffect(() => {
        const tickingClock = setInterval(() => {
            const newTime = new Date();
            setMissionClock(newTime);
            props.updateMissionClock(newTime);
        }, 1000);
        return () => clearInterval(tickingClock);
    }, [props]);

    return (
        <div className="missionClock">
            <h1 className="missionClockUTC">
                {`${digitize(missionClock.getUTCHours())}:${digitize(missionClock.getUTCMinutes())}:${digitize(missionClock.getUTCSeconds())} UTC`}
            </h1>
            <h1 className="missionClockLocal">
                {`${digitize(missionClock.getHours())}:${digitize(missionClock.getMinutes())}:${digitize(missionClock.getSeconds())} Local`}                    
            </h1>
        </div>
    )
}

