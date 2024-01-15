import { useEffect, useState } from "react";
import styled from "styled-components";
import { HiChevronLeft, HiChevronRight, HiOutlineXMark } from "react-icons/hi2";
const GalleryContainer = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: #fff;
`;
const Thumbnail = styled.div`
  display: flex;
  overflow: hidden;
  /* align-items: center; */
  justify-content: center;
  cursor: pointer;
  /* margin: 10px; */
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;
const Modal = styled.div`
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
  position: relative;
  z-index: 100;
`;
const ThumbImg = styled.img`
  min-width: 100%;
  border-radius: 7px;
  height: auto;
  opacity: 90%;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
    z-index: 0;
  }
`;
const ModalImg = styled.img`
  width: 100%;
  height: auto;
  z-index: 100;
`;
const ModalNav = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  /* background: rgba(0, 0, 0, 0.5); */
  color: #fff;
`;
const ButtonLeft = styled.button`
  display: flex;
  font-size: 4.8rem;
  background-color: transparent;
  border: none;
  color: var(--color-text-03);
  z-index: 1000;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
const ButtonRight = styled(ButtonLeft)``;
const ButtonClose = styled(ButtonLeft)`
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const Counter = styled.span`
  position: absolute;
  color: #fff;
  bottom: 5%;
`;

const GalleryBox = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  const goToPrev = () => {
    setSelectedImage((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNext = () => {
    setSelectedImage((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <GalleryContainer>
        {images.map((image, index) => (
          <Thumbnail key={index} onClick={() => openModal(index)}>
            <ThumbImg src={image.thumbnail} alt={`Thumbnail ${index}`} />
          </Thumbnail>
        ))}
      </GalleryContainer>

      {selectedImage !== null && (
        <ModalOverlay>
          <Modal>
            <ModalImg
              src={images[selectedImage].fullSize}
              alt={`Full Size ${selectedImage}`}
            />
            <ButtonClose onClick={closeModal}>
              <HiOutlineXMark />
            </ButtonClose>
          </Modal>
          <Counter>{`${selectedImage + 1} / ${images.length}`}</Counter>
          <ModalNav onClick={(e) => e.stopPropagation()}>
            <ButtonLeft type="modal" onClick={goToPrev}>
              <HiChevronLeft />
            </ButtonLeft>
            <ButtonRight type="modal" onClick={goToNext}>
              <HiChevronRight />
            </ButtonRight>
          </ModalNav>
        </ModalOverlay>
      )}
    </div>
  );
};

export default GalleryBox;
