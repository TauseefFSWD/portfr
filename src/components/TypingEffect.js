// src/components/TypingEffect.js
import React, { useState, useEffect } from "react";

const TypingEffect = ({
  texts,
  typeSpeed = 100,
  backSpeed = 50,
  loop = true,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (deleting) {
        setDisplayedText((prev) => prev.substring(0, prev.length - 1));
        if (displayedText === "") {
          setDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentText.length) {
          setDeleting(true);
          setCharIndex(0);
        }
      }
    };

    const speed = deleting ? backSpeed : typeSpeed;
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [
    displayedText,
    charIndex,
    deleting,
    textIndex,
    texts,
    typeSpeed,
    backSpeed,
  ]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
