import { TreatmentPage } from '@/components/TreatmentPage';

export default function SkinPeels() {
  return (
    <TreatmentPage
      breadcrumb="SKIN PEELS"
      heroTitle="Refresh & Renew Your Skin with Professional Skin Peels"
      heroSubtext="At Reform Aesthetics and Dental Clinic, we offer advanced skin rejuvenation treatments designed to revitalise and resurface your complexion. Our medical-grade peels gently exfoliate, stimulate renewal and restore healthy-looking radiance."
      heroImage="/images/skin-peels-hero.png"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Advanced Skin Rejuvenation"
      aboutBody="Skin peels are a gentle yet effective way to refresh and renew the skin. Using the advanced Mesoestetic range, our treatments remove dead skin cells, stimulate new cell turnover and improve overall tone and texture. Suitable for concerns such as acne, pigmentation, rosacea and dull skin, peels reveal a clearer, brighter and smoother complexion with minimal downtime. A course of 3–4 sessions is typically recommended for optimal results."
      checklistItems={[
        'Removes dead skin cells and impurities',
        'Improves skin tone and texture',
        'Reduces acne and pigmentation',
        'Brightens dull, tired complexions',
        'Minimal downtime treatment',
      ]}
      circularImage="/images/skin-peels-circular.png"
      circularImageAlt="Skin peel treatment result"
      benefitsHeading="Reveal a Brighter, Healthier-Looking Complexion"
      benefitsBody="Our tailored peel treatments are designed to resurface and refine your skin safely, delivering progressive improvement with each session."
      benefitsImage="/images/skin-peels-benefits.png"
      benefitsImageAlt="Skin peel treatment"
      benefits={[
        {
          title: 'Improve Tone & Texture',
          desc: 'Encourages healthy cell turnover for smoother skin.',
        },
        {
          title: 'Target Acne & Pigmentation',
          desc: 'Helps reduce breakouts, discolouration and uneven tone.',
        },
        {
          title: 'Boost Radiance & Clarity',
          desc: 'Reveals a fresher, more luminous complexion.',
        },
        {
          title: 'Comfortable with Minimal Downtime',
          desc: 'A convenient treatment suitable for busy lifestyles.',
        },
      ]}
    />
  );
}
