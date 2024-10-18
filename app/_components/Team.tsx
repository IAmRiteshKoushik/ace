import React from 'react';
import { FloatingDockDemo } from './TeamSocial';

export type IconProps = React.HTMLAttributes<SVGElement>;

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: 'https://picsum.photos/200/200?random=1', // Random image 1
    description: 'John is a visionary entrepreneur with a passion for innovation and leadership.',
  },
  {
    name: 'Jane Smith',
    role: 'Chief Operating Officer',
    image: 'https://picsum.photos/200/200?random=2', // Random image 2
    description: 'Jane ensures seamless operations, keeping the team focused and productive.',
  },
  {
    name: 'Michael Johnson',
    role: 'Chief Technology Officer',
    image: 'https://picsum.photos/200/200?random=3', // Random image 3
    description: 'Michael leads the tech team.',
  },
  {
    name: 'Alice Brown',
    role: 'Chief Marketing Officer',
    image: 'https://picsum.photos/200/200?random=4', // Random image 4
    description: 'Alice creates innovative marketing strategies to elevate our brand.',
  },
  {
    name: 'Tom Wilson',
    role: 'Chief Financial Officer',
    image: 'https://picsum.photos/200/200?random=5', // Random image 5
    description: 'Tom manages the company’s finances and ensures fiscal responsibility.',
  },
  // Add more members as needed
];

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <h1 className="text-6xl font-bold mb-16 text-white">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex p-6 rounded-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mr-6"
            />
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-2xl font-bold text-white">{member.name}</h2>
                <p className="text-gray-300">{member.role}</p>
                <p className="text-gray-200 mt-2">{member.description}</p>
              </div>
              {/* FloatingDockDemo is now positioned next to the image but below the texts */}
              <div className="mt-4 flex items-center">
                <FloatingDockDemo />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
