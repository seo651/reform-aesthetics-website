import { TreatmentPage } from '@/components/TreatmentPage';

export default function VeinRemoval() {
  return (
    <TreatmentPage
      breadcrumb="VEIN REMOVAL"
      heroTitle="Varicose Vein Removal in Leicester"
      heroSubtext="Alleviate discomfort, improve circulation and restore confidence with advanced vein treatments at Reform Aesthetics and Dental Clinic. Our experienced medical team provides safe, effective solutions tailored to your needs."
      heroImage="/images/treatments-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Restore Comfort & Confidence"
      aboutBody="Varicose veins are enlarged, twisted veins that most commonly develop on the legs and feet. They occur when small valves within the veins weaken, causing blood to flow backwards and collect beneath the skin. Over time, this can lead to visible bulging veins, discomfort, swelling and heaviness in the legs. Affecting around 1 in 3 people during their lifetime, varicose veins are a common but treatable condition. At Reform Aesthetics and Dental Clinic, our experienced vascular team provides personalised treatment plans designed to relieve symptoms and improve both appearance and circulation."
      checklistItems={[
        'Reduces visible bulging veins',
        'Relieves heaviness and discomfort',
        'Improves circulation',
        'Minimally invasive treatment options',
        'Delivered by experienced medical specialists',
      ]}
      circularImage="/images/treatments-beforeafter.jpg"
      circularImageAlt="Vein removal treatment result"
      benefitsHeading="Feel Lighter & Restore Leg Confidence"
      benefitsBody="Our vein treatments focus on improving both comfort and cosmetic appearance, helping you feel confident and supported in expert medical hands."
      benefitsImage="/images/service-anti-wrinkle.jpg"
      benefitsImageAlt="Vein removal treatment"
      benefits={[
        {
          title: 'Improve Circulation',
          desc: 'Supports healthy blood flow and reduces pooling.',
        },
        {
          title: 'Reduce Discomfort',
          desc: 'Relieves aching, swelling and leg heaviness.',
        },
        {
          title: 'Enhance Cosmetic Appearance',
          desc: 'Minimises visible veins for smoother-looking legs.',
        },
        {
          title: 'Safe, Medically Led Care',
          desc: 'Delivered by experienced vascular professionals.',
        },
      ]}
    />
  );
}
