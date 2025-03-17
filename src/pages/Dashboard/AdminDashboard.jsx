import { useEffect, useState } from "react";
import {
  FaTrash,
  FaBell,
  FaSearch,
  FaUserAlt,
  FaChartLine,
  FaPollH,
  FaUsers,
} from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { MdAccessTimeFilled } from "react-icons/md";

import { getAllPolls } from "../../services/pollService";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [polls, setPolls] = useState([]);
  const [showCount, setShowCount] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPolls();
        setPolls(response.data);
      } catch (error) {
        console.error("حدث خطأ عند جلب الاستطلاعات:", error);
      }
    };
    fetchData();
  }, []);

  const handleShowMore = () => {
    setShowCount((prev) => prev + 5);
  };

  const handleAddPoll = () => {
    navigate("/create-poll");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* الشريط الجانبي */}
      <div className="hidden md:block w-1/4 bg-gray-800 relative">
        <img
          src="/images/Rectangle 1 copy.png"
          alt="Sidebar Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
        />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex-1 flex flex-col px-4 py-6 md:px-8 md:py-6">
        {/* شريط البحث والتنبيهات */}
        <div className="flex items-center justify-between p-4 shadow-sm">
          <div
            style={{ direction: "rtl" }}
            className="flex-1 min-w-[200px] max-w-md relative"
          >
            <input
              type="text"
              placeholder="البحث"
              className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-teal-600"
            />
            <span className="absolute top-2/4 left-3 -translate-y-1/2 text-gray-400">
              <FaSearch />
            </span>
          </div>

          <div
            style={{ direction: "rtl" }}
            className="flex items-center space-x-6 mr-4"
          >
            <div className="text-right ml-4">
              <p className="font-bold">اسم المدير</p>
              <p className="text-sm text-gray-500">مرحباً بك</p>
            </div>
            <div className="relative">
              <img
                src="/icons/Floating.svg"
                alt="notification-icon"
                className="w-6 h-6"
              />
              <span
                className="absolute -top-1 -right-2 text-xs bg-red-500 text-white 
                             w-4 h-4 flex items-center justify-center rounded-full"
              >
                2
              </span>
            </div>
          </div>
        </div>

        {/* البطاقات الثلاث */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {/* البطاقة الأولى: خلفية تيل مع نص أبيض */}
          <div
            style={{ direction: "rtl" }}
            className="bg-teal-600 text-white rounded-xl shadow-lg p-4"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm flex items-center">
                {/* أيقونة التاريخ مع Margin */}
                <MdAccessTimeFilled className="w-4 h-4 m-2 text-white" />
                <span>التاريخ</span>
              </div>
              {/* أيقونة إضافية (رسم بياني) مع Margin */}
              <FaChartLine className="w-6 h-6 m-2 text-white" />
            </div>

            <div className="mt-2 text-lg font-semibold">نسبة النتائج</div>
            <div className="mt-1 text-sm">10% زيادة أسبوعية</div>
            <div className="mt-2">
              {/* الأيقونة الموجودة مسبقًا - لا نقترب منها */}
              <img
                src="/icons/ic-trending-up-24px.svg"
                alt="arrow-icon"
                className="w-5 h-5"
              />
            </div>
          </div>

          {/* البطاقة الثانية: خلفية سوداء مع نص أبيض */}
          <div
            style={{ direction: "rtl" }}
            className="bg-black text-white rounded-xl shadow-lg p-4"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm flex items-center">
                {/* أيقونة الاستطلاع مع Margin */}
                <FaPollH className="w-4 h-4 m-2 text-white" />
                <span>عدد الاستطلاعات المنتهية</span>
              </div>
            </div>
            <div className="mt-2 text-xs flex items-center">
              {/* أيقونة التاريخ مع Margin */}
              <MdAccessTimeFilled className="w-4 h-4 m-2 text-white" />
              <span>التاريخ</span>
            </div>
            <div className="mt-2 text-lg font-semibold flex items-center">
              <FaUserAlt className="w-4 h-4 m-2" />
              <span>23344</span>
            </div>
          </div>

          {/* البطاقة الثالثة: خلفية بيضاء مع نص تيل */}
          <div
            style={{ direction: "rtl" }}
            className="bg-white text-teal-600 rounded-xl shadow-lg p-4"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm flex items-center">
                {/* أيقونة المستخدمين مع Margin */}
                <FaUsers className="w-4 h-4 m-2 text-teal-600" />
                <span>عدد المشاركين</span>
              </div>
            </div>
            <div className="mt-2 text-xs flex items-center">
              {/* أيقونة التاريخ مع Margin */}
              <MdAccessTimeFilled className="w-4 h-4 m-2 text-teal-600" />
              <span>التاريخ</span>
            </div>
            {/* إضافة أيقونة شخص بجانب الرقم */}
            <div className="mt-2 text-lg font-semibold flex items-center">
              <FaUserAlt className="w-4 h-4 m-2" />
              <span>23344</span>
            </div>
          </div>
        </div>

        {/* جدول الاستطلاعات */}
        <div
          style={{ direction: "rtl" }}
          className="bg-white rounded-md shadow-sm m-4 p-4"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-700 mb-2 md:mb-0">
              الاستطلاعات
            </h2>
            <div className="flex items-center space-x-2 space-x-reverse">
              <button
                onClick={handleAddPoll}
                className="bg-teal-600 text-white px-4 py-1 rounded hover:bg-teal-700 text-sm"
              >
                إضافة
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300 text-sm">
                تصدير لإكسل
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right text-gray-700 whitespace-nowrap">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="py-2 px-2">الاسم</th>
                  <th className="py-2 px-2">عدد الأسئلة</th>
                  <th className="py-2 px-2">النتائج</th>
                  <th className="py-2 px-2">وصف بسيط</th>
                  <th className="py-2 px-2">تفاصيل</th>
                  <th className="py-2 px-2">الإجراء</th>
                </tr>
              </thead>
              <tbody>
                {polls.slice(0, showCount).map((poll) => (
                  <tr
                    key={poll.id}
                    className="border-b last:border-0 hover:bg-gray-50"
                  >
                    <td className="py-2 px-2 font-medium text-gray-800">
                      {poll.title}
                    </td>
                    <td className="py-2 px-2">{poll.questions?.length || 0}</td>
                    <td className="py-2 px-2">
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                        <span>21,33%</span>
                      </div>
                    </td>
                    <td className="py-2 px-2">{poll.description || "—"}</td>
                    <td className="py-2 px-2 text-teal-600 hover:underline cursor-pointer">
                      عرض
                    </td>
                    <td className="py-2 px-2">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <button className="text-green-600 hover:text-green-800">
                          <FiEdit2 />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {polls.length > showCount && (
            <div className="text-center mt-4">
              <button
                onClick={handleShowMore}
                className="text-teal-600 hover:underline text-sm"
              >
                عرض المزيد
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
