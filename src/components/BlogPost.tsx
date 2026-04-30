import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
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

export function BlogPost({ title, date, heroImage, heroImageAlt, heroAspectRatio = '16/9', children }: BlogPostProps) {
  return (
    <>
      {/* Hero Banner */}
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
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-[28px] sm:text-[36px] lg:text-[50px] text-white leading-tight"
          >
            {title}
          </motion.h1>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-16">

            {/* Left: image + article content */}
            <AnimatedSection className="min-w-0 flex-1">
              {/* Featured image */}
              <div className="rounded-2xl overflow-hidden mb-8 max-h-[420px]" style={{ aspectRatio: heroAspectRatio }}>
                <img
                  src={heroImage}
                  alt={heroImageAlt ?? title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Article body */}
              <div
                className="text-[#363636] text-[16px] leading-[1.85]"
                style={{
                  // paragraph spacing
                  '--p-gap': '1.4em',
                } as React.CSSProperties}
              >
                <style>{`
                  .blog-body p { margin-bottom: 1.4em; }
                  .blog-body h2 { font-family: 'Times New Roman', Times, serif; font-size: 1.5rem; font-weight: 600; color: #000; margin-top: 2.4em; margin-bottom: 0.75em; line-height: 1.3; }
                  .blog-body h3 { font-family: 'Times New Roman', Times, serif; font-size: 1.2rem; font-weight: 600; color: #000; margin-top: 2em; margin-bottom: 0.6em; }
                  .blog-body ul { list-style: disc; padding-left: 1.5em; margin-bottom: 1.4em; }
                  .blog-body ol { list-style: decimal; padding-left: 1.5em; margin-bottom: 1.4em; }
                  .blog-body li { margin-bottom: 0.5em; line-height: 1.75; }
                  .blog-body strong { color: #000; font-weight: 600; }
                  .blog-body img { border-radius: 0.75rem; margin-top: 1.6em; margin-bottom: 1.6em; }
                `}</style>
                <div className="blog-body">{children}</div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#363636] hover:text-black transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
              </div>
            </AnimatedSection>

            {/* Right: sticky sidebar */}
            <div className="lg:w-[320px] lg:flex-shrink-0">
              <div className="lg:sticky lg:top-28" style={{ height: 'fit-content' }}>
              <AnimatedSection>
                <div className="bg-[#2d2d2d] rounded-2xl p-6 sm:p-8 text-white">
                  <h3 className="font-serif text-3xl sm:text-4xl leading-tight mb-4 sm:mb-5">
                    Want to talk?
                  </h3>
                  <p className="text-white/75 text-base leading-relaxed mb-8">
                    Speak to one of our experts for support on what's best for you.
                  </p>
                  <a
                    href="https://pearlportal.net/Portal/rad/OnlineBooking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-[#efeae7] transition-colors font-sans"
                  >
                    ENQUIRE NOW <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </AnimatedSection>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
