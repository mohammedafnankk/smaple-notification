
import React from "react";
const Certificate = ({ 
  donorName = "Donor Name", 
  date = "10-11-2025",
  directorName = "Saleel Sahal"
}) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 blur-3xl" />
      
      {/* Main certificate */}
      <div className="relative bg-cert-cream shadow-soft rounded-sm overflow-hidden">
        {/* Decorative top pattern */}
        <div className="h-16 bg-cert-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 400 60" preserveAspectRatio="none">
              <pattern id="leaf-pattern" x="0" y="0" width="40" height="60" patternUnits="userSpaceOnUse">
                <path d="M20 5 Q25 20 20 35 Q15 20 20 5" fill="white" opacity="0.3"/>
                <path d="M10 25 Q15 35 10 50 Q5 35 10 25" fill="white" opacity="0.2"/>
                <path d="M30 20 Q35 32 30 45 Q25 32 30 20" fill="white" opacity="0.25"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
            </svg>
          </div>
          
          {/* Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2 text-primary-foreground">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <div>
                <span className="font-elegant text-xl tracking-wide">Paadha</span>
                <p className="text-[10px] tracking-[0.2em] opacity-80 -mt-1">CONNECTING CARE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate content */}
        <div className="px-8 sm:px-12 py-10 sm:py-14">
          {/* Title section */}
          <div className="text-center mb-10 animate-reveal" style={{ animationDelay: '0.1s' }}>
            <p className="font-sans-custom text-[10px] tracking-[0.4em] text-muted-foreground uppercase mb-3">
              Certificate
            </p>
            <h1 className="font-display text-5xl sm:text-6xl text-cert-primary tracking-wide">
              APPRECIATION
            </h1>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/40 animate-draw-line" style={{ animationDelay: '0.3s' }} />
            <svg className="w-5 h-5 text-primary animate-float" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z"/>
            </svg>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/40 animate-draw-line" style={{ animationDelay: '0.3s' }} />
          </div>

          {/* Presentation text */}
          <p className="text-center font-elegant text-cert-dark/70 text-lg mb-3 animate-reveal" style={{ animationDelay: '0.4s' }}>
            This certificate is proudly presented to
          </p>

          {/* Donor Name with underline */}
          <div className="text-center mb-8 animate-reveal" style={{ animationDelay: '0.5s' }}>
            <h2 className="font-script text-5xl sm:text-6xl text-cert-primary mb-2">
              {donorName}
            </h2>
            <div className="w-56 h-0.5 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          {/* Description */}
          <p className="text-center font-elegant text-cert-dark/80 text-lg leading-relaxed max-w-md mx-auto mb-12 animate-reveal" style={{ animationDelay: '0.6s' }}>
            for their <span className="font-semibold text-cert-primary">selfless act of donating blood</span> through{" "}
            <span className="font-semibold">Paadha</span> and contributing to saving lives with compassion and generosity.
          </p>

          {/* Seal and Signature section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 animate-reveal" style={{ animationDelay: '0.7s' }}>
            {/* Date */}
            <div className="text-center order-2 sm:order-1">
              <p className="font-elegant text-xl text-cert-dark">{date}</p>
              <div className="w-24 h-px bg-cert-primary/30 mx-auto mt-2 mb-1" />
              <p className="font-sans-custom text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Date
              </p>
            </div>

            {/* Seal */}
            <div className="relative w-24 h-24 order-1 sm:order-2">
              <div className="absolute inset-0 rounded-full border-2 border-cert-primary flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-cert-primary/50 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-6 h-6 mx-auto text-cert-primary mb-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z"/>
                    </svg>
                    <p className="font-sans-custom text-[6px] tracking-wider text-cert-primary uppercase">Verified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="text-center order-3">
              <p className="font-script text-2xl text-cert-primary">{directorName}</p>
              <div className="w-24 h-px bg-cert-primary/30 mx-auto mt-2 mb-1" />
              <p className="font-sans-custom text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Director
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section with quote */}
        <div className="bg-cert-primary/5 px-8 py-6 border-t border-primary/10">
          <p className="text-center font-elegant text-sm text-cert-dark/70 italic animate-reveal" style={{ animationDelay: '0.8s' }}>
            "Your <span className="text-cert-primary font-semibold not-italic">one donation</span> can be someone's{" "}
            <span className="text-cert-primary font-semibold not-italic">second chance at life.</span>"
          </p>
        </div>

        {/* Bottom decorative bar */}
        <div className="h-3 bg-cert-primary" />
      </div>
    </div>
  );
};

export default Certificate;
