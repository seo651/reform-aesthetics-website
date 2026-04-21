import { TreatmentPage } from '@/components/TreatmentPage';

export default function MedicalSkincare() {
  return (
    <TreatmentPage
      breadcrumb="MEDICAL-GRADE SKINCARE"
      heroTitle="Transform Your Skin with Medical-Grade Skincare"
      heroSubtext="At Reform Aesthetics and Dental Clinic, we offer prescriptive medical-grade skincare designed to correct, rejuvenate and restore your complexion at a cellular level for visible, long-term results."
      heroImage="/images/treatments-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Advanced Skin Correction"
      aboutBody="We offer Obagi®, a clinically proven, prescription-strength skincare system formulated to transform skin health from within. Designed to target underlying damage, Obagi works at a cellular level to improve tone, clarity and overall skin quality. This advanced system is highly effective in treating melasma, acne, pigmentation, age spots and rough texture, helping to restore a brighter, smoother and more youthful-looking complexion."
      checklistItems={[
        'Targets pigmentation and melasma',
        'Improves acne and breakouts',
        'Smooths rough or uneven texture',
        'Reduces visible signs of ageing',
        'Restores clarity and radiance',
      ]}
      circularImage="/images/treatments-beforeafter.jpg"
      circularImageAlt="Medical skincare treatment result"
      benefitsHeading="Clinical Skincare for Visible, Lasting Results"
      benefitsBody="Medical-grade skincare delivers higher concentrations of active ingredients, allowing for deeper correction and measurable skin transformation."
      benefitsImage="/images/service-anti-wrinkle.jpg"
      benefitsImageAlt="Medical-grade skincare products"
      benefits={[
        {
          title: 'Correct Pigmentation & Discolouration',
          desc: 'Reduces melasma, age spots and uneven tone.',
        },
        {
          title: 'Improve Texture & Clarity',
          desc: 'Refines pores and smooths rough skin.',
        },
        {
          title: 'Stimulate Cellular Renewal',
          desc: 'Encourages healthier, stronger skin function.',
        },
        {
          title: 'Long-Term Skin Transformation',
          desc: 'Designed for progressive, sustainable results.',
        },
      ]}
    />
  );
}
