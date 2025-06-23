import React from 'react';

export const Footer: React.FC = () => (
  <footer className="border-t border-gray-800 py-4 mt-auto">
    <div className="container mx-auto px-4 text-center space-y-2">
      <div className="max-w-lg mx-auto p-4 bg-gray-800/50 rounded-lg">
        {/* First Line */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-gray-300">
          {/* Portfolio */}
          <div className="flex items-center gap-1">
            <img
              src="/assets/icons8-trust-64.png"
              alt="Portfolio Icon"
              className="w-5 h-5"
            />
            <a
              href="https://Saifeddinemosrati.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Portfolio
            </a>
          </div>
          {/* PayPal */}
          <div className="flex items-center gap-1">
            <img
              src="/assets/icons8-paypal-50.png"
              alt="PayPal Icon"
              className="w-5 h-5"
            />
            <a
              href="https://paypal.me/MSRFR801"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              PayPal
            </a>
          </div>
        </div>
      </div>
      {/* Second Line */}
      <p className="text-gray-400">
        Made with <span className="text-red-500">❤️</span> by Saifeddine Mosrati.
      </p>
    </div>
  </footer>
);