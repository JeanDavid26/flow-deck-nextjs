import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-card text-card-foreground rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-foreground text-center mb-8">
          Connexion à Flow Deck
        </h1>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email:
            </label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="w-full px-4 py-2 border rounded-md bg-background text-foreground"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Mot de passe:
            </label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              className="w-full px-4 py-2 border rounded-md bg-background text-foreground"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              formAction={login}
              className="flex-1 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              Se connecter
            </button>
            <button 
              formAction={signup}
              className="flex-1 px-8 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
            >
              S&apos;inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}