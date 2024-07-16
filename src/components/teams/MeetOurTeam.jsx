import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    title: 'CEO',
    description: 'John is the visionary behind our company, leading the team with his strategic insights and unwavering dedication.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjUyOXwwfDF8c2VhcmNofDR8fHRlY2h8ZW58MHx8fHwxNjI5NDA1NTkw&ixlib=rb-1.2.1&q=80&w=1080', // Replace with actual image path
  },
  {
    name: 'Jane Smith',
    title: 'CTO',
    description: 'Jane is our technical mastermind, driving innovation and ensuring the seamless execution of our projects.',
    image: '/placeholder.jpg',
  },
  {
    name: 'Michael Johnson',
    title: 'Lead Designer',
    description: 'Michael is our creative genius, crafting stunning designs that captivate our clients and users.',
    image: '/placeholder.jpg',
  },
  {
    name: 'Emily Davis',
    title: 'Project Manager',
    description: 'Emily is our project management powerhouse, ensuring our projects are delivered on time and to the highest standards.',
    image: '/placeholder.jpg',
  },
];

const MeetOurTeam = () => {
  return (
    <section className="bg-[#333] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet Our Team</h2>
          <p className="text-lg md:text-xl">Passionate individuals dedicated to your success.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gradient-to-t from-[#ff6600] to-[#ffab7a] rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 group shadow-lg">
              <div className="h-32 md:h-40 lg:h-48 relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-3 md:p-4 text-white text-left">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold truncate">{member.name}</h3>
                <p className="text-sm md:text-md lg:text-lg mb-1 md:mb-2 truncate">{member.title}</p>
                <div className="w-full h-px bg-white mb-1 md:mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="text-xs md:text-sm line-clamp-3">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;