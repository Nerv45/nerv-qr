import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Download, RotateCcw, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QRCode from "qrcode";

const QRGenerator = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#6366f1");
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = useCallback(async () => {
    if (!text.trim()) {
      setQrDataUrl(null);
      return;
    }
    try {
      const url = await QRCode.toDataURL(text, {
        width: 280,
        margin: 2,
        color: {
          dark: color,
          light: "#00000000",
        },
      });
      setQrDataUrl(url);
    } catch {
      setQrDataUrl(null);
    }
  }, [text, color]);

  useEffect(() => {
    generateQR();
  }, [generateQR]);

  const handleDownload = () => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = qrDataUrl;
    link.click();
  };

  const handleReset = () => {
    setText("");
    setColor("#6366f1");
    setQrDataUrl(null);
  };

  return (
    <section id="generator" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="surface-elevated card-border rounded-2xl p-6 md:p-10 glow-primary"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Controls */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">QR Code Generator</h2>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground font-medium">Enter URL or Text</label>
                <Input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="https://example.com"
                  className="bg-background/50 border-border h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground font-medium">QR Code Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-12 h-12 rounded-lg cursor-pointer border-none bg-transparent"
                  />
                  <span className="text-sm text-muted-foreground font-mono">{color}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  onClick={handleDownload}
                  disabled={!qrDataUrl}
                  className="flex-1 glow-primary-sm transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download PNG
                </Button>
                <Button variant="outline" onClick={handleReset} className="transition-all duration-200 hover:bg-card">
                  <RotateCcw className="mr-2 w-4 h-4" />
                  Reset
                </Button>
              </div>
            </div>

            {/* Right: Preview */}
            <div className="flex flex-col items-center justify-center">
              <label className="text-sm text-muted-foreground font-medium mb-4">Your QR Code</label>
              <div className="w-72 h-72 rounded-xl bg-background/30 card-border flex items-center justify-center overflow-hidden">
                {qrDataUrl ? (
                  <motion.img
                    key={qrDataUrl}
                    src={qrDataUrl}
                    alt="Generated QR Code"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-muted-foreground">
                    <QrCode className="w-12 h-12 opacity-30" />
                    <p className="text-sm text-center px-4">Please enter text to generate a QR code</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <canvas ref={canvasRef} className="hidden" />
        </motion.div>
      </div>
    </section>
  );
};

export default QRGenerator;
