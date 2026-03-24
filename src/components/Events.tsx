import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Calendar, X } from 'lucide-react';
import { BananaTree, LotusFlower, KolamPattern, TempleGopuram, TempleBell, WoodenPillar } from './Decorations';

const events = [
  {
    title: "Muhurtham",
    date: "April 9, 2026",
    time: "1:59 AM onwards",
    location: "Mandapam, PS Peta",
    description: "The sacred Muhurtham followed by the traditional ceremony, where we exchange our vows and tie the knot.",
    image: "./images/wedding.jpg",
    mapUrl: "https://www.google.com/maps?q=17.795417,82.923589&output=embed"
  },
  {
    title: "Kalyana Virundhu",
    date: "April 8, 2026",
    time: "7:00 PM onwards",
    location: "Mandapam, PS Peta",
    description: "A traditional South Indian wedding feast served on banana leaves to celebrate our union.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop",
    mapUrl: "https://www.google.com/maps?q=17.795417,82.923589&output=embed"
  }
];

export default function Events() {
  const [selectedMap, setSelectedMap] = useState<string | null>(null);

  return (
    <section className="py-24 bg-silk-cream px-4 relative overflow-hidden">
      <KolamPattern className="opacity-5" />
      
      {/* Temple Gopuram Silhouettes in Events */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-between px-24 pointer-events-none opacity-5 z-0">
        <TempleGopuram className="w-32 h-48 text-vermillion" />
        <TempleGopuram className="w-32 h-48 text-vermillion" />
      </div>

      {/* Wooden Pillars */}
      <div className="absolute top-0 left-0 h-full w-8 opacity-5 pointer-events-none z-0 hidden lg:block">
        <WoodenPillar className="h-full w-full text-vermillion" />
      </div>
      <div className="absolute top-0 right-0 h-full w-8 opacity-5 pointer-events-none z-0 hidden lg:block">
        <WoodenPillar className="h-full w-full text-vermillion" />
      </div>

      {/* Temple Bells */}
      <div className="absolute top-0 left-1/3 z-0 hidden md:block">
        <div className="w-px h-12 bg-vermillion/20 mx-auto" />
        <TempleBell className="w-8 h-8 text-vermillion/20" />
      </div>
      <div className="absolute top-0 right-1/3 z-0 hidden md:block">
        <div className="w-px h-16 bg-vermillion/20 mx-auto" />
        <TempleBell className="w-10 h-10 text-vermillion/20" />
      </div>

      {/* Banana Trees at the entrance of the section */}
      <div className="absolute top-0 left-0 w-32 h-48 text-deep-green/20 pointer-events-none z-0">
        <BananaTree className="w-full h-full" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-48 text-deep-green/20 pointer-events-none z-0 scale-x-[-1]">
        <BananaTree className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <LotusFlower className="w-12 h-12 text-vermillion/20 mx-auto mb-4" />
          <span className="text-vermillion uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            The Celebration
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-8 text-vermillion">
            Sacred Ceremonies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-temple-gold/10"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif italic mb-6 text-vermillion">{event.title}</h3>
                <div className="space-y-4 text-urban-dark text-sm font-light">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-temple-gold" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-temple-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-temple-gold mt-1" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="mt-6 text-urban-dark/80 leading-relaxed text-sm">
                  {event.description}
                </p>
                <button 
                  onClick={() => setSelectedMap(event.mapUrl)}
                  className="mt-8 w-full py-3 border border-vermillion text-vermillion hover:bg-vermillion hover:text-white transition-colors duration-300 rounded-full text-xs uppercase tracking-widest font-semibold"
                >
                  View Venue
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {selectedMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMap(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedMap(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-vermillion hover:bg-vermillion hover:text-white transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video w-full">
                <iframe
                  src={selectedMap}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Venue Map"
                />
              </div>
              <div className="p-6 text-center bg-silk-cream">
                <p className="text-vermillion font-serif italic text-lg">Navigate to the Celebration</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
