// pages/index.js
import Card from '@/app/components/Card';

export default function Home() {
  const cards = [
    { content: 'Card 1', image: '/Gamingcard.png' },
    { content: 'Card 2', image: '/Gamingcard.png' },
    { content: 'Card 3', image: '/Gamingcard.png' },
    { content: 'Card 4', image: '/Gamingcard.png' },
    { content: 'Card 5', image: '/Gamingcard.png' },
    { content: 'Card 6', image: '/Gamingcard.png' },
    { content: 'Card 7', image: '/Gamingcard.png' },
    { content: 'Card 8', image: '/Gamingcard.png' },
    { content: 'Card 9', image: '/Gamingcard.png' },
    { content: 'Card 10', image: '/Gamingcard.png' },
  ];

  return (
    <div className="container">
      {cards.map((card, index) => (
        <Card key={index} content={card.content} image={card.image} />
      ))}
    </div>
  );
}
