import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import fetchImagesBySearchQuery from "../images-api";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Modal from "react-modal";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(999);
  const [searchTopic, setSearchTopic] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  Modal.setAppElement("#root");
  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }
  const handleSearch = async (searchQuery) => {
    setImages([]);
    setPage(1);
    setSearchTopic(searchQuery);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    if (searchTopic === "") {
      return;
    }
    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImagesBySearchQuery(searchTopic, page);
        setTotalPages(data.total_pages);

        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [page, searchTopic]);
  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery data={images} openModal={openModal} />
      )}
      {images.length > 0 && !loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {page > totalPages && <p>No images to load</p>}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        image={selectedImage}
      />
    </div>
  );
}
