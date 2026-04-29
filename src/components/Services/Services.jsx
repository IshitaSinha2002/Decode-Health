import ServiceCard from "../ServiceCard/ServiceCard.jsx";
import {
  Stethoscope,
  Calendar,
  Activity,
  Apple,
  Dumbbell,
  HeartPulse,
  Brain,
  BarChart3,
} from "lucide-react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      icon: <Stethoscope />,
      title: "Smart Assistance",
      desc: "24/7 AI-driven clinical support for immediate health inquiries and data synthesis.",
    },
    {
      icon: <Calendar />,
      title: "Menstrual Health",
      desc: "Sophisticated hormonal cycle tracking with predictive symptom modeling.",
    },
    {
      icon: <Activity />,
      title: "Weight & Metabolism",
      desc: "Real-time metabolic analysis and weight management based on glycemic response.",
    },
    {
      icon: <Apple />,
      title: "Nutrition Intelligence",
      desc: "Precision nutrition mapping optimized for your unique gut microbiome profile.",
    },
    {
      icon: <Dumbbell />,
      title: "Fitness & Recovery",
      desc: "Adaptive workout regimens synchronized with biometric recovery scores.",
    },
    {
      icon: <HeartPulse />,
      title: "Symptom Checker",
      desc: "Differential diagnosis logic using world-class clinical databases.",
    },
    {
      icon: <Brain />,
      title: "Mental Health",
      desc: "AI-guided cognitive behavioral support and stress resilience tracking.",
    },
    {
      icon: <BarChart3 />,
      title: "Analytics",
      desc: "Visual clinical trend analysis and long-term health trajectory forecasting.",
    },
  ];

  return (
    <section className="services">
      <h2>Precision Health Services</h2>
      <p>
        Access specialized clinical intelligence modules designed for comprehensive
        wellness management.
      </p>

      <div className="grid">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}