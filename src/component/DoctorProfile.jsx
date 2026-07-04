import { useState } from "react"
import Calendar from "./Calendar"
import TimeSlots from "./TimeSlots"

export default function DoctorProfile({ doctor, onBook }) {
    const [selectedDay, setSelectedDay] = useState(null),
    const [selectedTime,setSelectedTime]=useState(null)
    return (
        
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold">{doctor.name}</h1>
                <p className="text-gray-500">{doctor.specialty}</p>
                <h3 className="font-bold mt-4">انتخاب روز</h3>

                <Calendar days={doctor.availableDays} onSelectDay={setSelectedDay} />
                
                {selectedDay && (
                    <>
                        <h3 className="mt-4 font-bold">انتخاب ساعت</h3>
                        <TimeSlots
                            slots={doctor.timeSlots}
                            onSelectSlot={setSelectedTime}
                        />
                    </>
                )}
                {selectedDay && selectedTime && (
                    <button
                        onClick={()=>onBook(selectedDay,selectedTime)}
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg"
                    >ادامه رزرو</button>
                )}
        </div>
        </>
    )
}