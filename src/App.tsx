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

// Treatment pages
import AntiWrinkle from '@/pages/treatments/AntiWrinkle';
import DermalFillers from '@/pages/treatments/DermalFillers';
import CollagenStimulating from '@/pages/treatments/CollagenStimulating';
import Polynucleotides from '@/pages/treatments/Polynucleotides';
import SkinPeels from '@/pages/treatments/SkinPeels';
import Carboxytherapy from '@/pages/treatments/Carboxytherapy';
import SkinBoosters from '@/pages/treatments/SkinBoosters';
import SignatureFacials from '@/pages/treatments/SignatureFacials';
import PregnancyGlowFacial from '@/pages/treatments/PregnancyGlowFacial';
import VeinRemoval from '@/pages/treatments/VeinRemoval';
import LymphaticDrainage from '@/pages/treatments/LymphaticDrainage';
import WeightLoss from '@/pages/treatments/WeightLoss';
import VitaminInjections from '@/pages/treatments/VitaminInjections';
import ThreadLifts from '@/pages/treatments/ThreadLifts';
import LiquidFacelift from '@/pages/treatments/LiquidFacelift';
import SkinAnalysis from '@/pages/treatments/SkinAnalysis';
import MedicalSkincare from '@/pages/treatments/MedicalSkincare';
import Microneedling from '@/pages/treatments/Microneedling';
import PRP from '@/pages/treatments/PRP';
import HairLoss from '@/pages/treatments/HairLoss';
import Exosomes from '@/pages/treatments/Exosomes';
import LipFillers from '@/pages/treatments/LipFillers';
import NoseFiller from '@/pages/treatments/NoseFiller';
import ChinfaceFiller from '@/pages/treatments/ChinfaceFiller';
import Profhilo from '@/pages/treatments/Profhilo';
import JawlineContouring from '@/pages/treatments/JawlineContouring';
import UnderEyeFiller from '@/pages/treatments/UnderEyeFiller';
import NeckRejuvenation from '@/pages/treatments/NeckRejuvenation';
import FatDissolving from '@/pages/treatments/FatDissolving';
import FillerDissolving from '@/pages/treatments/FillerDissolving';
import GummySmile from '@/pages/treatments/GummySmile';
import Hyperhidrosis from '@/pages/treatments/Hyperhidrosis';
import BruxismTMJ from '@/pages/treatments/BruxismTMJ';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white overflow-x-hidden"
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

          {/* Skin */}
          <Route path="/treatments/3d-skin-analysis" element={<SkinAnalysis />} />
          <Route path="/treatments/signature-pregnancy-glow-facial" element={<PregnancyGlowFacial />} />
          <Route path="/treatments/signature-facials" element={<SignatureFacials />} />
          <Route path="/treatments/skin-peels" element={<SkinPeels />} />
          <Route path="/treatments/medical-grade-skincare" element={<MedicalSkincare />} />
          <Route path="/treatments/medical-microneedling" element={<Microneedling />} />
          <Route path="/treatments/carboxytherapy" element={<Carboxytherapy />} />

          {/* Face & Neck Rejuvenation */}
          <Route path="/treatments/anti-wrinkle" element={<AntiWrinkle />} />
          <Route path="/treatments/dermal-fillers" element={<DermalFillers />} />
          <Route path="/treatments/skin-boosters" element={<SkinBoosters />} />
          <Route path="/treatments/polynucleotides" element={<Polynucleotides />} />
          <Route path="/treatments/thread-lifts" element={<ThreadLifts />} />
          <Route path="/treatments/liquid-facelift" element={<LiquidFacelift />} />
          <Route path="/treatments/collagen-stimulating" element={<CollagenStimulating />} />
          <Route path="/treatments/neck-rejuvenation" element={<NeckRejuvenation />} />

          {/* Injectables */}
          <Route path="/treatments/lip-fillers" element={<LipFillers />} />
          <Route path="/treatments/nose-filler" element={<NoseFiller />} />
          <Route path="/treatments/chin-face-filler" element={<ChinfaceFiller />} />
          <Route path="/treatments/jawline-contouring" element={<JawlineContouring />} />
          <Route path="/treatments/under-eye-filler" element={<UnderEyeFiller />} />
          <Route path="/treatments/profhilo" element={<Profhilo />} />
          <Route path="/treatments/fat-dissolving" element={<FatDissolving />} />
          <Route path="/treatments/filler-dissolving" element={<FillerDissolving />} />

          {/* Advanced Aesthetic Treatments */}
          <Route path="/treatments/gummy-smile" element={<GummySmile />} />
          <Route path="/treatments/hyperhidrosis" element={<Hyperhidrosis />} />
          <Route path="/treatments/bruxism-tmj" element={<BruxismTMJ />} />
          <Route path="/treatments/vein-removal" element={<VeinRemoval />} />

          {/* Hair Loss */}
          <Route path="/treatments/hair-loss" element={<HairLoss />} />
          <Route path="/treatments/prp" element={<PRP />} />
          <Route path="/treatments/exosomes" element={<Exosomes />} />
          <Route path="/treatments/vitamin-injections" element={<VitaminInjections />} />

          {/* Wellness */}
          <Route path="/treatments/weight-loss" element={<WeightLoss />} />
          <Route path="/treatments/lymphatic-drainage" element={<LymphaticDrainage />} />
        </Routes>
      </main>
      <FooterSection />
    </motion.div>
  );
}

export default App;
