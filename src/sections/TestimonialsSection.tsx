import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { StarRating } from '@/components/StarRating';
import { AnimatedSection } from '@/components/AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: 'Diane McLeod',
    role: 'Patient',
    text: "Thank you Dr Priya Patel ! I have recently had dermal fillers to several areas and I am really pleased with the results... The brand used was Malia . I wanted to look natural and fresh faced and not over the top .. and Dr Priya achieved this beautifully.. . My face feels firmer , my lips slightly fuller and the lines on my top Lip have definitely improved and are less deep. The clinic itself is lovely and spacious and the decor all modern and trendy with easy parking at the rear. I would highly recommend Dr Priya who put me at my ease and did a lovely job !",
  },
  {
    id: 2,
    name: 'Shannon Setchell',
    role: 'Patient',
    text: "I've been having my Botox with Dr. Priya Patel for many years now! She always takes the time to listen to my concerns, explains the procedure in detail, and makes sure I felt comfortable at every stage of my treatment. My results are subtle, natural, and refreshing and I still look like myself minus the lines! Priya's years of experience and knowledge and eye for detail are truly amazing!",
  },
  {
    id: 3,
    name: 'Krish Y',
    role: 'Patient',
    text: "This place really stored the confidence I lost many years ago. I travelled all the way from London and it was worth it! My skin feels brand new after getting honest feedback and given treatment that actually works! I'll be coming back and even though I live in London I will gladly move all my dental appointments here in addition. Thank you Priya for giving me my shine again!",
  },
  {
    id: 4,
    name: 'Hind Bashir',
    role: 'Patient',
    text: "I went to Reform Aesthetics and Dental for mesopeel and microneedling because I had dull skin, hyperpigmentation, and some acne scars. The team was super nice and made me feel really comfortable throughout the treatments. The clinic itself is spotless, modern, and very well-maintained, which made the whole experience even better. After a few sessions, I can honestly say my skin looks so much brighter, smoother, and healthier!",
  },
  {
    id: 5,
    name: 'Preet Kaur',
    role: 'Patient',
    text: "Just wanted to share how brilliant my recent visit to Reform Clinic was. Had a skin peel and my skin feels so much smoother and softer now. Today, I had a micro-needling session and honestly, I can't stop looking at my fresh, smooth skin. Huge thanks to Dr Priya, you truly are a star!",
  },
  {
    id: 6,
    name: 'Eesha Ranee',
    role: 'Patient',
    text: "I've had the most amazing experience at Reform Aesthetics and Dental. The team is incredibly professional, knowledgeable, and genuinely caring. From consultation to treatment, everything was explained clearly, and I felt completely at ease. My skin has never looked better — glowing, smooth, and rejuvenated! The space is spotless and beautifully designed. Highly recommend!",
  },
  {
    id: 7,
    name: 'P and A',
    role: 'Patient',
    text: "Amazing results from skin booster. Currently Glowing! Thanks to Dr Priya she was gentle, professional and only did what she felt would suit my facial compositions compared to my old clinic who would over fill and charge. Thank you for supplementing my natural beauty and wanting a natural look!",
  },
];

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section id="testimonial" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <SectionBadge text="Testimonials" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-6 mb-4">
            What Our Happy Patients Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the highest quality patient care, and are incredibly
            fortunate to have a team
          </p>
        </AnimatedSection>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {currentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-2xl p-6 flex flex-col"
              >
                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4 line-clamp-6">
                  {testimonial.text}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <StarRating />
                  <span className="text-sm font-medium">5.0 RATING</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={prevPage}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextPage}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
