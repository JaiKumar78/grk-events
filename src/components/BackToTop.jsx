import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // Or any icon of your choice

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-sandal text-white rounded-full shadow-lg hover:bg-teal-800 transition-all duration-500 z-50"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
};

export default BackToTop;