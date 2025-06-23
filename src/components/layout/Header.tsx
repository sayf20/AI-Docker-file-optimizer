import React from 'react';
import { FileCode, Github } from 'lucide-react';

export const Header: React.FC = () => (
  <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm fixed top-0 w-full z-10">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FileCode className="w-7 h-7 text-blue-400" />
        <h1 className="text-xl font-bold">Dockerfile Analyzer</h1>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://Saifeddinemosrati.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          {/* You can replace this with a custom icon if you want */}
          <span>Portfolio</span>
        </a>
        <a
          href="https://github.com/sayf20"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  </header>
);