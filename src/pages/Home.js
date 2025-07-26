import React from 'react';

const Home = ({ isLoggedIn }) => {
  return (
    <div className="min-h-screen bg-richblack-900 flex flex-col justify-center items-center px-4 text-white text-center relative">
      <h1 className="text-4xl font-bold text-yellow-50 mb-6">
        Welcome to StudyNotion 👋
      </h1>

      {/* Bottom Full-Width Note */}
      <div className="absolute bottom-0 left-0 w-full bg-richblack-800 text-richblack-200 py-3 px-6 text-sm text-center border-t border-richblack-700">
        🛠️ Currently working on this project. Full version coming soon. Stay tuned!
      </div>
    </div>
  );
};

export default Home;
