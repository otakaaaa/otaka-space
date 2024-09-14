import HeroSection from '@/components/layouts/HeroSection/HeroSection';
import WorksSection from '@/components/layouts/WorksSection/WorksSection';
import ServiceSection from '@/components/layouts/ServiceSection/ServiceSection';
import BlogSection from '@/components/layouts/BlogSection/BlogSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WorksSection />
      <ServiceSection />
      <BlogSection />
    </main>
  );
}
