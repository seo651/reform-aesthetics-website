import { TreatmentPage } from '@/components/TreatmentPage';

export default function Exosomes() {
  return (
    <TreatmentPage
      breadcrumb="EXOSOME THERAPY"
      heroTitle="Next-Generation Skin & Hair Regeneration with Exosome Therapy"
      heroSubtext="At Reform Aesthetics and Dental Clinic, we offer cutting-edge exosome treatments that harness the power of cellular communication to regenerate skin and hair at a biological level, for natural, transformative results."
      heroImage="/images/exosomes-cells.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Advanced Regenerative Medicine"
      aboutBody="Exosomes are nano-sized extracellular vesicles that carry growth factors, proteins and genetic information between cells. In aesthetic medicine, exosome therapy has emerged as one of the most exciting regenerative treatments available — promoting cellular repair, stimulating collagen and supporting hair follicle health. At Reform Aesthetics and Dental Clinic, we use clinically validated exosome preparations to target visible signs of ageing, hair thinning and compromised skin quality."
      checklistItems={[
        'Stimulates collagen and cellular repair',
        'Promotes hair follicle regeneration',
        'Improves skin texture and elasticity',
        'Reduces signs of ageing',
        'Safe, biologically compatible treatment',
      ]}
      circularImage="/images/exosomes-microneedling.jpg"
      circularImageAlt="Exosome therapy microneedling treatment"
      benefitsHeading="Transform Skin & Hair at a Cellular Level"
      benefitsBody="Exosome therapy represents the future of regenerative aesthetics, delivering profound improvements by working directly with the body's own repair systems."
      benefitsImage="/images/exosomes-benefits.png"
      benefitsImageAlt="Exosome therapy microneedling procedure"
      benefits={[
        {
          title: 'Deep Cellular Regeneration',
          desc: 'Works at a biological level to restore skin and hair health.',
        },
        {
          title: 'Stimulate Collagen & Elastin',
          desc: 'Encourages firmer, more youthful-looking skin.',
        },
        {
          title: 'Support Hair Regrowth',
          desc: 'Reactivates follicles and improves hair density.',
        },
        {
          title: 'Safe & Biocompatible',
          desc: 'A highly tolerated, minimally invasive treatment.',
        },
      ]}
    />
  );
}
