import { motion } from 'motion/react';
import { KolamPattern, TempleBell, BananaTree, Kalash, BrassLamp, LotusFlower, GaneshaIcon } from './Decorations';

export default function Story() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto bg-silk-cream relative overflow-hidden">
      <KolamPattern className="opacity-10" />
      
      {/* Ganesha Icon for Auspicious Beginnings */}
      <div className="flex justify-center mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-vermillion/40"
        >
          <GaneshaIcon className="w-16 h-16" />
        </motion.div>
      </div>
      
      {/* Swinging Temple Bells */}
      <div className="absolute top-0 left-1/4 z-10 hidden md:block">
        <div className="w-px h-12 bg-temple-gold/30 mx-auto" />
        <TempleBell className="w-8 h-8 text-temple-gold/40" />
      </div>
      <div className="absolute top-0 right-1/4 z-10 hidden md:block">
        <div className="w-px h-20 bg-temple-gold/30 mx-auto" />
        <TempleBell className="w-10 h-10 text-temple-gold/40" />
      </div>

      {/* Auspicious Symbols */}
      <div className="absolute top-12 left-8 opacity-10 pointer-events-none hidden lg:block">
        <BananaTree className="w-24 h-36 text-deep-green" />
      </div>
      <div className="absolute bottom-12 right-8 opacity-10 pointer-events-none hidden lg:block scale-x-[-1]">
        <BananaTree className="w-24 h-36 text-deep-green" />
      </div>
      
      <div className="absolute bottom-24 left-12 opacity-20 pointer-events-none hidden md:block">
        <Kalash className="w-16 h-24" />
      </div>
      
      <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-20 pointer-events-none hidden md:block">
        <BrassLamp className="w-12 h-20 text-temple-gold" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img 
            src="./images/photo.jpeg" 
            alt="Kiran and Bhargavi in South Indian Attire" 
            className="w-full h-150 object-cover rounded-2xl shadow-2xl border-4 border-temple-gold/20"
            referrerPolicy="no-referrer"
          />
          {/* Decorative Lotus on Image */}
          <div className="absolute -bottom-6 -right-6 w-20 h-20 text-vermillion/40 drop-shadow-lg">
            <LotusFlower className="w-full h-full" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-vermillion uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Our Sacred Journey
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-8 text-vermillion">
            A Union of Souls
          </h2>
          <div className="space-y-6 text-urban-dark leading-relaxed text-lg font-light">
            <p>
              Our story is woven with the threads of tradition and the vibrant colors of our heritage. Like the intricate patterns of a Kanjeevaram saree, our lives have come together to create something beautiful and enduring.
            </p>
            <p>
              In the quiet presence of the divine and the warmth of our families, we found a love that feels like home. A love that respects the past while embracing the future.
            </p>
            <p>
              We are honored to have you witness our union as we take our first steps together as one.
            </p>
          </div>
          <div className="flex items-center gap-6 mt-12">
            <motion.div 
              className="h-0.5 bg-temple-gold"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <LotusFlower className="w-6 h-6 text-vermillion/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
