import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createEntry(cardTerm) {
  return (
    <Note key={cardTerm.id} title={cardTerm.title} content={cardTerm.content} />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createEntry)}
      <Footer />
    </div>
  );
}

export default App;
