import React, { useEffect, useRef, useState } from 'react';
import { Users, Clock, Star, Shield, CheckCircle, Zap, Target, Award } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Users,
      title: "Missed Lead Rescue",
      description: "Instantly follow up on every inquiry (web, phone, email, DM), in English and French.",
      features: ["Instant response automation", "Bilingual templates", "Multi-channel integration"],
    },
    {
      icon: Clock,
      title: "No-Show & Invoice Chaser",
      description: "Automated reminders for appointments and overdue invoices—clients pay and show up.",
      features: ["Smart reminder sequences", "Payment automation", "Appointment confirmations"],
    },
    {
      icon: Star,
      title: "Review Engine",
      description: "Request, track, and respond to reviews in both languages—boost your reputation and Google ranking.",
      features: ["Automated review requests", "Response management", "Reputation monitoring"],
    },
    {
      icon: Shield,
      title: "Bill 96 Compliance Review",
      description: "Ensure every message, reminder, and review request is 100% legal and ready for audit.",
      features: ["Legal compliance check", "Bilingual verification", "Audit-ready documentation"],
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Demo-first",
      description: "See your process automated before you commit",
    },
    {
      icon: Target,
      title: "Personal Support",
      description: "Expert support—no agency handoff",
    },
    {
      icon: Zap,
      title: "Fast ROI",
      description: "Fast setup, flat pricing, visible ROI",
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden" style={{ background: '#0F0F0F' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center card-glass rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 mr-2 text-[#E04500]" />
            <span className="text-sm font-medium text-[#EAEAEA]">Premium Automation Suite</span>
          </div>
          <h2 className="text-display text-[#EAEAEA] mb-6">
            Automations that 
            <span className="text-[#E04500]"> Pay for Themselves</span>
          </h2>
          <p className="text-subhead max-w-3xl mx-auto text-[#B4B4B4]">
            Transform your business operations with intelligent automation that works 24/7, 
            speaks both languages, and keeps you compliant.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`card-dark p-6 group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isVisible ? '0ms' : `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-[#E04500]">
                <service.icon className="w-8 h-8 text-[#0F0F0F]" />
              </div>
              
              <h3 className="text-lg font-semibold text-[#EAEAEA] mb-3">
                {service.title}
              </h3>
              
              <p className="text-[#B4B4B4] mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-[#777777]">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 text-[#E04500]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="card-dark p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#EAEAEA] text-center mb-12">
                Why Work With Simon Paris?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 bg-[#E04500]">
                      <benefit.icon className="w-10 h-10 text-[#0F0F0F]" />
                    </div>
                    <h4 className="text-xl font-semibold text-[#EAEAEA] mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-[#B4B4B4] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <button className="btn-primary px-10 py-4">
                  Start Your Automation Journey
                </button>
                
                
                <p className="text-[#B4B4B4] mt-6 max-w-2xl mx-auto leading-relaxed">
                  I'm not just solving today's admin headaches—I'm helping Québec businesses get ready for the next wave of AI-driven growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
