"use client";

import { useState } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "퍼센트 계산기",
  description: "값과 퍼센트를 입력하여 다양한 퍼센트 계산을 수행하세요.",
  openGraph: {
    type: "website",
    url: "https://every-calculator.vercel.app/percentage-cal",
    title: "퍼센트 계산기",
    description: "값과 퍼센트를 입력하여 다양한 퍼센트 계산을 수행하세요.",
    images: [
      {
        url: "/images/preview.jpeg",
        alt: "퍼센트 계산기 미리보기 이미지",
      },
    ],
  },
};

const PercentageCalculator = () => {
  const [value, setValue] = useState("");
  const [percentage, setPercentage] = useState("");
  const [partValue, setPartValue] = useState("");
  const [initialValue, setInitialValue] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [percentChange, setPercentChange] = useState("");
  const [results, setResults] = useState<{
    percentageValue?: number;
    partValuePercentage?: number;
    percentageIncreaseDecrease?: number;
    valueIncreaseDecrease?: number;
  }>({});

  const calculatePercentageValue = (value: number, percentage: number) =>
    (value * percentage) / 100;
  const calculatePartValuePercentage = (partValue: number, value: number) =>
    (partValue / value) * 100;
  const calculatePercentageIncreaseDecrease = (
    initialValue: number,
    finalValue: number
  ) => ((finalValue - initialValue) / initialValue) * 100;
  const calculateValueIncreaseDecrease = (
    value: number,
    percentChange: number
  ) => (value * percentChange) / 100;

  const handleCalculate = (type: string) => {
    let result: any;
    switch (type) {
      case "percentageValue":
        if (value && percentage) {
          result = calculatePercentageValue(
            parseFloat(value),
            parseFloat(percentage)
          );
        }
        break;
      case "partValuePercentage":
        if (partValue && value) {
          result = calculatePartValuePercentage(
            parseFloat(partValue),
            parseFloat(value)
          );
        }
        break;
      case "percentageIncreaseDecrease":
        if (initialValue && finalValue) {
          result = calculatePercentageIncreaseDecrease(
            parseFloat(initialValue),
            parseFloat(finalValue)
          );
        }
        break;
      case "valueIncreaseDecrease":
        if (value && percentChange) {
          result = calculateValueIncreaseDecrease(
            parseFloat(value),
            parseFloat(percentChange)
          );
        }
        break;
      default:
        result = null;
    }
    setResults((prevResults) => ({ ...prevResults, [type]: result }));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">
          퍼센트 계산기
        </h1>

        <div className="mb-8 w-full max-w-md p-4 bg-white dark:bg-gray-700 rounded shadow">
          <h2 className="text-xl font-bold mb-4 dark:text-white">
            값의 비율 계산
          </h2>
          <div className="mb-4">
            <label className="block mb-2 dark:text-white">값</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="p-2 border rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full"
              placeholder="값을 입력하세요"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 dark:text-white">퍼센트</label>
            <input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              className="p-2 border rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full"
              placeholder="퍼센트를 입력하세요"
            />
          </div>
          <button
            onClick={() => handleCalculate("percentageValue")}
            className="p-2 bg-blue-500 text-white rounded w-full"
          >
            계산
          </button>
          {results.percentageValue !== undefined && (
            <div className="mt-4 p-2 border rounded bg-gray-200 dark:bg-gray-600 dark:text-white">
              <h3 className="font-bold">결과</h3>
              <p>
                값의 {percentage}%는 {results.percentageValue}입니다.
              </p>
            </div>
          )}
        </div>

        <div className="mb-8 w-full max-w-md p-4 bg-white dark:bg-gray-700 rounded shadow">
          <h2 className="text-xl font-bold mb-4 dark:text-white">
            값의 일부 비율 계산
          </h2>
          <div className="mb-4">
            <label className="block mb-2 dark:text-white">값</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="p-2 border rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full"
              placeholder="값을 입력하세요"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 dark:text-white">값의 일부</label>
            <input
              type="number"
              value={partValue}
              onChange={(e) => setPartValue(e.target.value)}
              className="p-2 border rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full"
              placeholder="값의 일부를 입력하세요"
            />
          </div>
          <button
            onClick={() => handleCalculate("partValuePercentage")}
            className="p-2 bg-blue-500 text-white rounded w-full"
          >
            계산
          </button>
          {results.partValuePercentage !== undefined && (
            <div className="mt-4 p-2 border rounded bg-gray-200 dark:bg-gray-600 dark:text-white">
              <h3 className="font-bold">결과</h3>
              <p>
                값의 일부 {partValue}의 비율은 {results.partValuePercentage}
                %입니다.
              </p>
            </div>
          )}
        </div>

        <div className="mb-8 w-full max-w-md p-4 bg-white dark:bg-gray-700 rounded shadow">
          <h2 className="text-xl font-bold mb-4 dark:text-white">
            값의 변경값 증가/감소 퍼센트 계산
          </h2>
          <div className="mb-4">
            <label className="block mb-2 dark:text-white">초기 값</label>
            <input
              type="number"
              value={initialValue}
              onChange={(e) => setInitialValue(e.target.value)}
              className="p-2 border rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full"
              placeholder="초기 값을 입력하세요"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 dark:text-white">최종 값</label>
            <input
              type="number"
              value={finalValue}
              onChange={(e) => setFinalValue(e.target.value)}
              className="p-2 border rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full"
              placeholder="최종 값을 입력하세요"
            />
          </div>
          <button
            onClick={() => handleCalculate("percentageIncreaseDecrease")}
            className="p-2 bg-blue-500 text-white rounded w-full"
          >
            계산
          </button>
          {results.percentageIncreaseDecrease !== undefined && (
            <div className="mt-4 p-2 border rounded bg-gray-200 dark:bg-gray-600 dark:text-white">
              <h3 className="font-bold">결과</h3>
              <p>
                초기 값 {initialValue}에서 최종 값 {finalValue}로의 변경
                퍼센트는 {results.percentageIncreaseDecrease}%입니다.
              </p>
            </div>
          )}
        </div>

        <div className="mb-8 w-full max-w-md p-4 bg-white dark:bg-gray-700 rounded shadow">
          <h2 className="text-xl font-bold mb-4 dark:text-white">
            퍼센트 증가/감소에 따른 값의 변경 계산
          </h2>
          <div className="mb-4">
            <label className="block mb-2 dark:text-white">값</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="p-2 border rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full"
              placeholder="값을 입력하세요"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 dark:text-white">변경 퍼센트</label>
            <input
              type="number"
              value={percentChange}
              onChange={(e) => setPercentChange(e.target.value)}
              className="p-2 border rounded bg-gray-200 text-black dark:bg-gray-600 dark:text-white w-full"
              placeholder="변경 퍼센트를 입력하세요"
            />
          </div>
          <button
            onClick={() => handleCalculate("valueIncreaseDecrease")}
            className="p-2 bg-blue-500 text-white rounded w-full"
          >
            계산
          </button>
          {results.valueIncreaseDecrease !== undefined && (
            <div className="mt-4 p-2 border rounded bg-gray-200 dark:bg-gray-600 dark:text-white">
              <h3 className="font-bold">결과</h3>
              <p>
                값의 {percentChange}%는 {results.valueIncreaseDecrease}입니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PercentageCalculator;
