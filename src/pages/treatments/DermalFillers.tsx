import { TreatmentPage } from '@/components/TreatmentPage';

export default function DermalFillers() {
  return (
    <TreatmentPage
      breadcrumb="DERMAL FILLERS"
      heroTitle="Restore Volume & Enhance Your Features with Dermal Fillers"
      heroSubtext="At Reform Aesthetics and Dental Clinic, our dermal filler treatments are carefully administered to replenish lost volume, refine facial structure and soften the visible signs of ageing, delivering natural-looking results tailored to you."
      heroImage="/images/dermal-fillers-hero.png"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Facial Enhancement for Natural, Balanced Results"
      aboutBody="Dermal fillers are premium injectable treatments that restore volume, smooth lines and enhance facial contours. Using hyaluronic acid-based products, we treat areas such as the lips, cheeks, jawline, chin and under-eye area to create balanced, subtle enhancement tailored to your individual features and goals. Restoring youthful contours requires both precision and an artistic eye; our experienced clinicians combine both to deliver results you'll love."
      checklistItems={[
        'Restores facial volume and smooths fine lines',
        'Enhances lips, cheeks and jawline definition',
        'Softens under-eye hollows for a refreshed look',
        'Improves facial symmetry and contour',
        'Delivers natural-looking, immediate results',
      ]}
      circularImage="/images/filler-dissolving-new-circular.png"
      circularImageAlt="Dermal filler treatment result"
      benefitsHeading="Subtle Enhancement That Complements Your Natural Features"
      benefitsBody="At Reform Aesthetics and Dental Clinic, we focus on achieving elegant, natural results. Our dermal filler treatments are tailored to your facial structure, ensuring subtle enhancement that works with, not against, your unique features."
      benefitsImage="/images/dermal-fillers-benefits.png"
      benefitsImageAlt="Dermal filler syringes"
      benefits={[
        {
          title: 'Restore Lost Volume',
          desc: 'Replenish areas affected by ageing for a fuller, more youthful appearance.',
        },
        {
          title: 'Refine Facial Contours',
          desc: 'Enhance definition in the lips, cheeks, jawline and more.',
        },
        {
          title: 'Quick & Minimally Invasive',
          desc: 'A non-surgical treatment with little downtime and immediate results.',
        },
        {
          title: 'Subtle, Natural Results',
          desc: 'Carefully placed filler enhances your features without looking overdone.',
        },
      ]}
    />
  );
}
