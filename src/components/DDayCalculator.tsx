"use client";

import { useState } from "react";

const DDayCalculator = () => {
  const [targetDate, setTargetDate] = useState("");
  const [startDateEnabled, setStartDateEnabled] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  const calculateDaysLeft = (start: Date, target: Date) => {
    const timeDiff = target.getTime() - start.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  };

  const handleCalculate = () => {
    const target = new Date(targetDate);
    const start =
      startDateEnabled && startDate ? new Date(startDate) : new Date();
    const daysLeft = calculateDaysLeft(start, target);
    setDaysLeft(daysLeft);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">D-day 계산기</h1>

      <div className="mb-8 w-full max-w-md p-4 bg-white dark:bg-gray-700 rounded shadow">
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={startDateEnabled}
            onChange={() => setStartDateEnabled(!startDateEnabled)}
            className="mr-2"
          />
          <label className="dark:text-white">시작일 지정</label>
        </div>
        {startDateEnabled && (
          <div className="mb-4">
            <label className="block mb-2 dark:text-white">시작 날짜</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-2 border rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-2 dark:text-white">목표 날짜</label>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="p-2 border rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full"
          />
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="p-2 bg-blue-500 text-white rounded w-full max-w-md"
      >
        계산
      </button>

      {daysLeft !== null && (
        <div className="mt-4 p-2 border rounded bg-gray-200 dark:bg-gray-600 dark:text-white w-full max-w-md">
          <h3 className="font-bold">계산 결과</h3>
          <p>D-day까지 남은 일 수: {daysLeft}일</p>
        </div>
      )}
    </div>
  );
};

export default DDayCalculator;
