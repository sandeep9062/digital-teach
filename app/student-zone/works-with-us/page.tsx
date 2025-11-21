// app/student-zone/works-with-us/page.tsx
"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { StudentZoneHeader } from "../components/StudentZoneHeader";
import { FormField, SelectField, TextareaField } from "./components";
import { Send, CheckCircle } from "lucide-react";
import {
  useSubmitWorkWithUsFormMutation,
  WorkWithUsPayload,
} from "@/services/workWithUsApi";

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div variants={itemVariants}>{children}</motion.div>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6 mt-12 first:mt-0 border-b pb-3 border-gray-200 dark:border-gray-700">
    {children}
  </h2>
);

const formVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WorkWithUsPage() {
  const [submitWorkWithUsForm, { isLoading, isSuccess }] =
    useSubmitWorkWithUsFormMutation();

  const [formData, setFormData] = useState<WorkWithUsPayload>({
    fullName: "",
    email: "",
    phone: "",
    altPhone: "",
    dob: "",
    city: "",
    position: "Select Position",
    experience: "Experience Level",
    expectedSalary: undefined,
    availability: "Availability",
    qualification: "",
    college: "",
    specialization: "",
    graduationYear: undefined,
    skills: "",
    projects: "",
    linkedin: "",
    github: "",
    portfolio: "",
    designProfile: "",
    coverLetter: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev: WorkWithUsPayload) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await submitWorkWithUsForm(formData).unwrap();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Failed to submit form:", error);
      // You can add user-facing error handling here
    }
  };

  return (
    <>
      <StudentZoneHeader
        title="Work With Us"
        description="Submit your full profile — developers, designers, interns, and freshers welcome."
      />

      <section className="min-h-screen -mt-20 pb-32 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 pt-12">
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="show"
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900/50 p-10 rounded-3xl shadow-2xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-200/80 dark:border-gray-800"
          >
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 flex items-center gap-4 rounded-xl bg-green-50 dark:bg-green-900/20 p-5 border border-green-200 dark:border-green-700"
              >
                <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-green-800 dark:text-green-200">
                    Application Submitted!
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    We have received your profile and will get back to you if
                    you are shortlisted.
                  </p>
                </div>
              </motion.div>
            )}

            <Section>
              <SectionTitle>Personal Information</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <FormField
                  required
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
                <FormField
                  required
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                />
                <FormField
                  required
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 12345 67890"
                />
                <FormField
                  label="Alternative Phone"
                  type="tel"
                  name="altPhone"
                  value={formData.altPhone}
                  onChange={handleChange}
                  placeholder="Another contact number"
                />
                <FormField
                  required
                  label="Date of Birth"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
                <FormField
                  required
                  label="City / Location"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g., Delhi, India"
                />
              </div>
            </Section>

            <Section>
              <SectionTitle>Job / Internship Details</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <SelectField
                  required
                  label="Select Position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  options={[
                    "Select Position",
                    "Frontend Developer",
                    "Backend Developer",
                    "Full Stack Developer",
                    "UI/UX Designer",
                    "Graphic Designer",
                    "Video Editor",
                    "Marketing Intern",
                    "Project Management Intern",
                  ]}
                />
                <SelectField
                  label="Experience Level"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  options={[
                    "Experience Level",
                    "Fresher",
                    "0–1 year",
                    "1–3 years",
                    "3–5 years",
                    "Senior Level (5+ years)",
                  ]}
                />
                <FormField
                  label="Expected Salary (₹)"
                  type="number"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleChange}
                  placeholder="e.g., 50000"
                />
                <SelectField
                  label="Availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  options={[
                    "Availability",
                    "Immediate Joiner",
                    "Within 15 days",
                    "Within 30 days",
                  ]}
                />
              </div>
            </Section>

            <Section>
              <SectionTitle>Education</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <FormField
                  required
                  label="Highest Qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="e.g., B.Tech in CSE"
                />
                <FormField
                  label="College / University"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Name of your institution"
                />
                <FormField
                  label="Specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  placeholder="e.g., Computer Science"
                />
                <FormField
                  label="Graduation Year"
                  type="number"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  placeholder="e.g., 2024"
                />
              </div>
            </Section>

            <Section>
              <SectionTitle>Skills & Experience</SectionTitle>
              <div className="space-y-6">
                <TextareaField
                  label="Technical & Soft Skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g., React, Node.js, Figma, Communication"
                  rows={3}
                />
                <TextareaField
                  label="Projects, Internships, Roles (If Any)"
                  name="projects"
                  value={formData.projects}
                  onChange={handleChange}
                  placeholder="Describe your previous work, responsibilities, and achievements."
                  rows={4}
                />
              </div>
            </Section>

            <Section>
              <SectionTitle>Portfolio & Links</SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <FormField
                  label="LinkedIn Profile"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="linkedin.com/in/yourprofile"
                />
                <FormField
                  label="GitHub Profile"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="github.com/yourusername"
                />
                <FormField
                  label="Portfolio Website"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="yourportfolio.com"
                />
                <FormField
                  label="Behance / Dribbble"
                  name="designProfile"
                  value={formData.designProfile}
                  onChange={handleChange}
                  placeholder="design.com/yourprofile"
                />
              </div>
            </Section>

            <Section>
              <SectionTitle>Cover Letter</SectionTitle>
              <TextareaField
                label="Why should we hire you?"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Tell us what makes you the best fit for this role."
                rows={5}
              />
            </Section>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 order-2 sm:order-1">
                We reply to all shortlisted candidates within 7 days.
              </p>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 order-1 sm:order-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                <Send className="mr-2 h-5 w-5" />
                {isLoading ? "Submitting..." : "Submit Application"}
              </button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      <style jsx>{`
        .form-input,
        .form-textarea {
          @apply w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800/60 border-gray-300 dark:border-gray-700 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-gray-50 dark:focus:bg-gray-800;
        }
      `}</style>
    </>
  );
}
