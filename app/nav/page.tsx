import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from '@/components/ui/darkmode';

export default function Navpage() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="space-y-6">
                <Link href="/">
                    <Button variant="outline" className="w-full mb-4">
                        Home
                    </Button>
                </Link>
                <Link href="/about">
                    <Button variant="outline" className="w-full mb-4">
                        About
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button variant="outline" className="w-full mb-4">
                        Contact
                    </Button>
                </Link>
                <Link href="/blog">
                    <Button variant="outline" className="w-full mb-2">
                        Blog
                    </Button>
                </Link>
                <div className="text-center">
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}