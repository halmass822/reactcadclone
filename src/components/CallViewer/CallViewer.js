import { useState } from "react"
import "./CallViewer.css"

export default function CallViewer(props) {
    const [callDetails, setCallDetails] = useState(props.callDetails);

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
                <label htmlFor="address">Address:</label>
                <input type="text" id="callAddress" name="callAddress" value={callDetails.address}></input>
            </div>
            <div className="CTAndPriority">
                <div className="callTypeDiv">
                        <select name="callType" id="callType">
                            <option value="" disabled selected>Select Call Type</option>
                            {props.callTypes.sort().map((callType) => {
                                if(callType === props.callDetails.callType) {
                                    return <option value={callType} selected>{callType}</option>
                                }
                                return <option value={callType}>{callType}</option>
                            })}            
                        </select>
                    </div>
                <div className="priorityDiv">
                    <label htmlFor="priority">Priority:</label>
                        <select name="callType" id="calltype">
                            {["1","2","3"].map((x) => {
                                if(props.callDetails.priority === x) {
                                    return <option value={x} key={x} selected>{x}</option>
                                } else {
                                    return <option value={x} key={x}>{x}</option> 
                                }
                            })}
                        </select>
                    </div>  
                </div>
            <div className="callBodyDiv">
                <table>
                    <tbody>
                        {props.callDetails.remarks.map((x) => {
                            return <tr>
                                <td>{x}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                </div>
            <div className="callerDetails">
                <h3 className="callerDetailsHeader">Caller's information:</h3>
                <div className="callerNameAndPhone">
                    <div className="callerNameDiv">
                    <label htmlFor="callerName">Name:</label>
                        <input type="text" id="callerName" name="callerName"></input>
                        </div>
                    <div className="callerContactDiv">
                        <label htmlFor="callerContact">Phone:</label>
                            <input type="text" id="callerContact" name="callerContact"></input>
                        </div>
                    </div>
                <div className="callerAddressDiv">
                    <label htmlFor="callerAddress">Address:</label>
                        <input type="text" id="callerAddress" name="callerAddress"></input>
                    </div>
                </div>
            <div className="submitButtonDiv">
                <input type="submit" id="createCallButton" value="Create Call"></input>
                </div>
        </form>
    )
}