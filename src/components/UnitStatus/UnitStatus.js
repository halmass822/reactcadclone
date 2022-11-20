export default function UnitStatus(props) {
    return (
        <div className="unitStatus">
            <table>
                <thead>
                    <tr>
                        <th>Unit</th>
                        <th>Badge</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Event</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.units.map((unit) => {
                        return <tr className="unit" key={unit.unit}>
                            <td>{unit.unit}</td>
                            <td>{unit.badge}</td>
                            <td>{unit.name}</td>
                            <td>{unit.location}</td>
                            <td>{unit.event}</td>
                            <td>{unit.status}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}