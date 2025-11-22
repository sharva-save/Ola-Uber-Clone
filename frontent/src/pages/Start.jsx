import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div 
    className="lg:h-screen  w-full flex flex-col justify-between bg-no-repeat bg-contain bg-top bg-[url('https://www.zervx.com/_next/static/media/Best-Uber-clone.879dc430.webp')]">
      <header className="bg-black bg-opacity-70">
        <h3 className="text-white text-3xl font-semibold py-4 pl-8">Uber</h3>
      </header>

      {/* Main Section */}
      <main className="bg-white bg-opacity-90 flex flex-col items-center justify-center py-12 rounded-t-3xl shadow-lg">
        <h3 className="text-black font-bold text-3xl mb-6 text-center">
          Get Started with Uber
        </h3>
        <Link
          to="/login"
          className="flex items-center justify-center bg-black text-white text-xl font-medium py-3 px-8 rounded-lg hover:bg-gray-800 transition-all duration-300"
        >
          Continue
        </Link>
      </main>
    </div>
  );
};

export default Start;
