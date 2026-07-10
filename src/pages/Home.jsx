import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate=useNavigate()
    
    return (
        <>
            <div className="p-6">
                <header className="text-center py-10">
                    <h1 className="text-3xl font-bold text-blue-600">سیستم نوبت دهی آنلاین پزشکان</h1>
                    <p className="mt-3 text-gray-600">نوبت دکتر رو سریع و راحت و بدون تماس تلفنی رزرو کن</p>
                    <button
onClick={() => navigate("/doctors")}
                        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg "
                    >مشاهده لیست دکترها</button>
                </header>
        </div>
        </>
    )
}