import { motion, AnimatePresence } from 'framer-motion';
import './loading.css';
import { useState, useEffect } from 'react';

function Loading() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 2000); // Show for 2 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="loading center"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth fade
                >
                    guframe
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Loading;