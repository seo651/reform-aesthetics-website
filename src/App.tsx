import { Routes, Route } from 'react-router';
import { motion } from 'framer-motion';
import { TopHeader } from '@/sections/TopHeader';
import { FooterSection } from '@/sections/FooterSection';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Treatments from '@/pages/Treatments';
import Doctors from '@/pages/Doctors';
import Pricing from '@/pages/Pricing';
import GalleryPage from '@/pages/Gallery';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white"
    >
      <TopHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <FooterSection />
    </motion.div>
  );
}

export default App;
