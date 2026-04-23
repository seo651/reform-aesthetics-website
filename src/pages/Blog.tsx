import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Link } from 'react-router';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection } from '@/components/AnimatedSection';

const posts = [
  {
    title: 'Fake Botox Warning. Why Choosing A Medically-Led Clinic Matters',
    excerpt: 'With reports of counterfeit botulinum toxin products causing serious harm, we explore why choosing a regulated, medically-led clinic is essential for your safety.',
    date: 'April 23, 2026',
    image: '/images/service-anti-wrinkle.jpg',
    href: '/blog/fake-botox-warning',
  },
  {
    title: 'Aesthetic Medicine In 2026: The Rise Of Regenerative Beauty And The New Era Of Intentional Aesthetics',
    excerpt: 'The world of aesthetic medicine is shifting. Explore how regenerative treatments and a more intentional approach to beauty are redefining the industry in 2026.',
    date: 'April 23, 2026',
    image: '/images/polynucleotides-hero.png',
    href: '/blog/aesthetic-medicine-2026',
  },
  {
    title: 'PRP For Hair Restoration: Why Leading Hair-Transplant Surgeons Recommend It As An Essential Adjunct To Surgery',
    excerpt: 'PRP therapy is increasingly recommended alongside hair transplant surgery. Find out why leading surgeons consider it an essential part of long-term hair restoration.',
    date: 'April 23, 2026',
    image: '/images/prp-hair-hero.jpg',
    href: '/blog/prp-hair-restoration',
  },
  {
    title: 'Are You A Teeth Grinder?',
    excerpt: 'Bruxism affects more people than you might think. Discover the signs of teeth grinding, its impact on your health, and how aesthetic treatments can help relieve symptoms.',
    date: 'April 23, 2026',
    image: '/images/bruxism-jaw-profile.jpg',
    href: '/blog/are-you-a-teeth-grinder',
  },
  {
    title: 'What Treatments Are Available In Clinic For Hair Thinning And Hair Loss?',
    excerpt: 'Hair thinning and loss can affect confidence at any age. Discover the range of clinically proven treatments available at Reform Aesthetics and Dental to support hair regrowth.',
    date: 'April 23, 2026',
    image: '/images/prf-hero.png',
    href: '/blog/hair-thinning-treatments',
  },
  {
    title: 'What Are Polynucleotides and How Can They Help Your Skin?',
    excerpt: 'Polynucleotides are one of the most exciting innovations in aesthetic medicine. Learn how this regenerative treatment can improve skin quality from within.',
    date: 'April 15, 2026',
    image: '/images/exosomes-benefits.png',
  },
  {
    title: 'The Benefits of Regular Skin Peels for Glowing Skin',
    excerpt: 'Chemical peels are a powerful way to resurface and renew your complexion. Discover why regular treatments can transform your skin health.',
    date: 'April 8, 2026',
    image: '/images/skin-peels-hero.png',
  },
  {
    title: 'Anti-Wrinkle Injections: Everything You Need to Know',
    excerpt: 'Considering anti-wrinkle treatments? Here is everything you need to know about the procedure, results, and what to expect at your appointment.',
    date: 'March 28, 2026',
    image: '/images/cta-bg.jpg',
  },
  {
    title: 'How to Maintain Results After Your Aesthetic Treatment',
    excerpt: 'Getting great results is just the beginning. Learn our top aftercare tips to help you maintain your glow for as long as possible.',
    date: 'March 15, 2026',
    image: '/images/gallery-1.jpg',
  },
  {
    title: 'Understanding Dermal Fillers: Restoring Volume Naturally',
    excerpt: 'Dermal fillers can subtly restore lost volume and enhance facial contours. Find out how our practitioners achieve natural-looking results.',
    date: 'March 5, 2026',
    image: '/images/dermal-fillers-hero.png',
  },
  {
    title: 'Why Skin Health Matters More Than Skin Perfection',
    excerpt: 'At Reform Aesthetics and Dental, we believe in nurturing healthy skin rather than chasing perfection. Read our philosophy on sustainable skin care.',
    date: 'February 20, 2026',
    image: '/images/gallery-2.jpg',
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery-3.jpg" alt="Blog" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wider text-white/90 uppercase mb-6">
              <span>HOME</span><span className="text-white/40">&gt;</span><span>BLOG</span>
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4"
          >
            Welcome to the Reform Aesthetics Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto mb-5 font-serif italic"
          >
            Your trusted guide to the ever-evolving world of facial aesthetics.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/70 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed"
          >
            Our articles go far beyond explaining treatments. We break down how different aesthetic approaches work, share expert insights on maintaining healthy, radiant skin, and keep you updated on the latest innovations shaping the industry. Whether you're exploring a specific treatment or simply want to understand how to achieve a naturally refreshed look, our blog empowers you with clear, reliable knowledge to make confident, informed decisions.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <SectionBadge text="Latest Posts" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-6">Skin Health Insights</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => {
              const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                post.href ? (
                  <Link to={post.href} className="block">{children}</Link>
                ) : (
                  <div>{children}</div>
                );
              return (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
                >
                  <CardWrapper>
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-[#363636] text-xs mb-3">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <h3 className="font-serif text-xl mb-3 group-hover:text-[#363636] transition-colors">{post.title}</h3>
                      <p className="text-[#363636] text-sm leading-relaxed mb-4">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:underline">
                        READ MORE <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </CardWrapper>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
