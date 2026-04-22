import { TreatmentPage } from '@/components/TreatmentPage';

export default function BruxismTMJ() {
  return (
    <TreatmentPage
      breadcrumb="BRUXISM & TMJ"
      heroTitle="Relieve Jaw Pain & Teeth Grinding with Bruxism Treatment"
      heroSubtext="At Reform Aesthetics and Dental Clinic in Leicester, we treat bruxism and TMJ dysfunction using targeted anti-wrinkle injections to relax overactive jaw muscles, relieving pain and protecting your teeth."
      heroImage="/images/bruxism-profile-bw.jpg"
      aboutBadge="ABOUT TREATMENTS"
      aboutHeading="Jaw Muscle Relaxation Treatment"
      aboutBody="Bruxism is the involuntary clenching and grinding of teeth, most commonly occurring at night. This can lead to jaw pain, headaches, tooth wear and temporomandibular joint (TMJ) dysfunction. At Reform Aesthetics and Dental Clinic, anti-wrinkle injections are used to gently relax the masseter (jaw) muscles, significantly reducing grinding forces and alleviating associated discomfort. The treatment also has the aesthetic benefit of slimming an overly square jawline."
      checklistItems={[
        'Reduces teeth grinding and clenching',
        'Relieves jaw pain and headaches',
        'Treats TMJ dysfunction',
        'Slims an overly square jaw',
        'Quick, comfortable injection treatment',
      ]}
      circularImage="/images/bruxism-jaw-profile.jpg"
      circularImageAlt="Jaw profile after bruxism treatment"
      benefitsHeading="Relieve Pain & Protect Your Smile"
      benefitsBody="Bruxism treatment offers dual benefits — relieving discomfort and protecting dental health while optionally refining the jaw contour."
      benefitsImage="/images/bruxism-profile-bw.jpg"
      benefitsImageAlt="Slimmed jaw profile after bruxism treatment"
      benefits={[
        {
          title: 'Reduce Grinding & Clenching',
          desc: 'Significantly decreases jaw muscle overactivity.',
        },
        {
          title: 'Relieve Pain & Headaches',
          desc: 'Reduces associated jaw and head discomfort.',
        },
        {
          title: 'Protect Tooth Structure',
          desc: 'Lessens the forces that cause dental wear.',
        },
        {
          title: 'Optional Jaw Slimming Effect',
          desc: 'Reduces masseter bulk for a softer jaw profile.',
        },
      ]}
    />
  );
}
