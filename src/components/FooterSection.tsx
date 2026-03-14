import { QrCode } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border/50 py-12 px-4">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <QrCode className="w-6 h-6 text-primary" />
        <div>
          <p className="font-semibold">QR Code Generator</p>
          <p className="text-sm text-muted-foreground">Fast and simple QR creation online</p>
        </div>
      </div>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#generator" className="hover:text-foreground transition-colors">Generator</a>
        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
