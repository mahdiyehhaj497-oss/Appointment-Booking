import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate=useNavigate()
    
    return (
      <>
        <div className="p-6">
          <header className="text-center py-10">
            <h1 className="text-3xl font-bold text-blue-600">
              سیستم نوبت دهی آنلاین پزشکان
            </h1>
            <p className="mt-3 text-gray-600">
              نوبت دکتر رو سریع و راحت و بدون تماس تلفنی رزرو کن
            </p>
            <button
              onClick={() => navigate("/doctors")}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg "
            >
              مشاهده لیست دکترها
            </button>
          </header>
          <section className="mt-10">
            <h2 className="text-xl font-bold mb-4 ">تخصص های محبوب</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white shadow rounded-lg text-center">
                قلب و عروق
              </div>
              <div className="p-4 bg-white shadow rounded-lg text-center">
                ارتوپدی
              </div>
              <div className="p-4 bg-white shadow rounded-lg text-center">
                دندان پزشکی
              </div>
              <div className="p-4 bg-white shadow rounded-lg text-center">
                مغز واعصاب
              </div>
            </div>
                </section>
                <section className="mt-12 bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-2 ">چرا سیستم ما؟</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>رزرو سریع و آسان </li>
                        <li>نمایش روزها و ساعت های خالی</li>
                        <li>بدون نیاز به تماس تلفنی</li>
                        <li>مدیریت نوبت ها در پنل کاربری</li>
                    </ul>
                </section>
        </div>
      </>
    );
}