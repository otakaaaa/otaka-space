import HeroSection from '@/components/layouts/HeroSection/HeroSection';
import WorksSection from '@/components/layouts/WorksSection/WorksSection';
import ServiceSection from '@/components/layouts/ServiceSection/ServiceSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorksSection />
      <ServiceSection />
    </main>
  );
}
