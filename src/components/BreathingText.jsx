import { motion } from "framer-motion"

const BreathingText = ({
  label,
  fromFontVariationSettings,
  toFontVariationSettings,
  transition = {
    duration: 1.5,
    ease: "easeInOut",
  },
  staggerDuration = 0.1,
  staggerFrom = "first",
  repeatDelay = 0.1,
  className,
  onClick,
  ...props
}) => {
  // Using scale instead of fontVariationSettings for broader compatibility
  const letterVariants = {
    initial: { scale: 1.0, opacity: 0.8 },
    animate: (i) => ({
      scale: [1.0, 1.15, 1.0],
      opacity: [0.8, 1, 0.8],
      transition: {
        scale: {
          ...transition,
          repeat: Infinity,
          repeatType: "loop",
          delay: i * staggerDuration,
          repeatDelay: repeatDelay,
          times: [0, 0.5, 1],
        },
        opacity: {
          ...transition,
          repeat: Infinity,
          repeatType: "loop",
          delay: i * staggerDuration,
          repeatDelay: repeatDelay,
          times: [0, 0.5, 1],
        }
      },
    }),
  }

  const getCustomIndex = (index, total) => {
    if (typeof staggerFrom === "number") {
      return Math.abs(index - staggerFrom)
    }
    switch (staggerFrom) {
      case "first":
        return index
      case "last":
        return total - 1 - index
      case "center":
      default:
        return Math.abs(index - Math.floor(total / 2))
    }
  }

  const letters = label.split("")

  return (
    <span className={className} onClick={onClick} {...props}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={letterVariants}
          initial="initial"
          animate="animate"
          custom={getCustomIndex(i, letters.length)}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  )
}

export default BreathingText 