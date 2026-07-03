export default function TimeSlots({slots,onSelectSlot}) {
    return (
        <>
            <div className="grid grid-cols-3 gap-3 mt-4">
                {slots.map((slot) => (
                    <button
                    key={slot}
                        onClick={() => onSelectSlot(slot)}
                        className="p-2 bg-green-100 rounded-lg hover:bg-green-500 hover:text-white transition "
                    >{slot }</button>
                ))}
        </div>
        </>
    )
}