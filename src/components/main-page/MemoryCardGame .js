import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MemoryCardGame = () => {
  const symbols = ['🐶', '🐱', '🐻', '🐼', '🐵', '🦄'];
  const totalCards = symbols.concat(symbols).sort(() => 0.5 - Math.random());

  const [cards, setCards] = useState(totalCards);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);

  useEffect(() => {
    if (flipped.length === 2) {
      setTimeout(() => checkForMatch(), 1000);
    }
  }, [flipped]);

  const handleCardClick = (index) => {
    if (!flipped.includes(index) && flipped.length < 2 && !solved.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };

  const checkForMatch = () => {
    const [firstIndex, secondIndex] = flipped;
    if (cards[firstIndex] === cards[secondIndex]) {
      setSolved([...solved, firstIndex, secondIndex]);
    }
    setFlipped([]);
  };

  const resetGame = () => {
    setCards(totalCards);
    setFlipped([]);
    setSolved([]);
  }

  return (
    
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.0 }}
    >
      <div className="memory-card-game">
      <button className="reset-button" onClick={resetGame}>Reset</button>
      <div className="cards">
        {cards.map((symbol, index) => (
          <div
            key={index}
            className={`card ${flipped.includes(index) || solved.includes(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {flipped.includes(index) || solved.includes(index) ? symbol : '❓'}
          </div>
        ))}
      </div>
    </div>
    </motion.section>
  );
};

export default MemoryCardGame;
