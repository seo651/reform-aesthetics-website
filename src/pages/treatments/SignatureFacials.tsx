import { TreatmentPage } from '@/components/TreatmentPage';

export default function SignatureFacials() {
  return (
    <TreatmentPage
      breadcrumb="SIGNATURE FACIALS"
      heroTitle="Rebalance & Revitalise with Signature Probiotic Facials"
      heroSubtext="At Reform Aesthetics and Dental Clinic, our Signature Facials are designed to restore harmony to your skin. Using Esse Organic probiotic skincare, we nourish the microbiome and enhance natural radiance for a healthier-looking complexion."
      heroImage="/images/signature-facials.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Esse Live Probiotic Facial"
      aboutBody="Our Signature Facial uses Esse Organic probiotic skincare to deeply nourish and rebalance the skin microbiome. This advanced approach supports healthy bacteria for stronger, resilient skin while delivering deep hydration and protection of the skin barrier. Suitable for all skin types, including sensitive and reactive skin."
      checklistItems={[
        'Deeply hydrates and plumps the skin',
        'Improves elasticity and firmness',
        'Softens fine lines and early ageing',
        'Brightens dull, tired complexions',
        'Minimal downtime treatment',
      ]}
      circularImage="/images/signature-facials.jpg"
      circularImageAlt="Signature facial result"
      benefitsHeading="Restore Balance & Reveal Healthy, Radiant Skin"
      benefitsBody="Each facial is carefully customised to address concerns such as dehydration, sensitivity and uneven tone, delivering visible improvement with a relaxing, restorative experience."
      benefitsImage="/images/medical-skincare-hero.jpg"
      benefitsImageAlt="Signature facial treatment"
      benefits={[
        {
          title: 'Support the Skin Microbiome',
          desc: 'Encourages healthy bacteria for stronger, resilient skin.',
        },
        {
          title: 'Deep Hydration & Nourishment',
          desc: 'Replenishes moisture while protecting the skin barrier.',
        },
        {
          title: 'Calm & Soothe Sensitivity',
          desc: 'Gentle formulations suitable for delicate skin types.',
        },
        {
          title: 'Safe for All Skin Types',
          desc: 'Including pregnancy and breastfeeding-safe treatments.',
        },
      ]}
    />
  );
}
