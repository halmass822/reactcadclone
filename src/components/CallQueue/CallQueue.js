
export default function CallQueue(props) {
    return(
        <div className="callQueue">
            <table>
                <thead>
                    <tr>
                        <th>Priority</th>
                        <th>Event Number</th>
                        <th>Address</th>
                        <th>Call Type</th>
                        <th>Queue Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.currentCalls.map((call) => {
                        return <tr key={call.eventNumber}>
                            <td>{call.priority}</td>
                            <td>{call.eventNumber}</td>
                            <td>{call.address}</td>
                            <td>{call.callType}</td>
                            {/* <td> todo: implement queue time </td> */}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}