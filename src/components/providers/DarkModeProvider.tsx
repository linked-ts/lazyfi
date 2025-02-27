// 'use client';

// import { useEffect } from 'react';
// import useStore from '@/store/ThemeProvider';

// const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
//   const { isDarkMode } = useStore();

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (isDarkMode) {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//   }, [isDarkMode]);

//   return <>{children}</>;
// }

// export default DarkModeProvider;