import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navbar = () => { 
    return (
        <nav className="">
            <div className="container mx-auto flex justify-between items-center p-2">
                <h1 className="font-mono text-xl">
                    Tytan Codes
                </h1>
                <Button className="flex items-center">
                    Menu
                    <HamburgerMenuIcon className="ml-2" />
                </Button>
            </div>
        </nav>
    )
}

export { Navbar };