import React from "react";
import Container from "../components/Container";
import GalleryBox from "../components/GalleryBox";

const images = [
  {
    thumbnail: "../public/gab/thumb/gab0.webp",
    fullSize: "../public/gab/full/gab0.webp",
  },

  {
    thumbnail: "../public/gab/thumb/gab2.webp",
    fullSize: "../public/gab/full/gab2.webp",
  },
  {
    thumbnail: "../public/gab/thumb/gab3.webp",
    fullSize: "../public/gab/full/gab3.webp",
  },
  {
    thumbnail: "../public/gab/thumb/gab4.webp",
    fullSize: "../public/gab/full/gab4.webp",
  },
  {
    thumbnail: "../public/gab/thumb/gab5.webp",
    fullSize: "../public/gab/full/gab5.webp",
  },
  {
    thumbnail: "../public/gab/thumb/gab6.webp",
    fullSize: "../public/gab/full/gab6.webp",
  },
  {
    thumbnail: "../public/gab/thumb/gab7.webp",
    fullSize: "../public/gab/full/gab7.webp",
  },
  {
    thumbnail: "../public/gab/thumb/gab8.webp",
    fullSize: "../public/gab/full/gab8.webp",
  },
];

const Gallery = () => {
  return (
    <Container>
      <GalleryBox images={images} />
    </Container>
  );
};

export default Gallery;
