import { useEffect, useState } from 'react';
import useAuthors from '../../hooks/useAuthor';
import Container from '../../layouts/Container/Container';
import './Authors.css'
import { useMotionValue, useSpring, motion } from 'framer-motion';
function Authors() {

    const { authors, loading, error } = useAuthors();

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
        console.log(motionX);

    }, [mousePos, hoveredIndex, motionX, motionY]);

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (

        <Container>
            <div className="authors">
                {authors?.map((author, index) => (
                    <div key={index} className="author-box" 
                    onMouseEnter={(e) => {
                        setHoveredIndex(index);
                        setMousePos({ x: e.clientX, y: e.clientY });
                    }}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onMouseMove={handleMouseMove}>
                        <img src={author.img} alt="" />
                    </div>
                ))}
            </div>
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
                    {authors[hoveredIndex].name}
                </motion.div>
            )}
        </Container>
    );
}

export default Authors;