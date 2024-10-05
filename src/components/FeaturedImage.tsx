import { ExpandIcon } from "./ExpandIcon";
import classes from "./FeturedImage.module.css";
import cx from "clsx";

const hoverClass = "transition-all duration-250 hover:shadow-md";
const sharedImageClasses = "h-auto max-w-full rounded-sm cursor-zoom-in";
const largeImageClass = `${sharedImageClasses} hover:scale-[1.01] ${hoverClass} ${classes.image}`;
const smallImageClass = `${sharedImageClasses} hover:scale-[1.04] ${hoverClass} ${classes.image}`;

interface Props {
  images: string[];
  onClick: (src: string) => void;
}

interface ImageProps {
  imageSrc: string;
  onClick: (src: string) => void;
}

const Image = ({ imageSrc, onClick }: ImageProps) => {
  return (
    <div
      className={cx(
        classes.container,
        "transition-all duration-250 hover:scale-[1.015]"
      )}
      onClick={() => onClick(imageSrc)}
    >
      <img
        className={cx(largeImageClass, "rounded-sm")}
        src={imageSrc}
        alt=""
      />
      <div className={cx(classes.middle, "rounded-sm")}>
        <ExpandIcon className={`h-[4rem] w-auto`} />
      </div>
    </div>
  );
};

export const FeaturedImage = ({ images, onClick }: Props) => {
  return (
    <div className="grid gap-4">
      <Image onClick={() => onClick(images[0])} imageSrc={images[0]} />

      <div className="grid grid-cols-2 gap-4">
        {images.slice(1).map((src) => (
          <Image onClick={() => onClick(src)} imageSrc={src} />
        ))}
      </div>
    </div>
  );
};
