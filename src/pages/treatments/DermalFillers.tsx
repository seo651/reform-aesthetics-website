import { TreatmentPage } from '@/components/TreatmentPage';

export default function DermalFillers() {
  return (
    <TreatmentPage
      breadcrumb="DERMAL FILLERS"
      heroTitle="Dermal Fillers"
      heroSubtext="A refined injectable treatment designed to restore lost volume, soften lines, and enhance facial definition, helping you achieve a smoother, fresher appearance with natural-looking results."
      heroImage="/images/treatments-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Facial Enhancement for Natural Volume"
      aboutBody="Restoring youthful contours requires precision and an artistic approach. Our dermal filler treatments are carefully administered to replenish volume, refine facial structure, and soften the visible signs of ageing. Using premium-quality fillers, we treat areas such as the lips, cheeks, jawline, and under-eye area to create balanced, subtle enhancement tailored to your features."
      checklistItems={[
        'Restores facial volume and smooths fine lines',
        'Enhances lips, cheeks, and jawline definition',
        'Softens under-eye hollows for a refreshed look',
        'Improves facial symmetry and contour',
        'Delivers natural-looking, immediate results',
      ]}
      circularImage="/images/treatments-beforeafter.jpg"
      circularImageAlt="Dermal filler treatment result"
      benefitsHeading="Enhance Your Features with Dermal Fillers in Leicester"
      benefitsBody="At Reform Aesthetics and Dental Clinic, we focus on achieving elegant, natural results. Our dermal filler treatments are tailored to your facial structure, ensuring subtle enhancement that complements your unique features."
      benefitsImage="/images/service-anti-wrinkle.jpg"
      benefitsImageAlt="Dermal filler treatment"
      benefits={[
        {
          title: 'Restore Lost Volume',
          desc: 'Replenish areas affected by ageing, creating a fuller and more youthful appearance.',
        },
        {
          title: 'Refine Facial Contours',
          desc: 'Enhance definition in key areas such as the lips, cheeks, and jawline.',
        },
        {
          title: 'Quick & Minimally Invasive',
          desc: 'A non-surgical treatment with little downtime and immediate visible improvement.',
        },
        {
          title: 'Subtle, Natural Results',
          desc: 'Carefully placed filler enhances your features without looking overdone.',
        },
      ]}
    />
  );
}
