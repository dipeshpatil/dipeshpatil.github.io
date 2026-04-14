/* eslint-disable react/prop-types */
import {useEffect, useState, useRef} from "react";

export default function TypewriterHero({
  greetings,
  langs = ["indian", "french"]
}) {
  const [langIndex, setLangIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("typing");
  const timeout = useRef(null);

  const currentLetters = () => {
    const current = greetings[langs[langIndex]];
    return current.slice(0, charIndex).map((g, i) => (
      <span key={i} className="text-violet-400">
        {g.letter}
      </span>
    ));
  };

  useEffect(() => {
    const currentWord = greetings[langs[langIndex]];
    const atWordEnd = charIndex === currentWord.length;
    const atWordStart = charIndex === 0;

    clearTimeout(timeout.current);

    switch (phase) {
      case "typing":
        if (atWordEnd) {
          timeout.current = setTimeout(() => setPhase("pausing"), 1000);
        } else {
          timeout.current = setTimeout(() => setCharIndex(c => c + 1), 150);
        }
        break;

      case "pausing":
        timeout.current = setTimeout(() => setPhase("deleting"), 800);
        break;

      case "deleting":
        if (atWordStart) {
          timeout.current = setTimeout(() => {
            setLangIndex(i => (i + 1) % langs.length);
            setPhase("typing");
          }, 300);
        } else {
          timeout.current = setTimeout(() => setCharIndex(c => c - 1), 75);
        }
        break;
    }

    return () => clearTimeout(timeout.current);
  }, [charIndex, phase, langIndex, greetings, langs]);

  return (
    <div className="glass-panel inline-block px-6 py-4">
      <span className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight roboto-slab-hero">
        {currentLetters()}
        <span className="animate-pulse text-cyan-400">|</span>
      </span>
    </div>
  );
}
