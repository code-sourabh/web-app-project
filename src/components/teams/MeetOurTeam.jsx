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
