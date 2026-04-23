import { TreatmentPage } from '@/components/TreatmentPage';

export default function HairLoss() {
  return (
    <TreatmentPage
      breadcrumb="PRF HAIR TREATMENT"
      heroTitle="PRF Hair Treatment — Naturally Thicker, Healthier Hair with Lasting Results"
      heroSubtext="PRF Hair Treatment is the next generation of platelet therapy — using your body's own biology to stimulate hair growth, improve scalp health and deliver more consistent, long-lasting results."
      heroImage="/images/prf-hero.png"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="PRF vs PRP — What Makes PRF Different"
      aboutBody="Both Platelet-Rich Plasma (PRP) and Platelet-Rich Fibrin (PRF) are innovative, non-surgical treatments that use your body's own blood to stimulate hair growth and improve hair density. While they share a similar goal, there are key differences that make each treatment unique. PRF is the next-generation treatment and uses a similar process but without any anticoagulants. It produces a fibrin matrix rich in platelets, white blood cells, and growth factors, which are released more slowly over time. This longer release enhances follicle stimulation, improves scalp health, and often delivers more consistent and long-lasting hair growth results."
      checklistItems={[
        'Next-generation advancement on traditional PRP',
        'No anticoagulants — entirely natural process',
        'Slow-release growth factors for deeper follicle stimulation',
        'Improves scalp health and hair density',
        'More consistent, longer-lasting results',
      ]}
      circularImage="/images/prf-circular.jpg"
      circularImageAlt="PRF hair treatment in progress"
      benefitsHeading="Advanced Hair Restoration with Slow-Release Growth Factors"
      benefitsBody="PRF's fibrin matrix delivers a sustained release of growth factors that work deeper and longer than PRP, supporting stronger follicles and more reliable regrowth over time."
      benefitsImage="/images/prf-benefits.jpg"
      benefitsImageAlt="PRF hair treatment result"
      benefits={[
        {
          title: 'Next-Generation Treatment',
          desc: 'More advanced than PRP — no anticoagulants used in the process.',
        },
        {
          title: 'Slow-Release Growth Factors',
          desc: 'Fibrin matrix delivers sustained follicle stimulation over time.',
        },
        {
          title: 'Improved Scalp Health',
          desc: 'Enriched with white blood cells for a healthier scalp environment.',
        },
        {
          title: 'Longer-Lasting Results',
          desc: 'More consistent hair growth outcomes compared to traditional PRP.',
        },
      ]}
    />
  );
}
