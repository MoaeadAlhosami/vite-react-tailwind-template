import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login.jsx";
import AdminDashboard from "../pages/Dashboard/AdminDashboard.jsx";
import PollsList from "../pages/Polls/PollsList.jsx";
import PollCreateEdit from "../pages/Polls/PollCreateEdit.jsx";
import SurveyForm from "../pages/Survey/SurveyForm.jsx";
import SurveySuccess from "../pages/Survey/SurveySuccess.jsx";
import MultiStepSurvey from "../pages/Survey/SurveyForm.jsx";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="polls" element={<PollsList />} />
          <Route path="poll/create" element={<PollCreateEdit />} />
          <Route path="poll/edit/:pollId" element={<PollCreateEdit />} />
        </Route>

        <Route path="/survey/:pollId" element={<SurveyForm />} />
        <Route path="/survey/success" element={<SurveySuccess />} />
        <Route path="/create-poll" element={<MultiStepSurvey />} />

        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}
