export default function MyGames() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Mes Jeux
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Gérez vos créations et suivez vos jeux favoris
          </p>
        </div>

        {/* Section Mes Créations */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Mes Créations</h2>
            <a 
              href="/create-game" 
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Créer un nouveau jeu
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Utiliser le même composant de carte que BrowseGame mais avec des options d'édition */}
            {[1, 2].map((game) => (
              <div key={game} className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
                {/* Contenu similaire à BrowseGame */}
                <div className="p-4">
                  <h3 className="font-bold text-lg">Ma Création {game}</h3>
                  {/* ... autres éléments ... */}
                  <div className="flex gap-2 mt-4">
                    <a href={`/edit-game/${game}`} className="flex-1 text-center px-4 py-2 bg-secondary text-secondary-foreground rounded-full">
                      Modifier
                    </a>
                    <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-full">
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
          <h2 className="text-3xl font-bold mb-8">Jeux Suivis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Utiliser le même composant de carte que BrowseGame */}
            {[1, 2, 3].map((game) => (
              <div key={game} className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
                {/* Contenu identique à BrowseGame */}
                <div className="p-4">
                  <h3 className="font-bold text-lg">Jeu Suivi {game}</h3>
                  {/* ... autres éléments ... */}
                  <div className="flex gap-2">
                    <a href={`/game/${game}`} className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground rounded-full">
                      Jouer
                    </a>
                    <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-full">
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