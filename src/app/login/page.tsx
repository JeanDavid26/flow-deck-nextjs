import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md rounded-lg bg-card p-8 text-card-foreground shadow-lg">
        <h1 className="mb-8 text-center text-3xl font-bold text-foreground">
          Connexion à Flow Deck
        </h1>

        <form className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border bg-background px-4 py-2 text-foreground"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-foreground"
            >
              Mot de passe:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-md border bg-background px-4 py-2 text-foreground"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              formAction={login}
              className="flex-1 rounded-full bg-primary px-8 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Se connecter
            </button>
            <button
              formAction={signup}
              className="flex-1 rounded-full bg-secondary px-8 py-3 text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              S&apos;inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
