"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQS, FAQ_CATEGORIES } from "@/data/faqs";
import { BUSINESS, formatWhatsAppHref, cn } from "@/lib/utils";

const ALL_LABEL = "All";

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_LABEL);

  const categories = [ALL_LABEL, ...FAQ_CATEGORIES];

  const filteredFaqs =
    activeCategory === ALL_LABEL
      ? FAQS
      : FAQS.filter((faq) => faq.category === activeCategory);

  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I have a question about Car Lift UAE service."
  );

  return (
    <section aria-labelledby="faq-heading" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            FAQs
          </p>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about car lift service in UAE
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="mb-8">
          <div
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
            role="tablist"
            aria-label="FAQ categories"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ accordion */}
        <div key={activeCategory} className="anim-fade">
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={`${faq.category}-${index}`}
                value={`faq-${activeCategory}-${index}`}
              >
                <AccordionTrigger className="text-base min-h-[56px]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA at bottom */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4 text-base">Still have questions?</p>
          <Button asChild variant="whatsapp" size="lg" className="min-h-[52px]">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat with us on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
