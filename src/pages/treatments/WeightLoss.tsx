import { TreatmentPage } from '@/components/TreatmentPage';

export default function WeightLoss() {
  return (
    <TreatmentPage
      breadcrumb="WEIGHT LOSS INJECTIONS"
      heroTitle="Support Your Weight-Loss Journey with Metabolism-Focused Injections"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, we provide medically supervised weight-loss injections designed to support appetite control, enhance metabolism and promote sustainable fat reduction as part of a personalised wellness plan."
      heroImage="/images/weight-loss-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Medical Support for Sustainable Results"
      aboutBody="Weight-loss injections are designed to assist with appetite regulation, metabolism enhancement and fat breakdown. By increasing feelings of fullness and reducing hunger signals, they can help lower overall calorie intake when combined with a healthy diet and regular exercise. At Reform Aesthetics and Dental Clinic, these treatments form part of our comprehensive wellness and nutrition services. Every plan is tailored to your individual goals, lifestyle and medical history to ensure safe, effective support."
      checklistItems={[
        'Helps reduce appetite and cravings',
        'Promotes increased feelings of fullness',
        'Supports metabolism and fat breakdown',
        'Complements diet and exercise plans',
        'Medically supervised and personalised',
      ]}
      circularImage="/images/weight-loss-treatment.jpg"
      circularImageAlt="Weight loss injection treatment"
      benefitsHeading="A Personalised Approach to Weight Management"
      benefitsBody="Our patient-centred approach ensures every treatment plan is carefully designed around your unique needs, supporting gradual, sustainable progress."
      benefitsImage="/images/weight-loss-result.jpg"
      benefitsImageAlt="Weight loss injection results"
      benefits={[
        {
          title: 'Appetite Control & Satiety',
          desc: 'Helps manage hunger and portion control.',
        },
        {
          title: 'Metabolic Support',
          desc: 'Encourages efficient fat metabolism.',
        },
        {
          title: 'Structured Medical Guidance',
          desc: 'Delivered under professional clinical supervision.',
        },
        {
          title: 'Tailored Wellness Plans',
          desc: 'Individualised programmes to support long-term success.',
        },
      ]}
    />
  );
}
