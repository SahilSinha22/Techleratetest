// components/Card.js
"use client"
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Card = ({ content, image }) => {
  const cardRef = useRef(null);
  const [showViewMore, setShowViewMore] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const card = cardRef.current;
      if (card) {
        const rect = card.getBoundingClientRect();
        const isInCard =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;

        setShowViewMore(isInCard);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={cardRef} className="card">
      {showViewMore && <div className="viewMore">View More</div>}
      <Image src={image} alt={content} className="image" width={800} height={800} />
      <div className="content">{content}</div>
    </div>
  );
};

export default Card;
