import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Navbar = () => { 
    return (
        <nav>
            <div className="container mx-auto flex justify-between items-center p-2">
                <Link href="/">
                <h1 className="font-mono text-xl">
                    Tytan Codes
                </h1>
                </Link>
                <Link href="/nav">
                    <Button variant="outline" className="flex items-center">
                        Menu
                        <HamburgerMenuIcon className="ml-2" />
                    </Button>
                </Link>
            </div>
        </nav>
    )
}

export { Navbar };