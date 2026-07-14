import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Doctors() {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([])
    
    useEffect(() => {
        const data = [{
            id: 1,
            name: "دکتر سارا احمدی",
            specialty: "قلب وعروق",
            image: "src/assets/pexels-tima-miroshnichenko-5407222 (1).jpg",
            availableDays: ["2026-06-22", "2026-06-23"],
            timeSlots: ["09:00", "10:00", "11:00", "14:00"]
        }, {
            id: 2,
            name: "دکتر رضا محمدی",
            specialty: "ارتوپد",
            image: "src/assets/pexels-cottonbro-5867737.jpg",
            availableDays: ["2026-06-24", "2026-06-26"],
            timeSlots: ["8:00, 9:30, 13:00"]
        }];
        
        setDoctors(data)
        
    }, [])
    
    const handleSelectDoctor = (doctor) => {
        navigate(`/doctor/${doctor.id}`,{state:doctor})
    }
    return (
        <>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4 "> لیست دکترها</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 "></div>
                {doctors.map((doctor) => (
                    <DoctorCard
                        key={doctor.id}
                        doctor={doctor}
                        onSelect={handleSelectDoctor}
                    />
))}
            </div>
        </>
    )
}