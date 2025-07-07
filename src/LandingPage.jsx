import React from "react";

const LandingPage = () => {
  // Vérification de l'image (fallback emoji si absente)
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-[#fef6f0] px-4">
      <div className="flex items-center justify-center w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full flex flex-col md:flex-row items-center gap-8 text-center md:text-left animate-fade-in">
          {/* Image réaliste ou fallback emoji */}
          {imgError ? (
            <div className="flex items-center justify-center w-[260px] md:w-[300px] h-[180px] bg-gray-50 rounded-xl shadow-lg text-6xl">
              🍽️
            </div>
          ) : (
            <img
              src="/restaurant-scan.jpg"
              alt="Scan de menu au restaurant"
              className="rounded-xl shadow-lg w-[260px] md:w-[300px] h-[180px] object-cover mx-auto md:mx-0"
              onError={() => setImgError(true)}
            />
          )}
          {/* Contenu texte */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-4">
            <h1 className="text-4xl font-bold tracking-tight font-sans text-gray-900">
              Always regretting your order?
            </h1>
            <p className="text-lg text-gray-600 font-sans max-w-md">
              Choose helps you find the dish that fits your body, activity, and taste — before it hits your plate.
            </p>
            <div className="flex flex-col gap-1 mt-2 mb-4">
              <span className="text-2xl">🧍‍♂️ <span className="align-middle text-base">You hesitate.</span></span>
              <span className="text-2xl">🎯 <span className="align-middle text-base">You guess.</span></span>
              <span className="text-2xl">😩 <span className="align-middle text-base">You regret.</span></span>
            </div>
            <a
              href="#cta"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full transition font-semibold text-lg shadow-md mt-2"
              style={{ transition: "background 0.2s, transform 0.2s" }}
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 