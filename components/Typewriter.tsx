import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface TypewriterProps {
  language: Language;
}

const Typewriter: React.FC<TypewriterProps> = ({ language }) => {
  const textCN = "热爱是成功最大的动力！";
  const textEN = "Passion is the greatest motivation for success!";
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const targetText = language === Language.CN ? textCN : textEN;
    
    const handleType = () => {
      const i = loopNum % 1; // Single phrase loop logic could be expanded
      const fullText = targetText;

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        // Finished typing, wait before deleting
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && text === '') {
        // Finished deleting
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, language]);

  // Reset text when language changes immediately for better UX
  useEffect(() => {
    setIsDeleting(true); 
  }, [language]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight min-h-[1.2em] md:min-h-[1.5em]">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-tech-blue to-tech-purple animate-gradient-x">
        {text}
      </span>
      <span className="inline-block w-1 h-10 ml-1 bg-tech-cyan animate-pulse align-middle"></span>
    </h1>
  );
};

export default Typewriter;