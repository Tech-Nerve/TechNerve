import { motion } from 'framer-motion';
import { Award, BarChart, CheckCircle, Lightbulb, Target, Users } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechNerve</h1>
            <p className="text-xl text-gray-300">
              We're a tech solutions duo passionate about solving complex problems through innovative technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                TechNerve was founded in 2024 by two friends with a shared vision: to create a tech company that combines technical excellence with a personalized approach to client service.
              </p>
              <p>
                After times of working for large tech corporations, we noticed a gap in the market. Small and medium-sized businesses needed tech solutions that were both sophisticated and accessible, with personal attention that bigger agencies couldn't provide.
              </p>
              <p>
                We joined forces to create TechNerve, bringing together our complementary skills in development, design, and business strategy. Since then, we've helped dozens of businesses transform their digital presence and internal systems.
              </p>
              <p>
                Today, TechNerve continues to grow, but our founding principles remain the same: deliver exceptional tech solutions with a personal touch, ensuring our clients feel supported at every step of their digital journey.
              </p>
            </div>
            <Button href="/team" className="mt-8">
              Meet Our Team
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="TechNerve founders" 
              className="rounded-lg shadow-lg object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="font-semibold text-lg">Founded in 2024</p>
              <p className="text-gray-600 dark:text-gray-300">With a passion for technology</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission and Values */}
      <Section background="light">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
          <p className="text-gray-600 dark:text-gray-300">
            At the core of TechNerve are the principles that guide our work and relationships.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center max-w-3xl mx-auto">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              To empower businesses through innovative technology solutions that drive growth, efficiency, and exceptional user experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              icon: <CheckCircle size={24} />, 
              title: 'Excellence', 
              desc: 'We commit to the highest standards in everything we do, from code quality to client communication.' 
            },
            { 
              icon: <Lightbulb size={24} />, 
              title: 'Innovation', 
              desc: 'We constantly explore new technologies and approaches to solve complex problems creatively.' 
            },
            { 
              icon: <Users size={24} />, 
              title: 'Partnership', 
              desc: 'We view our clients as partners and work collaboratively to achieve shared goals.' 
            },
            { 
              icon: <Award size={24} />, 
              title: 'Integrity', 
              desc: 'We maintain transparency and honesty in all our business practices and relationships.' 
            },
            { 
              icon: <BarChart size={24} />, 
              title: 'Results-Driven', 
              desc: 'We focus on delivering measurable outcomes that create real value for our clients.' 
            },
            { 
              icon: <Users size={24} />, 
              title: 'Accessibility', 
              desc: 'We make advanced technology solutions accessible to businesses of all sizes.' 
            },
          ].map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-md mr-3">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg mb-8 text-white/90">
            Let's discuss how TechNerve can help your business reach its technology goals.
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

export default AboutPage;