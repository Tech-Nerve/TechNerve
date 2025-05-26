import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Code, Database, Laptop, Smartphone, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Innovative <span className="text-accent-400">Tech Solutions</span> for Your Business
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-100 max-w-xl"
              >
                Solving tech challenges with creativity and precision. We build innovative solutions tailored to your business needs.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  href="/contact" 
                  size="lg" 
                  variant="secondary"
                >
                  Get Free Consultation
                </Button>
                <Button 
                  href="/projects" 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                >
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden lg:block"
            >
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Tech professionals working together" 
                className="rounded-lg shadow-xl w-full max-h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We offer a range of tech solutions tailored to meet your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: <Laptop size={24} />, title: 'Web Development', desc: 'Custom websites and web applications built with the latest technologies.' },
            { icon: <Smartphone size={24} />, title: 'Mobile App Development', desc: 'Native and cross-platform mobile apps for iOS and Android.' },
            { icon: <Zap size={24} />, title: 'UI/UX Design', desc: 'User-centered design that creates intuitive and engaging experiences.' },
            { icon: <Code size={24} />, title: 'Custom Software', desc: 'Tailored software solutions designed for your specific business needs.' },
            { icon: <Database size={24} />, title: 'Database Solutions', desc: 'Efficient database design, optimization, and management.' },
            { icon: <CheckCircle size={24} />, title: 'Tech Consulting', desc: 'Expert guidance on technology strategies and implementation.' },
          ].map((service, index) => (
            <Card 
              key={index}
              className="p-6 text-center md:text-left md:flex md:flex-col h-full"
            >
              <div className="flex justify-center md:justify-start mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.desc}</p>
              <Button 
                href="/services" 
                variant="ghost" 
                className="mt-auto text-primary-600 hover:text-primary-700 font-medium flex items-center justify-center md:justify-start gap-1 group"
              >
                Learn more
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/services" size="lg">
            View All Services
          </Button>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaboration" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose TechNerve?</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We're not just another tech company. Our partnership brings together diverse skills and perspectives to deliver exceptional results.
            </p>
            
            <div className="space-y-4 mt-6">
              {[
                { title: 'Personalized Approach', desc: 'We take the time to understand your unique business needs and goals.' },
                { title: 'Technical Excellence', desc: 'Our solutions are built with best practices and cutting-edge technologies.' },
                { title: 'Transparent Communication', desc: 'We keep you informed throughout the entire development process.' },
                { title: 'Ongoing Support', desc: 'Our relationship continues beyond project completion with reliable support.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 text-primary-600 flex-shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button href="/about" className="mt-6">
              Learn More About Us
            </Button>
          </div>
        </div>
      </Section>

      {/* Project Showcase */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Take a look at some of our recent work and see how we've helped our clients achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: 'E-commerce Platform', 
              desc: 'A custom e-commerce solution with inventory management and analytics.',
              image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              tags: ['Web Development', 'E-commerce', 'React']
            },
            { 
              title: 'Healthcare Mobile App', 
              desc: 'Patient management app for a leading healthcare provider with secure data handling.',
              image: 'https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              tags: ['Mobile App', 'Healthcare', 'React Native']
            },
            { 
              title: 'Fintech Dashboard', 
              desc: 'Real-time financial analytics dashboard with data visualization and reporting.',
              image: 'https://images.pexels.com/photos/7567556/pexels-photo-7567556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              tags: ['Web App', 'Fintech', 'Data Visualization']
            },
          ].map((project, idx) => (
            <Card key={idx} className="overflow-hidden h-full flex flex-col">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button href="/projects" variant="outline" className="mt-auto">
                  View Project
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/projects" size="lg">
            View All Projects
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 text-white/90">
            Get in touch with us today for a free consultation and let's discuss how we can help you achieve your tech goals.
          </p>
          <Button 
            href="/contact" 
            variant="outline" 
            size="lg"
            className="bg-white text-primary-600 border-white hover:bg-white/90"
          >
            Schedule a Consultation
          </Button>
        </div>
      </Section>
    </>
  );
};

export default HomePage;