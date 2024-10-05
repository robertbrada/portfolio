import { Image } from "./Image";

export const DefaultGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <Image />
        {/* <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          alt=""
        /> */}
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
