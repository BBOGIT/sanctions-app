export interface FileMapping {
  sourcePath: string;
  targetPath: string;
  columnMappings: ColumnMapping[];
}

export interface ColumnMapping {
  sourceColumn: string;
  targetColumn: string;
  confidence: number;
}

export interface AnalysisResult {
  success: boolean;
  message: string;
  mappings: FileMapping[];
}

export interface AnalysisRequest {
  sourcePath: string;
  targetPath: string;
  prompt: string;
}

export interface ApiResponse<T> {
  status: number;
  data?: T;
  message: string;
  error?: {
    code: string;
    details?: string;
  };
}