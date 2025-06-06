import { Logo } from "@/components/logo";
import { NavigationMenu } from "@/components/navigation-menu";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BackgroundVideo from "next-video/background-video";
import VideoDemo from "/videos/bmw-cinematic.mp4";

export default function Home() {
  return (
    <main className="w-full min-h-screen px-4 relative overflow-hidden">
      <header className="w-full max-w-7xl mx-auto mt-8 p-4 bg-background/50 backdrop-blur-md rounded-md grid grid-cols-[150px_1fr_150px] items-center">
        <Logo />

        <NavigationMenu />

        <Button className="justify-self-end">
          Get started <ArrowRight />
        </Button>
      </header>

      <BackgroundVideo
        src={VideoDemo}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "-1",
          opacity: ".3",
        }}
      />

      <section className="w-full max-w-7xl mt-20 sm:mt-40 lg:mt-64 mx-auto flex flex-col items-center gap-8 selection:bg-foreground selection:text-background">
        <h1 className="font-black text-4xl md:text-6xl text-center">
          Build your Component Library
        </h1>

        <p className="leading-7 max-w-xl text-center">
          A set of beautifully-designed, accessible components and a code
          distribution platform. Works with your favorite frameworks. Open
          Source. Open Code.
        </p>

        <div className="flex items-center gap-4">
          <Button variant="secondary">Get Started</Button>

          <Button variant="outline">Browse Blocks</Button>
        </div>
      </section>
    </main>
  );
}
