import React from "react";

const LandingPage = () => {
  const [showForm, setShowForm] = React.useState(false);
  const imageUrl = import.meta.env.BASE_URL + "restaurant-scan.jpg";

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="relative w-full min-h-[70vh] flex items-center justify-start bg-gray-900"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      {/* Zone de texte */}
      <div className="relative z-10 max-w-2xl px-6 md:px-12 py-16 flex flex-col items-start gap-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Bien manger, sans hésiter.
        </h1>
        <p className="text-xl md:text-2xl text-white/90">
          L’assistant qui t’aide à choisir le plat parfait, pour ton corps et tes envies, à chaque resto.
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#5956E9] hover:bg-[#6C6AF5] text-white py-4 px-10 rounded-full font-semibold text-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-[#5956E9]/30 focus:ring-offset-2 transition-all duration-200"
        >
          Je veux tester Choose !
        </button>
      </div>
      {showForm && <SignupModal onClose={() => setShowForm(false)} />}
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
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Fermer"
        >
          ×
        </button>
        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <span className="text-4xl">🎉</span>
            <div className="text-xl font-semibold text-gray-800 text-center">Merci !<br />Tu seras prévenu dès le lancement.</div>
            <button onClick={onClose} className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold shadow hover:shadow-md transition">Fermer</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Rejoins la liste d'attente</h2>
            <input
              type="text"
              placeholder="Prénom"
              value={prenom}
              onChange={e => setPrenom(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg transition"
              required
            />
            <input
              type="text"
              placeholder="Nom"
              value={nom}
              onChange={e => setNom(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg transition"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg transition"
              required
            />
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full font-semibold text-lg shadow-md mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
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