export default function DoctorCard({doctor ,onSelect }) {
    return (
        <>
            <div className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition ">
                <img src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full max-auto"
                />
                <h2 className="text-xl font-bold text-center mt-3">{doctor.name }</h2>
                <p className="text-center text-gray-500">{doctor.specialty }</p>
                <button
                    onClick={()=> onSelect(doctor)}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">مشاهده پروفایل</button>
        </div>
        </>
    )
} 