
import {
  Calculator,
  FileSpreadsheet,
  FileChartLine,
  Briefcase,
  Receipt,
  HandCoins,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: <Calculator className="h-10 w-10 text-ca-gold" />,
    title: "Tax Planning & Filing",
    description: "Strategic tax planning and seamless filing services for businesses and individuals in compliance with Indian tax laws."
  },
  {
    icon: <FileSpreadsheet className="h-10 w-10 text-ca-gold" />,
    title: "GST Services",
    description: "Comprehensive GST registration, filing, and compliance solutions to navigate the complexities of India's GST regime."
  },
  {
    icon: <FileChartLine className="h-10 w-10 text-ca-gold" />,
    title: "Audit & Assurance",
    description: "Thorough statutory audits, internal audits, and assurance services to ensure compliance and identify operational improvements."
  },
  {
    icon: <Briefcase className="h-10 w-10 text-ca-gold" />,
    title: "Business Advisory",
    description: "Expert guidance on financial strategy, business structuring, and growth planning tailored to the Indian market."
  },
  {
    icon: <Receipt className="h-10 w-10 text-ca-gold" />,
    title: "Bookkeeping & Accounting",
    description: "Precise bookkeeping and accounting services to maintain accurate financial records and support decision-making."
  },
  {
    icon: <HandCoins className="h-10 w-10 text-ca-gold" />,
    title: "Investment Planning",
    description: "Strategic investment consultation to optimize returns and achieve financial objectives in the Indian investment landscape."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-white">
      <h2 className="section-title">Our Services</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        We offer a comprehensive range of professional services to help your business thrive in the dynamic Indian economic environment.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mb-4">{service.icon}</div>
              <CardTitle className="text-xl text-ca-navy">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
