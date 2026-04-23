import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router';
import { AnimatedSection } from '@/components/AnimatedSection';

interface BlogPostProps {
  title: string;
  date: string;
  heroImage: string;
  heroImageAlt?: string;
  children: React.ReactNode;
}

export function BlogPost({ title, date, heroImage, heroImageAlt, children }: BlogPostProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden" style={{ aspectRatio: '5/4', maxHeight: '70vh' }}>
        <div className="absolute inset-0">
          <img src={heroImage} alt={heroImageAlt ?? title} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wider text-white/90 uppercase mb-6">
              <span>HOME</span><span className="text-white/40">/</span><span><Link to="/blog" className="hover:underline">BLOG</Link></span>
            </span>
          </motion.div>
          <motion.div className="flex items-center gap-2 text-white/60 text-xs mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Calendar className="w-3 h-3" />{date}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight"
          >
            {title}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none text-[#363636] prose-headings:font-serif prose-headings:text-black prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-li:leading-relaxed">
              {children}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-12 pt-8 border-t border-gray-100">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#363636] hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
