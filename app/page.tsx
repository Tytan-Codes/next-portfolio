;import { Navbar } from '@/components/narbar';
import Footer  from "@/components/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center min-h-screen text-8xl font-mono'>
        Tytan Codes
      </div>
      <Footer />
    </>
  )
}