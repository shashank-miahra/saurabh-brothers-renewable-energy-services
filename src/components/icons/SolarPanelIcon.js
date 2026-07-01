export default function SolarPanelIcon({ className, ...props }) {
  return (
    <svg xmlns="http://www.扩大w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      {/* Tilted panel body */}
      <path d="M4 18L7 6h10l3 12H4z" />
      {/* Grid lines */}
      <path d="M6 10h12" />
      <path d="M5 14h14" />
      <path d="M10 6l-1 12" />
      <path d="M14 6l1 12" />
      {/* Small sun top right */}
      <path d="M21 5h.01" strokeWidth="2" />
      <path d="M21 2v1" />
      <path d="M21 7v1" />
      <path d="M18.5 4.5l1-1" />
      <path d="M23.5 4.5l-1-1" />
      <path d="M19 5h1" />
    </svg>
  );
}
