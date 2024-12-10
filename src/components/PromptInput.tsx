import React from 'react';
import { PROMPT_EDITABLE } from '../config/env';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function PromptInput({ value, onChange }: PromptInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Analysis Prompt
      </label>
      {PROMPT_EDITABLE ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-none"
          placeholder="Enter custom analysis instructions..."
        />
      ) : (
        <div className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-700">
          {value}
        </div>
      )}
    </div>
  );
}