import { TreatmentPage } from '@/components/TreatmentPage';

export default function HairLoss() {
  return (
    <TreatmentPage
      breadcrumb="HAIR LOSS TREATMENTS"
      heroTitle="Restore Confidence with Advanced Hair Loss Treatments"
      heroSubtext="At Reform Aesthetics and Dental Clinic, we offer a comprehensive range of evidence-based treatments designed to slow hair loss, stimulate regrowth and restore confidence for both men and women."
      heroImage="/images/polynucleotide.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Personalised Hair Restoration"
      aboutBody="Hair loss can significantly affect confidence and wellbeing. At Reform Aesthetics and Dental Clinic, we offer advanced, medically backed solutions tailored to your specific type and stage of hair loss. Our treatments include PRP (Platelet-Rich Plasma) therapy, Exosome therapy, medical-grade topical treatments and nutritional support. Our experienced medical team will assess your scalp and hair health to create a personalised treatment plan that targets the root causes of hair loss and supports regrowth."
      checklistItems={[
        'Treats male and female pattern hair loss',
        'Stimulates dormant hair follicles',
        'Strengthens existing hair',
        'Personalised treatment plans',
        'Evidence-based, medically supervised',
      ]}
      circularImage="/images/aesthetics-prp-2.jpg"
      circularImageAlt="Hair loss treatment result"
      benefitsHeading="Evidence-Based Solutions for Hair Restoration"
      benefitsBody="Our multi-modality approach combines proven therapies to deliver the best possible outcomes for hair health and regrowth."
      benefitsImage="/images/aesthetics-prp-1.jpg"
      benefitsImageAlt="Hair loss treatment"
      benefits={[
        {
          title: 'Slow & Reverse Hair Thinning',
          desc: 'Medically proven treatments to combat hair loss.',
        },
        {
          title: 'Stimulate New Hair Growth',
          desc: 'Reactivates follicles for improved density.',
        },
        {
          title: 'Personalised Treatment Plans',
          desc: 'Tailored to your specific hair loss pattern and needs.',
        },
        {
          title: 'Medically Supervised',
          desc: 'Expert care throughout your hair restoration journey.',
        },
      ]}
    />
  );
}
