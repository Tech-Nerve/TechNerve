import { Check, Code, Database, FileCode, Globe, Laptop, Smartphone, Zap } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import consult from '../assets/consult.jpg';
import websiteImage from '../assets/website.jpg';
import mobileAppImage from '../assets/mobile_app.jpg';
import uiuxImage from '../assets/uiux.jpg';
import softwareImage from '../assets/software.jpg';
import databaseImage from '../assets/database.jpg';

const ServicesPage = () => {
  const services = [
    {
      icon: <Globe size={32} />,
      title: 'Web Development',
      description: 'We build responsive, high-performance websites and web applications that deliver exceptional user experiences. From corporate sites to complex web apps, our solutions are tailored to your specific needs.',
      features: [
        'Custom website development',
        'Web application development',
        'E-commerce solutions',
        'Content management systems',
        'Website maintenance and support'
      ],
      technologies: ['React', 'Next.js',  'Node.js', 'WordPress'],
      image: websiteImage
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile App Development',
      description: 'Our team creates native and cross-platform mobile applications that engage users and drive results. We focus on intuitive interfaces, performance, and scalable architecture.',
      features: [
        'iOS app development',
        'Android app development',
        'Cross-platform solutions',
        'App redesign and optimization',
        'Ongoing maintenance and updates'
      ],
      technologies: ['React Native', 'Expo'],
      image: mobileAppImage
    },
    {
      icon: <Zap size={32} />,
      title: 'UI/UX Design',
      description: 'We design user interfaces that are not only visually appealing but also intuitive and accessible. Our user experience design process ensures your digital products are easy to use and accomplish your business goals.',
      features: [
        'User interface design',
        'User experience strategy',
        'Wireframing and prototyping',
        'Usability testing',
        'Design systems'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
      image: uiuxImage
    },
    {
      icon: <Code size={32} />,
      title: 'Custom Software Development',
      description: 'We create bespoke software solutions that address your unique business challenges. From internal tools to customer-facing applications, we build software that delivers real value.',
      features: [
        'Custom business applications',
        'API development and integration',
        'Legacy system modernization',
        'Software architecture design',
        'Quality assurance and testing'
      ],
      technologies: ['Python', 'C#', '.NET', 'TypeScript'],
      image: softwareImage
    },
    {
      icon: <Database size={32} />,
      title: 'Database & Backend Solutions',
      description: 'We design, implement, and optimize database structures and backend systems that provide the foundation for reliable, scalable, and secure applications.',
      features: [
        'Database design and optimization',
        'Backend API development',
        'Cloud infrastructure setup',
        'Security implementation',
        'Performance optimization'
      ],
      technologies: ['SQL', 'NoSQL', 'AWS', 'Azure', 'Firebase', 'Supabase'],
      image: databaseImage
    },
    {
      icon: <Laptop size={32} />,
      title: 'Tech Consulting & Strategy',
      description: 'Our consulting services help businesses make informed technology decisions. We provide strategic guidance on technology selection, implementation, and optimization.',
      features: [
        'Technology assessment',
        'Digital transformation strategy',
        'Technology stack selection',
        'IT roadmap planning',
        'Security audits'
      ],
      technologies: ['Project Management', 'Risk Assessment', 'Cost Analysis'],
      image: consult
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-100">
              We provide end-to-end technology solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore our comprehensive range of tech services designed to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 inline-flex rounded-xl text-primary-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Key Features</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-semibold text-lg mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button href="/contact" className="mt-2">
                  Request a Quote
                </Button>
              </div>
              
              <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                <img 
                  src={service.image}
                  alt={service.title} 
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section background="light">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We follow a proven methodology to ensure successful project delivery.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            <div className="space-y-12">
              {[
                { number: 1, title: 'Discovery & Planning', desc: 'We start by understanding your business, goals, and requirements through in-depth discussions.' },
                { number: 2, title: 'Design & Prototyping', desc: 'We create wireframes and prototypes to visualize the solution before development begins.' },
                { number: 3, title: 'Development', desc: 'Our team builds your solution using modern technologies and best practices.' },
                { number: 4, title: 'Testing & Quality Assurance', desc: 'We rigorously test all aspects of your solution to ensure everything works perfectly.' },
                { number: 5, title: 'Deployment & Launch', desc: 'We carefully deploy your solution and provide support during the launch phase.' },
                { number: 6, title: 'Ongoing Support', desc: 'Our relationship continues with maintenance, updates, and support as needed.' },
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    {step.number}
                  </div>
                  
                  <div className={`mt-4 md:mt-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <Card className="h-full" animate={false}>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-lg mb-8 text-white/90">
            Contact us today to discuss your requirements and how we can help bring your ideas to life.
          </p>
          <Button 
            href="/contact" 
            variant="outline" 
            size="lg"
            className="bg-white text-primary-600 border-white hover:bg-white/90"
          >
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage;