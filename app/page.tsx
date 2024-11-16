export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Flow Deck
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Créez, partagez et jouez à vos jeux de cartes personnalisés
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/create"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Créer un jeu
            </a>
            <a
              href="/play"
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
            >
              Jouer avec des amis
            </a>
          </div>
        </div>

        {/* Popular Games Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Jeux populaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-muted">
                {/* Image du jeu */}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Nom du Jeu</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Par Créateur • 1.2k parties jouées
                </p>
                <a
                  href="/game/1"
                  className="text-primary hover:text-primary/90 font-medium"
                >
                  Jouer maintenant →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-bold mb-2">Création intuitive</h3>
            <p className="text-muted-foreground">
              Concevez vos cartes facilement avec notre éditeur drag & drop
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="font-bold mb-2">Jeu en temps réel</h3>
            <p className="text-muted-foreground">
              Jouez en ligne avec vos amis où que vous soyez
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="font-bold mb-2">Communauté active</h3>
            <p className="text-muted-foreground">
              Découvrez et partagez des jeux avec des joueurs du monde entier
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
