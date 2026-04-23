import { TreatmentPage } from '@/components/TreatmentPage';

export default function VitaminInjections() {
  return (
    <TreatmentPage
      breadcrumb="VITAMIN INJECTIONS"
      heroTitle="Fuller Hair, Brighter Skin & Boosted Energy with Vitamin Injections"
      heroSubtext="At Reform Aesthetics and Dental Clinic, our Biotin and B12 vitamin injections are designed to support healthy hair growth, improve skin vitality and enhance overall energy levels through rapid, effective absorption."
      heroImage="/images/vitamin-injections-hero.png"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Vitamin Injections – Biotin & B12 for Hair, Skin & Energy"
      aboutBody="Vitamin B12 and Biotin injections provide targeted nutritional support to help strengthen hair, improve skin quality and promote stronger nails. These essential B-vitamins play a key role in energy production and cellular health. Delivered via intramuscular injection, nutrients are absorbed quickly into the bloodstream, offering faster, more efficient results compared to oral supplements."
      checklistItems={[
        'Supports fuller, stronger hair',
        'Improves skin clarity and texture',
        'Strengthens nails',
        'Boosts natural energy levels',
        'Rapid absorption via injection',
      ]}
      circularImage="/images/vitamin-injections-treatment.jpg"
      circularImageAlt="Vitamin injection treatment"
      benefitsHeading="Nourish From Within for Visible, Lasting Results"
      benefitsBody="Vitamin injections work internally to support hair growth, skin renewal and overall wellbeing."
      benefitsImage="/images/vitamin-injections-result.jpg"
      benefitsImageAlt="Vitamin injections treatment results"
      benefits={[
        {
          title: 'Strengthen Hair & Reduce Thinning',
          desc: 'Biotin supports healthier, more resilient strands.',
        },
        {
          title: 'Improve Skin Health',
          desc: 'Enhances glow and overall skin vitality.',
        },
        {
          title: 'Increase Energy Levels',
          desc: 'B12 helps combat fatigue and supports metabolism.',
        },
        {
          title: 'Fast & Effective Delivery',
          desc: 'Intramuscular injections ensure optimal absorption.',
        },
      ]}
    />
  );
}
