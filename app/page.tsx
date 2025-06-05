import { Sparkles, Zap, Star } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-400 relative overflow-hidden retro-bg">

      <div className="absolute inset-0 opacity-30">
        <img src="/images/foret-druidique.jpg" alt="Forêt druidique mystique" className="w-full h-full object-cover" />
      </div>

      {/* Effet de fumée violette */}
      <div className="absolute inset-0 smoke-effect"></div>
      <div className="absolute inset-0 smoke-effect-2" style={{ animationDelay: "3s" }}></div>
      <div className="absolute inset-0 smoke-effect-3" style={{ animationDelay: "6s" }}></div>

      {/* Overlay druidique violet */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-violet-800/5 to-indigo-900/10"></div>

      {/* Animations druidiques violettes */}
      <div className="absolute inset-0">
        {/* Cercles magiques violets */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-purple-400/40 rounded-full animate-spin-slow druidic-circle"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border-2 border-violet-400/30 rounded-full animate-spin-reverse druidic-circle"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-indigo-400/50 rounded-full animate-pulse druidic-circle"></div>

        {/* Runes flottantes */}
        <div className="absolute top-32 right-20 text-purple-400/60 text-2xl animate-float druidic-rune">ᚱ</div>
        <div className="absolute bottom-60 left-40 text-violet-400/50 text-xl animate-float-delayed druidic-rune">
          ᚦ
        </div>
        <div className="absolute top-60 left-1/3 text-indigo-400/40 text-lg animate-float-slow druidic-rune">ᚨ</div>
        <div className="absolute bottom-32 right-1/4 text-purple-500/50 text-xl animate-float druidic-rune">ᛟ</div>

        {/* Particules magiques violettes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/60 rounded-full animate-ping druidic-particle"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-violet-400/70 rounded-full animate-ping delay-500 druidic-particle"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-indigo-400/50 rounded-full animate-ping delay-1000 druidic-particle"></div>
      </div>

      {/* Bulles de potion magique avec style rétro */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-4 h-4 bg-white/60 retro-bubble animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-white/50 retro-bubble animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-60 left-1/4 w-5 h-5 bg-white/40 retro-bubble animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 right-1/3 w-2 h-2 bg-white/70 retro-bubble animate-bounce"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-80 right-10 w-6 h-6 bg-white/30 retro-bubble animate-bounce"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-60 left-20 w-3 h-3 bg-white/60 retro-bubble animate-bounce"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      {/* Étincelles magiques rétro */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 animate-ping retro-sparkle">
          <Star className="w-4 h-4 text-white" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-ping delay-500 retro-sparkle">
          <Sparkles className="w-3 h-3 text-white" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-ping delay-1000 retro-sparkle">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div className="absolute top-2/3 right-1/3 animate-ping delay-1500 retro-sparkle">
          <Star className="w-3 h-3 text-white" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Titre principal avec GIF de Panoramix - Style rétro */}
        <div className="mb-8">
          <div className="mb-6">
            <div className="w-64 h-64 mx-auto mb-6 flex items-center justify-center retro-frame">
              <img
                src="/images/panoramix-et-la-potion-magique.gif"
                alt="Panoramix préparant sa potion magique"
                className="w-full h-full object-contain retro-image"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-orange-900 mb-4 retro-title tracking-wide drop-shadow-lg">
            PANORAMIX
          </h1>
          <div className="text-2xl text-orange-800 font-bold tracking-widest retro-subtitle">.COM</div>
          <div className="mt-4 text-xl text-orange-700 font-bold retro-text">🧙‍♂️ DRUIDE OFFICIEL DU VILLAGE 🧙‍♂️</div>
        </div>

        {/* Message principal - Style rétro */}
        <div className="mb-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-orange-900 mb-6 font-bold retro-heading">
            🍯 LA POTION MAGIQUE EST EN PRÉPARATION ! 🍯
          </h2>

          <div className="first-retro-card retro-parchment p-6 mb-6 relative overflow-hidden">
            <div className="retro-pattern"></div>
            <p className="text-xl text-orange-900 font-bold leading-relaxed retro-text relative z-10">
              Par Toutatis ! Le grand druide Panoramix concocte actuellement sa légendaire potion magique dans sa hutte
              secrète de la forêt des Carnutes. Les ingrédients les plus rares sont en cours de cueillette sous la
              pleine lune...
            </p>
          </div>

          <div className="text-lg text-orange-800 font-semibold retro-text">
            🌙 Prochaine pleine lune : <span className="text-orange-900 font-bold retro-highlight">BIENTÔT</span> 🌙
          </div>
        </div>

        {/* Section d'inscription - Style rétro complet */}
        <div className="mb-8 max-w-lg mx-auto w-full">
          <div className="retro-card retro-parchment p-6 relative overflow-hidden">
            <div className="retro-pattern"></div>
            <h3 className="text-2xl text-orange-900 mb-4 font-bold retro-heading relative z-10">
              🛡️ REJOIGNEZ LA RÉSISTANCE GAULOISE ! 🛡️
            </h3>

            <div className="space-y-4 relative z-10">
              <input
                type="email"
                placeholder="Votre adresse de messager gaulois..."
                className="w-full p-4 text-lg retro-input text-orange-900 placeholder-orange-600 retro-text focus:outline-none"
              />
              <button className="w-full retro-button text-white font-bold text-lg py-4 px-6 transform hover:scale-105 transition-transform retro-text">
                🗡️ DEVENIR UN IRRÉDUCTIBLE ! 🗡️
              </button>
            </div>

            <p className="text-orange-800 font-semibold mt-4 retro-text relative z-10">
              Soyez prévenus dès que la potion sera prête !
            </p>
          </div>
        </div>

        {/* Promesses du site - Design rétro complet avec même animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          <div className="retro-card retro-parchment p-6 text-center relative overflow-hidden">
            <div className="retro-pattern"></div>
            <div className="text-4xl mb-4 relative z-10 retro-emoji">🌿</div>
            <h4 className="text-orange-900 font-bold text-xl mb-2 retro-heading relative z-10">RECETTES SECRÈTES</h4>
            <p className="text-orange-800 font-medium retro-text relative z-10">
              Les formules magiques transmises depuis des générations
            </p>
          </div>

          <div className="retro-card retro-parchment p-6 text-center relative overflow-hidden">
            <div className="retro-pattern"></div>
            <div className="text-4xl mb-4 relative z-10 retro-emoji">⚡</div>
            <h4 className="text-orange-900 font-bold text-xl mb-2 retro-heading relative z-10">FORCE SURHUMAINE</h4>
            <p className="text-orange-800 font-medium retro-text relative z-10">
              Découvrez les secrets de la potion qui rend invincible
            </p>
          </div>

          <div className="retro-card retro-parchment p-6 text-center relative overflow-hidden">
            <div className="retro-pattern"></div>
            <div className="text-4xl mb-4 relative z-10 retro-emoji">🏛️</div>
            <h4 className="text-orange-900 font-bold text-xl mb-2 retro-heading relative z-10">RÉSISTANCE ROMAINE</h4>
            <p className="text-orange-800 font-medium retro-text relative z-10">
              Rejoignez la lutte contre l'envahisseur romain
            </p>
          </div>
        </div>

        {/* Citation d'Astérix - Style rétro avec même animation */}
        <div className="mb-8">
          <div className="retro-card retro-quote p-6 max-w-2xl mx-auto relative overflow-hidden">
            <div className="retro-pattern"></div>
            <p className="text-xl text-red-800 font-bold italic retro-text relative z-10">
              "Ces Gaulois sont fous ! Mais leur potion magique est extraordinaire !"
            </p>
            <p className="text-red-700 font-medium mt-2 retro-text relative z-10">- Un centurion romain anonyme</p>
          </div>
        </div>

        {/* Footer gaulois - Style rétro */}
        <div className="text-orange-800 font-bold retro-text">
          <p className="text-lg">🏺 © 50 av. J.-C. Panoramix.com - Village des Irréductibles Gaulois 🏺</p>
          <p className="mt-2 text-orange-700 font-medium italic">
            "Le ciel nous tombe sur la tête ? Pas avec notre potion magique !"
          </p>
        </div>
      </div>

      {/* Effet de lueur magique dorée - Style rétro */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 retro-glow animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 retro-glow-small animate-pulse delay-1000" />
    </div>
  )
}
