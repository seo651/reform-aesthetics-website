import { TreatmentPage } from '@/components/TreatmentPage';

export default function FatDissolving() {
  return (
    <TreatmentPage
      breadcrumb="FAT-DISSOLVING INJECTIONS"
      heroTitle="Contour & Refine with Fat-Dissolving Injections"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, we use Aqualyx fat-dissolving injections to permanently eliminate stubborn localised fat pockets, helping you achieve a smoother, more contoured appearance."
      heroImage="/images/filler-dissolving-vial.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Aqualyx – Targeted Fat Reduction"
      aboutBody="Aqualyx is a clinically proven injectable treatment designed to break down and dissolve stubborn pockets of localised fat. The solution works by disrupting and liquefying fat cells, which are then naturally eliminated by the body over the following weeks. Common treatment areas include the chin (double chin), jowls, bra fat, flanks, abdomen, inner and outer thighs and knees. Results are permanent once fat cells are eliminated, as long as a healthy lifestyle is maintained."
      checklistItems={[
        'Permanently dissolves fat cells',
        'Targets double chin and jowls',
        'Reduces bra fat, flanks and abdomen',
        'Improves thighs and knee area',
        'Natural elimination through the body',
      ]}
      circularImage="/images/filler-dissolving-injection.jpg"
      circularImageAlt="Fat-dissolving injection result"
      benefitsHeading="Permanent Fat Reduction in Stubborn Areas"
      benefitsBody="Aqualyx injections are a safe, effective alternative to surgical fat removal, offering precise contouring with minimal downtime."
      benefitsImage="/images/dermal-fillers-face.jpg"
      benefitsImageAlt="Fat-dissolving injections treatment"
      benefits={[
        {
          title: 'Target Localised Fat Deposits',
          desc: 'Precise treatment for stubborn areas resistant to diet.',
        },
        {
          title: 'Permanent Results',
          desc: 'Once dissolved, fat cells cannot return.',
        },
        {
          title: 'Non-Surgical Contouring',
          desc: 'A minimally invasive alternative to liposuction.',
        },
        {
          title: 'Minimal Downtime',
          desc: 'Return to most daily activities quickly.',
        },
      ]}
    />
  );
}
