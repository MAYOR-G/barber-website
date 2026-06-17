import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/siteContent';

export default function About() {
  return (
    <section className="py-24 md:py-32 px-6 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <img 
            src={siteContent.about.image} 
            alt="Modern barber studio interior with a professional styling chair"
            loading="lazy"
            decoding="async"
            className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-8 leading-tight">
            {siteContent.about.headline}
          </h2>
          <p className="text-lg text-brand-cream/70 leading-relaxed font-light">
            {siteContent.about.text}
          </p>
          <div className="mt-12">
            <img src="/studio-signature.svg" alt="Studio founder signature" loading="lazy" decoding="async" className="h-16 opacity-50 invert" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
