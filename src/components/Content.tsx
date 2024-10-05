import "react-medium-image-zoom/dist/styles.css";
import { Project } from "../types";
import { FeaturedImage } from "./FeaturedImage";
import { PersonalPage } from "./PersonalPage";
// import trezor from "./assets/images/trezor/chart.png";
import { useEffect, useState } from "react";
import images from "../image-data";
import { Gallery } from "./Gallery";

// export const images: Record<Project, string[]> = {
//   [Project.RobertBrada]: [
//       "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
//   "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
//   "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
//   "https://appimage.github.io/database/Trezor_Suite/icons/512x512/trezor-suite.png",
// }

const exampleImages = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
];

interface ContentProps {
  selectedProject: Project;
}

const colorsByProject: Record<Project, string> = {
  [Project.RobertBrada]: "text-robert",
  [Project.StakeBar]: "text-stakebar",
  [Project.Observatory]: "text-observatory",
  [Project.SDP]: "text-sdp",
  [Project.CrocoFinance]: "text-croco",
  [Project.Trezor]: "text-trezor",
  [Project.DuoCards]: "text-duo",
  [Project.Eigen]: "text-eigen",
};

export function Content({ selectedProject }: ContentProps) {
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Escape") {
      setGalleryOpen(false);
    }
    // TODO close on Escape
  };

  const handleOnClick = (src: string) => {
    const indexOfSrc = images[selectedProject].indexOf(src);
    setGalleryImageIndex(indexOfSrc > -1 ? indexOfSrc : 0);
    setGalleryOpen(true);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="py-10 px-14 text-left">
      {/* <XLogo className="h-2.5 w-auto display:inline-block" /> */}
      <div className={`mb-6 ${colorsByProject[selectedProject]}`}>
        {selectedProject === "Robert Brada" ? (
          <PersonalPage />
        ) : (
          <div>
            {/* <h1 className="text-4xl font-bold font-headline">
              {selectedProject}
            </h1> */}
            <h1 className="text-4xl font-bold">{selectedProject}</h1>
          </div>
        )}
      </div>
      <p id="description" className="text-text-secondary mb-6">
        Staking tool which automatically distributes stake in a decentralized
        way. It gives more stake to understaked validators.
      </p>
      <FeaturedImage
        onClick={(src) => handleOnClick(src)}
        images={images[selectedProject]}
      />
      {/* <button
        className="p-6 bg-blue-600 text-white"
        onClick={() => setGalleryOpen(!galleryOpen)}
      >
        Gallery
      </button> */}

      {/* <Image /> */}
      {galleryOpen && (
        <div
          className={`example-container ${
            galleryOpen ? "cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={() => setGalleryOpen(false)}
        >
          <Gallery
            images={images[selectedProject]}
            firstImage={galleryImageIndex}
          />
        </div>
      )}
    </main>
  );
}
