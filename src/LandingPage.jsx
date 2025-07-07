import React from "react";

const LandingPage = () => {
  // Vérification de l'image (fallback emoji si absente)
  const [imgError, setImgError] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);
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
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#5956E9] hover:bg-[#6C6AF5] text-white py-4 px-10 rounded-full font-semibold text-2xl shadow-md mt-2 mx-auto md:mx-0 focus:outline-none focus:ring-4 focus:ring-[#5956E9]/30 focus:ring-offset-2 transition-all duration-200"
            style={{ letterSpacing: 0.2, boxShadow: "0 2px 16px 0 rgba(89,86,233,0.12)" }}
          >
            Je veux tester Choose !
          </button>
        </div>
        {showForm && <SignupModal onClose={() => setShowForm(false)} />}
      </div>
      {/* Colonne image responsive */}
      <div className="relative md:w-1/2 w-full h-1/2 md:h-full flex items-stretch bg-gradient-to-br from-indigo-50 to-pink-50">
        {imgError ? (
          <div className="flex items-center justify-center w-full h-full bg-gray-50 rounded-none md:rounded-l-3xl shadow-lg text-6xl">
            🍽️
          </div>
        ) : (
          <img
            src={imageUrl}
            alt="Scan de menu au restaurant"
            className="w-full h-full object-contain object-center rounded-none md:rounded-l-3xl shadow-lg bg-white/60"
            onError={() => setImgError(true)}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        )}
      </div>
    </div>
  );
};

// Modal de formulaire d'inscription
function SignupModal({ onClose }) {
  const [prenom, setPrenom] = React.useState("");
  const [nom, setNom] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!prenom.trim() || !nom.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Merci de remplir tous les champs correctement.");
      return;
    }
    setError("");
    setSubmitted(true);
    // TODO: Envoyer les données à un backend ou service d'email
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Fermer"
        >
          ×
        </button>
        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <span className="text-4xl">🎉</span>
            <div className="text-xl font-semibold text-gray-800 text-center">Merci !<br />Tu seras prévenu dès le lancement.</div>
            <button onClick={onClose} className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold shadow hover:bg-indigo-700">Fermer</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Rejoins la liste d'attente</h2>
            <input
              type="text"
              placeholder="Prénom"
              value={prenom}
              onChange={e => setPrenom(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-lg"
              required
            />
            <input
              type="text"
              placeholder="Nom"
              value={nom}
              onChange={e => setNom(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-lg"
              required
            />
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white py-3 px-8 rounded-full font-semibold text-lg shadow-lg mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Je m'inscris
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LandingPage; 