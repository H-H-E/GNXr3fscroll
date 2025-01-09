import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from './store'

const sections = [
  {
    number: "87",
    title: "BUICK",
    subtitle: "GRAND",
    accent: "NATIONAL",
    category: "GNX Edition",
    price: "$29,900",
    description: "The 1987 Buick Grand National GNX was the ultimate evolution of Buick's turbocharged G-body platform. With its sinister black exterior and potent turbocharged V6 engine, the GNX was one of the fastest production cars of its era."
  },
  {
    number: "276",
    title: "HORSEPOWER",
    subtitle: "TURBO",
    accent: "V6",
    category: "Engine Specs",
    price: "360 LB-FT",
    description: "The heart of the GNX is its turbocharged 3.8L V6 engine, producing an impressive 276 horsepower and 360 lb-ft of torque, making it one of the most powerful American cars of its time."
  }
  // Add more sections as needed
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

export function Overlay() {
  const store = useStore()
  const section = sections[store.currentSection] || sections[0]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={store.currentSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="info"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1 variants={item}>{section.number}</motion.h1>
          <motion.h2 variants={item}>{section.title}</motion.h2>
          <motion.h2 variants={item}>{section.subtitle}</motion.h2>
          <motion.h2 variants={item} className="accent">{section.accent}</motion.h2>
          <motion.h3 variants={item}>{section.category}</motion.h3>
          <motion.div variants={item} className="price">{section.price}</motion.div>
          <motion.p variants={item}>{section.description}</motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
