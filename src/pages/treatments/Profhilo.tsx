import { TreatmentPage } from '@/components/TreatmentPage';

export default function Profhilo() {
  return (
    <TreatmentPage
      breadcrumb="PROFHILO"
      heroTitle="Lift, Tighten & Hydrate with Profhilo"
      heroSubtext="At Reform Aesthetics and Dental Clinic, we offer Profhilo — a revolutionary bio-remodelling treatment that deeply hydrates and tightens the skin for a naturally refreshed, youthful glow."
      heroImage="/images/treatments-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Bio-Remodelling for Skin Laxity"
      aboutBody="Profhilo is one of the most advanced injectable treatments available for skin laxity and hydration. Unlike traditional fillers, Profhilo uses a unique high-concentration hyaluronic acid that spreads beneath the skin to stimulate collagen and elastin production, improving firmness, elasticity and overall skin quality. Delivered via just five injection points on each side of the face, the treatment is quick, comfortable and suitable for men and women seeking natural rejuvenation without added volume."
      checklistItems={[
        'Tightens and lifts lax skin',
        'Deeply hydrates from within',
        'Stimulates collagen and elastin',
        'Improves skin texture and quality',
        'Minimal injection points and downtime',
      ]}
      circularImage="/images/treatments-beforeafter.jpg"
      circularImageAlt="Profhilo treatment result"
      benefitsHeading="Natural Rejuvenation with Profhilo Bio-Remodelling"
      benefitsBody="Profhilo is ideal for patients looking to improve skin tone and firmness without the added volume of traditional fillers."
      benefitsImage="/images/service-anti-wrinkle.jpg"
      benefitsImageAlt="Profhilo treatment"
      benefits={[
        {
          title: 'Improve Skin Laxity',
          desc: 'Tightens and lifts without adding volume.',
        },
        {
          title: 'Deep Hydration',
          desc: 'Restores moisture balance from within.',
        },
        {
          title: 'Stimulate Collagen & Elastin',
          desc: 'Gradual skin remodelling for long-term improvement.',
        },
        {
          title: 'Quick & Comfortable',
          desc: 'Minimal injection points and no significant downtime.',
        },
      ]}
    />
  );
}
