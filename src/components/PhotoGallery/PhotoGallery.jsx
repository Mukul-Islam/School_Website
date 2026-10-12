
import { useState } from "react";
import {
  FaCamera,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
} from "react-icons/fa";
import "./PhotoGallery.css";

const galleryPhotos = [
  {
    id: 1,
    title: "School Campus",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Modern Classroom",
    category: "Classroom",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Students Learning",
    category: "Classroom",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Sports Activities",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "School Library",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Group Learning",
    category: "Classroom",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 7,
    title: "School Celebration",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 8,
    title: "Award Ceremony",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 9,
    title: "Outdoor Activities",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 10,
    title: "Student Activities",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 11,
    title: "Learning Together",
    category: "Classroom",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 12,
    title: "School Environment",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=85",
  },
];

const categories = [
  "All",
  "Campus",
  "Classroom",
  "Sports",
  "Events",
];

function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos =
    activeCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter(
          (photo) => photo.category === activeCategory
        );

  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  const showNextPhoto = () => {
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );

    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const showPreviousPhoto = () => {
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );

    const previousIndex =
      (currentIndex - 1 + filteredPhotos.length) %
      filteredPhotos.length;

    setSelectedPhoto(filteredPhotos[previousIndex]);
  };

  return (
    <section className="photo-gallery-section">
      <div className="photo-gallery-container">
        {/* Page Header */}
        <div className="photo-gallery-header">
          <div className="photo-gallery-title-icon">
            <FaCamera />
          </div>

          <p className="photo-gallery-subtitle">
            EXPLORE OUR SCHOOL LIFE
          </p>

          <h1 className="photo-gallery-heading">
            ABC School Photo Gallery
          </h1>

          <p className="photo-gallery-description">
            Explore memorable moments, classroom activities,
            school events and achievements of our students.
            Every picture tells a story of learning and growth.
          </p>

          <div className="photo-gallery-count">
            <FaImages />
            <span>
              {filteredPhotos.length} Photos
            </span>
          </div>
        </div>

        {/* Category Filter */}
        <div
          className="photo-gallery-filters"
          aria-label="Filter gallery photos"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`photo-gallery-filter ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="photo-gallery-grid">
          {filteredPhotos.map((photo) => (
            <button
              type="button"
              className="photo-gallery-card"
              key={photo.id}
              onClick={() => openPhoto(photo)}
              aria-label={`View ${photo.title}`}
            >
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
              />

              <div className="photo-gallery-overlay">
                <div className="photo-gallery-overlay-icon">
                  <FaCamera />
                </div>

                <div className="photo-gallery-photo-info">
                  <span>{photo.category}</span>
                  <h3>{photo.title}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <div className="photo-gallery-empty">
            No photos found in this category.
          </div>
        )}
      </div>

      {/* Full Screen Image Viewer */}
      {selectedPhoto && (
        <div
          className="photo-gallery-lightbox"
          onClick={closePhoto}
        >
          <button
            type="button"
            className="photo-gallery-close"
            onClick={closePhoto}
            aria-label="Close image viewer"
          >
            <FaTimes />
          </button>

          <button
            type="button"
            className="photo-gallery-nav photo-gallery-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousPhoto();
            }}
            aria-label="Previous photo"
          >
            <FaChevronLeft />
          </button>

          <div
            className="photo-gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
            />

            <div className="photo-gallery-lightbox-caption">
              <span>{selectedPhoto.category}</span>
              <h3>{selectedPhoto.title}</h3>
            </div>
          </div>

          <button
            type="button"
            className="photo-gallery-nav photo-gallery-next"
            onClick={(event) => {
              event.stopPropagation();
              showNextPhoto();
            }}
            aria-label="Next photo"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}

export default PhotoGallery;

