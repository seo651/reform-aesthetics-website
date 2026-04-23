import { TreatmentPage } from '@/components/TreatmentPage';

export default function NeckRejuvenation() {
  return (
    <TreatmentPage
      breadcrumb="HAND REJUVENATION"
      heroTitle="Restore Youthful, Hydrated Hands"
      heroSubtext="At Reform Aesthetics and Dental Clinic, our hand rejuvenation treatments restore volume, smooth fine lines and improve skin hydration, helping your hands appear refreshed and naturally youthful."
      heroImage="/images/hand-rejuvenation-2.jpg"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Hand Rejuvenation; Restore Volume & Skin Quality"
      aboutBody="Over time, hands can lose volume and elasticity, making veins, tendons and wrinkles more visible. Hand rejuvenation treatments using dermal fillers or skin boosters help restore lost volume while improving skin hydration and texture. Dermal fillers replenish volume and soften the appearance of veins and tendons, while skin boosters deeply hydrate and enhance skin quality. Together, these treatments provide a natural, refreshed appearance with minimal downtime."
      checklistItems={[
        'Restores lost volume in the hands',
        'Reduces visible veins and tendons',
        'Smooths fine lines and wrinkles',
        'Improves skin hydration and elasticity',
        'Minimally invasive with little downtime',
      ]}
      circularImage="/images/hand-rejuvenation-3.jpg"
      circularImageAlt="Hand rejuvenation treatment"
      benefitsHeading="Rejuvenate Your Hands for a Youthful Appearance"
      benefitsBody="Hand rejuvenation helps restore balance between your facial treatments and the appearance of your hands."
      benefitsImage="/images/hand-rejuvenation-4.jpg"
      benefitsImageAlt="Hand rejuvenation results"
      benefits={[
        {
          title: 'Restore Volume & Softness',
          desc: 'Replenishes fullness lost through ageing.',
        },
        {
          title: 'Improve Skin Hydration',
          desc: 'Boosts elasticity and overall skin quality.',
        },
        {
          title: 'Smooth Wrinkles & Lines',
          desc: 'Softens creases and visible ageing signs.',
        },
        {
          title: 'Quick, Non-Surgical Treatment',
          desc: 'A minimally invasive procedure with minimal recovery time.',
        },
      ]}
    />
  );
}
