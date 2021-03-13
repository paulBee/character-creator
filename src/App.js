import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <>
      <Backdrop />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
