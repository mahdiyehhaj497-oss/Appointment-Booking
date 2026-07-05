import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Doctors() {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([])
    
    useEffect(() => {
        const data = [{
            id: 1,
            name: "دکتر سارا احمدی",
            specialty: "قلب وعروق",
            image: "",
            availableDays: ["2026-06-22", "2026-06-23"],
            timeSlots: ["09:00", "10:00", "11:00", "14:00"]
        }, {
            id: 2,
            name: "دکتر رضا محمدی",
            specialty: "ارتوپد",
            image: "",
            availableDays: ["2026-06-24", "2026-06-26"],
            timeSlots: ["8:00, 9:30, 13:00"]
            }];
        setDoctors(data)
        
    },[])
    return (
        <>
        
        </>
    )
}