import { TreatmentPage } from '@/components/TreatmentPage';

export default function JawlineContouring() {
  return (
    <TreatmentPage
      breadcrumb="JAWLINE CONTOURING"
      heroTitle="Define & Sculpt with Expert Jawline Contouring"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, our experienced clinicians use precision filler placement and advanced techniques to sculpt a sharper, more defined jawline for both men and women."
      heroImage="/images/treatments-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Jawline Definition & Sculpting"
      aboutBody="Jawline contouring uses carefully placed dermal fillers and, where appropriate, anti-wrinkle injections to strengthen and define the jawline. This treatment can address jowling, loss of definition, asymmetry and the appearance of a weak or recessed jaw. By enhancing structure and balance, jawline contouring creates a sharper, more sculpted profile that complements the face as a whole."
      checklistItems={[
        'Defines and sharpens the jawline',
        'Reduces the appearance of jowls',
        'Corrects asymmetry and irregularities',
        'Improves facial balance and profile',
        'Immediate, natural-looking results',
      ]}
      circularImage="/images/treatments-beforeafter.jpg"
      circularImageAlt="Jawline contouring result"
      benefitsHeading="Sculpt a Sharper, More Defined Profile"
      benefitsBody="Jawline contouring is one of our most popular treatments for achieving a refined facial silhouette without surgery."
      benefitsImage="/images/service-anti-wrinkle.jpg"
      benefitsImageAlt="Jawline contouring treatment"
      benefits={[
        {
          title: 'Sharpen Facial Definition',
          desc: 'Creates a more structured and sculpted appearance.',
        },
        {
          title: 'Reduce Jowling',
          desc: 'Lifts and tightens soft tissue around the jaw.',
        },
        {
          title: 'Correct Asymmetry',
          desc: 'Balances the jawline for improved harmony.',
        },
        {
          title: 'Non-Surgical, Quick Treatment',
          desc: 'Visible improvement with no recovery time.',
        },
      ]}
    />
  );
}
