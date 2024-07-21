import React from 'react';
import { Search, Briefcase, Users, ChevronRight } from 'lucide-react';

const CareerPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Join Our Team</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Software Engineer', 'Product Manager', 'UX Designer'].map((position) => (
              <div key={position} className="bg-gray-100 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{position}</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="text-orange-500 font-semibold flex items-center">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Briefcase, title: 'Growth Opportunities' },
              { icon: Users, title: 'Collaborative Environment' },
              { icon: Search, title: 'Innovative Projects' },
            ].map(({ icon: Icon, title }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="bg-orange-500 p-3 rounded-full mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Us Today</h2>
          <p className="text-gray-600 mb-6">Ready to take the next step in your career? We'd love to hear from you!</p>
          <a href="#" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            View All Openings
          </a>
        </section>
      </main>

      
    </div>
  );
};

export default CareerPage;