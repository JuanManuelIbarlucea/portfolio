'use client';
import { FaPaperPlane } from 'react-icons/fa';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import useSectionInView from '@/hooks/use-section-in-view';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center scroll-mt-36"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      ref={ref}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 text-center -mt-4">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:jmibarlucea@gmail.com">
          jmibarlucea@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="group mt-10 flex flex-col"
        action={async (formData) => await sendEmail(formData)}
      >
        <input
          type="email"
          className="h-14 rounded-lg borderBlack px-4"
          placeholder="Your email"
          required
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          required
          maxLength={5000}
          name="senderMessage"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white outline-none rounded-full transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 "
        >
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
