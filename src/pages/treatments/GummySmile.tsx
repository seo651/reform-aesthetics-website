import { TreatmentPage } from '@/components/TreatmentPage';

export default function GummySmile() {
  return (
    <TreatmentPage
      breadcrumb="GUMMY SMILE CORRECTION"
      heroTitle="Reveal a More Balanced Smile with Gummy Smile Correction"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, our gummy smile treatment uses precise anti-wrinkle injections to gently reduce the appearance of excess gum when smiling, for a more confident, balanced smile."
      heroImage="/images/gummy-smile-hero-2.png"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Non-Surgical Smile Enhancement"
      aboutBody="A gummy smile occurs when an excessive amount of gum is exposed when smiling. This can be caused by overactive muscles in the upper lip. At Reform Aesthetics and Dental Clinic, we treat gummy smiles using small, precise anti-wrinkle injections to gently relax the upper lip muscles, reducing how far the lip lifts when smiling. The result is a more balanced, proportionate smile with minimal discomfort and no surgery."
      checklistItems={[
        'Reduces visible gum when smiling',
        'Creates a more balanced smile',
        'Quick, minimally invasive treatment',
        'Natural-looking, subtle improvement',
        'No surgery or anaesthetic required',
      ]}
      circularImage="/images/gummy-smile-treatment-2.jpg"
      circularImageAlt="Gummy smile treatment procedure"
      benefitsHeading="Smile with Confidence"
      benefitsBody="A small adjustment to the upper lip muscles can create a significant and confidence-boosting improvement to the overall appearance of your smile."
      benefitsImage="/images/gummy-smile-treatment-3.jpg"
      benefitsImageAlt="Gummy smile correction result"
      benefits={[
        {
          title: 'Balance Your Smile',
          desc: 'Reduces gum visibility for a more harmonious look.',
        },
        {
          title: 'Quick & Comfortable',
          desc: 'A fast, minimally invasive procedure.',
        },
        {
          title: 'No Surgery Needed',
          desc: 'An injectable alternative to surgical correction.',
        },
        {
          title: 'Natural-Looking Results',
          desc: 'Maintains your natural smile while improving proportion.',
        },
      ]}
    />
  );
}
