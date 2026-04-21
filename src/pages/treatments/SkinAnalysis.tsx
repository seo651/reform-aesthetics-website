import { TreatmentPage } from '@/components/TreatmentPage';

export default function SkinAnalysis() {
  return (
    <TreatmentPage
      breadcrumb="3D SKIN ANALYSIS"
      heroTitle="Advanced 3D Skin Analysis with OBSERV 520x"
      heroSubtext="Where science meets your skin. At Reform Aesthetics and Dental Clinic, our advanced skin scanning technology provides an in-depth view of your skin's health, revealing concerns beneath the surface to guide precise, personalised treatment."
      heroImage="/images/treatments-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Comprehensive Skin Scanning"
      aboutBody="The OBSERV 520x is a revolutionary skin analysis device designed to assess your skin in exceptional detail. Using advanced imaging technology, it reveals deeper layers of the skin that are not visible to the naked eye. This powerful diagnostic tool allows us to accurately analyse skin texture, pigmentation, vascular concerns and underlying damage. By understanding your skin at every level, we can create a fully personalised treatment plan to restore balance, clarity and long-term skin health."
      checklistItems={[
        'Advanced multi-layer skin analysis',
        'Detects underlying skin concerns',
        'Identifies pigmentation and texture issues',
        'Supports personalised treatment planning',
        'Non-invasive, detailed assessment',
      ]}
      circularImage="/images/clinic-skin-scanner.jpg"
      circularImageAlt="OBSERV 520x 3D skin analysis"
      benefitsHeading="Precision Diagnosis for Targeted Skin Solutions"
      benefitsBody="The OBSERV 520x enables a scientific approach to skincare, ensuring treatments are tailored with accuracy and confidence."
      benefitsImage="/images/service-anti-wrinkle.jpg"
      benefitsImageAlt="3D skin analysis consultation"
      benefits={[
        {
          title: 'Reveal Hidden Skin Concerns',
          desc: 'Detects issues beneath the surface before they fully develop.',
        },
        {
          title: 'Accurate Skin Health Assessment',
          desc: 'Provides detailed imaging from surface to deeper layers.',
        },
        {
          title: 'Personalised Treatment Planning',
          desc: 'Guides targeted solutions for optimal results.',
        },
        {
          title: 'Non-Invasive & Comfortable',
          desc: 'A safe, advanced consultation experience.',
        },
      ]}
    />
  );
}
