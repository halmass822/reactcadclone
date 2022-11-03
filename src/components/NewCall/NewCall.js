import { useState, useEffect } from "react"
const sampleCallTypes = ["Assault", "Car Accident", "Shoplifting", "Driving Complaint", "Neighbour Dispute", "Domestic Disturbance", "Noise Complaint", "Suspicious Activity"];

export default function NewCall(props) {
    const [callDetails, setCallDetails] = useState({
        //empty object to start, to be filled with the following optional values:
        // date, address, callType, callPriority, body, remarks: [], callerName, callerContact, callerAddress 
    })
    const [callTypes, setCallTypes] = useState(sampleCallTypes/*callServer.getCallTypes()*/);

    // useEffect(() => {
    //     const getCallTypesInterval = setInterval(() => {
    //         // setCallTypes(callServer.getCallTypes());

    //     })
    // }) todo implement callServer API to collect call 

    const submit = (event) => {
        event.preventDefault();
        setCallDetails((prev) => {
            prev.date = new Date();
            return prev;
        })
        props.addNewCall(callDetails);
    }

    return(
        <form onSubmit={submit}>
            <label for="address">Address:</label>
            <input type="text" id="callAddress" name="callAddress" value="address"></input>
            <label for="callType">Call Type:</label>
            <select name="callType" id="callType">
                {callTypes.map((callType) => {
                    return <option value={callType}>{callType}</option>
                })}            
            </select>            
        </form>
    )
}