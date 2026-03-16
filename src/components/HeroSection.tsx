import { Phone, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-physio.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />

      <div className="container-main relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 fill-primary text-primary" />
            4.9 Rating · 16 Reviews · Open 24 Hours
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="heading-hero text-foreground mb-6"
          >
            Expert Physiotherapy for Pain Relief & Faster Recovery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            Harsh Physio Clinic provides personalized treatment plans, advanced therapy techniques, and guided programs to help you regain mobility, strength, and a pain-free lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:-translate-y-0.5 transition-transform text-base"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <a
              href="tel:+916391989878"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground px-6 py-3 rounded-lg font-medium hover:-translate-y-0.5 transition-transform text-base"
              style={{ boxShadow: "0 0 0 1px hsl(var(--border))" }}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
