import { TreatmentPage } from '@/components/TreatmentPage';

export default function ThreadLifts() {
  return (
    <TreatmentPage
      breadcrumb="LIQUID FACE LIFT"
      heroTitle="Instant Lift, Natural Results Using Dermal Fillers"
      heroSubtext="Achieve a lifted, youthful and refreshed appearance without surgery with a Non-Surgical Face Lift — also known as a 'Liquid Facelift' — using expertly placed dermal fillers."
      heroImage="/images/liquid-facelift-hero.jpg"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="A Non-Surgical Facelift Tailored to You"
      aboutBody="A Liquid Facelift uses carefully placed dermal fillers to restore volume, smooth wrinkles, and enhance facial contours, targeting areas such as the cheeks, jawline, temples, and under-eyes. By strategically replenishing lost facial volume, dermal fillers provide a natural lift, improving symmetry and definition while maintaining your unique look. The procedure is minimally invasive, requires little to no downtime, and delivers immediate results that can be fine-tuned for subtle, natural enhancement. Perfect for those seeking facial rejuvenation without surgery, a filler-based face lift helps you regain confidence with safe, effective, and tailored treatment."
      checklistItems={[
        'Restores facial volume and lifts sagging areas',
        'Smooths fine lines and wrinkles',
        'Enhances facial contours naturally',
        'Minimally invasive with immediate results',
        'Personalised treatment for a natural look',
      ]}
      circularImage="/images/liquid-facelift-circular.jpg"
      circularImageAlt="Liquid facelift before and after jawline result"
      benefitsHeading="Rejuvenate Your Appearance Without Going Under the Knife"
      benefitsBody="A Liquid Facelift is ideal for those seeking visible rejuvenation without the risks or downtime of surgery. Every treatment is personalised to your facial structure for results that look naturally refreshed."
      benefitsImage="/images/liquid-facelift-benefits.jpg"
      benefitsImageAlt="Liquid facelift consultation and treatment"
      benefits={[
        {
          title: 'Restore Facial Volume',
          desc: 'Lifts sagging areas and replenishes volume lost through ageing.',
        },
        {
          title: 'Smooth Lines & Wrinkles',
          desc: 'Softens fine lines for a smoother, more youthful complexion.',
        },
        {
          title: 'Enhance Contours Naturally',
          desc: 'Defines cheeks, jawline and temples with precision placement.',
        },
        {
          title: 'No Surgery or Downtime',
          desc: 'Immediate, natural-looking results with minimal recovery needed.',
        },
      ]}
    />
  );
}
