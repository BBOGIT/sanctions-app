import React from 'react';
import { FileMapping } from '../types';
import { MappingResult } from './MappingResult';

interface ResultsProps {
  mappings: FileMapping[];
}

export function Results({ mappings }: ResultsProps) {
  if (mappings.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {mappings.map((mapping, index) => (
        <MappingResult key={index} mapping={mapping} />
      ))}
    </div>
  );
}