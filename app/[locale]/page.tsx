import { Hero } from "@/components/home/hero";
import { ImpactStats } from "@/components/home/stats";
import { SuccessStories } from "@/components/home/success-stories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ImpactStats />
      <SuccessStories />
    </main>
  );
}
