import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">다양한 계산기 모음</h1>
      <Link href="/working-day">
        <button className="px-4 py-2 mb-4 bg-blue-500 text-white rounded">
          워킹데이 계산기
        </button>
      </Link>
      <Link href="/percentage-cal">
        <button className="px-4 py-2 mb-4 bg-blue-500 text-white rounded">
          퍼센트 계산기
        </button>
      </Link>
    </div>
  );
};

export default Home;
