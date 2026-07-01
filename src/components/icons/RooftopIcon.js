export default function RooftopIcon({ className, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      {/* House outline */}
      <path d="M3 10L12 3l9 7" />
      <path d="M5 10v11h14V10" />
      
      {/* Solar panel rectangles on roof */}
      <path d="M12 4l3.5 2.5" />
      <path d="M13.5 5.5l2 1.5" />
      <path d="M15 7l2 1.5" />
      
      {/* Small sun above */}
      <circle cx="18" cy="6" r="2" />
    </svg>
  );
}
