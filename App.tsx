import React, { useState } from 'react';
import Background from './components/Background';
import Proposal from './components/Proposal';
import Celebration from './components/Celebration';

const App: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="relative min-h-screen bg-valentine-50 overflow-hidden font-fredoka selection:bg-valentine-200">
      <Background />
      
      <div className="relative z-10">
        {accepted ? (
          <Celebration />
        ) : (
          <Proposal onAccept={() => setAccepted(true)} />
        )}
      </div>

      <footer className="fixed bottom-2 w-full text-center text-valentine-300 text-xs font-sans pointer-events-none">
        Made with ❤️
      </footer>
    </div>
  );
};

export default App;