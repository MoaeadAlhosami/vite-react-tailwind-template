import { useEffect, useState } from "react";
import {
  createPoll,
  getPollById,
  updatePoll,
} from "../../services/pollService.js";
import { useParams, useNavigate } from "react-router-dom";

export default function PollCreateEdit() {
  const { pollId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const fetchPoll = async (id) => {
    try {
      const data = await getPollById(id);
      const pollData = data.data;
      setName(pollData.name);
      setDescription(pollData.description);
    } catch (error) {
      console.error("Error fetching poll:", error);
    }
  };

  useEffect(() => {
    if (pollId) {
      fetchPoll(pollId);
    }
  }, [pollId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (pollId) {
        await updatePoll(pollId, { name, description });
      } else {
        await createPoll({ name, description });
      }
      navigate("/admin/polls");
    } catch (error) {
      console.error("Error creating/updating poll:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">
        {pollId ? "تعديل الاستطلاع" : "إنشاء استطلاع"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">اسم الاستطلاع</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">الوصف</label>
          <textarea
            className="border p-2 w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          type="submit"
        >
          حفظ
        </button>
      </form>
    </div>
  );
}
