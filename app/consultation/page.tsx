"use client";
import React, { useState, useEffect } from "react";
import { useAddConsultationMutation } from "@/services/consultationApi";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { format } from "date-fns";

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
];

export default function FreeConsultationPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [addConsultation, { isLoading, isSuccess, isError, error }] =
    useAddConsultationMutation();
  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setApiMessage("Your appointment has been booked successfully!");
      // Reset form fields
      setSelectedDate(undefined);
      setSelectedSlot("");
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
    }
    if (isError) {
      setApiMessage("Something went wrong. Please try again.");
    }
  }, [isSuccess, isError]);

  const handleBooking = async () => {
    if (!name || !email || !message || !phone)
      return alert("Please fill in all the fields.");
    if (!selectedDate || !selectedSlot)
      return alert("Please select date & time");

    const consultationData = {
      name,
      email,
      phone,
      message,
      date: format(selectedDate, "PPP"),
      timeSlot: selectedSlot,
    };
    await addConsultation(consultationData);
  };

  return (
    <div className="min-h-screen mt-30 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-darkbg2)] to-[var(--color-navy)] text-[var(--color-foreground)] flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl"
      >
        <Card className="bg-[var(--color-card)] backdrop-blur-xl border-[var(--color-border)] text-[var(--color-foreground)] shadow-xl rounded-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-[var(--color-primary)] tracking-tight">
              Book a Free Consultation
            </CardTitle>
            <p className="text-[var(--color-muted-foreground)] mt-2 max-w-2xl mx-auto">
              Choose a date and time that works best for you. Our experts are
              ready to help you with your business needs.
            </p>
          </CardHeader>

          <CardContent className="grid md:grid-cols-2 gap-12 py-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-transparent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-transparent"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border rounded-md p-2"
                  rows={5}
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col md:flex-row gap-8"
            >
              <Separator orientation="vertical" className="hidden md:block" />
              <div className="flex-1 space-y-8">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-lg shadow-lg"
                />

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-center">
                    Available Time Slots
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 px-4 rounded-lg border text-sm transition-all font-medium ${
                          selectedSlot === slot
                            ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] border-transparent"
                            : "border-[var(--color-border)] hover:bg-[var(--color-accent)]"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </CardContent>

          <div className="px-10 pb-8 text-center">
            {apiMessage && (
              <p
                className={`mb-4 text-lg ${
                  isError ? "text-red-500" : "text-green-500"
                }`}
              >
                {apiMessage}
              </p>
            )}
            <Button
              className="w-full max-w-md py-3 text-lg font-bold"
              onClick={handleBooking}
              disabled={isLoading}
            >
              {isLoading ? "Booking..." : "Confirm Appointment"}
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
