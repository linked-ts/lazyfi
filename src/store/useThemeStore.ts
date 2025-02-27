"use client";

import React from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeStore = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      darkMode: false, // Default value (will be overridden by persisted value if available)
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: 'lazyfi-theme',
      onRehydrateStorage: () => {
        // This function runs when the store is hydrated from storage
        return (state) => {
          // Handle initial hydration
          if (state) {
            // Apply theme when store is rehydrated
            if (typeof window !== 'undefined') {
              if (state.darkMode) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            }
          }
        };
      },
    }
  )
);

// Client-side only hook to apply theme and listen for changes
export function ThemeEffect() {
  const darkMode = useThemeStore((state) => state.darkMode);
  
  React.useEffect(() => {
    // Apply theme class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  // Check for system preference on first load if no preference is saved
  React.useEffect(() => {
    const isStoredTheme = localStorage.getItem('lazyfi-theme');
    
    // If no saved preference, check system preference
    if (!isStoredTheme && typeof window !== 'undefined') {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      useThemeStore.setState({ darkMode: isDarkMode });
    }
  }, []);
  
  return null;
}