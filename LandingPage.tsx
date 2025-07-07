import React from "react";

const LandingPage: React.FC = () => {
  return (
    <>
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24 py-16">
          {/* Texte */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans text-gray-900 mb-6">
              Always regretting your order?
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-xl">
              Choose helps you find the dish that fits your body, activity, and taste — before it hits your plate.
            </p>
            <a
              href="#cta"
              className="inline-block px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
            >
              Join the waitlist
            </a>
          </div>
          {/* Illustration */}
          <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
            <div className="w-64 h-64 bg-blue-100 rounded-xl flex items-center justify-center">
              {/* TODO: Remplacer par une illustration ou image */}
              <span className="text-blue-400 text-6xl">🎨</span>
            </div>
          </div>
        </div>
      </section>
      {/* Section Frustrations Utilisateur */}
      <section className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 font-sans">
            Trop souvent déçu par ton choix ?
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full justify-center items-center">
            {/* Élément 1 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <span className="text-5xl mb-4">🧍‍♂️</span>
              <p className="text-lg text-gray-700">Tu hésites pendant 10 minutes devant le menu</p>
            </div>
            {/* Élément 2 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <span className="text-5xl mb-4">🍽️</span>
              <p className="text-lg text-gray-700">Tu choisis au hasard sans savoir ce qui est bon pour toi</p>
            </div>
            {/* Élément 3 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <span className="text-5xl mb-4">👀</span>
              <p className="text-lg text-gray-700">Tu regrettes en regardant l'assiette de ton voisin</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section Comment ça marche */}
      <section id="how-it-works" className="w-full bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 font-sans">
            Comment ça marche ?
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full justify-center items-stretch">
            {/* Étape 1 */}
            <div className="flex-1 flex flex-col items-center text-center max-w-xs mx-auto">
              <span className="text-5xl mb-4">📷</span>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Scanne le menu</h3>
              <p className="text-gray-700">Prends une photo ou saisis le nom du restaurant</p>
            </div>
            {/* Étape 2 */}
            <div className="flex-1 flex flex-col items-center text-center max-w-xs mx-auto">
              <span className="text-5xl mb-4">🏃</span>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Analyse ton activité</h3>
              <p className="text-gray-700">Choisis ton niveau d'effort ou connecte ton appli</p>
            </div>
            {/* Étape 3 */}
            <div className="flex-1 flex flex-col items-center text-center max-w-xs mx-auto">
              <span className="text-5xl mb-4">🧠</span>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Reçois une recommandation</h3>
              <p className="text-gray-700">L'app te suggère LE plat qui correspond à ton corps et à tes envies</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section Pourquoi Choose ? */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 font-sans">
            Pourquoi Choose ?
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full justify-center items-stretch">
            {/* Fonctionnalité 1 */}
            <div className="flex-1 flex flex-col items-center text-center max-w-xs mx-auto">
              <span className="text-5xl mb-4">⚙️</span>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Analyse intelligente</h3>
              <p className="text-gray-700">L'IA prend en compte tes efforts, ton profil, et le menu en temps réel</p>
            </div>
            {/* Fonctionnalité 2 */}
            <div className="flex-1 flex flex-col items-center text-center max-w-xs mx-auto">
              <span className="text-5xl mb-4">📊</span>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Scores santé visuels</h3>
              <p className="text-gray-700">Des indicateurs clairs pour faire le bon choix (satiété, densité, etc.)</p>
            </div>
            {/* Fonctionnalité 3 */}
            <div className="flex-1 flex flex-col items-center text-center max-w-xs mx-auto">
              <span className="text-5xl mb-4">📱</span>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Interface simple et rapide</h3>
              <p className="text-gray-700">Moins d'hésitation, plus de plaisir à table</p>
            </div>
          </div>
        </div>
      </section>
      {/* Bloc d'inscription */}
      <section id="cta" className="w-full bg-blue-50 py-16 px-4">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 font-sans">
            Inscris-toi pour tester Choose en avant-première
          </h2>
          <SignupForm />
        </div>
      </section>
    </>
  );
};

// Formulaire d'inscription avec gestion de confirmation
const SignupForm: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Intégrer un vrai service d'email (Formspree, Netlify, etc.)
  };

  if (submitted) {
    return (
      <div className="w-full text-center text-green-600 font-semibold text-lg mt-4">
        Merci ! Tu recevras un mail dès le lancement.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Ton email"
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
      >
        Rejoindre la liste d'attente
      </button>
    </form>
  );
};

export default LandingPage; 