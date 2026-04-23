import { TreatmentPage } from '@/components/TreatmentPage';

export default function UnderEyeFiller() {
  return (
    <TreatmentPage
      breadcrumb="UNDER-EYE FILLER"
      heroTitle="Refresh Tired Eyes with Under-Eye Tear Trough Filler"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, we use precise filler placement to soften hollows, reduce dark circles and restore a bright, refreshed appearance to the delicate under-eye area."
      heroImage="/images/tear-trough-1.jpg"
      heroObjectPosition="center"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Tear Trough Treatment"
      aboutBody="The under-eye tear trough area is one of the most delicate regions of the face, and one of the first to show signs of fatigue and ageing. Our tear trough filler treatment uses ultra-fine hyaluronic acid filler, carefully placed by our experienced clinicians to correct hollowness, reduce the appearance of dark circles and smooth the transition between the lower eyelid and cheek. The result is a brighter, more rested and youthful-looking eye area."
      checklistItems={[
        'Softens under-eye hollows',
        'Reduces the appearance of dark circles',
        'Brightens and refreshes the eye area',
        'Creates smooth lid-cheek transition',
        'Subtle, immediate improvement',
      ]}
      circularImage="/images/tear-trough-2.jpg"
      circularImageAlt="Tear trough filler result"
      benefitsHeading="Restore Brightness to the Eye Area"
      benefitsBody="Tear trough filler is a highly specialised treatment that requires skill and precision. Our experienced team ensures safe, natural-looking results."
      benefitsImage="/images/tear-trough-3.jpg"
      benefitsImageAlt="Under-eye tear trough filler"
      benefits={[
        {
          title: 'Reduce Hollowness & Dark Circles',
          desc: 'Restores lost volume for a refreshed appearance.',
        },
        {
          title: 'Brighten the Eye Area',
          desc: 'Creates a more alert and rested look.',
        },
        {
          title: 'Precise, Expert Placement',
          desc: 'Delivered with meticulous care in a sensitive area.',
        },
        {
          title: 'Natural-Looking Results',
          desc: 'Subtle improvement that enhances without over-correcting.',
        },
      ]}
    />
  );
}
