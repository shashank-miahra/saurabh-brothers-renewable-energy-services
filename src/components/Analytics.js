import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Google Analytics (GA4) - Replace G-XXXXXXXXXX with actual Measurement ID */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      
      {/* Helper function script for tracking conversions anywhere in the app */}
      <Script
        id="conversion-tracking-helper"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.trackConversion = function(eventName, eventData = {}) {
              if (typeof window.gtag === 'function') {
                window.gtag('event', eventName, eventData);
              }
            };
          `,
        }}
      />
    </>
  );
}
