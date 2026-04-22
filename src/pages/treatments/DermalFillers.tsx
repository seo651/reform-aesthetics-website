import { TreatmentPage } from '@/components/TreatmentPage';

export default function DermalFillers() {
  return (
    <TreatmentPage
      breadcrumb="FILLER DISSOLVING"
      heroTitle="Correct & Restore with Filler Dissolving Treatment"
      heroSubtext="At Reform Aesthetics and Dental Clinic, our filler dissolving treatment offers a safe and effective way to correct overfilled, uneven or unwanted dermal filler — restoring natural facial balance."
      heroImage="/images/filler-dissolving-new-hero.png"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Filler Dissolving with Safe & Precise Correction"
      aboutBody="Filler dissolving is a non-surgical treatment designed to correct or reverse unwanted dermal fillers. Whether the concern is overfilling, uneven placement, or migration, this treatment helps restore a more natural appearance. Using hyaluronidase, a specialised enzyme that safely breaks down hyaluronic acid fillers, the product is gradually dissolved and naturally absorbed by the body. The treatment is quick, precise and minimally invasive."
      checklistItems={[
        'Corrects overfilled or uneven areas',
        'Dissolves unwanted dermal fillers',
        'Restores natural facial balance',
        'Minimally invasive procedure',
        'Noticeable improvement within days',
      ]}
      circularImage="/images/filler-dissolving-new-circular.png"
      circularImageAlt="Hyaluronidase filler dissolving treatment"
      benefitsHeading="Restore Natural Balance & Facial Harmony"
      benefitsBody="Filler dissolving allows patients to safely adjust or reverse previous cosmetic treatments while maintaining natural-looking results."
      benefitsImage="/images/filler-dissolving-new-benefits.png"
      benefitsImageAlt="Filler dissolving injection procedure"
      benefits={[
        {
          title: 'Target Specific Areas',
          desc: 'Precise correction of unwanted filler in any treatment area.',
        },
        {
          title: 'Fast & Effective Treatment',
          desc: 'Results often begin within hours to days of treatment.',
        },
        {
          title: 'Restore Natural Appearance',
          desc: 'Helps rebalance facial proportions for a harmonious result.',
        },
        {
          title: 'Safe, Medically Led Care',
          desc: 'Performed by experienced aesthetic clinicians at our Leicester clinic.',
        },
      ]}
    />
  );
}
