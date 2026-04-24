import { TreatmentPage } from '@/components/TreatmentPage';

export default function Polynucleotides() {
  return (
    <TreatmentPage
      breadcrumb="POLYNUCLEOTIDES"
      heroTitle="Polynucleotides"
      heroSubtext="At Reform Aesthetics and Dental Clinic, we offer advanced regenerative treatments designed to restore skin health from within. Polynucleotides stimulate repair, improve elasticity and enhance hydration for a refreshed, youthful appearance."
      heroImage="/images/polynucleotides-hero.png"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Advanced Regenerative Skin Therapy"
      aboutBody="Polynucleotides are innovative injectable treatments that remodel and rejuvenate the skin at a cellular level. By stimulating collagen production and encouraging tissue repair, they improve texture, elasticity and overall skin quality. At Reform Aesthetics and Dental Clinic, we use trusted brands such as Plinest and Newest to treat areas including the face, under-eyes, neck, décolleté and hands, delivering natural, long-lasting rejuvenation."
      checklistItems={[
        'Stimulates collagen and cellular repair',
        'Improves elasticity and skin texture',
        'Reduces fine lines and wrinkles',
        'Softens dark circles and hollowness',
        'Suitable for face and delicate areas',
      ]}
      circularImage="/images/polynucleotides-circular.png"
      circularImageAlt="Polynucleotides treatment result"
      benefitsHeading="Regenerate & Strengthen Your Skin from Within"
      benefitsBody="Polynucleotides work by supporting your skin's natural repair mechanisms, making them ideal for patients seeking subtle, regenerative results rather than added volume."
      benefitsImage="/images/polynucleotides-benefits.png"
      benefitsImageAlt="Polynucleotides treatment"
      benefits={[
        {
          title: 'Boost Collagen Production',
          desc: 'Encourages long-term skin renewal and structural support.',
        },
        {
          title: 'Improve Hydration & Texture',
          desc: 'Enhances smoothness and restores a healthy glow.',
        },
        {
          title: 'Target Delicate Areas',
          desc: 'Effective for under-eyes, neck, décolleté and hands.',
        },
        {
          title: 'Natural, Gradual Results',
          desc: 'Progressive improvement with minimal downtime.',
        },
      ]}
    />
  );
}
