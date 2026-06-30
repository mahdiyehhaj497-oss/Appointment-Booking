export default function Calendar({days, onSelectDay}) {
    return (
        <>
            <div>
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => onSelectDay(day)}
                        className="p-3 bg-gray-100 rounded-lg hover:bg-blue-500 hover:text-white transation"
                    > 
                        {new Date(day).toLocaleDateString("fa-IR")}
                    </button>
                ))}
        </div>
        </>
    )
}