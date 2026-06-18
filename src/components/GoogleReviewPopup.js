"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, X } from "lucide-react";
import Link from "next/link";

export default function GoogleReviewPopup({ isOpen, onClose, reviewLink = "#" }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full relative overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex justify-center space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white text-center mb-4">
                Thank You for Reaching Out!
              </h3>
              
              <p className="text-gray-300 text-center mb-8">
                Your request has been successfully submitted. While we process your details, would you mind taking 30 seconds to support our local business with a quick Google review?
              </p>

              <div className="flex flex-col space-y-3">
                <Link 
                  href={reviewLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors shadow-lg shadow-blue-900/20"
                >
                  Leave a Review ⭐
                </Link>
                <button 
                  onClick={onClose}
                  className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium py-3 px-6 rounded-lg text-center transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
