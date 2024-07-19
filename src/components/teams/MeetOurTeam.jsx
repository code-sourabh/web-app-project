import React from 'react';
import CEO from "../../image/CEO.png"
import CTO from "../../image/CTO.png"
import COO from "../../image/COO.png"
import CMO from "../../image/CMO.png"

const teamMembers = [
  {
    name: 'Eric Bedell',
    title: 'CEO',
    description: 'Eric is the visionary behind our company, leading the team with his strategic insights and unwavering dedication.',
    image: CEO, // Replace with actual image path
  },
  {
    name: 'Ragvinder Singh Tomar',
    title: 'CTO',
    description: 'Raghvinder is our technical mastermind, driving innovation and ensuring the seamless execution of our projects.',
    image: CTO,
  },
  {
    name: 'Saurav Kumar',
    title: 'COO',
    description: 'Saurav is our chief operating officer, overseeing our operations and ensuring the smooth running of our business.',
    image: COO,
  },
  {
    name: 'Vamsi Maringanti',
    title: 'CMO',
    description: 'Vamsi is our chief marketing officer, driving our marketing management powerhouse, ensuring our projects ',
    image: CMO,
  },
];

const MeetOurTeam = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">Meet Our Team</h2>
          <p className="text-lg md:text-xl text-gray-300">Passionate individuals dedicated to your success.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-orange-500 text-center">{member.name}</h3>
              <p className="text-orange-400 text-center">{member.title}</p>
              <p className="text-gray-300 mt-2 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
