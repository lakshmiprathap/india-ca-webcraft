
import { Card, CardContent } from "./ui/card";

const team = [
  {
    name: "KEYUR P VORA",
    position: "Business Consultant",
    image: "src/assets/voray.jpeg",
    qualifications: "FCA, B.Com",
    experience: "10+ years"
  },
  {
    name: "Prasanth V",
    position: "Managing Partner",
    image: "src/assets/prasanthv.jpeg",
    qualifications: "CA, LLB",
    experience: "2+ years"
  },
  {
    name: "CA KAILASH KUMAWAT",
    position: "Audit consultant",
    image: "src/assets/kailash.jpeg",
    qualifications: "CA, DISA",
    experience: "4+ years"
  },
  {
    name: "CA VIRENDRA SINGH",
    position: "GST Consultant",
    image: "src/assets/vira.jpeg",
    qualifications: "CA, Certified GST Professional",
    experience: "3+ years"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="section bg-white">
      <h2 className="section-title">Our Expert Team</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Meet our team of experienced Chartered Accountants and financial specialists committed to your success.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-ca-navy mb-1">{member.name}</h3>
                <p className="text-ca-gold font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">Experience: {member.experience}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
