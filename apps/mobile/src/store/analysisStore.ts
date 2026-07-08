import { create } from "zustand";
import { api } from "@/services/api";
import { AnalysisResult } from "@/types";

type AnalysisState = {
  analyses: AnalysisResult[];
  activeAnalysis?: AnalysisResult;
  isLoading: boolean;
  loadHistory: () => Promise<void>;
  pollAnalysis: (id: string) => Promise<AnalysisResult>;
  setActiveAnalysis: (analysis: AnalysisResult) => void;
};

export const useAnalysisStore = create<AnalysisState>((set) => ({
  analyses: [],
  isLoading: false,
  loadHistory: async () => {
    set({ isLoading: true });
    try {
      const analyses = await api.listAnalyses();
      set({ analyses });
    } finally {
      set({ isLoading: false });
    }
  },
  pollAnalysis: async (id) => {
    const analysis = await api.getAnalysis(id);
    set((state) => ({
      activeAnalysis: analysis,
      analyses: [analysis, ...state.analyses.filter((item) => item.id !== analysis.id)]
    }));
    return analysis;
  },
  setActiveAnalysis: (analysis) => set({ activeAnalysis: analysis })
}));
