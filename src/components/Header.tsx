import React from 'react';
import { FileSearch } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <FileSearch className="w-6 h-6 text-blue-600" />
      <h1 className="text-2xl font-bold text-gray-900">Sanctions List File Matcher</h1>
    </div>
  );
}