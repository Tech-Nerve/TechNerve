import { useState } from 'react';
import { ExternalLink, Code, Smartphone, Globe } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

type Category = 'all' | 'web' | 'mobile' | 'design';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A custom e-commerce solution for a boutique clothing retailer, featuring inventory management, customer accounts, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['web'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      client: 'Fashion Forward'
    },
    {
      title: 'Healthcare Mobile App',
      description: 'Patient management application allowing secure communication between healthcare providers and patients, with appointment scheduling and medical records access.',
      image: 'https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['mobile'],
      technologies: ['React Native', 'Firebase', 'HIPAA Compliance'],
      link: '#',
      client: 'MediCare Services'
    },
    {
      title: 'Financial Dashboard',
      description: 'Interactive financial analytics dashboard providing real-time insights, data visualization, and comprehensive reporting for investment analysis.',
      image: 'https://images.pexels.com/photos/7567556/pexels-photo-7567556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['web', 'design'],
      technologies: ['Vue.js', 'D3.js', 'Python', 'AWS'],
      link: '#',
      client: 'InvestPro Analytics'
    },
    {
      title: 'Restaurant Ordering System',
      description: 'Integrated ordering system connecting mobile app, website, and in-store kiosks for a chain of restaurants, with inventory management and analytics.',
      image: 'https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['web', 'mobile'],
      technologies: ['React', 'React Native', 'Node.js', 'PostgreSQL'],
      link: '#',
      client: 'Urban Eats Chain'
    },
    {
      title: 'Real Estate Virtual Tours',
      description: 'Interactive 3D virtual tour platform for real estate listings, allowing potential buyers to explore properties remotely with VR integration.',
      image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['web', 'design'],
      technologies: ['Three.js', 'WebGL', 'Next.js', 'AWS'],
      link: '#',
      client: 'Premier Properties'
    },
    {
      title: 'Fitness Tracking App',
      description: 'Comprehensive fitness application with workout planning, progress tracking, nutrition logging, and social sharing features.',
      image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      categories: ['mobile'],
      technologies: ['Flutter', 'Firebase', 'ML Kit', 'Google Fit API'],
      link: '#',
      client: 'FitLife Solutions'
    }
  ];
  
  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.categories.includes(activeCategory)
  );

  const getCategoryIcon = (category: Category) => {
    switch(category) {
      case 'web': return <Globe size={16} />;
      case 'mobile': return <Smartphone size={16} />;
      case 'design': return <Code size={16} />;
      default: return null;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300">
              Explore our portfolio of successful projects and see how we've helped our clients achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Project Filters */}
      <Section>
        <div className="mb-8 flex justify-center">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web', label: 'Web Development' },
              { id: 'mobile', label: 'Mobile Apps' },
              { id: 'design', label: 'UI/UX Design' }
            ].map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-white dark:bg-gray-700 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setActiveCategory(category.id as Category)}
              >
                <div className="flex items-center space-x-1.5">
                  {getCategoryIcon(category.id as Category)}
                  <span>{category.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 flex space-x-2">
                  {project.categories.map((cat) => (
                    <span 
                      key={cat}
                      className="text-xs px-2 py-1 rounded-full bg-black/70 text-white backdrop-blur-sm"
                    >
                      {cat === 'web' ? 'Web' : cat === 'mobile' ? 'Mobile' : 'Design'}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Client: {project.client}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  href={project.link}
                  variant="outline"
                  className="mt-auto inline-flex items-center"
                  isExternal
                >
                  View Case Study
                  <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* If no projects match the filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setActiveCategory('all')}
            >
              View All Projects
            </Button>
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg mb-8 text-white/90">
            Let's discuss how we can help bring your vision to life with our technical expertise.
          </p>
          <Button 
            href="/contact" 
            variant="outline" 
            size="lg"
            className="bg-white text-primary-600 border-white hover:bg-white/90"
          >
            Start a Conversation
          </Button>
        </div>
      </Section>
    </>
  );
};

export default ProjectsPage;