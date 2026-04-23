import { TreatmentPage } from '@/components/TreatmentPage';

export default function NoseFiller() {
  return (
    <TreatmentPage
      breadcrumb="NON-SURGICAL NOSE JOB"
      heroTitle="Reshape & Refine with Non-Surgical Rhinoplasty"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, we offer precise non-surgical nose reshaping using dermal filler to improve symmetry, smooth bumps and enhance nasal profile — with no surgery or downtime."
      heroImage="/images/rhinoplasty-1.jpg"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Non-Surgical Nose Reshaping"
      aboutBody="Non-surgical rhinoplasty is an advanced injectable treatment that uses carefully placed dermal filler to reshape and refine the nose. Whether addressing bumps on the bridge, asymmetry, a drooping nasal tip or overall proportion, our experienced clinicians can achieve significant improvements without the need for surgery. The procedure is quick and comfortable, with results visible immediately and minimal recovery required."
      checklistItems={[
        'Smooths bumps on the nasal bridge',
        'Corrects asymmetry and unevenness',
        'Refines and lifts the nasal tip',
        'Improves overall nasal proportion',
        'Immediate results, no surgery needed',
      ]}
      circularImage="/images/rhinoplasty-2.jpg"
      circularImageAlt="Non-surgical rhinoplasty result"
      benefitsHeading="Refine Your Profile Without Surgery"
      benefitsBody="Non-surgical rhinoplasty is one of the most impactful and precise injectable treatments available, offering significant aesthetic improvement with minimal risk."
      benefitsImage="/images/rhinoplasty-3.jpg"
      benefitsImageAlt="Non-surgical nose job treatment"
      benefits={[
        {
          title: 'Smooth & Balance the Profile',
          desc: 'Corrects bumps and irregularities for a refined appearance.',
        },
        {
          title: 'No Surgery or Anaesthetic',
          desc: 'A safe, non-invasive alternative to rhinoplasty.',
        },
        {
          title: 'Immediate Visible Results',
          desc: 'Walk out with a noticeably improved nasal contour.',
        },
        {
          title: 'Minimal Downtime',
          desc: 'Return to daily activities straightaway.',
        },
      ]}
    />
  );
}
