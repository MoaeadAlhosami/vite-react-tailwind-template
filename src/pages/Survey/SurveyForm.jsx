import React, { useState } from "react";
function MultiStepSurvey() {
  const [currentStep, setCurrentStep] = useState(1);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    employment_status: "",
    teaching: "",
    date_of_birth: "",
    age: "",
    address: "",
    gender: "",
  });

  const [answers, setAnswers] = useState([
    { questionId: 1, answerId: "" },
    { questionId: 2, answerId: "" },
    { questionId: 3, answerId: "" },
    { questionId: 4, answerId: "" },
  ]);

  const getProgress = () => {
    switch (currentStep) {
      case 1:
        return 25;
      case 2:
        return 50;
      case 3:
        return 100;
      default:
        return 0;
    }
  };

  const goNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) =>
      prev.map((ans) =>
        ans.questionId === questionId ? { ...ans, answerId: value } : ans
      )
    );
  };

  const handleFinish = async () => {
    const payload = {
      name: userInfo.name,
      email: userInfo.email,
      employment_status: userInfo.employment_status,
      teaching: userInfo.teaching,
      date_of_birth: userInfo.date_of_birth,
      age: userInfo.age,
      address: userInfo.address,
      gender: userInfo.gender,
      solve: answers.map((a) => ({
        questionId: a.questionId,
        answerId: a.answerId,
      })),
    };
    alert("تم إرسال الاستطلاع بنجاح!");
  };

  const StepHeader = () => {
    return (
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep === 1 || currentStep > 1
                ? "bg-[#0C6D71]"
                : "bg-gray-300"
            }`}
          >
            <img
              src="/icons/Form.svg"
              alt="Step 1 Icon"
              className={`w-5 h-5 ${
                currentStep === 1 || currentStep > 1
                  ? "filter brightness-0 invert"
                  : ""
              }`}
            />
          </div>
          <span
            className={`mt-2 text-base ${
              currentStep === 1 || currentStep > 1
                ? "text-[#0C6D71]"
                : "text-gray-500"
            }`}
          >
            المعلومات الخاصة بك
          </span>
        </div>

        <div className="w-12 h-[1px] bg-gray-300" />

        <div className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep === 2 || currentStep > 2
                ? "bg-[#0C6D71]"
                : "bg-gray-300"
            }`}
          >
            <img
              src="/icons/FAQ.svg"
              alt="Step 2 Icon"
              className={`w-5 h-5 ${
                currentStep === 2 || currentStep > 2
                  ? "filter brightness-0 invert"
                  : ""
              }`}
            />
          </div>
          <span
            className={`mt-2 text-base ${
              currentStep === 2 || currentStep > 2
                ? "text-[#0C6D71]"
                : "text-gray-500"
            }`}
          >
            الأسئلة
          </span>
        </div>

        <div className="w-12 h-[1px] bg-gray-300" />

        <div className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep === 3 ? "bg-[#0C6D71]" : "bg-gray-300"
            }`}
          >
            <img
              src="/icons/Task Completed.svg"
              alt="Step 3 Icon"
              className={`w-5 h-5 ${
                currentStep === 3 ? "filter brightness-0 invert" : ""
              }`}
            />
          </div>
          <span
            className={`mt-2 text-base ${
              currentStep === 3 ? "text-[#0C6D71]" : "text-gray-500"
            }`}
          >
            الموافقة
          </span>
        </div>
      </div>
    );
  };

  const StepOne = () => (
    <div style={{ direction: "rtl" }} className="space-y-4">
      <div className="flex flex-col md:flex-row items-center">
        <label className="md:w-40 text-gray-700 mb-2 md:mb-0 md:mr-2">
          الاسم
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400"
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <label className="md:w-40 text-gray-700 mb-2 md:mb-0 md:mr-2">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <label className="md:w-40 text-gray-700 mb-2 md:mb-0 md:mr-2">
          الحالة الوظيفية
        </label>
        <div className="flex-1 flex justify-around md:justify-around md:gap-8">
          {["طالب", "موظف", "صاحب عمل"].map((opt) => (
            <label key={opt} className="flex items-center gap-1">
              <input
                type="radio"
                name="employment_status"
                value={opt}
                checked={userInfo.employment_status === opt}
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    employment_status: e.target.value,
                  })
                }
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <label className="md:w-40 text-gray-700 mb-2 md:mb-0 md:mr-2">
          التعليم
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400"
          value={userInfo.teaching}
          onChange={(e) =>
            setUserInfo({ ...userInfo, teaching: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 rtl:space-x-reverse space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center w-full md:w-1/2">
          <label className="md:w-32 text-gray-700 mb-2 md:mb-0 md:mr-2">
            تاريخ الولادة
          </label>
          <input
            type="date"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400"
            value={userInfo.date_of_birth}
            onChange={(e) =>
              setUserInfo({ ...userInfo, date_of_birth: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col md:flex-row items-center w-full md:w-1/2">
          <label className="md:w-24 text-gray-700 mb-2 md:mb-0 md:mr-2">
            العمر
          </label>
          <input
            type="number"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400"
            value={userInfo.age}
            onChange={(e) => setUserInfo({ ...userInfo, age: e.target.value })}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <label className="md:w-40 text-gray-700 mb-2 md:mb-0 md:mr-2">
          عنوان السكن
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400"
          value={userInfo.address}
          onChange={(e) =>
            setUserInfo({ ...userInfo, address: e.target.value })
          }
        />
      </div>

      <div className="flex flex-col md:flex-row items-center">
        <label className="md:w-40 text-gray-700 mb-2 md:mb-0 md:mr-2">
          الجنس
        </label>
        <div className="flex-1 flex justify-around md:justify-around md:gap-8">
          {["أنثى", "ذكر"].map((g) => (
            <label key={g} className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value={g}
                checked={userInfo.gender === g}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, gender: e.target.value })
                }
              />
              <span>{g}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const StepTwo = () => (
    <div style={{ direction: "rtl" }} className="space-y-8">
      {answers.map((ans) => (
        <div key={ans.questionId} className="border-b border-gray-200 pb-4">
          <p className="font-semibold mb-3">
            السؤال رقم {ans.questionId} (نص السؤال هنا)
          </p>
          <div className="flex justify-between md:justify-around md:gap-8">
            {[1, 2, 3, 4].map((choice) => {
              const choiceValue = `answer-${choice}`;
              return (
                <label key={choice} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name={`q-${ans.questionId}`}
                    value={choiceValue}
                    checked={ans.answerId === choiceValue}
                    onChange={(e) =>
                      handleAnswerChange(ans.questionId, e.target.value)
                    }
                  />
                  <span>جواب {choice}</span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  const StepThree = () => (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <img
        src="/images/Businessman relaxing with coffee after the work is done.png"
        alt="SurveyFinish"
        className="w-80 h-80 object-contain mx-auto"
      />
      <h2 className="text-2xl font-bold">تم الانتهاء</h2>
      <p className="text-gray-600">شكرًا لمشاركتك في هذا الاستطلاع.</p>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      <div
        className="w-1/3 p-8 text-white flex flex-col relative overflow-hidden"
        style={{ backgroundColor: "#001b42" }}
      >
        <img
          src="/images/Rectangle 1 copy (1).png"
          alt="Sidebar Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div style={{ direction: "rtl" }} className="relative mt-auto mb-4">
          <h1 className="text-3xl font-bold mb-6">عنوان الاستطلاع</h1>
          <p className="text-sm text-gray-200 mb-16">شرح عن الاستطلاع</p>
          <p className="text-sm text-gray-200 mb-2">
            الخطوة الحالية: {currentStep} من 3
          </p>
          <p className="text-sm text-gray-100 mb-1">
            {getProgress()}% تم استكماله
          </p>
          <div className="w-full bg-white h-2 rounded mb-2 relative overflow-hidden">
            <div
              className="h-2 bg-gray-300 absolute top-0 left-0 right-0"
              style={{ width: "100%" }}
            />
            <div
              className="h-2 absolute top-0 left-0"
              style={{ width: `${getProgress()}%`, backgroundColor: "#0c7478" }}
            />
          </div>
        </div>
      </div>

      <div className="w-2/3 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <StepHeader />
        </div>

        <div className="flex-1 p-6 md:p-10">
          {currentStep === 1 && <StepOne />}
          {currentStep === 2 && <StepTwo />}
          {currentStep === 3 && <StepThree />}
        </div>

        <div className="p-4 border-t border-gray-200 flex justify-between items-center">
          {currentStep > 1 ? (
            <button
              onClick={goBack}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-base"
            >
              رجوع
            </button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <button
              onClick={goNext}
              style={{ backgroundColor: "#0C6D71" }}
              className="px-6 w-full py-3 mx-3 text-white rounded hover:bg-blue-700 text-base"
            >
              التالي
            </button>
          ) : (
            <button
              style={{ backgroundColor: "#0C6D71" }}
              onClick={handleFinish}
              className="px-6 py-3 w-full mx-3 text-white rounded hover:bg-green-700 text-base"
            >
              تم
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MultiStepSurvey;
