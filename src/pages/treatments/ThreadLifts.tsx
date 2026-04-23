import { TreatmentPage } from '@/components/TreatmentPage';

export default function ThreadLifts() {
  return (
    <TreatmentPage
      breadcrumb="PDO THREAD LIFT"
      heroTitle="Instant, Non-Surgical Lift with PDO Thread Lift Treatment"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, our PDO thread lift offers a subtle yet effective solution to lift and tighten sagging skin, restoring definition and a refreshed appearance without surgery."
      heroImage="/images/thread-lifts-hero.jpg"
      heroObjectPosition="center"
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
      circularImage="/images/thread-lifts-treatment.jpg"
      circularImageAlt="PDO thread lift treatment procedure"
      benefitsHeading="Restore Definition & Achieve a Youthful Lift"
      benefitsBody="Thread lifts are ideal for patients seeking visible rejuvenation without the downtime or risks associated with surgery."
      benefitsImage="/images/thread-lifts-result.jpg"
      benefitsImageAlt="PDO thread lift results"
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
