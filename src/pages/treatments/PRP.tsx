import { TreatmentPage } from '@/components/TreatmentPage';

export default function PRP() {
  return (
    <TreatmentPage
      breadcrumb="VAMPIRE FACIAL"
      heroTitle="Vampire Facial (PRP Therapy)"
      heroSubtext="A natural skin rejuvenation treatment that uses your body's own platelet-rich plasma to stimulate collagen, repair damaged skin, and restore a smoother, more youthful appearance."
      heroImage="/images/vampire-facial-hero.jpg"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Revitalise Your Skin with Advanced PRP Vampire Facial Treatment"
      aboutBody="At Reform Aesthetics and Dental Clinic, we offer advanced Vampire Facial (Platelet-Rich Plasma — PRP) therapy, a cutting-edge cosmetic treatment designed to rejuvenate the skin using your body's natural healing abilities. This treatment combines microneedling with platelet-rich plasma derived from your own blood, which is rich in growth factors that help repair tissue, boost collagen production, and improve overall skin quality. The result is firmer, brighter, smoother skin with improved texture and reduced signs of ageing."
      checklistItems={[
        'Stimulates natural collagen and elastin production',
        'Reduces fine lines, wrinkles, and enlarged pores',
        'Improves acne scars and uneven skin texture',
        'Enhances skin tone and overall radiance',
        'Minimally invasive treatment with little downtime',
      ]}
      circularImage="/images/vampire-facial-treatment.jpg"
      circularImageAlt="PRP vampire facial microneedling treatment"
      benefitsHeading="Restore Your Glow, Renew Your Confidence"
      benefitsBody="At Reform Aesthetics and Dental Clinic, the Vampire Facial offers a scientifically backed approach to skin rejuvenation using the regenerative power of your own blood."
      benefitsImage="/images/vampire-facial-result.jpg"
      benefitsImageAlt="PRP centrifuge platelet-rich plasma preparation"
      benefits={[
        {
          title: 'Natural Skin Rejuvenation',
          desc: 'PRP therapy stimulates the body\'s natural healing process, encouraging collagen production and improving skin firmness and elasticity.',
        },
        {
          title: 'Reduces Signs of Ageing',
          desc: 'Helps reduce the appearance of fine lines, wrinkles, sun damage, and dull skin for a smoother and more youthful complexion.',
        },
        {
          title: 'Improves Skin Texture & Scarring',
          desc: 'PRP combined with microneedling helps repair damaged skin tissue and improve acne scars, uneven texture, and enlarged pores.',
        },
        {
          title: 'Safe, Minimally Invasive Procedure',
          desc: 'Because the treatment uses your own plasma, the risk of allergic reaction is minimal — making it a safe and natural option.',
        },
      ]}
    />
  );
}
