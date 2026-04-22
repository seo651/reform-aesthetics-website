import { TreatmentPage } from '@/components/TreatmentPage';

export default function PRP() {
  return (
    <TreatmentPage
      breadcrumb="PRP HAIR & SKIN"
      heroTitle="Rejuvenate Hair & Skin with Platelet-Rich Plasma"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, we harness your body's own regenerative power to stimulate hair growth and renew skin vitality. PRP therapy delivers natural, gradual results with minimal risk."
      heroImage="/images/vampire-facial-hero.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Platelet-Rich Plasma Therapy"
      aboutBody="Platelet-Rich Plasma (PRP) therapy is a cutting-edge regenerative treatment that uses your own blood to stimulate cellular repair and renewal. A small blood sample is taken, processed to concentrate growth factors and re-injected into targeted areas. For hair loss, PRP reactivates dormant follicles and encourages new hair growth. For skin, it improves texture, tone and elasticity, delivering a refreshed, rejuvenated appearance."
      checklistItems={[
        'Uses your own natural growth factors',
        'Stimulates hair follicle activity',
        'Improves skin texture and elasticity',
        'Reduces fine lines and improves tone',
        'Minimal risk and downtime',
      ]}
      circularImage="/images/vampire-facial-treatment.jpg"
      circularImageAlt="PRP vampire facial treatment in progress"
      benefitsHeading="Harness Natural Healing for Hair & Skin Renewal"
      benefitsBody="PRP therapy is a safe, natural approach to rejuvenation, using your body's own resources to restore and revitalise."
      benefitsImage="/images/vampire-facial-result.jpg"
      benefitsImageAlt="PRP vampire facial result"
      benefits={[
        {
          title: 'Stimulate Hair Regrowth',
          desc: 'Reactivates dormant follicles and improves density.',
        },
        {
          title: 'Rejuvenate Skin',
          desc: 'Enhances texture, tone and overall skin quality.',
        },
        {
          title: 'Natural Growth Factors',
          desc: 'Fully biocompatible using your own blood plasma.',
        },
        {
          title: 'Progressive, Lasting Results',
          desc: 'Gradual improvement over multiple sessions.',
        },
      ]}
    />
  );
}
