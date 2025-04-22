
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const features = [
  "25+ years of experience in Indian taxation",
  "ICAI certified professionals",
  "In-depth knowledge of Indian tax laws",
  "Personalized client approach",
  "Digital-first accounting solutions",
  "Continuous professional development"
];

const AboutSection = () => {
  return (
    <section id="about" className="section bg-ca-gray">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ca-navy">About VishwaTax</h2>
          <p className="text-gray-700 mb-6">
            Since 1998, VishwaTax has been providing exceptional chartered accountancy services to businesses and individuals across India. Our team of dedicated professionals combines expertise with personalized attention to deliver solutions that drive financial success.
          </p>
          <p className="text-gray-700 mb-8">
            We pride ourselves on staying ahead of the ever-evolving Indian tax landscape, ensuring our clients always receive up-to-date and compliant financial advice.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-ca-gold" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button className="bg-ca-navy hover:bg-ca-navy/90">
            <a href="#team">Meet Our Team</a>
          </Button>
        </div>
        
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
            alt="Professional accounting team" 
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
