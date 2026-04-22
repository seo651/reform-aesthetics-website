import { TreatmentPage } from '@/components/TreatmentPage';

export default function SkinBoosters() {
  return (
    <TreatmentPage
      breadcrumb="SKIN BOOSTER"
      heroTitle="Hydrate, Plump & Rejuvenate with Skin Boosters"
      heroSubtext="At Reform Aesthetics and Dental Clinic, we deliver advanced injectable treatments designed to restore hydration, improve elasticity and enhance your natural glow. Every treatment is tailored to revitalise your skin from within."
      heroImage="/images/skin-booster-hero-2.png"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Skin Boosters – Profhilo & NCTF Treatments"
      aboutBody="Skin boosters are advanced injectable treatments that deeply hydrate and rejuvenate the skin. Using premium products such as Profhilo and NCTF, we improve skin firmness, texture and radiance. Profhilo works to tighten and lift sagging skin, while NCTF nourishes with hyaluronic acid, vitamins and minerals, restoring vitality and smoothness. A course of treatments is typically recommended for optimal, long-lasting results."
      checklistItems={[
        'Deeply hydrates and plumps the skin',
        'Improves elasticity and firmness',
        'Softens fine lines and early ageing',
        'Brightens dull, tired complexions',
        'Minimal downtime treatment',
      ]}
      circularImage="/images/skin-booster-circular-2.png"
      circularImageAlt="Skin booster treatment result"
      benefitsHeading="Restore Radiance with Advanced Skin Boosters"
      benefitsBody="Our experienced clinicians personalise each treatment to address fine lines, dullness and uneven texture, delivering subtle, natural-looking rejuvenation."
      benefitsImage="/images/skin-booster-benefits-2.png"
      benefitsImageAlt="Skin booster treatment"
      benefits={[
        {
          title: 'Deep Hydration & Skin Renewal',
          desc: 'Replenishes moisture and improves overall skin quality.',
        },
        {
          title: 'Improve Firmness & Elasticity',
          desc: 'Stimulates collagen for smoother, healthier-looking skin.',
        },
        {
          title: 'Brighten & Revitalise',
          desc: 'Enhances tone and restores a youthful glow.',
        },
        {
          title: 'Comfortable, Minimal Downtime',
          desc: 'A convenient treatment suitable for busy lifestyles.',
        },
      ]}
    />
  );
}
