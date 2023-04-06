import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";

function App() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div>
      <h1>Welcome to Ageee Dev</h1>

      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />

      <div>{HTMLReactParser(content)}</div>
    </div>
  );
}

export default App;
