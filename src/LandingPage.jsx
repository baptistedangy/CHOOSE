import React from "react";

const LandingPage = () => {
  // Vérification de l'image (fallback emoji si absente)
  const [imgError, setImgError] = React.useState(false);
  const imageUrl = import.meta.env.BASE_URL + "restaurant-scan.jpg";

  React.useEffect(() => {
    // Empêche le scroll sur la page
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="w-full h-screen min-h-0 flex flex-col md:flex-row overflow-hidden">
      {/* Colonne texte */}
      <div className="relative flex flex-col justify-center items-center md:items-start md:w-1/2 w-full h-1/2 md:h-full bg-white/90 p-6 md:p-12 z-10 animate-fade-in">
        <div className="w-full max-w-xl mx-auto flex flex-col gap-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight font-sans text-gray-900 text-center md:text-left leading-tight">
            Bien manger, sans hésiter.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-sans max-w-xl text-center md:text-left">
            L'assistant qui t'aide à choisir le plat parfait, pour ton corps et tes envies, à chaque resto.
          </p>
          <a
            href="#cta"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-10 rounded-full transition font-semibold text-2xl shadow-lg mt-2 mx-auto md:mx-0 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            style={{ transition: "background 0.2s, transform 0.2s" }}
          >
            Rejoindre la liste d'attente
          </a>
        </div>
      </div>
      {/* Colonne image */}
      <div className="relative md:w-1/2 w-full h-1/2 md:h-full flex items-stretch">
        {imgError ? (
          <div className="flex items-center justify-center w-full h-full bg-gray-50 rounded-none md:rounded-l-3xl shadow-lg text-6xl">
            🍽️
          </div>
        ) : (
          <img
            src={imageUrl}
            alt="Scan de menu au restaurant"
            className="w-full h-full object-cover object-center rounded-none md:rounded-l-3xl shadow-lg"
            onError={() => setImgError(true)}
          />
        )}
      </div>
    </div>
  );
};

export default LandingPage; 