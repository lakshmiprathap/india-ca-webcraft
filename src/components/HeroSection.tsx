import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-ca-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ca-navy mb-4">
              Expert Financial Solutions for Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Premium chartered accountancy services tailored for Indian businesses and individuals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-ca-navy hover:bg-ca-navy/90">
                <a href="#contact">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" className="border-ca-gold text-ca-gold hover:bg-ca-gold/10">
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="src/assets/team_banner.jpg" 
              alt="Financial professionals at work" 
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
