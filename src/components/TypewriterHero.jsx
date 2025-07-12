/* eslint-disable react/prop-types */
import {useEffect, useState, useRef} from "react";

export default function TypewriterHero({
  greetings,
  langs = ["indian", "french"]
}) {
  const [langIndex, setLangIndex] = useState(0); // which language’s word we’re on
  const [charIndex, setCharIndex] = useState(0); // which letter inside that word
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting
  const timeout = useRef(null);

  // Helper to build spans up to `charIndex`
  const currentLetters = () => {
    const current = greetings[langs[langIndex]];
    return current.slice(0, charIndex).map((g, i) => (
      <span key={i} className="text-secondary">
        {g.letter}
      </span>
    ));
  };

  useEffect(() => {
    const currentWord = greetings[langs[langIndex]];
    const atWordEnd = charIndex === currentWord.length;
    const atWordStart = charIndex === 0;

    // Clear timer on unmount / rerun
    clearTimeout(timeout.current);

    switch (phase) {
      case "typing":
        if (atWordEnd) {
          // Pause after completing word
          timeout.current = setTimeout(() => setPhase("pausing"), 1000);
        } else {
          // Type next letter
          timeout.current = setTimeout(() => setCharIndex(c => c + 1), 150);
        }
        break;

      case "pausing":
        // Begin deleting
        timeout.current = setTimeout(() => setPhase("deleting"), 800);
        break;

      case "deleting":
        if (atWordStart) {
          // Move to next word
          timeout.current = setTimeout(() => {
            setLangIndex(i => (i + 1) % langs.length);
            setPhase("typing");
          }, 300);
        } else {
          // Delete last letter
          timeout.current = setTimeout(() => setCharIndex(c => c - 1), 75);
        }
        break;
    }

    return () => clearTimeout(timeout.current);
  }, [charIndex, phase, langIndex, greetings, langs]);

  return (
    <div className="bg-accent inline-block px-6 py-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-4 border-black">
      <span className="text-6xl font-extrabold leading-tight tracking-tight roboto-slab-hero">
        {currentLetters()}
        <span className="animate-pulse text-black">|</span>
      </span>
    </div>
  );
}
