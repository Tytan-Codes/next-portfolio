import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navbar = () => { 
    return (
        <nav>
            <div>
                <h1 className="font-mono">
                    Tytan Codes
                </h1>
            </div>
            <div>
                <Button variant="primary">Sign in</Button>
                <HamburgerMenuIcon />
            </div>
        </nav>
    )
}

export { Navbar };