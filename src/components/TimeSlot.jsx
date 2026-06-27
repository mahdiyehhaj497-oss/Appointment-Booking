export default function TimeSlot({time , onSelect,selected}) {
    return (
        <>
            <button
                onClick={() => onSelect(time)}
                className={`px-3 py-1 rounded border text-sm ${selected ? "bg-blue-600 text-white" :"bg-white"}`}
            >{time}</button>
        </>
    )
}