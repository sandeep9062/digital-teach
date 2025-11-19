"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const CTAWithForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 1200));
      toast.success("Message sent successfully!");
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let’s Build Something Amazing
          </h2>
          <p className="mt-3 text-white/90 text-lg md:text-xl">
            Have a project idea? Contact us today and let's turn it into reality.
          </p>
        </div>

        <AnimatePresence>
          {submitted ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white text-gray-900 rounded-xl shadow-xl p-8 md:p-12 text-center max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
              <p>Your message has been successfully sent. We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-gray-900 max-w-3xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
                />
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm mb-6"
              ></textarea>

              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-10 py-3 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-600 transition"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default CTAWithForm;
