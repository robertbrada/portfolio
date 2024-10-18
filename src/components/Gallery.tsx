import cx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import * as React from "react";
import { useState } from "react";
import classes from "./Gallery.module.css";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface GalleryProps {
  images: string[];
  firstImage?: number;
}

export const Gallery = ({ images, firstImage }: GalleryProps) => {
  const [[page, direction], setPage] = useState([
    firstImage ? firstImage : 0,
    0,
  ]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Function to handle the Escape key press
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "ArrowRight") {
      paginate(1);
    } else if (event.key === "ArrowLeft") {
      paginate(-1);
    }
    // TODO close on Escape
  };

  // Adding the event listener for keydown when the component mounts
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [paginate]);

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className={cx(
            classes.container,
            "gallery-img gap-1 flex flex-col rounded-sm"
          )}
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <img
            className={cx(classes.img, "rounded-sm")}
            src={images[imageIndex]}
          />
          <div className={cx(classes.middle, "px-2 py-1 rounded-md")}>
            <div className={classes.text}>
              <span className="font-medium mr-2">Newsfeed page:</span>
              <span className="font-light">
                This is description of the screen presented
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
};
