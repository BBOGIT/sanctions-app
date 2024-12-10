import React from 'react';

interface AnalyzeButtonProps {
  onClick: () => void;
  loading: boolean;
}

export function AnalyzeButton({ onClick, loading }: AnalyzeButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      {loading ? 'Analyzing...' : 'Analyze Files'}
    </button>
  );
}