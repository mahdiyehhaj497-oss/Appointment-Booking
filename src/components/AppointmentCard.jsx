export default function AppointmentCard({appointment , onDelete}) {
    return (
        <>
            <div className="border p-3 rounded mb-2">
                <h4 className="font-bold ">{appointment.doctor }</h4>
                <p> Date : {appointment.date }</p>
                <p> time :{appointment.time }</p>
                <button onClick={() => onDelete(appointment.id)}
                className="mt-2 bg-red-600 text-white px-3 py-1 rounded text=-sm"
                >Delete</button>
            </div>
        </>
    )
}