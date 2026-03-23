import { motion } from 'motion/react';

export const Toran = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-around pointer-events-none z-20 overflow-hidden h-32">
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5 + i * 0.05, duration: 1, type: "spring" }}
          className="flex flex-col items-center"
        >
          {/* String */}
          <div className="w-px h-6 bg-turmeric/40" />
          {/* Marigold Flower (Orange) */}
          <div className="w-5 h-5 rounded-full bg-vermillion shadow-sm border border-vermillion/20" />
          {/* Marigold Flower (Yellow) */}
          <div className="w-6 h-6 rounded-full bg-turmeric shadow-md border border-turmeric/20 -mt-1" />
          {/* Mango Leaf */}
          <div 
            className="w-4 h-12 bg-[#2D5A27] rounded-t-full rounded-b-[40%] -mt-1 origin-top shadow-sm"
            style={{ transform: `rotate(${i % 2 === 0 ? '8deg' : '-8deg'})` }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export const KolamPattern = ({ className = "opacity-5" }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none ${className} bg-[url('https://www.transparenttextures.com/patterns/mandala.png')] bg-repeat`} />
);

export const TempleGopuram = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 120" className={className} fill="currentColor">
    <path d="M50,0 L70,20 L70,40 L85,40 L85,60 L95,60 L95,120 L5,120 L5,60 L15,60 L15,40 L30,40 L30,20 Z" />
    <rect x="45" y="100" width="10" height="20" fill="rgba(0,0,0,0.2)" />
    <line x1="30" y1="40" x2="70" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <line x1="15" y1="60" x2="85" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
  </svg>
);

export const TempleBell = ({ className }: { className?: string }) => (
  <motion.div 
    animate={{ rotate: [0, -5, 5, 0] }} 
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    className={className}
  >
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a2 2 0 0 0-2 2v1.1c-3.4.5-6 3.4-6 6.9v5l-2 2v1h16v-1l-2-2v-5c0-3.5-2.6-6.4-6-6.9V4a2 2 0 0 0-2-2zm0 19a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2z" />
    </svg>
  </motion.div>
);

export const BrassLamp = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 40 60" fill="currentColor">
      <path d="M20,50 L10,60 L30,60 Z" /> {/* Base */}
      <rect x="18" y="30" width="4" height="20" /> {/* Stem */}
      <path d="M5,30 Q20,45 35,30 Q20,35 5,30" /> {/* Oil Bowl */}
      <motion.path 
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        d="M20,10 Q25,25 20,30 Q15,25 20,10" 
        fill="#FFD700" 
      /> {/* Flame */}
    </svg>
  </div>
);

export const BananaTree = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 150" className={className} fill="currentColor">
    <rect x="45" y="80" width="10" height="70" /> {/* Trunk */}
    <path d="M50,80 Q80,40 90,80 Q80,90 50,80" /> {/* Leaves */}
    <path d="M50,80 Q20,40 10,80 Q20,90 50,80" />
    <path d="M50,60 Q90,20 100,60 Q90,70 50,60" />
    <path d="M50,60 Q10,20 0,60 Q10,70 50,60" />
    <path d="M50,40 Q70,0 80,40 Q70,50 50,40" />
    <path d="M50,40 Q30,0 20,40 Q30,50 50,40" />
  </svg>
);

export const LotusFlower = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12,22C12,22 16,18 16,15C16,12 12,10 12,10C12,10 8,12 8,15C8,18 12,22 12,22Z" />
    <path d="M12,22C12,22 19,19 19,14C19,9 12,8 12,8C12,8 5,9 5,14C5,19 12,22 12,22Z" opacity="0.7" />
    <path d="M12,22C12,22 22,16 22,11C22,6 12,5 12,5C12,5 2,6 2,11C2,16 12,22 12,22Z" opacity="0.4" />
  </svg>
);

export const Marigold = ({ className, color = "vermillion" }: { className?: string, color?: "vermillion" | "turmeric" }) => (
  <div className={`relative ${className}`}>
    <div className={`w-full h-full rounded-full ${color === "vermillion" ? "bg-vermillion" : "bg-turmeric"} shadow-sm border border-black/5`} />
    <div className="absolute inset-1 rounded-full border border-white/20 border-dashed" />
    <div className="absolute inset-2 rounded-full bg-black/5" />
  </div>
);

export const Jasmine = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Five petals */}
    <div className="absolute inset-0 flex items-center justify-center">
      {[0, 72, 144, 216, 288].map((angle) => (
        <div
          key={angle}
          className="absolute w-1/2 h-full bg-silk-cream rounded-full origin-bottom opacity-90"
          style={{ transform: `rotate(${angle}deg) translateY(-25%)` }}
        />
      ))}
    </div>
    <div className="absolute inset-[40%] rounded-full bg-turmeric/40" />
  </div>
);

export const FloralString = ({ className, length = 5 }: { className?: string, length?: number }) => (
  <div className={`flex flex-col items-center gap-1 ${className}`}>
    <div className="w-px h-4 bg-turmeric/20" />
    {[...Array(length)].map((_, i) => (
      <div key={i} className="flex flex-col items-center gap-1">
        {i % 2 === 0 ? (
          <Marigold className="w-4 h-4" color={i % 4 === 0 ? "vermillion" : "turmeric"} />
        ) : (
          <Jasmine className="w-3 h-3" />
        )}
        <div className="w-px h-2 bg-turmeric/10" />
      </div>
    ))}
  </div>
);

export const WoodenPillar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 200" className={className} fill="currentColor">
    <rect x="10" y="20" width="20" height="160" /> {/* Main Pillar */}
    <rect x="5" y="10" width="30" height="10" /> {/* Capital Top */}
    <rect x="0" y="0" width="40" height="10" /> {/* Capital Topmost */}
    <rect x="5" y="180" width="30" height="10" /> {/* Base Bottom */}
    <rect x="0" y="190" width="40" height="10" /> {/* Base Bottommost */}
    {/* Carvings */}
    <circle cx="20" cy="50" r="4" fill="rgba(0,0,0,0.2)" />
    <circle cx="20" cy="100" r="4" fill="rgba(0,0,0,0.2)" />
    <circle cx="20" cy="150" r="4" fill="rgba(0,0,0,0.2)" />
    <path d="M10,40 L30,40 M10,60 L30,60 M10,90 L30,90 M10,110 L30,110 M10,140 L30,140 M10,160 L30,160" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
  </svg>
);

export const Coconut = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="currentColor">
    <circle cx="20" cy="20" r="15" fill="#5D4037" /> {/* Shell */}
    <path d="M15,10 Q20,5 25,10" stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none" /> {/* Fibers */}
    <path d="M15,15 Q20,10 25,15" stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none" />
    <circle cx="15" cy="15" r="2" fill="rgba(0,0,0,0.4)" /> {/* Eyes */}
    <circle cx="20" cy="12" r="2" fill="rgba(0,0,0,0.4)" />
    <circle cx="25" cy="15" r="2" fill="rgba(0,0,0,0.4)" />
  </svg>
);

export const Kalash = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 60 80" fill="currentColor">
      {/* Copper Pot */}
      <path d="M10,60 Q10,80 30,80 Q50,80 50,60 Q50,40 30,40 Q10,40 10,60" fill="#B87333" />
      <rect x="20" y="35" width="20" height="5" fill="#B87333" />
      {/* Mango Leaves */}
      <path d="M30,40 L15,20 Q30,10 45,20 Z" fill="#2D5A27" />
      <path d="M30,40 L5,30 Q15,15 30,40 Z" fill="#2D5A27" opacity="0.8" />
      <path d="M30,40 L55,30 Q45,15 30,40 Z" fill="#2D5A27" opacity="0.8" />
      {/* Coconut */}
      <circle cx="30" cy="20" r="12" fill="#5D4037" />
      <path d="M25,15 Q30,10 35,15" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />
    </svg>
  </div>
);

export const GaneshaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Elegant, minimalist Ganesha silhouette */}
    <path d="M50,10 Q65,10 70,25 Q75,40 60,50 Q75,60 70,80 Q65,95 50,95 Q35,95 30,80 Q25,60 40,50 Q25,40 30,25 Q35,10 50,10 Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M50,30 Q55,30 55,35 Q55,40 50,40 Q45,40 45,35 Q45,30 50,30" /> {/* Tilak */}
    <path d="M40,60 Q50,75 60,60" fill="none" stroke="currentColor" strokeWidth="2" /> {/* Trunk curve */}
    <path d="M35,35 Q25,35 20,50 Q25,65 35,65" fill="none" stroke="currentColor" strokeWidth="1.5" /> {/* Left Ear */}
    <path d="M65,35 Q75,35 80,50 Q75,65 65,65" fill="none" stroke="currentColor" strokeWidth="1.5" /> {/* Right Ear */}
  </svg>
);

export const CornerMotif = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M0,0 L100,0 L100,10 L10,10 L10,100 L0,100 Z" />
    <circle cx="20" cy="20" r="5" />
    <circle cx="40" cy="15" r="3" />
    <circle cx="15" cy="40" r="3" />
    <path d="M20,20 Q50,20 50,50 Q20,50 20,20" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="50" r="2" />
  </svg>
);

export const FloralDivider = () => (
  <div className="flex items-center justify-center gap-4 my-8">
    <div className="h-px w-12 bg-temple-gold/30" />
    <LotusFlower className="w-6 h-6 text-turmeric" />
    <div className="h-px w-12 bg-temple-gold/30" />
  </div>
);
