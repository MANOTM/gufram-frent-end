import { Link } from 'react-router-dom';
import '../home.css';
import { useMotionValue, useSpring, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function HomeBox({ product, index }) {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);
  const springX = useSpring(motionX, { stiffness: 300, damping: 30 });
  const springY = useSpring(motionY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (hoveredIndex !== null) {
      motionX.set(mousePos.x + 15);
      motionY.set(mousePos.y + 15);
    }
  }, [mousePos, hoveredIndex, motionX, motionY]);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  return (
    <>
      <Link className="home-box center" to={`/${product._id}`} onMouseEnter={(e) => {
        setHoveredIndex(index);
        setMousePos({ x: e.clientX, y: e.clientY });
      }}
        onMouseLeave={() => setHoveredIndex(null)}
        onMouseMove={handleMouseMove}>
        <img src={product.img} alt={product.name} className="home-box-image" />

      </Link>
      {hoveredIndex !== null && (
        <motion.div
          className="floating-title"
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            x: springX,
            y: springY,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {product.name}
        </motion.div>
      )}
    </>
  );
}

export default HomeBox;