export default function BrowseGame() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">
            Parcourir les Jeux
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Découvrez une collection variée de jeux de cartes créés par notre
            communauté
          </p>
        </div>

        {/* Filtres */}
        <div className="mb-8 flex flex-wrap gap-4">
          <input
            type="search"
            placeholder="Rechercher un jeu..."
            className="min-w-[200px] flex-1 rounded-full border border-input bg-background px-4 py-2"
          />
          <select className="rounded-full border border-input bg-background px-4 py-2">
            <option value="">Trier par popularité</option>
            <option value="recent">Plus récents</option>
            <option value="oldest">Plus anciens</option>
            <option value="played">Plus joués</option>
          </select>
          <select className="rounded-full border border-input bg-background px-4 py-2">
            <option value="">Toutes les catégories</option>
            <option value="strategy">Stratégie</option>
            <option value="family">Famille</option>
            <option value="party">Party</option>
          </select>
        </div>

        {/* Grille des jeux */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Carte de jeu (répétée pour l'exemple) */}
          {[1, 2, 3, 4, 5, 6].map((game) => (
            <div
              key={game}
              className="overflow-hidden rounded-lg bg-card text-card-foreground shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9 relative bg-muted">
                <div className="absolute right-2 top-2 rounded-full bg-secondary/80 px-2 py-1 text-xs">
                  ⭐ 4.5/5
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-lg font-bold">Nom du Jeu {game}</h3>
                  <span className="text-xs text-muted-foreground">
                    2-6 joueurs
                  </span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Par Créateur • {game}k parties jouées
                </p>
                <div className="mb-4 flex gap-2">
                  <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                    Stratégie
                  </span>
                  <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                    Famille
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`/game/${game}`}
                    className="flex-1 rounded-full bg-primary px-4 py-2 text-center text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Jouer
                  </a>
                  <button className="rounded-full bg-secondary px-4 py-2 text-secondary-foreground transition-colors hover:bg-secondary/80">
                    ♥
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center gap-2">
          <button className="rounded-full bg-secondary px-4 py-2 text-secondary-foreground transition-colors hover:bg-secondary/80">
            ← Précédent
          </button>
          <button className="rounded-full bg-primary px-4 py-2 text-primary-foreground">
            1
          </button>
          <button className="rounded-full bg-secondary px-4 py-2 text-secondary-foreground transition-colors hover:bg-secondary/80">
            2
          </button>
          <button className="rounded-full bg-secondary px-4 py-2 text-secondary-foreground transition-colors hover:bg-secondary/80">
            3
          </button>
          <button className="rounded-full bg-secondary px-4 py-2 text-secondary-foreground transition-colors hover:bg-secondary/80">
            Suivant →
          </button>
        </div>
      </main>
    </div>
  );
}
