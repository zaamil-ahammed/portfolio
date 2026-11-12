import React from 'react';
import { Check, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-once">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 shadow-2xl backdrop-blur-xl text-neutral-100 text-xs font-mono">
        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <Check className="w-3 h-3" />
        </div>
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-neutral-400 hover:text-white transition-colors"
          aria-label="Dismiss toast"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
