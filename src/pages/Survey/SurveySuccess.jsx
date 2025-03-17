import { Link } from "react-router-dom";

export default function SurveySuccess() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl mb-4">شكرًا لك! تم إتمام الاستبيان بنجاح</h2>
      <Link to="/" className="text-blue-500">
        العودة للرئيسية
      </Link>
    </div>
  );
}
