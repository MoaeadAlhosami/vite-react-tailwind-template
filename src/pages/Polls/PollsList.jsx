// src/pages/PollsList.jsx
import { useEffect, useState } from "react";
import { getAllPolls, deletePoll } from "../../services/pollService";
import { Link } from "react-router-dom";

export default function PollsList() {
  const [polls, setPolls] = useState([]);

  const fetchPolls = async () => {
    try {
      const data = await getAllPolls();
      setPolls(data.data || []);
    } catch (error) {
      console.error("Error fetching polls:", error);
    }
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("هل أنت متأكد من الحذف؟")) return;
    try {
      await deletePoll(id);
      fetchPolls();
    } catch (error) {
      console.error("Error deleting poll:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">قائمة الاستطلاعات</h1>
        <Link
          to="/admin/poll/create"
          className="bg-green-500 text-white py-1 px-3 rounded"
        >
          إضافة استطلاع جديد
        </Link>
      </div>

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">الاسم</th>
            <th className="border px-4 py-2">الوصف</th>
            <th className="border px-4 py-2">تحكم</th>
          </tr>
        </thead>
        <tbody>
          {polls.map((poll) => (
            <tr key={poll.id}>
              <td className="border px-4 py-2">{poll.id}</td>
              <td className="border px-4 py-2">{poll.name}</td>
              <td className="border px-4 py-2">{poll.description}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/admin/poll/edit/${poll.id}`}
                  className="text-blue-500 mr-2"
                >
                  تعديل
                </Link>
                <button
                  onClick={() => handleDelete(poll.id)}
                  className="text-red-500"
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
