export default function FactoryIcon({ className, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      {/* Building silhouette */}
      <path d="M2 20h20" />
      <path d="M4 20V8l5-3v5l5-3v5l5-3v16" />
      {/* Smokestack */}
      <path d="M17 12V4h2v8" />
      <path d="M18 2v1" />
      {/* Solar panel on roof */}
      <path d="M4 6h4" strokeWidth="2" />
      {/* Gear symbol */}
      <circle cx="10" cy="15" r="2" />
      <path d="M10 12v1" />
      <path d="M10 17v1" />
      <path d="M12.5 13.5l-1 1" />
      <path d="M7.5 16.5l1-1" />
      <path d="M13 15h-1" />
      <path d="M8 15H7" />
    </svg>
  );
}
