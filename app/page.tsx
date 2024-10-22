import { ModeToggle } from '@/components/ui/darkmode';
import { Navbar } from '@/components/ui/narbar';
export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Home</h1>
        <ModeToggle />
      </div>
    </>
  )
}