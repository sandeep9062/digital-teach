"use client";

import { useEffect, useState } from "react";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


export default function PopupFormModal() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

 // const [addPopUpForm, { isLoading }] = useAddPopUpFormMutation();

  // Show popup once per session
  useEffect(() => {
    const hasShown = localStorage.getItem("popupShown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("popupShown", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      if (file) formData.append("file", file);

     // await addPopUpForm(formData).unwrap();

     // toast.success("Your enquiry has been submitted!");
      setSubmitted(true);
      setTimeout(() => setShow(false), 2000);
    } catch (error) {
      const err = error as { data?: { message?: string } };
     // toast.error(err.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setShow(false);
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setFile(null);
  };

  const countries = [
    "India",
    "USA",
    "UK",
    "Canada",
    "Australia",
    "UAE",
    "Other",
  ];
  const contactMethods = ["Email", "WhatsApp", "Phone"];
  const treatments = [
    "Dental Implants",
    "Root Canal",
    "Smile Design",
    "Braces / Invisalign",
    "Full Mouth Rehabilitation",
    "Teeth Whitening",
    "Other",
  ];
  const cities = [
    "Delhi",
    "Mumbai",
    "Chandigarh",
    "Bangalore",
    "Hyderabad",
    "Goa",
  ];
  const budgets = ["$500 - $1000", "$1000 - $2000", "$2000 - $5000", "$5000+"];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl bg-[#1e1e1f] text-white rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              className="absolute text-white top-4 right-4 hover:text-gray-400"
              onClick={handleClose}
            >
              <X className="w-6 h-6" />
            </button>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="thankyou"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-6 text-center"
                >
                  <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
                  <p>Your message has been successfully sent. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let’s Build Something Amazing
          </h2>
          <p className="mt-3 text-primary-foreground/90 text-lg md:text-xl">
            Have a project idea? Contact us today and let's turn it into reality.
          </p>
        </div>

                  <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 text-card-foreground max-w-3xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-ring transition shadow-sm"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-5 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-ring transition shadow-sm"
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
                  className="w-full px-5 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-ring transition shadow-sm"
                />
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-5 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-ring transition shadow-sm"
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="w-full px-5 py-3 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-ring transition shadow-sm mb-6"
              ></textarea>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground font-semibold px-10 py-3 rounded-xl shadow-lg hover:bg-primary/90 transition"
              >
                Send Message
              </motion.button>
            </motion.form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
