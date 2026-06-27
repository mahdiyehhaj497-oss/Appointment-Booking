export default function DoctorCard({doctor , onSelect}) {
    return (
      <>
            <div className="border p-3 rounded cursor-pointer hover:bg-gray-100"
            onClick={()=> onSelect(doctor)}
            >
          <h3 className="font-bold">{doctor.name}</h3>
                <p className=" text-sm text-gray-600">{doctor.speciality}</p>
        </div>
      </>
    );
}