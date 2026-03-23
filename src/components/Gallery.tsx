import { motion } from 'motion/react';
import { KolamPattern, LotusFlower, FloralString, Marigold, Jasmine, BananaTree, Kalash, BrassLamp } from './Decorations';

const images = [
  "./assets/images/wedding.jpg",
  "./assets/images/wedding-ritual-putting-ring-finger-india_8353-10048.jpg",
  "./assets/images/ritual-with-coconut-leaves-traditional-hindu-wedding-ceremony_8353-8909.jpg",
  "./assets/images/indian-bride-s-parents-hold-bowl-with-coconut-her-hands_8353-740.jpg",
  "./assets/images/south-indian-wedding-featuring-happy-bride-groom_1177187-121540.jpg",
  "./assets/images/amazing-look-traditional-ritual-with-fire_8353-10619.jpg",
];

export default function Gallery() {
  return (
    <section className="py-24 px-4 bg-silk-cream relative overflow-hidden">
      <KolamPattern className="opacity-10" />
      
      {/* Hanging Floral Strings */}
      <div className="absolute top-0 left-12 z-10 hidden md:block">
        <FloralString length={6} />
      </div>
      <div className="absolute top-0 right-12 z-10 hidden md:block">
        <FloralString length={8} />
      </div>
      <div className="absolute top-0 left-1/3 z-10 hidden lg:block">
        <FloralString length={4} />
      </div>
      <div className="absolute top-0 right-1/3 z-10 hidden lg:block">
        <FloralString length={5} />
      </div>

      {/* Auspicious Symbols in Gallery */}
      <div className="absolute top-1/4 left-4 opacity-10 pointer-events-none hidden xl:block">
        <BananaTree className="w-32 h-48 text-deep-green" />
      </div>
      <div className="absolute top-1/4 right-4 opacity-10 pointer-events-none hidden xl:block scale-x-[-1]">
        <BananaTree className="w-32 h-48 text-deep-green" />
      </div>
      
      <div className="absolute bottom-12 left-12 opacity-20 pointer-events-none hidden md:block">
        <Kalash className="w-12 h-20" />
      </div>
      <div className="absolute bottom-12 right-12 opacity-20 pointer-events-none hidden md:block">
        <BrassLamp className="w-10 h-16 text-temple-gold" />
      </div>

      {/* Scattered Flowers */}
      <div className="absolute top-24 left-1/4 opacity-20 pointer-events-none">
        <Marigold className="w-6 h-6" color="turmeric" />
      </div>
      <div className="absolute bottom-24 right-1/4 opacity-20 pointer-events-none">
        <Jasmine className="w-5 h-5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <LotusFlower className="w-12 h-12 text-vermillion/20 mx-auto mb-4" />
          <span className="text-vermillion uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Our Gallery
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-8 text-vermillion">
            Sacred Moments
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group relative"
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Subtle Lotus Overlay on Hover */}
              <div className="absolute inset-0 bg-vermillion/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <LotusFlower className="w-12 h-12 text-white/40" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
