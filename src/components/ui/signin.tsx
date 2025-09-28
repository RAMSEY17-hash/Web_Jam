import { Button } from "@/components/ui/button.tsx";
import { LogIn, LogOut } from "lucide-react";

export function SignInButton() {
    // Version simplifiée sans auth réelle
    const handleClick = () => {
        console.log("Connexion non configurée - site en mode statique");
    };

    return (
        <Button
            onClick={handleClick}
            variant="outline"
            size="sm"
        >
            <LogIn className="mr-2 h-4 w-4" />
            Se connecter
        </Button>
    );
}

// Composant alternatif si vous voulez un bouton différent
export function AuthButton() {
    return (
        <Button variant="ghost" size="sm">
            <LogIn className="mr-2 h-4 w-4" />
            Connexion
        </Button>
    );
}

export default SignInButton;