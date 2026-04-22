"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Dîner sous les étoiles",
    location: "Sahara",
    tag: "Exclusif",
    description: "Table privée au cœur du désert, chef personnel et envoûtante musique Gnawa live.",
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1400&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto",
  },
  {
    id: 2,
    title: "Survol en montgolfière",
    location: "Marrakech",
    tag: "Premium",
    description: "Admirez le lever du soleil sur les palmeraies dans une montgolfière privatisée.",
    image: "https://images.unsplash.com/photo-1563299796-b729d0af54a5?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2 lg:col-span-2 row-span-1 aspect-[16/9] md:aspect-auto",
  },
  {
    id: 3,
    title: "Hammam royal privé",
    location: "XIVe siècle",
    tag: "Luxe",
    description: "Soins ancestraux au véritable Ghassoul dans un écrin d'histoire.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    className: "md:col-span-1 row-span-1 aspect-square md:aspect-auto",
  },
  {
    id: 4,
    title: "Atelier avec artisans",
    location: "Zellige à Fès",
    tag: "Culture",
    description: "Maîtrisez l'art de la mosaïque accompagné d'un véritable maître artisan.",
    image: "https://images.unsplash.com/photo-1588612711684-25e14b62dbd6?q=80&w=800&auto=format&fit=crop",
    className: "md:col-span-1 row-span-1 aspect-square md:aspect-auto",
  },
  {
    id: 5,
    title: "Trek Atlas en VIP",
    location: "Toubkal",
    tag: "Aventure",
    description: "Camp de luxe panoramique et gastronomie d'altitude au sommet de l'Afrique du Nord.",
    image: "https://images.unsplash.com/photo-1512415178652-32a2432d3add?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2 lg:col-span-1 lg:row-span-2 aspect-[4/3] md:aspect-auto",
  },
  {
    id: 6,
    title: "Cours de cuisine royale",
    location: "Riad Marrakech",
    tag: "Gastronomie",
    description: "Plongez dans les secrets d'épices ancestraux au sein d'une authentique cuisine de Riad.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=800&auto=format&fit=crop",
    className: "md:col-span-2 lg:col-span-1 row-span-1 aspect-[16/9] lg:aspect-auto",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ExclusiveExperiences() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Dark prestige background with subtle gold ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-[#050505] to-[#0A0A0A] pointer-events-none" />
      
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold tracking-[0.35em] uppercase mb-5"
            >
              <Sparkles className="w-4 h-4" />
              Service de Conciergerie
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="title-with-gold-glow title-with-gold-glow--on-dark title-with-gold-glow--wide font-[var(--font-playfair)] text-4xl lg:text-6xl font-semibold text-white tracking-tight"
            >
              Curation d'Expériences
              <span className="block mt-2 italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C973]">
                Exclusives
              </span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/tours" 
              className="group flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-[#D4AF37] transition-colors"
            >
              Voir la collection
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 group-hover:border-[#D4AF37] transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 auto-rows-[280px] md:auto-rows-[320px] gap-4 md:gap-5 grid-flow-dense"
        >
          {experiences.map((exp) => (
            <motion.div 
              variants={cardVariants}
              key={exp.id} 
              className={`group relative overflow-hidden rounded-[24px] cursor-pointer bg-[#0A0A0A] border border-white/5 transition-all duration-700 hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] ${exp.className}`}
            >
              {/* Background Image Setup */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  unoptimized={exp.image.startsWith("http")}
                />
              </div>

              {/* Glassmorphism gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />

              {/* Tag Badge */}
              <div className="absolute top-5 left-5 md:top-6 md:left-6 z-10">
                <span className="px-3.5 py-1.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] bg-black/60 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-md shadow-lg">
                  {exp.tag}
                </span>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 p-5 md:p-6 lg:p-8 flex flex-col justify-end z-10">
                <div className="transform transition-transform duration-500 md:translate-y-6 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 text-white/60 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] mb-2 md:mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {exp.location}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-[var(--font-playfair)] font-medium text-white mb-2 md:mb-3 leading-[1.15] group-hover:text-[#D4AF37] transition-colors duration-500">
                    {exp.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm font-light text-white/50 leading-relaxed md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 max-w-[90%]">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
