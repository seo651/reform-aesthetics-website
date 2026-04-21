import { TreatmentPage } from '@/components/TreatmentPage';

export default function AntiWrinkle() {
  return (
    <TreatmentPage
      breadcrumb="ANTI-WRINKLE"
      heroTitle="Anti-Wrinkle Injections"
      heroSubtext="At Reform Aesthetics and Dental Clinic, we combine medical expertise with aesthetic precision to deliver subtle, natural-looking results. Every treatment is tailored to soften lines while preserving your natural expressions."
      heroImage="/images/treatments-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Anti-Wrinkle Injections"
      aboutBody="Anti-wrinkle injections offer a safe, effective, and non-surgical solution for reducing fine lines and dynamic wrinkles. Common treatment areas include the forehead, frown lines, and crow's feet. By gently relaxing targeted muscles, skin appears smoother, fresher, and more youthful, all with minimal downtime."
      checklistItems={[
        'Softens forehead and expression lines',
        'Reduces crow\'s feet and frown lines',
        'Helps prevent deeper wrinkle formation',
        'Quick treatment with minimal downtime',
        'Natural-looking, refreshed results',
      ]}
      circularImage="/images/treatments-beforeafter.jpg"
      circularImageAlt="Anti-wrinkle treatment result"
      benefitsHeading="Refresh Your Appearance with Anti-Wrinkle Treatments"
      benefitsBody="Our experienced medical injectors personalise every treatment to ensure balanced, natural results. The goal is always refinement, never frozen or overdone."
      benefitsImage="/images/service-anti-wrinkle.jpg"
      benefitsImageAlt="Anti-wrinkle treatment"
      benefits={[
        {
          title: 'Smooth & Soften Expression Lines',
          desc: 'Relaxing targeted muscles visibly reduces fine lines while maintaining natural movement.',
        },
        {
          title: 'Prevent Deeper Wrinkle Formation',
          desc: 'Regular treatments can help slow the development of deeper, more permanent lines.',
        },
        {
          title: 'Quick & Minimal Downtime',
          desc: 'A fast, convenient treatment suitable for busy lifestyles.',
        },
        {
          title: 'Subtle, Natural Results',
          desc: 'Look refreshed and rejuvenated, without altering your unique facial expressions.',
        },
      ]}
    />
  );
}
