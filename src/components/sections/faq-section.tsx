"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

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
    <section
      aria-labelledby="faq-heading"
      className="section-padding bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-10 lg:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.p
            variants={headingVariants}
            className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            FAQs
          </motion.p>

          <motion.h2
            id="faq-heading"
            variants={headingVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            variants={headingVariants}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Everything you need to know about car lift service in UAE
          </motion.p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mb-8"
        >
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
                    "shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
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
        </motion.div>

        {/* FAQ accordion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqs.map((faq, index) => (
                <motion.div key={`${faq.category}-${index}`} variants={itemVariants}>
                  <AccordionItem value={`faq-${activeCategory}-${index}`}>
                    <AccordionTrigger className="text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </AnimatePresence>

        {/* CTA at bottom */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-slate-600 mb-4 text-base">
            Still have questions?
          </p>
          <Button asChild variant="whatsapp" size="lg">
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
        </motion.div>
      </div>
    </section>
  );
}


