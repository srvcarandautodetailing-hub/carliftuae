"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";

interface FormState {
  name: string;
  phone: string;
  fromLocation: string;
  toLocation: string;
  preferredTime: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  fromLocation: "",
  toLocation: "Business Bay, Dubai",
  preferredTime: "7:00 AM",
  message: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function buildWhatsAppMessage(data: FormState): string {
    const lines = [
      "Hello Car Lift UAE! I'd like to book a car lift.",
      "",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `From: ${data.fromLocation}`,
      `To: ${data.toLocation}`,
      `Preferred Time: ${data.preferredTime}`,
    ];
    if (data.message.trim()) {
      lines.push(`Message: ${data.message.trim()}`);
    }
    return lines.join("\n");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = buildWhatsAppMessage(form);
    const href = formatWhatsAppHref(BUSINESS.whatsapp, msg);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150";

  const labelClass = "block text-sm font-semibold text-slate-700 mb-1.5";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Car lift booking form"
      className="space-y-5"
    >
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="booking-name" className={labelClass}>
            Your Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="booking-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="e.g. Ahmed Al Rashid"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="booking-phone" className={labelClass}>
            Phone / WhatsApp <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="+971 50 XXX XXXX"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* From + To */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="booking-from" className={labelClass}>
            Pickup Location <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="booking-from"
            name="fromLocation"
            type="text"
            required
            placeholder="e.g. Al Majaz, Sharjah"
            value={form.fromLocation}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="booking-to" className={labelClass}>
            Drop-off Location
          </label>
          <input
            id="booking-to"
            name="toLocation"
            type="text"
            placeholder="e.g. Business Bay, Dubai"
            value={form.toLocation}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Preferred Time */}
      <div>
        <label htmlFor="booking-time" className={labelClass}>
          Preferred Departure Time
        </label>
        <select
          id="booking-time"
          name="preferredTime"
          value={form.preferredTime}
          onChange={handleChange}
          className={inputClass}
        >
          <optgroup label="Morning">
            <option value="6:30 AM">6:30 AM – Early morning</option>
            <option value="7:00 AM">7:00 AM – Standard morning</option>
            <option value="7:30 AM">7:30 AM – Mid morning</option>
            <option value="8:00 AM">8:00 AM – Late morning</option>
          </optgroup>
          <optgroup label="Evening Return">
            <option value="5:00 PM">5:00 PM – Early evening</option>
            <option value="5:30 PM">5:30 PM – Standard evening</option>
            <option value="6:00 PM">6:00 PM – Late evening</option>
            <option value="6:30 PM">6:30 PM – Last evening</option>
          </optgroup>
          <option value="Both ways (morning + evening)">Both ways – morning &amp; evening</option>
          <option value="Flexible – discuss on WhatsApp">Flexible – discuss on WhatsApp</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="booking-message" className={labelClass}>
          Additional Info <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="booking-message"
          name="message"
          rows={3}
          placeholder="e.g. Ladies-only preference, monthly package, specific landmarks..."
          value={form.message}
          onChange={handleChange}
          className={inputClass + " resize-none"}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="whatsapp"
        size="lg"
        className="w-full"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Send Booking Request via WhatsApp
        <Send className="h-4 w-4 ml-1 opacity-70" aria-hidden="true" />
      </Button>

      <p className="text-xs text-slate-500 text-center leading-relaxed">
        Clicking &ldquo;Send&rdquo; will open WhatsApp with your details pre-filled.
        We respond within 60 minutes during business hours.
      </p>
    </form>
  );
}
