const PersonalWebsite: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4 md:p-8">
        <main className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md md:max-w-lg lg:max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-indigo-600">Isaac Barham</h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600">Lead Software Engineer</p>
          
          <div className="space-y-4 mb-8">
            <a 
              href="https://github.com/coffee-cake-isaac" 
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
            Hello! I like to make cool things with fun technologies. <br/ ><br/ >
            Currently building <a href="https://github.com/coffee-cake-isaac/dayly">Dayly</a>, a to-do app built with Flutter. <br/ > <br />Also working on an unannounced project and trying to help push the Ford platform on Openpilot.<br /><br />
            Get in touch with me! I'd love to chat.
          </p>
        </main>
        
        <footer className="mt-8 text-sm text-indigo-600">
          <p>© 2024 Isaac Barham. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default PersonalWebsite;