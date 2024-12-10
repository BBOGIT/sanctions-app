import React, { useState } from 'react';
import { AnalysisResult } from './types';
import { analyzeFiles } from './api/fileAnalysis';
import { Header } from './components/Header';
import { FileAnalyzer } from './components/FileAnalyzer';
import { Results } from './components/Results';
import { StatusMessage } from './components/StatusMessage';
import { DEFAULT_PROMPT } from './config/env';
import { ApiError } from './utils/api';

function App() {
  const [sourcePath, setSourcePath] = useState('');
  const [targetPath, setTargetPath] = useState('');
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string; details?: string } | null>(null);

  const handleAnalyze = async () => {
    if (!sourcePath || !targetPath) {
      setStatus({ type: 'error', message: 'Please provide both source and target paths' });
      return;
    }

    try {
      setLoading(true);
      setStatus(null);
      const response = await analyzeFiles({
        sourcePath,
        targetPath,
        prompt,
      });

      if (response.status === 201) {
        setStatus({
          type: 'success',
          message: 'Analysis request has been sent successfully. The results will be processed shortly.',
        });
        setResult(null);
      } else if (response.data) {
        setResult(response.data);
      }
    } catch (err) {
      let errorMessage = 'Failed to analyze files. Please check the paths and try again.';
      let errorDetails;

      if (err instanceof ApiError) {
        errorMessage = err.message;
        errorDetails = err.details;
      }

      setStatus({
        type: 'error',
        message: errorMessage,
        details: errorDetails,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <Header />
          <FileAnalyzer
            sourcePath={sourcePath}
            targetPath={targetPath}
            prompt={prompt}
            onSourcePathChange={setSourcePath}
            onTargetPathChange={setTargetPath}
            onPromptChange={setPrompt}
            onAnalyze={handleAnalyze}
            loading={loading}
            error={status?.type === 'error' ? status.message : null}
            errorDetails={status?.type === 'error' ? status.details : null}
          />
          
          {status?.type === 'success' && (
            <div className="mt-4">
              <StatusMessage type="success" message={status.message} />
            </div>
          )}
        </div>

        {result && <Results mappings={result.mappings} />}
      </div>
    </div>
  );
}

export default App;