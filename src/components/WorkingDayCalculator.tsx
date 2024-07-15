"use client";

import { useState } from "react";

const WorkingDayCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [holidays, setHolidays] = useState("");
  const [holidayList, setHolidayList] = useState<Date[]>([]);
  const [results, setResults] = useState<{
    workingDays?: number;
    weekends?: number;
    manualHolidays?: number;
    totalHolidays?: number;
    totalDays?: number;
  }>({});

  const calculateWorkingDays = (
    start: Date,
    end: Date,
    holidays: Date[]
  ): { workingDays: number; weekends: number } => {
    let workingDays = 0;
    let weekends = 0;
    let currentDate = new Date(start);
    const holidaySet = new Set(holidays.map((date) => date.toDateString()));

    while (currentDate <= end) {
      const day = currentDate.getDay();
      if (day === 0 || day === 6) {
        weekends++;
      } else if (!holidaySet.has(currentDate.toDateString())) {
        workingDays++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return { workingDays, weekends };
  };

  const handleCalculate = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const { workingDays, weekends } = calculateWorkingDays(
      start,
      end,
      holidayList
    );
    const manualHolidays = holidayList.filter(
      (date) => date >= start && date <= end && ![0, 6].includes(date.getDay()) // 주말이 아닌 날만 카운트
    ).length;
    const totalDays =
      (end.getTime() - start.getTime()) / (1000 * 3600 * 24) + 1;

    setResults({
      workingDays,
      weekends,
      manualHolidays,
      totalHolidays: weekends + manualHolidays,
      totalDays,
    });
  };

  const addHoliday = () => {
    if (holidays.trim() === "") return;
    const newHolidayDate = new Date(holidays);
    setHolidayList([...holidayList, newHolidayDate]);
    setHolidays("");
  };

  const removeHoliday = (index: number) => {
    const newHolidayList = [...holidayList];
    newHolidayList.splice(index, 1);
    setHolidayList(newHolidayList);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">
          워킹데이 계산기
        </h1>

        <div className="mb-8 w-full max-w-md p-4 bg-white dark:bg-gray-700 rounded shadow">
          <h2 className="text-xl font-bold mb-4 dark:text-white">기간 설정</h2>
          <div className="mb-4">
            <label className="block mb-2 dark:text-white">시작일</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-2 border rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 dark:text-white">종료일</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-2 border rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full"
            />
          </div>
        </div>

        <div className="mb-8 w-full max-w-md p-4 bg-white dark:bg-gray-700 rounded shadow">
          <h2 className="text-xl font-bold mb-4 dark:text-white">휴일 설정</h2>
          <div className="mb-4">
            <label className="block mb-2 dark:text-white">휴일 추가</label>
            <div className="flex items-center">
              <input
                type="date"
                value={holidays}
                onChange={(e) => setHolidays(e.target.value)}
                className="p-2 border rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white flex-1 mr-2"
              />
              <button
                onClick={addHoliday}
                className="p-2 bg-blue-500 text-white rounded"
              >
                추가
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
            {holidayList.map((holiday, index) => (
              <div
                key={index}
                className="p-2 m-1 bg-gray-300 dark:bg-gray-500 rounded flex items-center"
              >
                <span className="mr-2">
                  {holiday.toLocaleDateString("ko-KR")}
                </span>
                <button
                  onClick={() => removeHoliday(index)}
                  className="p-1 bg-red-500 text-white rounded"
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="p-2 bg-blue-500 text-white rounded w-full max-w-md"
        >
          계산
        </button>

        {results.workingDays !== undefined && (
          <div className="mt-4 p-2 border rounded bg-gray-200 dark:bg-gray-600 dark:text-white w-full max-w-md">
            <h3 className="font-bold">계산 결과</h3>
            <p>시작일: {startDate}</p>
            <p>종료일: {endDate}</p>
            <p>워킹데이: {results.workingDays}일</p>
            <p>주말: {results.weekends}일</p>
            <p>추가 휴일: {results.manualHolidays}일</p>
            <p>총 휴일 (주말 + 추가 휴일): {results.totalHolidays}일</p>
            <p>총 일 수: {results.totalDays}일</p>
          </div>
        )}
      </div>
    </>
  );
};

export default WorkingDayCalculator;
