import { motion } from "framer-motion";
import { Type, Palette, Download } from "lucide-react";

const steps = [
  { icon: Type, num: "1", title: "Enter your text or link", description: "Type any URL, text, email, or phone number." },
  { icon: Palette, num: "2", title: "Choose your QR code color", description: "Pick any color to match your brand." },
  { icon: Download, num: "3", title: "Download your QR code", description: "Save as PNG and use it anywhere." },
];

const HowItWorks = () => (
  <section className="py-24 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-16"
      >
        How It Works
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
              <s.icon className="w-7 h-7 text-primary" />
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {s.num}
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
