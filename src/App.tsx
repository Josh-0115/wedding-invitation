import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Story from './components/Story';
import Events from './components/Events';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-white selection:bg-gold/30 selection:text-urban-dark">
      <Hero />
      <Countdown />
      <Story />
      <Events />
      <Gallery />
      <RSVP />
      <Footer />
    </main>
  );
}
