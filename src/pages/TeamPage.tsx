import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Co-Founder & Lead Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Alex has over 10 years of experience in web and mobile development. With a background in computer science and a passion for clean code, he leads our technical implementations and architecture decisions.',
      skills: ['Full-Stack Development', 'System Architecture', 'DevOps', 'React', 'Node.js', 'Cloud Infrastructure'],
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        email: 'mailto:alex@techboyz.tech'
      }
    },
    {
      name: 'Michael Rivera',
      role: 'Co-Founder & UX/Design Lead',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Michael brings creative vision to our projects with his expertise in UX design and digital marketing. His background in psychology helps him understand user behavior and create intuitive interfaces.',
      skills: ['UI/UX Design', 'Digital Marketing', 'Project Management', 'Figma', 'User Research', 'Brand Strategy'],
      social: {
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        email: 'mailto:michael@techboyz.tech'
      }
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-gray-300">
              Get to know the passionate tech professionals behind TechBoyz.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="overflow-hidden h-full flex flex-col"
                animate={false}
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white">{member.name}</h2>
                      <p className="text-gray-200">{member.role}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <p className="mb-6 text-gray-700 dark:text-gray-300">{member.bio}</p>
                  
                  <h3 className="text-lg font-semibold mb-2">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <a href={member.social.twitter} className="p-2 text-gray-500 hover:text-primary-600 transition-colors" aria-label="Twitter">
                      <Twitter size={20} />
                    </a>
                    <a href={member.social.linkedin} className="p-2 text-gray-500 hover:text-primary-600 transition-colors" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.social.github} className="p-2 text-gray-500 hover:text-primary-600 transition-colors" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                    <a href={member.social.email} className="p-2 text-gray-500 hover:text-primary-600 transition-colors" aria-label="Email">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Values */}
      <Section background="light">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our approach to client projects is built on collaboration, transparency, and excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Collaborative Approach',
              description: 'We work closely with our clients at every stage, ensuring your vision drives the project.',
            },
            {
              title: 'Technical Rigor',
              description: 'We apply industry best practices and maintain high standards for all our technical implementations.',
            },
            {
              title: 'Honest Communication',
              description: 'We prioritize clear, straightforward communication throughout the entire development process.',
            },
          ].map((value, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Join Our Team - Optional */}
      <Section background="primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Network</h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking to collaborate with talented freelancers and specialists.
          </p>
          <a 
            href="mailto:careers@techboyz.tech" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium px-6 py-3 bg-white text-primary-600 hover:bg-white/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </Section>
    </>
  );
};

export default TeamPage;