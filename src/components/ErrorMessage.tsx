import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  details?: string | null;
}

export function ErrorMessage({ message, details }: ErrorMessageProps) {
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
      <div className="flex gap-3">
        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
        <div>
          <p className="text-sm text-red-600">{message}</p>
          {details && (
            <p className="text-sm text-red-500 mt-1 font-mono">{details}</p>
          )}
        </div>
      </div>
    </div>
  );
}