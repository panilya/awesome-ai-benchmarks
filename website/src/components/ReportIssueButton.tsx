import React from 'react';

export function ReportIssueButton() {
  return (
    <a
      href="https://github.com/panilya/awesome-ai-benchmarks/issues/new"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 text-white p-3 md:px-4 md:py-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 z-50 flex items-center gap-3"
      title="Report an issue"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.42.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/>
      </svg>
      <span className="hidden md:block text-sm font-medium whitespace-nowrap">
        Report Issue
      </span>
    </a>
  );
}
