import { AnalysisResult, AnalysisRequest, ApiResponse } from '../types';
import { fetchApi } from '../utils/api';

export async function analyzeFiles(request: AnalysisRequest): Promise<ApiResponse<AnalysisResult>> {
  try {
    return await fetchApi<AnalysisResult>('/api/sanctions/analyze-gpt', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  } catch (error) {
    console.error('Error analyzing files:', error);
    throw error;
  }
}