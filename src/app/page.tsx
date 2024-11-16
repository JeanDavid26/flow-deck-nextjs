export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">Flow Deck</h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Créez, partagez et jouez à vos jeux de cartes personnalisés
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/create"
              className="rounded-full bg-primary px-8 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Créer un jeu
            </a>
            <a
              href="/play"
              className="rounded-full bg-secondary px-8 py-3 text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              Jouer avec des amis
            </a>
          </div>
        </div>

        {/* Popular Games Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Jeux populaires
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-card text-card-foreground shadow-lg transition-shadow hover:shadow-xl">
              <div className="aspect-w-16 aspect-h-9 bg-muted">
                {/* Image du jeu */}
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Nom du Jeu</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Par Créateur • 1.2k parties jouées
                </p>
                <a
                  href="/game/1"
                  className="font-medium text-primary hover:text-primary/90"
                >
                  Jouer maintenant →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="mb-2 font-bold">Création intuitive</h3>
            <p className="text-muted-foreground">
              Concevez vos cartes facilement avec notre éditeur drag & drop
            </p>
          </div>
          <div className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="mb-2 font-bold">Jeu en temps réel</h3>
            <p className="text-muted-foreground">
              Jouez en ligne avec vos amis où que vous soyez
            </p>
          </div>
          <div className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="mb-2 font-bold">Communauté active</h3>
            <p className="text-muted-foreground">
              Découvrez et partagez des jeux avec des joueurs du monde entier
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
