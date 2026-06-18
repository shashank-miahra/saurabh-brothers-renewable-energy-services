"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "917052737431";
  const defaultMessage = "Hi! I'm interested in solar panel installation. Can you help me?";

  const handleSend = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform group"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <svg viewBox="0 0 32 32" fill="white" className="w-8 h-8">
            <path d="M16.004 3.2C8.954 3.2 3.2 8.954 3.2 16.004c0 2.262.59 4.462 1.712 6.404L3.2 28.8l6.584-1.726A12.72 12.72 0 0016.004 28.8c7.05 0 12.796-5.746 12.796-12.796S23.054 3.2 16.004 3.2zm0 23.38a10.51 10.51 0 01-5.57-1.59l-.398-.238-4.13 1.082 1.102-4.026-.26-.416a10.56 10.56 0 01-1.618-5.628c0-5.84 4.752-10.584 10.594-10.584 5.84 0 10.584 4.744 10.584 10.584 0 5.85-4.744 10.594-10.584 10.594l.28.222zm5.806-7.93c-.318-.158-1.882-.928-2.174-1.034-.292-.106-.504-.158-.716.158-.212.318-.822 1.034-.61 1.246-.186.212-.372.238-.69.08-.318-.158-1.342-.494-2.556-1.578-.944-.842-1.582-1.882-1.768-2.2-.186-.318-.02-.49.14-.648.144-.142.318-.372.478-.558.158-.186.212-.318.318-.53.106-.212.053-.398-.026-.558-.08-.158-.716-1.728-.982-2.366-.258-.62-.522-.536-.716-.546l-.61-.01c-.212 0-.558.08-.85.398-.292.318-1.114 1.088-1.114 2.654 0 1.566 1.14 3.08 1.3 3.292.158.212 2.246 3.428 5.444 4.808.76.328 1.354.524 1.816.67.764.242 1.458.208 2.008.126.612-.092 1.882-.77 2.148-1.514.266-.742.266-1.378.186-1.514-.08-.132-.292-.212-.61-.372z"/>
          </svg>
        )}
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        )}
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-[#075E54] px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
              <svg viewBox="0 0 32 32" fill="#25D366" className="w-6 h-6">
                <path d="M16.004 3.2C8.954 3.2 3.2 8.954 3.2 16.004c0 2.262.59 4.462 1.712 6.404L3.2 28.8l6.584-1.726A12.72 12.72 0 0016.004 28.8c7.05 0 12.796-5.746 12.796-12.796S23.054 3.2 16.004 3.2z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Saurabh Brothers</p>
              <p className="text-[#25D366] text-xs">Typically replies within minutes</p>
            </div>
          </div>

          {/* Chat body */}
          <div className="bg-[#ECE5DD] px-5 py-6 min-h-[140px] relative">
            {/* WhatsApp chat pattern */}
            <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ctext x=\'10\' y=\'100\' font-size=\'80\' fill=\'%23000\'%3E💬%3C/text%3E%3C/svg%3E")', backgroundSize: '100px'}}></div>
            <div className="bg-white rounded-lg px-4 py-3 shadow-sm max-w-[85%] relative">
              <div className="absolute -left-2 top-3 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-white"></div>
              <p className="text-gray-800 text-sm leading-relaxed">
                Hi there! 👋<br/>
                Have a question about solar panels?<br/>
                Chat with us on WhatsApp.
              </p>
              <p className="text-[10px] text-gray-400 text-right mt-1">now</p>
            </div>
          </div>

          {/* Action button */}
          <div className="bg-[#F0F0F0] px-5 py-4">
            <button
              onClick={handleSend}
              className="w-full bg-[#25D366] text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#20BD5A] transition-colors text-sm"
            >
              <svg viewBox="0 0 32 32" fill="white" className="w-5 h-5">
                <path d="M16.004 3.2C8.954 3.2 3.2 8.954 3.2 16.004c0 2.262.59 4.462 1.712 6.404L3.2 28.8l6.584-1.726A12.72 12.72 0 0016.004 28.8c7.05 0 12.796-5.746 12.796-12.796S23.054 3.2 16.004 3.2z"/>
              </svg>
              Start Chat
            </button>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}} />
    </>
  );
}
