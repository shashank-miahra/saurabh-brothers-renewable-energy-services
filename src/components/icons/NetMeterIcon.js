export default function NetMeterIcon({ className, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      {/* Meter body */}
      <circle cx="12" cy="12" r="9" />
      <path d="M12 21v2" />
      <path d="M8 21v2" />
      <path d="M16 21v2" />
      
      {/* Bidirectional arrows */}
      <path d="M7 10h10" />
      <path d="M14 7l3 3-3 3" />
      
      <path d="M17 14H7" />
      <path d="M10 11l-3 3 3 3" />
    </svg>
  );
}
