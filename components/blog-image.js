import { getStrapiMedia } from "../lib/media";

const Image = ({ image, post }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      className={post}
    />
  );
};

export default Image;