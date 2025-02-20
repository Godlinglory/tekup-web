import React from 'react';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 flex flex-col">
      {/* Main content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider">
              Hello, InnovLab 
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
          </div>
          <div className="w-64 h-1 mx-auto bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
        </div>
      </main>

      {/* Footer */}
   
        <p className="text-white/80 text-sm font-medium">V1.1.1</p>
      </footer>
    </div>
  );
}

export default App;