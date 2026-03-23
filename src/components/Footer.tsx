import { motion } from 'motion/react';
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';
import { CornerMotif, FloralDivider, TempleGopuram, LotusFlower, TempleBell, WoodenPillar, FloralString, Marigold, Jasmine } from './Decorations';

export default function Footer() {
  return (
    <footer className="py-24 bg-silk-cream text-urban-dark border-t border-vermillion/10 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/mandala.png')]" />

      {/* Hanging Floral Strings in Footer */}
      <div className="absolute top-0 left-24 z-10 hidden md:block">
        <FloralString length={4} />
      </div>
      <div className="absolute top-0 right-24 z-10 hidden md:block">
        <FloralString length={6} />
      </div>

      {/* Scattered Flowers in Footer */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
        <div className="flex gap-8">
          <Marigold className="w-4 h-4" />
          <Jasmine className="w-4 h-4" />
          <Marigold className="w-4 h-4" color="turmeric" />
        </div>
      </div>

      {/* Temple Gopuram Silhouettes in Footer */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center gap-32 pointer-events-none opacity-10 z-0">
        <TempleGopuram className="w-32 h-48 text-vermillion" />
        <TempleGopuram className="w-32 h-48 text-vermillion" />
      </div>

      {/* Wooden Pillars in Footer */}
      <div className="absolute top-0 left-0 h-full w-6 opacity-5 pointer-events-none z-0 hidden lg:block">
        <WoodenPillar className="h-full w-full text-vermillion" />
      </div>
      <div className="absolute top-0 right-0 h-full w-6 opacity-5 pointer-events-none z-0 hidden lg:block">
        <WoodenPillar className="h-full w-full text-vermillion" />
      </div>

      {/* Temple Bells in Footer */}
      <div className="absolute top-0 left-1/4 z-0 hidden md:block">
        <div className="w-px h-8 bg-vermillion/10 mx-auto" />
        <TempleBell className="w-6 h-6 text-vermillion/10" />
      </div>
      <div className="absolute top-0 right-1/4 z-0 hidden md:block">
        <div className="w-px h-12 bg-vermillion/10 mx-auto" />
        <TempleBell className="w-8 h-8 text-vermillion/10" />
      </div>

      {/* Corner Motifs */}
      <div className="absolute top-4 left-4 w-16 h-16 text-vermillion/10">
        <CornerMotif className="w-full h-full" />
      </div>
      <div className="absolute top-4 right-4 w-16 h-16 text-vermillion/10 rotate-90">
        <CornerMotif className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <LotusFlower className="w-8 h-8 text-vermillion/20 mx-auto mb-6" />
          <h2 className="text-5xl md:text-7xl font-serif italic mb-4 text-vermillion">
            Kiran <span className="text-3xl md:text-5xl not-italic font-sans font-thin mx-4 text-temple-gold">&</span> Bhargavi
          </h2>
          
          <FloralDivider />
          


          <div className="text-[10px] uppercase tracking-[0.4em] opacity-60 font-semibold mb-4 text-vermillion">
            With Love <Heart className="w-3 h-3 inline-block mx-1 text-vermillion fill-current" /> & Blessings
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">
            © 2026 Kiran & Bhargavi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
