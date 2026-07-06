import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const mapUrl =
    "https://www.google.com/maps/place/Chandana+General+Stores/@13.370329,74.713438,17z/data=!4m6!3m5!1s0x3bbcbd006f30cea9:0x73ed94d546ada3be!8m2!3d13.370329!4d74.713438!16s%2Fg%2F11z87x1__z";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) return;

    const message = `Hi Chandana General Store,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919380864434?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setFormData({ name: "", phone: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-white py-14 scroll-mt-20 sm:py-20">
      <div className="mx-auto w-full px-4 sm:px-6 lg:w-[90%] lg:max-w-none lg:px-0">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="inline-block rounded-full bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 sm:tracking-[0.25em]">
            Contact
          </span>

          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-6 sm:text-4xl">
            Get in Touch With Us
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Call, WhatsApp, or send us a message for store enquiries, product
            availability, timing, or directions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Info */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm sm:rounded-3xl sm:p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Contact Details
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              We are happy to help you with your daily shopping needs. Reach out
              anytime during store hours.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex gap-4 rounded-2xl bg-white p-4 border border-slate-100 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Call Us</p>
                  <a
                    href="tel:+917204192287"
                    className="mt-1 inline-block text-sm font-semibold text-slate-600 hover:text-orange-600"
                  >
                    +91 72041 92287
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-4 border border-slate-100 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">WhatsApp</p>
                  <a
                    href="https://wa.me/919380864434"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-sm font-semibold text-slate-600 hover:text-orange-600"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-4 border border-slate-100 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Address</p>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-semibold leading-6 text-slate-600 transition hover:text-orange-600"
                  >
                    9PC7+968, Thenkanidiyoor, Udupi, Karnataka 576106
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-4 border border-slate-100 sm:p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <FaClock />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Store Timing
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Monday - Sunday
                  </p>
                  <p className="mt-2 text-sm font-semibold text-orange-600">
                    7:00 AM - 1:30 PM
                  </p>
                  <p className="text-sm font-semibold text-orange-600">
                    3:30 PM - 9:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Message Form */}
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <FaPaperPlane className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 sm:tracking-[0.25em]">
                  Send on WhatsApp
                </p>
                <h3 className="mt-1 text-xl font-bold text-slate-900">
                  Message the Store on WhatsApp
                </h3>
              </div>
            </div>

            {submitted ? (
              <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8 text-center">
                <p className="text-lg font-bold text-orange-700">
                  WhatsApp message opened!
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Complete sending the message in WhatsApp. We will respond by
                  call or WhatsApp soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700"
                >
                  <FaPaperPlane className="h-4 w-4" />
                  Send on WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
