import { TreatmentPage } from '@/components/TreatmentPage';

export default function ThreadLifts() {
  return (
    <TreatmentPage
      breadcrumb="THREAD LIFTS"
      heroTitle="Instant, Non-Surgical Lift with Thread Lift Treatment"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, our PDO thread lift offers a subtle yet effective solution to lift and tighten sagging skin, restoring definition and a refreshed appearance without surgery."
      heroImage="/images/treatments-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="PDO Non-Surgical Skin Tightening"
      aboutBody="A thread lift is a minimally invasive treatment that uses PDO (polydioxanone) threads to lift and support areas affected by skin laxity. Common treatment areas include the mid-face, jawline, neck and eye area. The threads are carefully placed beneath the skin to create an immediate lifting effect, while also stimulating collagen production over the following 6–8 weeks for longer-lasting firmness and structure."
      checklistItems={[
        'Instant lifting and tightening effect',
        'Stimulates natural collagen production',
        'Defines jawline and mid-face',
        'Improves skin firmness and elasticity',
        'Minimally invasive procedure',
      ]}
      circularImage="/images/treatments-beforeafter.jpg"
      circularImageAlt="Thread lift treatment result"
      benefitsHeading="Restore Definition & Achieve a Youthful Lift"
      benefitsBody="Thread lifts are ideal for patients seeking visible rejuvenation without the downtime or risks associated with surgery."
      benefitsImage="/images/service-anti-wrinkle.jpg"
      benefitsImageAlt="PDO thread lift treatment"
      benefits={[
        {
          title: 'Immediate Lift & Contour',
          desc: 'Provides subtle yet noticeable facial definition.',
        },
        {
          title: 'Long-Term Collagen Support',
          desc: 'Encourages firmer, tighter skin over time.',
        },
        {
          title: 'Target Key Areas',
          desc: 'Effective for jawline, cheeks, neck and eyes.',
        },
        {
          title: 'Minimal Downtime',
          desc: 'A convenient treatment with relatively quick recovery.',
        },
      ]}
    />
  );
}
