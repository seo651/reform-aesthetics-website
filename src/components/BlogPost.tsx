import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { AnimatedSection } from '@/components/AnimatedSection';

interface BlogPostProps {
  title: string;
  date: string;
  heroImage: string;
  heroImageAlt?: string;
  heroAspectRatio?: string;
  children: React.ReactNode;
}

export function BlogPost({ title, date, heroImage, heroImageAlt, children }: BlogPostProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[44vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={heroImageAlt ?? title} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Breadcrumb with decorative lines */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="hidden sm:block flex-1 max-w-[80px] h-px bg-[#c5b1a1]/60" />
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/25 text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5b1a1]" />
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="text-white/40">/</span>
              <Link to="/blog" className="hover:text-white transition-colors">BLOG</Link>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5b1a1]" />
            </span>
            <span className="hidden sm:block flex-1 max-w-[80px] h-px bg-[#c5b1a1]/60" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight"
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
