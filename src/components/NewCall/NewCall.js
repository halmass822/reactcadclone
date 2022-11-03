import { useState, useEffect } from "react"
import "./NewCall.css"
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
        <form onSubmit={submit} className="newCallForm">
            <div className="addressDiv">
                <label for="address">Address:</label>
                <input type="text" id="callAddress" name="callAddress"></input>
            </div>
            <div className="CTAndPriority">
                <div className="callTypeDiv">
                        <select name="callType" id="callType">
                            <option value="" disabled selected>Select Call Type</option>
                            {callTypes.sort().map((callType) => {
                                return <option value={callType}>{callType}</option>
                            })}            
                        </select>
                    </div>
                <div className="priorityDiv">
                    <label for="priority">Priority:</label>
                        <select name="callType" id="calltype">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
            <div className="callBodyDiv">
                <textarea type="text" id="callBody" name="callBody" placeholder="Call Details"></textarea>
                </div>
            <div className="callerDetails">
                <h3 className="callerDetailsHeader">Caller's information:</h3>
                <div className="callerNameAndPhone">
                    <div className="callerNameDiv">
                    <label for="callerName">Name:</label>
                        <input type="text" id="callerName" name="callerName"></input>
                        </div>
                    <div className="callerContactDiv">
                        <label for="callerContact">Phone:</label>
                            <input type="text" id="callerContact" name="callerContact"></input>
                        </div>
                    </div>
                <div className="callerAddressDiv">
                    <label for="callerAddress">Address:</label>
                        <input type="text" id="callerAddress" name="callerAddress"></input>
                    </div>
                </div>
            <div className="submitButtonDiv">
                <input type="submit" id="createCallButton" value="Create Call"></input>
                </div>
        </form>
    )
}