import React from 'react';

const PersonalWebsite: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4 py-8">
      <main className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        {/* macOS-style title bar */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <div className="ml-3 flex-1 text-center text-xs font-medium text-slate-400">
            isaacbarham.com
          </div>

          <div className="w-[52px]" />
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-indigo-600 md:text-4xl">
            Isaac Barham
          </h1>

          <p className="mb-8 text-lg text-slate-500 md:text-xl">
            Senior Software Engineer
          </p>

          <div className="mb-8 space-y-3">
            <a
              href="https://github.com/hiimisaac"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-slate-900 px-4 py-3 text-center font-medium text-white transition hover:bg-slate-800"
            >
              GitHub
            </a>

            <a
              href="mailto:contact@isaacbarham.com"
              className="block w-full rounded-lg bg-indigo-600 px-4 py-3 text-center font-medium text-white transition hover:bg-indigo-700"
            >
              Email Me
            </a>
          </div>

          <p className="leading-7 text-slate-600">
            Hello! I like to make cool things with fun technologies.
            <br />
            <br />
            Get in touch with me! I'd love to chat.
          </p>
        </div>
      </main>

      <footer className="mt-6 text-sm text-slate-500">
        © 2026 Isaac Barham. All rights reserved.
      </footer>
    </div>
  );
};

export default PersonalWebsite;
