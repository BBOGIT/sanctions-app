import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface StatusMessageProps {
  type: 'success' | 'error';
  message: string;
}

export function StatusMessage({ type, message }: StatusMessageProps) {
  const isSuccess = type === 'success';
  const Icon = isSuccess ? CheckCircle : AlertCircle;
  const bgColor = isSuccess ? 'bg-green-50' : 'bg-red-50';
  const borderColor = isSuccess ? 'border-green-200' : 'border-red-200';
  const textColor = isSuccess ? 'text-green-600' : 'text-red-600';
  const iconColor = isSuccess ? 'text-green-500' : 'text-red-500';

  return (
    <div className={`p-4 ${bgColor} border ${borderColor} rounded-md flex items-start gap-3`}>
      <Icon className={`w-5 h-5 ${iconColor} mt-0.5`} />
      <p className={`text-sm ${textColor}`}>{message}</p>
    </div>
  );
}