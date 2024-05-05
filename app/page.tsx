import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDiviver from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDiviver/>
      <About/>
    </main>
  )
}
