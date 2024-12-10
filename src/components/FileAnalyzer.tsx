import React from 'react';
import { PathInput } from './PathInput';
import { PromptInput } from './PromptInput';
import { AnalyzeButton } from './AnalyzeButton';
import { ErrorMessage } from './ErrorMessage';

interface FileAnalyzerProps {
  sourcePath: string;
  targetPath: string;
  prompt: string;
  onSourcePathChange: (value: string) => void;
  onTargetPathChange: (value: string) => void;
  onPromptChange: (value: string) => void;
  onAnalyze: () => void;
  loading: boolean;
  error: string | null;
  errorDetails?: string | null;
}

export function FileAnalyzer({
  sourcePath,
  targetPath,
  prompt,
  onSourcePathChange,
  onTargetPathChange,
  onPromptChange,
  onAnalyze,
  loading,
  error,
  errorDetails,
}: FileAnalyzerProps) {
  return (
    <div className="space-y-4">
      <PathInput
        label="Source Files Directory"
        value={sourcePath}
        onChange={onSourcePathChange}
        placeholder="/path/to/source/files"
      />
      <PathInput
        label="Target XLS File"
        value={targetPath}
        onChange={onTargetPathChange}
        placeholder="/path/to/target.xls"
      />
      <PromptInput
        value={prompt}
        onChange={onPromptChange}
      />

      <AnalyzeButton onClick={onAnalyze} loading={loading} />

      {error && <ErrorMessage message={error} details={errorDetails} />}
    </div>
  );
}