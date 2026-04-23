import { TreatmentPage } from '@/components/TreatmentPage';

export default function PRPHair() {
  return (
    <TreatmentPage
      breadcrumb="PRP HAIR REJUVENATION"
      heroTitle="Restoring Fuller, Healthier Hair — Naturally"
      heroSubtext="Platelet-Rich Plasma (PRP) therapy is widely recognised as one of the most effective and dependable non-surgical treatments for hair growth in both men and women — completely natural, with no harsh synthetic chemicals."
      heroImage="/images/prp-hair-hero.jpg"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="PRP for Hair — How It Works"
      aboutBody="Platelet-Rich Plasma (PRP) therapy is widely recognized as one of the most effective and dependable non-surgical treatments for hair growth in both men and women. Since PRP is derived from your own blood, it is a completely natural treatment that supports the body's own healing and regenerative processes. Unlike many medications used to address thinning hair, PRP does not involve the use of any harsh synthetic chemicals. During the treatment, a sample of your blood is taken and put through a centrifuge machine to separate the plasma from the blood. This Platelet-Rich Plasma layer is transferred into syringes and a fine injection needle is used to inject the plasma directly into the trouble spots on your scalp. For best results and visibly fuller, healthier hair, a course of three PRP treatment sessions is recommended."
      checklistItems={[
        'Completely natural — derived from your own blood',
        'No harsh synthetic chemicals',
        'Stimulates dormant hair follicles',
        'Suitable for both men and women',
        'Course of 3 sessions recommended for best results',
      ]}
      circularImage="/images/prf-circular.jpg"
      circularImageAlt="PRP hair treatment in progress"
      benefitsHeading="Fuller, Healthier Hair Through Your Body's Own Healing Power"
      benefitsBody="PRP therapy supports your body's natural regenerative processes to restore hair density and scalp health without the need for surgery or synthetic chemicals."
      benefitsImage="/images/prf-benefits.jpg"
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
