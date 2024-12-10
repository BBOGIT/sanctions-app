import React from 'react';
import { FileMapping } from '../types';
import { ArrowRight } from 'lucide-react';

interface MappingResultProps {
  mapping: FileMapping;
}

export function MappingResult({ mapping }: MappingResultProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">File Mapping</h3>
        <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
          <span className="truncate">{mapping.sourcePath}</span>
          <ArrowRight className="w-4 h-4" />
          <span className="truncate">{mapping.targetPath}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-md font-medium text-gray-700">Column Mappings</h4>
        {mapping.columnMappings.map((column, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">{column.sourceColumn}</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium">{column.targetColumn}</span>
            </div>
            <span className="text-sm text-gray-500">
              {(column.confidence * 100).toFixed(1)}% confidence
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}