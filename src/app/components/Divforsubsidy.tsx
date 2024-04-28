import React, { useEffect, useState } from 'react';

import Card2 from './card2';

interface CardData {
  title: string;
  description: string;
}

const DivForsubsidy: React.FC = () => {
  const [cardsData, setCardsData] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/dataaa.json'); // Assuming dataaa.json is in the public directory
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: CardData[] = await response.json();
        setCardsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Split the cardsData into chunks of 4
  const chunkedData = [];
  for (let i = 0; i < cardsData.length; i += 4) {
    chunkedData.push(cardsData.slice(i, i + 4));
  }

  return (
    <div>
      {/* Map through each chunk */}
      {chunkedData.map((chunk, index) => (
        <div key={index} className="flex flex-wrap justify-center gap-4 mb-8">
          {/* Map through each card in the chunk */}
          {chunk.map((card, cardIndex) => (
            <div key={cardIndex}>
              <Card2 title={card.title} description={card.description} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DivForsubsidy;
