import { TreatmentPage } from '@/components/TreatmentPage';

export default function CollagenStimulating() {
  return (
    <TreatmentPage
      breadcrumb="COLLAGEN STIMULATING INJECTIONS"
      heroTitle="Restore Volume & Stimulate Collagen with Ellansé"
      heroSubtext="At Reform Aesthetics and Dental Clinic, we combine advanced aesthetic science with personalised care to deliver long-lasting, natural rejuvenation. Ellansé works beneath the surface to restore structure and support your skin's own collagen production."
      heroImage="/images/collagen-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Collagen-Stimulating Rejuvenation"
      aboutBody="Ellansé is an advanced injectable treatment designed to restore lost facial volume while stimulating your body's natural collagen production. Unlike traditional fillers, it provides immediate enhancement while encouraging gradual, long-term skin renewal. By improving firmness, elasticity, and structure, Ellansé smooths wrinkles and enhances contours, creating a subtle, lifted appearance without surgery."
      checklistItems={[
        'Restores lost volume and facial structure',
        'Stimulates natural collagen production',
        'Smooths wrinkles and deeper folds',
        'Gradual, long-lasting rejuvenation',
        'Minimal downtime treatment',
      ]}
      circularImage="/images/collagen-circular.jpg"
      circularImageAlt="Collagen stimulating treatment result"
      benefitsHeading="Long-Lasting Rejuvenation with Collagen Stimulation"
      benefitsBody="Ellansé is ideal for patients seeking natural-looking anti-ageing results that improve over time. Treatments are carefully tailored to maintain facial harmony and balance."
      benefitsImage="/images/collagen-benefits.jpg"
      benefitsImageAlt="Ellansé collagen stimulating treatment"
      benefits={[
        {
          title: 'Restore Volume & Definition',
          desc: 'Rebuilds lost structure in areas such as cheeks, temples, and jawline.',
        },
        {
          title: 'Stimulate Natural Collagen',
          desc: 'Encourages your skin to regenerate and strengthen from within.',
        },
        {
          title: 'Improve Firmness & Elasticity',
          desc: 'Enhances texture and resilience for smoother, tighter-looking skin.',
        },
        {
          title: 'Gradual Results, Minimal Downtime',
          desc: 'Enjoy progressive improvement with little interruption to daily life.',
        },
      ]}
    />
  );
}
