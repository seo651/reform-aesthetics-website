import { TreatmentPage } from '@/components/TreatmentPage';

export default function PregnancyGlowFacial() {
  return (
    <TreatmentPage
      breadcrumb="SIGNATURE PREGNANCY GLOW FACIAL"
      heroTitle="Safe, Nourishing Care for Your Pregnancy Glow"
      heroSubtext="At Reform Aesthetics and Dental Clinic, our pregnancy-safe facial is designed to gently hydrate, calm and restore radiance while prioritising both mother and baby's wellbeing. Relax and rejuvenate with complete peace of mind."
      heroImage="/images/signature-facials.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Gentle Care for Glowing Skin"
      aboutBody="Our Signature Pregnancy Facial uses carefully selected, pregnancy-safe products and techniques to enhance your natural glow without compromising on safety or comfort. Designed to soothe hormonal skin changes, deeply hydrate and restore balance, this treatment delivers visible radiance while remaining non-invasive and completely baby-safe. Suitable for all trimesters."
      checklistItems={[
        'Safe for all stages of pregnancy',
        'Gently exfoliates and brightens',
        'Calms hormonal skin changes',
        'Deeply hydrates dry, dull skin',
        'Enhances elasticity and natural glow',
      ]}
      circularImage="/images/medical-skincare-obagi.jpg"
      circularImageAlt="Pregnancy glow facial result"
      benefitsHeading="Restore Comfort & Radiance During Pregnancy"
      benefitsBody="Each facial is tailored to support your skin through hormonal changes, delivering soothing care and healthy luminosity in a safe, relaxing environment."
      benefitsImage="/images/heliocare-hero.jpg"
      benefitsImageAlt="Pregnancy glow facial treatment"
      benefits={[
        {
          title: 'Calm & Soothe Sensitivity',
          desc: 'Reduces redness and irritation caused by hormonal shifts.',
        },
        {
          title: 'Deep Hydration & Nourishment',
          desc: 'Replenishes moisture to combat dryness and dullness.',
        },
        {
          title: 'Enhance Natural Glow',
          desc: 'Supports elasticity and healthy skin function.',
        },
        {
          title: 'Safe, Gentle & Non-Invasive',
          desc: 'A luxurious treatment designed with pregnancy safety in mind.',
        },
      ]}
    />
  );
}
