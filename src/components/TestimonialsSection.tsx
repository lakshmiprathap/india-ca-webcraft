
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Vikram Mehta",
    company: "Mehta Enterprises",
    quote: "VishwaTax has been an invaluable partner for our business. Their expertise in Indian tax laws saved us significant amounts and kept us fully compliant.",
    rating: 5
  },
  {
    name: "Ananya Reddy",
    company: "Reddy Pharmaceuticals",
    quote: "The team's knowledge of GST compliance is exceptional. They've streamlined our processes and provided clarity in the complex Indian tax environment.",
    rating: 5
  },
  {
    name: "Ramesh Joshi",
    company: "JoshiTech Solutions",
    quote: "As we scaled our startup, VishwaTax provided the financial guidance we needed. Their strategic tax planning was crucial to our growth in the Indian market.",
    rating: 5
  },
  {
    name: "Kavita Sharma",
    company: "Sharma Textiles",
    quote: "Our family business has trusted VishwaTax for over 15 years. Their personalized service and deep understanding of our industry make them outstanding partners.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3; // Show fewer on mobile
  
  const next = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };
  
  const prev = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? testimonials.length - 1 : nextIndex;
    });
  };
  
  // Create a circular array for display
  const displayTestimonials = [...testimonials];
  
  return (
    <section id="testimonials" className="section bg-ca-gray">
      <h2 className="section-title">What Our Clients Say</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Hear directly from businesses and individuals who have benefited from our services across India.
      </p>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Mobile View */}
        <div className="md:hidden">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-ca-gold text-ca-gold" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonials[currentIndex].quote}"</p>
              <div>
                <p className="font-semibold text-ca-navy">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600 text-sm">{testimonials[currentIndex].company}</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-6 gap-4">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-white shadow text-ca-navy hover:bg-ca-navy hover:text-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={next}
              className="p-2 rounded-full bg-white shadow text-ca-navy hover:bg-ca-navy hover:text-white transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {displayTestimonials.slice(0, itemsToShow).map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-ca-gold text-ca-gold" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-ca-navy">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
