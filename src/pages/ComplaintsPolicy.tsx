import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ComplaintsPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[38vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery-1.jpg" alt="Complaints Policy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[11px] font-sans font-semibold tracking-[0.12em] text-white/90 uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5b1a1]" />
              HOME
              <span className="text-white/40">/</span>
              COMPLAINTS POLICY
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5b1a1]" />
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[58px] text-white leading-tight"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Complaints Policy
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-gray max-w-none font-sans text-[#363636]" style={{ lineHeight: '1.8' }}>

            <p className="text-[15px] leading-relaxed mb-8">
              At Reform Aesthetics and Dental, we are committed to providing the highest standard of care. We take all feedback seriously and aim to resolve any concerns promptly, fairly, and with respect for every patient.
            </p>

            <h2 className="text-2xl sm:text-3xl mb-4 mt-10 text-black" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}>
              How to Make a Complaint
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              If you are dissatisfied with any aspect of our service, you are welcome to raise your concern through any of the following:
            </p>
            <ul className="text-[15px] space-y-2 mb-8 pl-5 list-disc">
              <li>Speaking directly with a member of our team in person</li>
              <li>Writing to us at our Leicester address</li>
              <li>Emailing us at <a href="mailto:info@reformmedical.co.uk" className="text-[#c5b1a1] hover:underline">info@reformmedical.co.uk</a></li>
              <li>Calling us on <a href="tel:01163800318" className="text-[#c5b1a1] hover:underline">0116 3800318</a></li>
            </ul>
            <p className="text-[15px] leading-relaxed mb-8">
              Our Complaints Manager is <strong>Dr Priya Sonia Patel</strong>, who oversees all complaints received at the clinic.
            </p>

            <h2 className="text-2xl sm:text-3xl mb-4 mt-10 text-black" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}>
              How We Handle Complaints
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              Once a complaint is received, we commit to the following process:
            </p>
            <ul className="text-[15px] space-y-2 mb-4 pl-5 list-disc">
              <li>We will acknowledge your complaint <strong>in writing within 3 working days</strong></li>
              <li>We will investigate your complaint thoroughly and aim to provide a full response <strong>within 10 working days</strong></li>
              <li>A written record of all complaints is maintained in accordance with best practice</li>
              <li>Responses may be provided in writing or via a meeting, depending on the nature of the complaint</li>
            </ul>
            <p className="text-[15px] leading-relaxed mb-8">
              All complaints are handled in strict accordance with GDPR and patient confidentiality guidelines. Making a complaint will never affect the standard of care you receive from us.
            </p>

            <h2 className="text-2xl sm:text-3xl mb-4 mt-10 text-black" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}>
              If You Are Not Satisfied
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              If you remain dissatisfied following our response, you have the right to escalate your complaint to an independent body:
            </p>
            <div className="bg-[#efeae7] rounded-2xl p-6 mb-8 space-y-4 text-[15px]">
              <div>
                <p className="font-semibold text-black mb-1">Parliamentary and Health Service Ombudsman</p>
                <a href="https://www.ombudsman.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#c5b1a1] hover:underline">www.ombudsman.org.uk</a>
              </div>
              <div>
                <p className="font-semibold text-black mb-1">The Dental Complaints Service</p>
                <a href="https://www.dentalcomplaints.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#c5b1a1] hover:underline">www.dentalcomplaints.org.uk</a>
                <p className="mt-1">Tel: <a href="tel:02082530800" className="text-[#c5b1a1] hover:underline">020 8253 0800</a></p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl mb-4 mt-10 text-black" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}>
              Contact Us
            </h2>
            <p className="text-[15px] leading-relaxed mb-2">To submit a complaint or ask any questions about this policy:</p>
            <ul className="text-[15px] space-y-1 list-none pl-0 mb-10">
              <li><strong>Address:</strong> 18 De Montfort Street, Leicester LE1 7GL</li>
              <li><strong>Phone:</strong> <a href="tel:01163800318" className="text-[#c5b1a1] hover:underline">0116 3800318</a></li>
              <li><strong>Email:</strong> <a href="mailto:info@reformmedical.co.uk" className="text-[#c5b1a1] hover:underline">info@reformmedical.co.uk</a></li>
            </ul>

            <div className="pt-6 border-t border-gray-200">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black text-white text-[11px] font-sans font-semibold tracking-[0.12em] uppercase hover:bg-[#363636] transition-colors"
              >
                CONTACT US
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
