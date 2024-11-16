export default function MyGames() {
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">Mes Jeux</h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Gérez vos créations et suivez vos jeux favoris
          </p>
        </div>

        {/* Section Mes Créations */}
        <div className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Mes Créations</h2>
            <a
              href="/create-game"
              className="rounded-full bg-primary px-6 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Créer un nouveau jeu
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Utiliser le même composant de carte que BrowseGame mais avec des options d'édition */}
            {[1, 2].map((game) => (
              <div
                key={game}
                className="overflow-hidden rounded-lg bg-card text-card-foreground shadow-lg"
              >
                {/* Contenu similaire à BrowseGame */}
                <div className="p-4">
                  <h3 className="text-lg font-bold">Ma Création {game}</h3>
                  {/* ... autres éléments ... */}
                  <div className="mt-4 flex gap-2">
                    <a
                      href={`/edit-game/${game}`}
                      className="flex-1 rounded-full bg-secondary px-4 py-2 text-center text-secondary-foreground"
                    >
                      Modifier
                    </a>
                    <button className="rounded-full bg-destructive px-4 py-2 text-destructive-foreground">
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Jeux Suivis */}
        <div>
          <h2 className="mb-8 text-3xl font-bold">Jeux Suivis</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Utiliser le même composant de carte que BrowseGame */}
            {[1, 2, 3].map((game) => (
              <div
                key={game}
                className="overflow-hidden rounded-lg bg-card text-card-foreground shadow-lg"
              >
                {/* Contenu identique à BrowseGame */}
                <div className="p-4">
                  <h3 className="text-lg font-bold">Jeu Suivi {game}</h3>
                  {/* ... autres éléments ... */}
                  <div className="flex gap-2">
                    <a
                      href={`/game/${game}`}
                      className="flex-1 rounded-full bg-primary px-4 py-2 text-center text-primary-foreground"
                    >
                      Jouer
                    </a>
                    <button className="rounded-full bg-destructive px-4 py-2 text-destructive-foreground">
                      Ne plus suivre
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
