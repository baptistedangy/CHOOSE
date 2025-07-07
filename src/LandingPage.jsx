import React from "react";

const LandingPage = () => {
  // Vérification de l'image (fallback emoji si absente)
  const [imgError, setImgError] = React.useState(false);
  const imageUrl = "/restaurant-scan.jpg"; // Place l'image dans public/ avec ce nom

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-[#fef6f0] px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-0 md:p-10 w-full max-w-3xl flex flex-col md:flex-row items-center gap-0 md:gap-8 text-center md:text-left animate-fade-in mx-auto overflow-hidden">
        {/* Image impactante, responsive */}
        <div className="w-full md:w-[48%] flex-shrink-0 flex items-center justify-center bg-white">
          {imgError ? (
            <div className="flex items-center justify-center w-full h-[220px] md:h-[400px] bg-gray-50 rounded-b-3xl md:rounded-l-3xl md:rounded-b-none shadow-lg text-6xl">
              🍽️
            </div>
          ) : (
            <img
              src={imageUrl}
              alt="Scan de menu au restaurant"
              className="w-full h-[220px] md:h-[400px] object-cover rounded-b-3xl md:rounded-l-3xl md:rounded-b-none shadow-lg"
              style={{ maxWidth: "100%", objectPosition: "center top" }}
              onError={() => setImgError(true)}
            />
          )}
        </div>
        {/* Contenu texte */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4 p-6 md:p-0 w-full">
          <h1 className="text-4xl font-bold tracking-tight font-sans text-gray-900 mt-2 md:mt-0">
            Always regretting your order?
          </h1>
          <p className="text-lg text-gray-600 font-sans max-w-md">
            Choose helps you find the dish that fits your body, activity, and taste — before it hits your plate.
          </p>
          {/* Blocs insight/solution/speed */}
          <div className="flex flex-col gap-4 mt-4 mb-4 w-full">
            {/* Bloc 1 */}
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-1">😕</span>
              <div className="text-left">
                <div className="font-bold text-base sm:text-lg text-gray-900 leading-tight">78% of diners regret their order.</div>
                <div className="text-gray-600 text-sm sm:text-base">Menus can be overwhelming. Choose helps you avoid disappointing picks.</div>
              </div>
            </div>
            {/* Bloc 2 */}
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-1">🔍</span>
              <div className="text-left">
                <div className="font-bold text-base sm:text-lg text-gray-900 leading-tight">3× more likely to pick the right meal.</div>
                <div className="text-gray-600 text-sm sm:text-base">When guided by health, goals, and context, your decision improves drastically.</div>
              </div>
            </div>
            {/* Bloc 3 */}
            <div className="flex items-start gap-3">
              <span className="text-2xl mt-1">⏱️</span>
              <div className="text-left">
                <div className="font-bold text-base sm:text-lg text-gray-900 leading-tight">27 seconds – That's all it takes to choose.</div>
                <div className="text-gray-600 text-sm sm:text-base">With our assistant, users decide faster — no scrolling, no guessing.</div>
              </div>
            </div>
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
  );
};

export default LandingPage; 