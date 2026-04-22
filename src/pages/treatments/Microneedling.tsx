import { TreatmentPage } from '@/components/TreatmentPage';

export default function Microneedling() {
  return (
    <TreatmentPage
      breadcrumb="MEDICAL MICRONEEDLING"
      heroTitle="Smoother, Firmer, Radiant Skin with Medical Microneedling"
      heroSubtext="At Reform Aesthetics and Dental Clinic, we offer advanced medical microneedling using the world-renowned DermaPen® device, designed to rejuvenate skin texture, boost collagen and restore a healthy, radiant glow."
      heroImage="/images/microneedling-hero-2.png"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Advanced Collagen Stimulation"
      aboutBody="DermaPen® is the world's leading medical microneedling device, clinically tested and FDA approved for safe, precise skin rejuvenation. This advanced treatment creates controlled micro-channels within the skin to stimulate natural collagen and elastin production. Suitable for both face and body, microneedling improves skin tone, texture and firmness, delivering smoother, brighter and more youthful-looking results over time. Results continue to improve for up to six months following treatment, with minimal downtime."
      checklistItems={[
        'Reduces acne and surgical scars',
        'Improves pigmentation and enlarged pores',
        'Softens fine lines and wrinkles',
        'Treats stretch marks',
        'Suitable for all skin types',
      ]}
      circularImage="/images/microneedling-treatment.jpg"
      circularImageAlt="Medical microneedling treatment in progress"
      benefitsHeading="Stimulate Natural Renewal for Long-Lasting Results"
      benefitsBody="Medical microneedling works with your body's own healing response to deliver progressive, natural rejuvenation."
      benefitsImage="/images/microneedling-hero.jpg"
      benefitsImageAlt="Medical microneedling results"
      benefits={[
        {
          title: 'Boost Collagen Production',
          desc: 'Encourages firmer, smoother-looking skin.',
        },
        {
          title: 'Improve Texture & Tone',
          desc: 'Refines pores and reduces visible imperfections.',
        },
        {
          title: 'Face & Body Treatment',
          desc: 'Effective for multiple skin concerns across different areas.',
        },
        {
          title: 'Minimal Downtime',
          desc: 'A quick, minimally invasive procedure with little disruption.',
        },
      ]}
    />
  );
}
