import { Button } from "@/components/ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

const Navback = () => { 
    return (
        <nav>
            <div className="container mx-auto flex justify-between items-center p-2">
                <Link href="/">
                <h1 className="font-mono text-xl">
                    Tytan Codes
                </h1>
                </Link>
                <Link href="/">
                    <Button variant="outline" className="flex items-center">
                        Back
                        <Cross1Icon className="ml-2" />
                    </Button>
                </Link>
            </div>
        </nav>
    )
}

export { Navback };