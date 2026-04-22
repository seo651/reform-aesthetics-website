import { TreatmentPage } from '@/components/TreatmentPage';

export default function Carboxytherapy() {
  return (
    <TreatmentPage
      breadcrumb="CARBOXYTHERAPY"
      heroTitle="Smooth & Rejuvenate with Carboxytherapy"
      heroSubtext="At Reform Aesthetics and Dental Clinic, we offer advanced non-surgical treatments designed to improve skin firmness and texture. Carboxytherapy stimulates circulation and collagen production for smoother, more youthful-looking skin."
      heroImage="/images/carboxytherapy-hero-2.jpg"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Reduce Cellulite, Stretch Marks & Dark Circles"
      aboutBody="Carboxytherapy is a minimally invasive treatment that uses sterile carbon dioxide (CO₂) injections to improve blood flow and stimulate natural collagen production. This process enhances skin elasticity and promotes smoother, firmer-looking skin. The treatment is ideal for reducing cellulite, stretch marks, dark under-eye circles and stubborn areas such as underchin fat — delivering visible improvement with minimal downtime. A course of treatments is typically recommended for optimal results."
      checklistItems={[
        'Stimulates collagen and circulation',
        'Reduces cellulite and stretch marks',
        'Improves dark under-eye circles',
        'Targets stubborn underchin fat',
        'Safe, minimally invasive procedure',
      ]}
      circularImage="/images/carboxytherapy-circular.webp"
      circularImageAlt="Carboxytherapy treatment result"
      benefitsHeading="Restore Firmer, Smoother-Looking Skin"
      benefitsBody="Carboxytherapy works by naturally stimulating the body's repair processes, making it an excellent option for patients seeking gradual, noticeable improvement."
      benefitsImage="/images/carboxytherapy-benefits.png"
      benefitsImageAlt="Carboxytherapy treatment"
      benefits={[
        {
          title: 'Improve Skin Firmness & Texture',
          desc: 'Boosts circulation and collagen for smoother skin.',
        },
        {
          title: 'Target Cellulite & Stretch Marks',
          desc: 'Helps refine uneven texture and improve tone.',
        },
        {
          title: 'Brighten Under-Eye Areas',
          desc: 'Reduces the appearance of dark circles and hollowness.',
        },
        {
          title: 'Minimal Downtime Treatment',
          desc: 'A safe, comfortable procedure suitable for busy lifestyles.',
        },
      ]}
    />
  );
}
