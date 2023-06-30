import { useState } from "react";

import PhotoAlbum from "react-photo-album";
import photos from "../photos";

import Lightbox from "yet-another-react-lightbox";

import { motion } from "framer-motion";

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  return (
    <div style={{ zIndex: 1 }}>
      <motion.main
        className="main__container"
        initial={{ y: -20, opacity: 0, display: "none" }}
        animate={{ y: 0, opacity: 1, display: "block" }}
        transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <PhotoAlbum
          layout="masonry"
          spacing={0}
          photos={photos}
          onClick={({ index: current }) => setIndex(current)}
        />

        <Lightbox
          index={index}
          slides={photos}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </motion.main>
    </div>
  );
}
