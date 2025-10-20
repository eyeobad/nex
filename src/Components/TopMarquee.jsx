import React from "react";

const marqueeItems = [
  { value: "info@nexdigital.name.ng", href: "mailto:info@nexdigital.name.ng" },
  { value: "+234 903 835 7956", href: "https://wa.me/2349038357956" },
  { value: "info@nexdigital.name.ng", href: "mailto:info@nexdigital.name.ng" },
  { value: "+234 903 835 7956", href: "https://wa.me/2349038357956" },
];

const TopMarquee = () => (
  <div className="marquee-container" role="marquee" aria-label="Contact ticker">
    <div className="marquee-fade-left" aria-hidden />
    <div className="marquee-track">
      {[0, 1].map((groupIndex) => (
        <div
          className="marquee-group"
          key={`marquee-group-${groupIndex}`}
          aria-hidden={groupIndex === 1 ? "true" : "false"} // second copy is decorative
        >
          {marqueeItems.map((item, idx) => {
            const content = <span className="marquee-pill-value">{item.value}</span>;
            const key = `pill-${groupIndex}-${idx}`;

            return item.href ? (
              <a
                key={key}
                href={item.href}
                className="marquee-pill"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {content}
              </a>
            ) : (
              <span key={key} className="marquee-pill">{content}</span>
            );
          })}
        </div>
      ))}
    </div>
    <div className="marquee-fade-right" aria-hidden />
  </div>
);

export default TopMarquee;
