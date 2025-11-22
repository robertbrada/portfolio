import 'react-medium-image-zoom/dist/styles.css';
import { Project } from '../../types';
import { FeaturedImage, Gallery } from '../Gallery';
import { PersonalPage } from '../About';
import { useEffect, useState } from 'react';
import descriptions from '../../descriptions';
import images from '../../images';
import references from '../../references';
import { References, LogosSection } from '../References';
import { ProfileSection } from './ProfileSection';

interface ContentProps {
  selectedProject: Project;
}

const colorsByProject: Record<Project, string> = {
  [Project.RobertBrada]: 'text-about-1',
  [Project.StakeBar]: 'text-stakebar-1',
  [Project.Observatory]: 'text-observatory-1',
  [Project.SDP]: 'text-sdp-1',
  [Project.CrocoFinance]: 'text-croco-1',
  [Project.Satoshilabs]: 'text-trezor-1',
  [Project.DuoCards]: 'text-duo-1',
  [Project.Eigen]: 'text-eigen-1',
  [Project.Wormhole]: 'text-wormhole-1',
  [Project.Mayan]: 'text-mayan-1',
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
            ? 'xl:grid xl:grid-cols-6 lg:pr-16'
            : 'xl:grid xl:grid-cols-4'
        }`}
      >
        <div
          className={
            selectedProject === 'Robert Brada'
              ? 'col-span-4 xl:pr-8'
              : 'col-span-3'
          }
        >
          <div className="mb-6">{descriptions[selectedProject]}</div>
          {images[selectedProject].length > 0 && (
            <FeaturedImage
              key={selectedProject}
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
        <div className="px-4 xl:px-0">
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
