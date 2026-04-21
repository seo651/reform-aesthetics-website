import { TreatmentPage } from '@/components/TreatmentPage';

export default function LipFillers() {
  return (
    <TreatmentPage
      breadcrumb="LIP FILLERS"
      heroTitle="Enhance Your Lips with Precision Lip Fillers"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, our expert injectors deliver subtle, beautifully shaped lip enhancements tailored to your facial anatomy, for natural-looking results you'll love."
      heroImage="/images/treatments-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Natural Lip Enhancement"
      aboutBody="Lip filler treatments at Reform Aesthetics and Dental Clinic are designed to enhance shape, restore lost volume and define lip borders with the utmost precision. Using premium hyaluronic acid fillers, our clinicians work in harmony with your natural features to create balanced, proportionate results. Whether you desire subtle hydration, improved definition or a fuller appearance, each treatment is tailored exclusively to you."
      checklistItems={[
        'Adds natural volume and definition',
        'Improves lip symmetry and border',
        'Restores age-related volume loss',
        'Hydrates and plumps the lips',
        'Natural-looking, immediate results',
      ]}
      circularImage="/images/treatments-beforeafter.jpg"
      circularImageAlt="Lip filler treatment result"
      benefitsHeading="Beautiful, Balanced Lip Enhancement"
      benefitsBody="Our approach prioritises natural harmony, ensuring your lips look enhanced but never overdone."
      benefitsImage="/images/service-anti-wrinkle.jpg"
      benefitsImageAlt="Lip filler treatment"
      benefits={[
        {
          title: 'Add Volume & Definition',
          desc: 'Create fuller, more defined lips tailored to your proportions.',
        },
        {
          title: 'Restore Lost Volume',
          desc: 'Replenishes lips that have thinned with age.',
        },
        {
          title: 'Improve Symmetry',
          desc: 'Corrects unevenness for a more balanced appearance.',
        },
        {
          title: 'Natural-Looking Results',
          desc: 'Subtle enhancement that complements your features.',
        },
      ]}
    />
  );
}
