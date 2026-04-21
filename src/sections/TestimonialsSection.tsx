import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';
import { StarRating } from '@/components/StarRating';
import { AnimatedSection } from '@/components/AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: 'Rina',
    role: 'Patient',
    text: "I had my first microneedling session with Dr. Priya and her lovely team, and honestly, they made me feel so comfortable from start to finish. Dr. Priya explained everything so well and made sure I was at ease the whole time. The clinic is spotless and has such a calm, welcoming vibe.\n\nIt's only been two days since my appointment, and my skin is already glowing — my acne scars are visibly fading too! I'm so happy with the results and can't wait to go back for my next session. Highly recommend Dr. Priya and her amazing team!",
    initials: 'R',
    avatarColor: '#4A90D9',
  },
  {
    id: 2,
    name: 'p k',
    role: 'Patient',
    text: 'Reform Medical Aesthetic & Dental provides outstanding service from start to finish. The team is courteous, professional, and genuinely cares about patient comfort and results. The clinic environment is clean and well-organized, and the staff made the entire experience smooth and reassuring. I am very pleased with my experience and would confidently recommend this clinic to anyone seeking professional and reliable care.',
    initials: 'PK',
    avatarColor: '#4A90D9',
  },
  {
    id: 3,
    name: 'Diane McLeod',
    role: 'Patient',
    text: "Thank you Dr Priya Patel ! I have recently had dermal fillers to several areas and I am really pleased with the results ... The brand used was Malia . I wanted to look natural and fresh faced and not over the top .. and Dr Priya achieved this beautifully.. . My face feels firmer , my lips slightly fuller and the lines on my top Lip have definitely improved and are less deep. The clinic itself is lovely and spacious and the decor all modern and trendy with easy parking at the rear. I would highly recommend Dr Priya who put me at my ease and did a lovely job !",
    initials: 'DM',
    avatarColor: '#4A90D9',
  },
  {
    id: 4,
    name: 'Shannon Setchell',
    role: 'Patient',
    text: "I've been having my Botox with Dr. Priya Patel for many years now! She always takes the time to listen to my concerns, explains the procedure in detail, and makes sure I felt comfortable at every stage of my treatment. My results are subtle, natural, and refreshing and I still look like myself minus the lines! Priya's years of experience and knowledge and eye for detail are truly amazing!",
    initials: 'SS',
    avatarColor: '#4A90D9',
  },
  {
    id: 5,
    name: 'Krish Y',
    role: 'Patient',
    text: "This place really stored the confidence I lost many years ago. I travelled all the way from London and it was worth it! My skin feels brand new after getting honest feedback and given treatment that actually works! I'll be coming back and even though I live in London I will gladly move all my dental appointments here in addition. Thank you Priya for giving me my shine again!",
    initials: 'KY',
    avatarColor: '#4A90D9',
  },
  {
    id: 6,
    name: 'Hind Bashir',
    role: 'Patient',
    text: "I went to Reform Aesthetics and Dental for mesopeel and microneedling because I had dull skin, hyperpigmentation, and some acne scars. The team was super nice and made me feel really comfortable throughout the treatments. After a few sessions, I can honestly say my skin looks so much brighter, smoother, and healthier!",
    initials: 'HB',
    avatarColor: '#4A90D9',
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
          <h2
            className="text-3xl sm:text-4xl lg:text-[46px] mt-6 mb-4 text-gray-900"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            What Our Happy Patients Are Saying
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto font-sans">
            We are committed to providing the highest quality patient care, and are incredibly
            fortunate to have a team
          </p>
        </AnimatedSection>

        {/* Cards */}
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
                className="bg-[#F8F6F3] rounded-2xl p-6 flex flex-col"
              >
                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold font-sans"
                    style={{ backgroundColor: testimonial.avatarColor }}
                  >
                    {testimonial.initials.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-400 font-sans">{testimonial.role}</p>
                  </div>
                </div>

                {/* Review text */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4 line-clamp-6 font-sans">
                  {testimonial.text}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <StarRating />
                  <span className="text-xs font-semibold font-sans text-gray-700">5.0 RATING</span>
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
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={nextPage}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
