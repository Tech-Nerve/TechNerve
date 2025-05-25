import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'gradient';
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  fullWidth = false,
  background = 'white',
}) => {
  const backgroundClasses = {
    white: 'bg-white dark:bg-gray-900',
    light: 'bg-gray-50 dark:bg-gray-800',
    dark: 'bg-gray-900 dark:bg-gray-950 text-white',
    primary: 'bg-primary-600 text-white',
    gradient: 'bg-gradient-to-r from-primary-700 via-primary-600 to-secondary-500 text-white',
  };

  return (
    <section 
      id={id} 
      className={`section-padding ${backgroundClasses[background]} ${className}`}
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className={fullWidth ? '' : 'container-custom'}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;