"use client";

import React, { forwardRef, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

// ========= FORM FIELD =========
interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(({ label, ...props }, ref) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <input
      ref={ref}
      {...props}
      className="form-input"
    />
  </div>
));
FormField.displayName = "FormField";

// ========= SELECT FIELD =========
interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(({ label, options, ...props }, ref) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <select ref={ref} {...props} className="form-input">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
));
SelectField.displayName = "SelectField";

// ========= TEXTAREA FIELD =========
interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(({ label, ...props }, ref) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <textarea
      ref={ref}
      {...props}
      className="form-textarea"
    />
  </div>
));
TextareaField.displayName = "TextareaField";


export { FormField, SelectField, TextareaField };
