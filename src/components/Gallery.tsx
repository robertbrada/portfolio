import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Project } from "../types";
import classes from "./Gallery.module.css";
import cx from "clsx";

// export const images = [
//   "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
//   "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
//   "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
//   "https://appimage.github.io/database/Trezor_Suite/icons/512x512/trezor-suite.png",
// ];

// const images = [
//   "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
// ];

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
        {/* <div className="gallery-img w-full items-center justify-center flex"> */}
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
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {/* <div className="gallery-img gap-1 flex flex-col"> */}
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
          {/* </div> */}
        </motion.div>
        {/* <motion.img
          src={images[imageIndex]}
          className="gallery-img"
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
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        /> */}
        {/* </div> */}
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
