import { TreatmentPage } from '@/components/TreatmentPage';

export default function LymphaticDrainage() {
  return (
    <TreatmentPage
      breadcrumb="LYMPHATIC DRAINAGE MASSAGE"
      heroTitle="Restore Balance & Boost Wellbeing with Lymphatic Drainage"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, our gentle lymphatic drainage massage supports detoxification, reduces fluid retention and promotes overall wellness in a calm, restorative setting."
      heroImage="/images/treatments-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Support Recovery & Wellness"
      aboutBody="Lymphatic drainage massage is a gentle, non-invasive treatment designed to stimulate the lymphatic system and encourage the natural elimination of toxins. This specialised technique helps reduce swelling, improve circulation and support immune function. Each session is personalised by our skilled therapists and is particularly beneficial for lymphedema, fatigue and post-surgical recovery, including post-pregnancy, abdominal procedures or liposuction."
      checklistItems={[
        'Reduces fluid retention and swelling',
        'Supports detoxification',
        'Aids post-surgery recovery',
        'Improves circulation and wellbeing',
        'Gentle, relaxing and non-invasive',
      ]}
      circularImage="/images/treatments-beforeafter.jpg"
      circularImageAlt="Lymphatic drainage massage"
      benefitsHeading="Enhance Recovery & Promote Natural Detoxification"
      benefitsBody="Lymphatic drainage massage works with your body's natural systems to restore balance, reduce discomfort and improve overall vitality."
      benefitsImage="/images/service-anti-wrinkle.jpg"
      benefitsImageAlt="Lymphatic drainage massage"
      benefits={[
        {
          title: 'Reduce Swelling & Fluid Retention',
          desc: 'Encourages lymphatic flow and relieves heaviness.',
        },
        {
          title: 'Support Post-Surgical Healing',
          desc: 'Ideal after pregnancy, abdominal surgery or liposuction.',
        },
        {
          title: 'Improve Circulation & Energy',
          desc: 'Helps combat fatigue and support immune health.',
        },
        {
          title: 'Gentle & Restorative',
          desc: 'A calming treatment suitable for ongoing wellness care.',
        },
      ]}
    />
  );
}
