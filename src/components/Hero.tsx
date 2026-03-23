import { motion } from 'motion/react';
import { Toran, CornerMotif, TempleGopuram, BrassLamp, TempleBell, WoodenPillar, GaneshaIcon } from './Decorations';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-urban-dark">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("./assets/images/main.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Temple Gopuram Silhouettes */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between px-12 pointer-events-none opacity-20 z-10">
        <TempleGopuram className="w-48 h-64 text-temple-gold" />
        <TempleGopuram className="w-48 h-64 text-temple-gold" />
      </div>

      {/* Wooden Pillars */}
      <div className="absolute top-0 left-0 h-full w-12 opacity-10 pointer-events-none z-10 hidden lg:block">
        <WoodenPillar className="h-full w-full text-temple-gold" />
      </div>
      <div className="absolute top-0 right-0 h-full w-12 opacity-10 pointer-events-none z-10 hidden lg:block">
        <WoodenPillar className="h-full w-full text-temple-gold" />
      </div>

      {/* Temple Bells */}
      <div className="absolute top-24 left-1/4 z-20 hidden md:block">
        <div className="w-px h-16 bg-temple-gold/30 mx-auto" />
        <TempleBell className="w-10 h-10 text-temple-gold/60" />
      </div>
      <div className="absolute top-24 right-1/4 z-20 hidden md:block">
        <div className="w-px h-24 bg-temple-gold/30 mx-auto" />
        <TempleBell className="w-12 h-12 text-temple-gold/60" />
      </div>

      {/* Brass Lamps (Diyas) */}
      <div className="absolute bottom-12 left-12 z-20 hidden md:block">
        <BrassLamp className="w-12 h-20 text-temple-gold" />
      </div>
      <div className="absolute bottom-12 right-12 z-20 hidden md:block">
        <BrassLamp className="w-12 h-20 text-temple-gold" />
      </div>

      {/* Hanging Toran (Garlands) */}
      {/* <Toran /> */}

      {/* Corner Motifs */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-8 left-8 w-24 h-24 text-temple-gold/40 z-20"
      >
        <CornerMotif className="w-full h-full" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-8 right-8 w-24 h-24 text-temple-gold/40 z-20 rotate-90"
      >
        <CornerMotif className="w-full h-full" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-8 w-24 h-24 text-temple-gold/40 z-20 -rotate-90"
      >
        <CornerMotif className="w-full h-full" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-8 w-24 h-24 text-temple-gold/40 z-20 rotate-180"
      >
        <CornerMotif className="w-full h-full" />
      </motion.div>

      {/* Traditional Border/Motif */}
      <div className="absolute top-0 left-0 w-full h-16 bg-[url('https://www.transparenttextures.com/patterns/mandala.png')] opacity-20 z-10" />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[url('https://www.transparenttextures.com/patterns/mandala.png')] opacity-20 rotate-180 z-10" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <GaneshaIcon className="w-16 h-16 text-temple-gold/60 mx-auto mb-4" />
          <span className="uppercase tracking-[0.5em] text-sm font-medium mb-6 block text-turmeric drop-shadow-lg">
            The Sacred Union of
          </span>
          <h1 className="text-7xl md:text-9xl font-face italic mb-8 text-white drop-shadow-2xl">
            Kiran <span className="text-4xl md:text-6xl not-italic font-sans font-thin mx-4 text-temple-gold">&</span> Bhargavi
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-linear-to-r from-transparent to-temple-gold" />
            <div className="text-turmeric">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.5 9H21L15.5 13.5L18 21L12 16.5L6 21L8.5 13.5L3 9H9.5L12 2Z" />
              </svg>
            </div>
            <div className="w-16 h-0.5 bg-linear-to-l from-transparent to-temple-gold" />
          </div>
          <p className="text-xl md:text-2xl font-light tracking-[0.2em] text-silk-cream drop-shadow-md">
            APRIL 08, 2026 • Yetti Gottu, PS Peta
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest opacity-60 text-turmeric">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-temple-gold to-transparent" />
      </motion.div>
    </section>
  );
}
