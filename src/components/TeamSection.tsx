
import { Card, CardContent } from "./ui/card";

const team = [
  {
    name: "Rajesh Sharma",
    position: "Managing Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    qualifications: "FCA, B.Com",
    experience: "25+ years"
  },
  {
    name: "Priya Patel",
    position: "Tax Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    qualifications: "CA, LLB",
    experience: "15+ years"
  },
  {
    name: "Amit Kumar",
    position: "Audit Head",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    qualifications: "CA, DISA",
    experience: "18+ years"
  },
  {
    name: "Sneha Gupta",
    position: "GST Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
    qualifications: "CA, Certified GST Professional",
    experience: "10+ years"
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
                <p className="text-gray-600 text-sm">Qualifications: {member.qualifications}</p>
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
