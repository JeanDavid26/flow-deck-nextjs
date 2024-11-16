export default function BrowseGame() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Parcourir les Jeux
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Découvrez une collection variée de jeux de cartes créés par notre communauté
          </p>
        </div>

        {/* Filtres */}
        <div className="mb-8 flex flex-wrap gap-4">
          <input
            type="search"
            placeholder="Rechercher un jeu..."
            className="flex-1 min-w-[200px] px-4 py-2 rounded-full border border-input bg-background"
          />
          <select className="px-4 py-2 rounded-full border border-input bg-background">
            <option value="">Trier par popularité</option>
            <option value="recent">Plus récents</option>
            <option value="oldest">Plus anciens</option>
            <option value="played">Plus joués</option>
          </select>
          <select className="px-4 py-2 rounded-full border border-input bg-background">
            <option value="">Toutes les catégories</option>
            <option value="strategy">Stratégie</option>
            <option value="family">Famille</option>
            <option value="party">Party</option>
          </select>
        </div>

        {/* Grille des jeux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Carte de jeu (répétée pour l'exemple) */}
          {[1, 2, 3, 4, 5, 6].map((game) => (
            <div key={game} className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-muted relative">
                <div className="absolute top-2 right-2 px-2 py-1 bg-secondary/80 rounded-full text-xs">
                  ⭐ 4.5/5
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Nom du Jeu {game}</h3>
                  <span className="text-xs text-muted-foreground">2-6 joueurs</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Par Créateur • {game}k parties jouées
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                    Stratégie
                  </span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                    Famille
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`/game/${game}`}
                    className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Jouer
                  </a>
                  <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors">
                    ♥
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center gap-2">
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors">
            ← Précédent
          </button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full">
            1
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors">
            2
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors">
            3
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors">
            Suivant →
          </button>
        </div>
      </main>
    </div>
  );
} 