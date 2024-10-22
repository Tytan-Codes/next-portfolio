import { ModeToggle } from '@/components/ui/darkmode';
import { Navbar } from '@/components/ui/narbar';
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center min-h-screen'>
        <h1 className='text-8xl font-mono'>
          Tytan Codes
        </h1>
      </div>
    </>
  )
}