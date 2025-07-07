import React from "react";

const LandingPage = () => {
  // Vérification de l'image (fallback emoji si absente)
  const [imgError, setImgError] = React.useState(false);
  const imageUrl = import.meta.env.BASE_URL + "restaurant-scan.jpg";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fef6f0] flex items-stretch justify-center">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row p-6 md:p-12 min-h-screen">
        {/* Colonne texte */}
        <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 w-full">
          <div className="w-full max-w-xl mx-auto flex flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tight font-sans text-gray-900 text-center md:text-left">
              Always regretting your order?
            </h1>
            <p className="text-lg text-gray-700 font-sans max-w-xl text-center md:text-left">
              Choose helps you find the dish that fits your body, activity, and taste — before it hits your plate.
            </p>
            {/* Blocs insight/solution/speed */}
            <div className="flex flex-col gap-4 mt-2 mb-2 w-full">
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
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full transition font-semibold text-lg shadow-md mt-2 mx-auto md:mx-0 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              style={{ transition: "background 0.2s, transform 0.2s" }}
            >
              Join the waitlist
            </a>
          </div>
        </div>
        {/* Colonne image */}
        <div className="flex items-center justify-center md:w-1/2 w-full h-64 md:h-auto mt-8 md:mt-0">
          {imgError ? (
            <div className="flex items-center justify-center w-full h-full md:h-[400px] bg-gray-50 rounded-2xl shadow-lg text-6xl">
              🍽️
            </div>
          ) : (
            <img
              src={imageUrl}
              alt="Scan de menu au restaurant"
              className="w-full max-w-md h-full md:h-[400px] object-contain rounded-2xl shadow-lg"
              style={{ objectPosition: "center top" }}
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 