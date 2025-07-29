import { motion, AnimatePresence } from 'framer-motion';

function Container({ children }) {
    return (
        <AnimatePresence>
            <motion.div
                className="container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

export default Container;