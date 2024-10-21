"use client"
import { Navbar } from '@/components/ui/narbar';
import { ModeToggle } from '@/components/ui/darkmode';

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