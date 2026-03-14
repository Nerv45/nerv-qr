import { motion } from "framer-motion";
import { Zap, Palette, Download, Monitor } from "lucide-react";

const features = [
  { icon: Zap, title: "Instant Generation", description: "Generate QR codes in real time as you type." },
  { icon: Palette, title: "Custom Colors", description: "Choose any color for your QR code." },
  { icon: Download, title: "Download as PNG", description: "Save your QR code instantly." },
  { icon: Monitor, title: "Works Everywhere", description: "Fully responsive for desktop and mobile." },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Powerful Features
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground text-center mb-16 text-lg"
      >
        Everything you need to create perfect QR codes
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="surface-elevated card-border rounded-xl p-6 group hover:glow-primary-sm transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
