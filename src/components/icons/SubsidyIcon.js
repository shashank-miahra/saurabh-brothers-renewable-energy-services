export default function SubsidyIcon({ className, ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      {/* Circle */}
      <circle cx="12" cy="12" r="10" />
      {/* Down arrow representing cash flow/subsidy */}
      <path d="M17 12l-5 5-5-5" />
      <path d="M12 7v10" />
      {/* Small Indian Rupee Symbol elements combined creatively inside the flow */}
      <path d="M9 7h6" />
      <path d="M9 10h6" />
    </svg>
  );
}
