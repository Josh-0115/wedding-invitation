import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { useState } from 'react';
import { KolamPattern, BrassLamp } from './Decorations';

type RSVPFormData = {
  name: string;
  email: string;
  guests: number;
  attending: string;
  message: string;
};

export default function RSVP() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<RSVPFormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: RSVPFormData) => {
    console.log('RSVP Data:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-urban-dark text-silk-cream px-4 relative overflow-hidden">
      <KolamPattern className="opacity-10" />
      
      {/* Brass Lamps on the sides */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden lg:block">
        <BrassLamp className="w-10 h-16 text-turmeric/30" />
      </div>
      <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:block">
        <BrassLamp className="w-10 h-16 text-turmeric/30" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-turmeric uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            RSVP
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-8 text-turmeric">
            Will You Join Us?
          </h2>
          <p className="text-silk-cream/70 mb-12 text-lg font-light">
            Please let us know if you can attend by November 1, 2026.
          </p>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-turmeric/10 border border-turmeric p-12 rounded-3xl"
            >
              <h3 className="text-3xl font-serif italic mb-4 text-turmeric">Namaste!</h3>
              <p className="text-lg font-light">Your response has been received. We look forward to your presence!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="text-left space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-2 opacity-60 text-turmeric">Full Name</label>
                  <input 
                    {...register('name', { required: true })}
                    className="w-full bg-transparent border-b border-silk-cream/20 py-3 focus:border-turmeric outline-none transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                  {errors.name && <span className="text-red-400 text-[10px] mt-1">Required</span>}
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-2 opacity-60 text-turmeric">Email Address</label>
                  <input 
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-transparent border-b border-silk-cream/20 py-3 focus:border-turmeric outline-none transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                  {errors.email && <span className="text-red-400 text-[10px] mt-1">Valid email required</span>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-2 opacity-60 text-turmeric">Number of Guests</label>
                  <select 
                    {...register('guests', { required: true })}
                    className="w-full bg-transparent border-b border-silk-cream/20 py-3 focus:border-turmeric outline-none transition-colors duration-300 appearance-none"
                  >
                    <option value="1" className="bg-urban-dark">1 Guest</option>
                    <option value="2" className="bg-urban-dark">2 Guests</option>
                    <option value="3" className="bg-urban-dark">3 Guests</option>
                    <option value="4" className="bg-urban-dark">4 Guests</option>
                    <option value="5" className="bg-urban-dark">5 Guests</option>
                    <option value="6" className="bg-urban-dark">6 Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-2 opacity-60 text-turmeric">Attending</label>
                  <div className="flex gap-8 py-3">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" {...register('attending')} value="yes" defaultChecked className="hidden peer" />
                      <div className="w-4 h-4 border border-silk-cream/20 rounded-full peer-checked:bg-turmeric peer-checked:border-turmeric transition-all duration-300" />
                      <span className="text-sm font-light">Yes, I'll be there</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" {...register('attending')} value="no" className="hidden peer" />
                      <div className="w-4 h-4 border border-silk-cream/20 rounded-full peer-checked:bg-turmeric peer-checked:border-turmeric transition-all duration-300" />
                      <span className="text-sm font-light">Sorry, I can't make it</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2 opacity-60 text-turmeric">Message for the Couple</label>
                <textarea 
                  {...register('message')}
                  rows={4}
                  className="w-full bg-transparent border-b border-silk-cream/20 py-3 focus:border-turmeric outline-none transition-colors duration-300 resize-none"
                  placeholder="Share your blessings..."
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-vermillion text-silk-cream hover:bg-turmeric hover:text-urban-dark transition-all duration-500 rounded-full text-xs uppercase tracking-[0.3em] font-bold shadow-xl"
              >
                Send Response
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
