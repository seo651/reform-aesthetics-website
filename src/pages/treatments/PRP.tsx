import { TreatmentPage } from '@/components/TreatmentPage';

export default function PRP() {
  return (
    <TreatmentPage
      breadcrumb="PRP HAIR TREATMENT"
      heroTitle="Restoring Fuller, Healthier Hair — Naturally"
      heroSubtext="Platelet-Rich Plasma therapy is one of the most effective and dependable non-surgical treatments for hair growth in both men and women. Using your own blood, PRP is entirely natural and supports the body's own healing and regenerative processes."
      heroImage="/images/vampire-facial-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="PRP for Hair — How It Works"
      aboutBody="During treatment, a sample of your blood is taken and put through a centrifuge machine to separate the plasma from the blood. This Platelet-Rich Plasma layer is transferred into syringes and a fine needle is used to inject it directly into the trouble spots on your scalp. Since PRP is derived from your own blood, it involves no harsh synthetic chemicals — making it a completely natural treatment. For best results and visibly fuller, healthier hair, a course of three PRP treatment sessions is recommended."
      checklistItems={[
        'Completely natural — derived from your own blood',
        'No harsh synthetic chemicals',
        'Stimulates dormant hair follicles',
        'Suitable for both men and women',
        'Course of 3 sessions recommended for best results',
      ]}
      circularImage="/images/vampire-facial-treatment.jpg"
      circularImageAlt="PRP hair treatment in progress"
      benefitsHeading="Fuller, Healthier Hair Through Your Body's Own Healing Power"
      benefitsBody="PRP therapy supports your body's natural regenerative processes to restore hair density and scalp health without the need for surgery or synthetic chemicals."
      benefitsImage="/images/vampire-facial-result.jpg"
      benefitsImageAlt="PRP hair treatment result"
      benefits={[
        {
          title: 'Natural & Biocompatible',
          desc: 'Derived from your own blood — no synthetic chemicals involved.',
        },
        {
          title: 'Stimulates Hair Regrowth',
          desc: 'Reactivates dormant follicles and encourages new hair growth.',
        },
        {
          title: 'Suitable for Men & Women',
          desc: 'Effective for a wide range of hair thinning and loss patterns.',
        },
        {
          title: 'Gradual, Visible Results',
          desc: 'A course of three sessions delivers the best long-term outcomes.',
        },
      ]}
    />
  );
}
