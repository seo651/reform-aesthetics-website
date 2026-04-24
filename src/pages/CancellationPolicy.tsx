import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CancellationPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[38vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery-1.jpg" alt="Cancellation Policy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[11px] font-sans font-semibold tracking-[0.12em] text-white/90 uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5b1a1]" />
              HOME
              <span className="text-white/40">/</span>
              CANCELLATION POLICY
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5b1a1]" />
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[58px] text-white leading-tight"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
          >
            Cancellation Policy
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-gray max-w-none font-sans text-[#363636]" style={{ lineHeight: '1.8' }}>

            <p className="text-[15px] leading-relaxed mb-8">
              We understand that plans can change. This policy explains what we ask of our patients when cancelling or rescheduling appointments, and why this matters for the smooth running of our clinic.
            </p>

            <h2 className="text-2xl sm:text-3xl mb-4 mt-10 text-black" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}>
              Notice Required
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              We kindly ask that you give us at least <strong>24 hours' notice</strong> if you need to cancel or reschedule a standard appointment. For longer sessions, such as hygiene treatments or combined procedures, we require a minimum of <strong>48 hours' notice</strong>.
            </p>
            <p className="text-[15px] leading-relaxed mb-8">
              Cancellations can be made by phone, email, or in person during clinic hours.
            </p>

            <h2 className="text-2xl sm:text-3xl mb-4 mt-10 text-black" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}>
              Late Cancellations and Missed Appointments
            </h2>
            <p className="text-[15px] leading-relaxed mb-4">
              If you cancel with less notice than required, or do not attend your appointment without prior notice, a cancellation fee may apply. The fee will vary depending on the length and type of treatment booked.
            </p>
            <p className="text-[15px] leading-relaxed mb-8">
              This policy is in place because late cancellations and missed appointments result in clinical time that cannot be offered to other patients who may be waiting for care.
            </p>

            <h2 className="text-2xl sm:text-3xl mb-4 mt-10 text-black" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}>
              Exceptional Circumstances
            </h2>
            <p className="text-[15px] leading-relaxed mb-8">
              We recognise that genuine emergencies happen, including unexpected illness, travel disruption, or family emergencies. If you find yourself in such a situation, please contact us as soon as possible so we can do our best to accommodate you. We will always consider the circumstances on a case-by-case basis.
            </p>

            <h2 className="text-2xl sm:text-3xl mb-4 mt-10 text-black" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}>
              Appointment Reminders
            </h2>
            <p className="text-[15px] leading-relaxed mb-8">
              We send text message reminders ahead of your appointment as a courtesy. However, delivery of these messages depends on multiple service providers and cannot always be guaranteed. Patients should not rely solely on reminder messages to confirm their appointment. We are unable to accept responsibility for missed appointments due to non-delivery of reminders.
            </p>

            <h2 className="text-2xl sm:text-3xl mb-4 mt-10 text-black" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}>
              Clinic Hours
            </h2>
            <div className="bg-[#efeae7] rounded-2xl p-6 mb-8 text-sm font-sans space-y-2">
              {[
                { day: 'Monday', hours: 'Closed' },
                { day: 'Tuesday', hours: '8:30 am – 5:30 pm' },
                { day: 'Wednesday', hours: 'Closed' },
                { day: 'Thursday', hours: 'Closed' },
                { day: 'Friday', hours: '8:30 am – 5:00 pm' },
                { day: 'Saturday', hours: '10:00 am – 3:00 pm' },
                { day: 'Sunday', hours: '10:00 am – 3:00 pm' },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between items-center gap-4">
                  <span className={hours === 'Closed' ? 'text-gray-400' : 'text-[#363636]'}>{day}</span>
                  <span className={hours === 'Closed' ? 'text-gray-400' : 'text-[#c5b1a1] font-medium'}>{hours}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl sm:text-3xl mb-4 mt-10 text-black" style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}>
              Contact Us
            </h2>
            <p className="text-[15px] leading-relaxed mb-2">If you have any questions about this policy, please get in touch:</p>
            <ul className="text-[15px] space-y-1 list-none pl-0 mb-10">
              <li><strong>Address:</strong> 18 De Montfort Street, Leicester LE1 7GL</li>
              <li><strong>Phone:</strong> <a href="tel:01163800318" className="text-[#c5b1a1] hover:underline">0116 3800318</a></li>
              <li><strong>Email:</strong> <a href="mailto:info@reformmedical.co.uk" className="text-[#c5b1a1] hover:underline">info@reformmedical.co.uk</a></li>
            </ul>

            <div className="pt-6 border-t border-gray-200">
              <a
                href="https://pearlportal.net/Portal/rad/OnlineBooking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black text-white text-[11px] font-sans font-semibold tracking-[0.12em] uppercase hover:bg-[#363636] transition-colors"
              >
                BOOK AN APPOINTMENT
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
