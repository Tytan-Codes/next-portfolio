import { Navbar } from '@/components/narbar';
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center min-h-screen text-8xl font-mono'>
        <div>Tytan Codes</div>
        <h2 className='text-2xl mt-4'>
          Crafting Stunning Website Designs with Exceptional Development Skills
        </h2>
      </div>
      <Footer />
    </>
  )
}