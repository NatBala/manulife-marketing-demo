export interface StreamingProgress {
  currentSection: number;
  textProgress: number;
  isComplete: boolean;
}

export interface StreamingSection {
  id: string;
  type: 'hero' | 'content' | 'cards' | 'cta';
  title?: string;
  content: string[];
  delay?: number;
}