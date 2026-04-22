import { TreatmentPage } from '@/components/TreatmentPage';

export default function Hyperhidrosis() {
  return (
    <TreatmentPage
      breadcrumb="HYPERHIDROSIS"
      heroTitle="Effective Treatment for Excessive Sweating"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, our hyperhidrosis treatment uses targeted anti-wrinkle injections to safely and effectively reduce excessive sweating, helping you feel comfortable and confident every day."
      heroImage="/images/hyperhidrosis-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Relief from Hyperhidrosis"
      aboutBody="Hyperhidrosis is a condition characterised by excessive sweating that goes beyond normal temperature regulation. It most commonly affects the underarms, hands, feet and face. At Reform Aesthetics and Dental Clinic, we use anti-wrinkle injections to block the nerve signals responsible for activating sweat glands. The procedure is quick and effective, typically reducing sweating by 80–90% for a period of 4–12 months."
      checklistItems={[
        'Reduces excessive underarm sweating',
        'Effective for hands, feet and face',
        'Blocks sweat gland nerve signals',
        'Results last 4–12 months',
        'Quick treatment with minimal discomfort',
      ]}
      circularImage="/images/hyperhidrosis-injection.jpg"
      circularImageAlt="Hyperhidrosis injection treatment"
      benefitsHeading="Regain Comfort & Confidence"
      benefitsBody="Hyperhidrosis can significantly affect daily life and confidence. Our treatment provides reliable, long-lasting relief."
      benefitsImage="/images/hyperhidrosis-injection.jpg"
      benefitsImageAlt="Hyperhidrosis injection underarm treatment"
      benefits={[
        {
          title: 'Significantly Reduce Sweating',
          desc: 'Reduces excessive sweating by up to 80–90%.',
        },
        {
          title: 'Long-Lasting Relief',
          desc: 'Results typically last between 4 and 12 months.',
        },
        {
          title: 'Quick & Comfortable',
          desc: 'A fast, minimally invasive procedure.',
        },
        {
          title: 'Restore Daily Confidence',
          desc: 'Return to social and professional settings with ease.',
        },
      ]}
    />
  );
}
