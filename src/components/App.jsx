import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((term) => (
        <Note key={term.key} title={term.title} content={term.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
