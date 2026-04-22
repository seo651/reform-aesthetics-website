import { TreatmentPage } from '@/components/TreatmentPage';

export default function NeckRejuvenation() {
  return (
    <TreatmentPage
      breadcrumb="NECK REJUVENATION"
      heroTitle="Restore Smoothness & Definition with Neck Rejuvenation"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, our neck rejuvenation treatments address horizontal lines, laxity and loss of definition to restore a smoother, more youthful-looking neck and décolleté."
      heroImage="/images/hand-rejuvenation-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Non-Surgical Neck Treatment"
      aboutBody="The neck is often one of the first areas to show visible signs of ageing, yet it's frequently overlooked in aesthetic treatments. At Reform Aesthetics and Dental Clinic, we offer a range of non-surgical neck rejuvenation options, including anti-wrinkle injections to soften neck bands (Nefertiti lift), skin boosters for deep hydration, and Profhilo for tightening and laxity. Each treatment plan is carefully tailored to address your specific concerns."
      checklistItems={[
        'Softens horizontal neck lines',
        'Reduces vertical neck bands',
        'Improves skin laxity and firmness',
        'Hydrates and revitalises the neck skin',
        'Non-surgical with minimal downtime',
      ]}
      circularImage="/images/hand-rejuvenation-injection.jpg"
      circularImageAlt="Hand rejuvenation injection treatment"
      benefitsHeading="Rejuvenate & Restore the Neck"
      benefitsBody="Our tailored neck treatments address multiple concerns simultaneously, ensuring comprehensive improvement with personalised care."
      benefitsImage="/images/hand-rejuvenation-beforeafter.jpg"
      benefitsImageAlt="Hand rejuvenation before and after"
      benefits={[
        {
          title: 'Soften Neck Lines & Bands',
          desc: 'Reduces visible horizontal and vertical creases.',
        },
        {
          title: 'Improve Skin Laxity',
          desc: 'Tightens and lifts for a more defined neck.',
        },
        {
          title: 'Hydrate & Revitalise',
          desc: 'Restores smoothness and a healthy skin texture.',
        },
        {
          title: 'Non-Surgical Treatment',
          desc: 'A convenient approach with minimal recovery.',
        },
      ]}
    />
  );
}
