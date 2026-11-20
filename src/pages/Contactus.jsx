
import { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);

    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href =
      `mailto:info@al-dyar.com?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f8f5]">

      {/* PAGE HEADER */}
      <section className="border-b border-green-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16">

          <span className="inline-block rounded-full bg-green-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-green-800 sm:px-5 sm:text-xs">
            Get In Touch
          </span>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-green-950 sm:text-4xl md:text-5xl">
            Contact Our Team
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
            Have a question about our products or industrial solutions?
            Our team is ready to assist you. Get in touch with us
            and let's discuss how we can work together.
          </p>

          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-green-700" />

        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">

        <div className="grid overflow-hidden rounded-2xl border border-green-100 bg-white shadow-xl sm:rounded-3xl lg:grid-cols-5">

          {/* LEFT CONTACT INFORMATION */}
          <div className="relative overflow-hidden bg-green-950 p-6 text-white sm:p-8 md:p-10 lg:col-span-2 lg:p-12">

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-green-700/40" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-green-700/40" />

            <div className="relative z-10">

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white sm:mb-8 sm:h-16 sm:w-16">
                <img
                  src="/images/logoo-128x93.png"
                  alt="AL-DYAR Logo"
                  className="h-11 w-11 object-contain sm:h-12 sm:w-12"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300 sm:text-sm">
                Contact Information
              </p>

              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                Let's Start a Conversation
              </h2>

              <p className="mt-4 text-sm leading-7 text-green-100 sm:mt-5 sm:text-base sm:leading-8">
                We are here to answer your questions, provide product
                information, and discuss your business requirements.
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-9 space-y-7 sm:mt-12 sm:space-y-8">

                {/* EMAIL */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-800 text-xl sm:h-12 sm:w-12">
                    ✉
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold">Email Address</h3>

                    <a
                      href="mailto:info@al-dyar.com"
                      className="mt-2 block break-all text-sm text-green-200 transition hover:text-white"
                    >
                      info@al-dyar.com
                    </a>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-800 text-xl sm:h-12 sm:w-12">
                    ☎
                  </div>

                  <div>
                    <h3 className="font-bold">Phone Number</h3>

                    <a
                      href="tel:+201001787509"
                      className="mt-2 block text-sm text-green-200 transition hover:text-white"
                    >
                      +20 100 1787 509
                    </a>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-800 text-xl sm:h-12 sm:w-12">
                    📍
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold">Our Location</h3>

                    <p className="mt-2 text-sm leading-7 text-green-200">
                      New Administrative Capital,
                      Cairo, Egypt
                    </p>

                    <a
                      href="https://maps.app.goo.gl/oHryB9RAirByLQrx6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-semibold text-white underline underline-offset-4 hover:text-green-300"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

              </div>

              <div className="mt-10 border-t border-green-800 pt-6 sm:mt-14 sm:pt-7">
                <p className="text-sm leading-7 text-green-200">
                  AL-DYAR – Plastic Solutions for a Greener Tomorrow.
                  Building a sustainable future through quality and innovation.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="min-w-0 p-5 sm:p-8 md:p-10 lg:col-span-3 lg:p-12">

            <div className="mb-7 sm:mb-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700 sm:text-sm">
                Send Us a Message
              </p>

              <h2 className="mt-3 text-2xl font-bold text-green-950 sm:text-3xl">
                We'd Love to Hear From You
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                Please complete the form below and tell us how we can help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

              {/* NAME AND EMAIL */}
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">

                <div className="min-w-0">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name <span className="text-green-700">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full min-w-0 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100 sm:py-4"
                  />
                </div>

                <div className="min-w-0">
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address <span className="text-green-700">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full min-w-0 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100 sm:py-4"
                  />
                </div>

              </div>

              {/* PHONE NUMBER */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone Number <span className="text-green-700">*</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number (e.g. +20 100 123 4567)"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100 sm:py-4"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Subject <span className="text-green-700">*</span>
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100 sm:py-4"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Message <span className="text-green-700">*</span>
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us more about your requirements..."
                  required
                  className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-100 sm:py-4"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-800 px-6 py-4 font-bold text-white shadow-lg shadow-green-900/10 transition duration-300 hover:bg-green-950 hover:shadow-xl sm:w-auto sm:px-8"
              >
                Send Message
                <span>→</span>
              </button>

              <p className="text-xs leading-6 text-gray-400">
                * Required fields. Your email application will open
                when you submit this form.
              </p>

            </form>

          </div>
        </div>

      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-green-100 bg-white px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-2xl font-bold text-green-950 sm:text-3xl">
            Thank You for Your Interest in AL-DYAR
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
            We look forward to connecting with you and exploring
            opportunities to work together.
          </p>

        </div>
      </section>

    </main>
  );
}

export default ContactUs;



