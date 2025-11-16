import 'react-medium-image-zoom/dist/styles.css';
import { Project } from '../types';
import { FeaturedImage } from './FeaturedImage';
import { PersonalPage } from './PersonalPage';
import { useEffect, useState } from 'react';
import descriptions from '../descriptions';
import images from '../images';
import references from '../references';
import { Gallery } from './Gallery';
import { References } from './References';
import { ProfileSection } from './ProfileSection';
import { LogosSection } from './LogosSection';

interface ContentProps {
  selectedProject: Project;
}

const colorsByProject: Record<Project, string> = {
  [Project.RobertBrada]: 'text-robert',
  [Project.StakeBar]: 'text-stakebar',
  [Project.Observatory]: 'text-observatory',
  [Project.SDP]: 'text-sdp',
  [Project.CrocoFinance]: 'text-croco',
  [Project.Satoshilabs]: 'text-trezor',
  [Project.DuoCards]: 'text-duo',
  [Project.Eigen]: 'text-eigen',
  [Project.Wormhole]: 'text-wormhole',
  [Project.Mayan]: 'text-mayan',
};

export function Content({ selectedProject }: ContentProps) {
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Escape') {
      setGalleryOpen(false);
    }
    // TODO close on Escape
  };

  const handleOnClick = (src: string) => {
    const srcs = images[selectedProject].map(({ src }) => src);
    const indexOfSrc = srcs.indexOf(src);
    setGalleryImageIndex(indexOfSrc > -1 ? indexOfSrc : 0);
    setGalleryOpen(true);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <main className="pt-4 pb-20 px-4 text-left lg:py-10 lg:px-14">
      <div className={`mb-6 ${colorsByProject[selectedProject]}`}>
        {selectedProject === 'Robert Brada' ? (
          <PersonalPage />
        ) : (
          <div>
            {/* <h1 className="text-4xl font-bold font-headline">
              {selectedProject}
            </h1> */}
            <h1 className="text-4xl font-bold">{selectedProject}</h1>
            {/* <ObservatoryLogo className="h-[2.6rem]  w-auto"/> */}
          </div>
        )}
      </div>
      <div
        id="description"
        className={`text-text-secondary mb-6 flex flex-col gap-10 ${
          selectedProject === 'Robert Brada'
            ? 'xl:grid xl:grid-cols-6'
            : 'xl:grid xl:grid-cols-4'
        }`}
      >
        <div
          className={
            selectedProject === 'Robert Brada'
              ? 'col-span-4 pr-8'
              : 'col-span-3'
          }
        >
          <div className="mb-6 text-justify">
            {descriptions[selectedProject]}
          </div>
          {images[selectedProject].length > 0 && (
            <FeaturedImage
              onClick={(src) => handleOnClick(src)}
              images={images[selectedProject]}
            />
          )}
        </div>

        <div
          className={`pt-4 h-min xl:pt-0 ${
            selectedProject === 'Robert Brada'
              ? 'col-span-2 xl:border-t-[0px] xl:border-l-[0px] xl:pl-0'
              : 'col-span-1 xl:border-t-[0px] xl:border-l-[1px] xl:pl-8'
          }`}
        >
          {selectedProject === 'Robert Brada' ? (
            <ProfileSection />
          ) : references[selectedProject].length ? (
            <References references={references[selectedProject]} />
          ) : null}
        </div>
      </div>

      {selectedProject === 'Robert Brada' && (
        <div>
          <div
            className="mb-8 text-xs opacity-50"
            style={{ fontFamily: 'monospace' }}
          >
            Companies/Projects I've collaborated with
          </div>
          <LogosSection />
        </div>
      )}

      {galleryOpen && (
        <div
          className={`example-container ${
            galleryOpen ? 'cursor-zoom-out' : 'cursor-zoom-in'
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
