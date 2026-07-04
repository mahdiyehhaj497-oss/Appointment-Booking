import { useState } from "react";

export default function BookingForm({doctor,time, day,onSubmit}) {
    const [name, setName] = useState("")
    const[phone,setPhone]=useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({doctor, day,time,name, phone})
    }

    return (
        <>
            <form
            className="p-4 bg-white rounded-xl shadow mt-4 space-y-4"
                onSubmit={handleSubmit}>
                <h2>رزرو نوبت </h2>
                <div>
                    <label
                    className="block mb-1">نام بیمار</label>
                    <input
                        className="w-full p-2 border rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="bloke mb-1">شماره تماس</label>
                    <input
                        className="w-full p-2 border rounded"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg ">ثبت نوبت</button>
            </form> 
        </>
    )
}