import { TreatmentPage } from '@/components/TreatmentPage';

export default function ChinfaceFiller() {
  return (
    <TreatmentPage
      breadcrumb="CHIN & FACE FILLER"
      heroTitle="Define & Balance with Chin & Face Filler"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, our expert clinicians use premium dermal fillers to sculpt and define the chin and facial structure, delivering beautifully balanced and proportionate results."
      heroImage="/images/cheek-fillers-profile.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Facial Sculpting & Definition"
      aboutBody="Chin and facial filler treatments are expertly administered to enhance facial structure, improve proportion and restore a youthful contour. Using hyaluronic acid fillers, our clinicians can strengthen a weak chin, balance the midface, refine the jawline and add definition to areas affected by volume loss. Each treatment is tailored to your individual anatomy and aesthetic goals to achieve harmonious, natural-looking results."
      checklistItems={[
        'Strengthens and defines the chin',
        'Improves facial balance and proportion',
        'Restores midface volume',
        'Refines the jawline',
        'Natural-looking immediate results',
      ]}
      circularImage="/images/cheek-fillers-skin.jpg"
      circularImageAlt="Cheek and facial filler skin result"
      benefitsHeading="Achieve Facial Harmony with Expert Filler"
      benefitsBody="Strategic placement of filler restores balance and structure, complementing your natural features for a rejuvenated appearance."
      benefitsImage="/images/cheek-fillers-profile.jpg"
      benefitsImageAlt="Cheek and facial filler profile result"
      benefits={[
        {
          title: 'Strengthen Facial Structure',
          desc: 'Define the chin and improve overall facial proportion.',
        },
        {
          title: 'Restore Midface Volume',
          desc: 'Replenishes hollowed areas for a youthful appearance.',
        },
        {
          title: 'Refine the Jawline',
          desc: 'Creates sharper, more sculpted contours.',
        },
        {
          title: 'Immediate, Natural Results',
          desc: 'Subtle enhancement that complements your features.',
        },
      ]}
    />
  );
}
