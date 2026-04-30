import { BlogPost } from '@/components/BlogPost';

export default function TeethGrinder() {
  return (
    <BlogPost
      title="Are You a Teeth Grinder?"
      date="April 23, 2026"
      heroImage="/images/blog-teeth-grinder.png"
      heroAspectRatio="16/9"
      heroImageAlt="Jaw grinding bruxism"
    >
      <p>
        Bruxism is a medical term used for excessive clenching of your masseter muscles and grinding of your teeth. Excessive clenching has led to muscular pain and hypertrophy, in addition to migraines and premature loss of teeth surfaces. By injecting toxin into the muscle responsible for clenching, this treatment can treat Bruxism by relaxing the hypertense masseter muscles.
      </p>

      <h2>Signs That You Could Be a Grinder</h2>
      <ul>
        <li>Morning jaw tension or soreness</li>
        <li>Frequent headaches and tightness in neck and temples</li>
        <li>A clicking or popping noise during jaw opening and closing</li>
        <li>Chipped teeth</li>
        <li>Ear discomfort</li>
      </ul>
    </BlogPost>
  );
}
