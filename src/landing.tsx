import React from 'react';

const PersonalWebsite: React.FC = () => {
  return (
    <div className="min-h-screen bg-indigo-50 flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        {/* macOS-style window bar */}
        <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Content */}
        <div className="p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-indigo-600">
            Isaac Barham
          </h1>

          <p className="text-lg md:text-xl mb-6 text-gray-600">
            Senior Software Engineer
          </p>

          <div className="space-y-4 mb-8">
            <a
              href="https://github.com/hiimisaac"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition-colors"
            >
              GitHub
            </a>

            <a
              href="mailto:contact@isaacbarham.com"
              className="block w-full text-center bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors"
            >
              Email Me
            </a>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Hello! I like to make cool things with fun technologies.
            <br />
            <br />
            Get in touch with me! I'd love to chat.
          </p>
        </div>
      </main>

      <footer className="mt-8 text-sm text-indigo-600">
        <p>© 2024 Isaac Barham. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
