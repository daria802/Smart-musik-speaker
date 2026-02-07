import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductGrid } from './components/ProductGrid';
import { AboutUs } from './components/AboutUs';
import { FeatureCard } from './components/FeatureCard';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <HeroSection />
      <ProductGrid />
      <AboutUs />
      <FeatureCard />
      <Footer />
    </div>
  );
}
