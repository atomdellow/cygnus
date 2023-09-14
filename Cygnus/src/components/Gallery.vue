<template>
  <div class="full-width-gallery">
    <div>
      <!-- Gallery -->
      <div class="gallery-container">
        <div
          class="tile"
          v-for="(image, index) in images"
          :key="index"
          @click="openModal(index)"
        >
          <img :src="image.thumbnail" alt="Gallery thumbnail" />
        </div>
      </div>

      <!-- Modal -->
      <div v-if="showModal" class="modal" @click="closeModal">
        <button class="modal-prev" @click.stop="prevImage">&#10094;</button>
        <div class="modal-content" @click.stop>
          <img
            :src="images[currentImage].full"
            alt="Full-sized gallery image"
          />
        </div>
        <button class="modal-next" @click.stop="nextImage">&#10095;</button>
      </div>
    </div>
  </div>
</template>
<style>
.full-width-gallery {
  width: 100vw; /* 100% of the viewport width */
  display: flex; /* Makes it easier to center content if needed */
  justify-content: center; /* Horizontally center the inner content */
  align-items: center; /* Vertically center the inner content */
  background-color: #666; /* Placeholder background color, you can change it */
}
.gallery-container {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    gap: 10px;
    padding: 10px 0;
}

.tile {
    flex: 0 0 200px; /* Set a fixed width for each tile */
    height: 300px;
    overflow: hidden;
    cursor: pointer;
}

.tile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .2s;
}

.tile:hover img {
    transform: scale(1.1);
}
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
}

.modal-content img {
  max-width: 100%;
  max-height: 100%;
}

.modal-prev,
.modal-next {
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
}

.modal-prev {
  left: 10px;
  transform: translateY(-50%);
}

.modal-next {
  right: 10px;
  transform: translateY(-50%);
}
</style>
<script>
export default {
  name: "Gallery",
  
  data() {
    return {
      images: [
        { thumbnail: 'path_to_thumbnail_1', full: 'path_to_full_image_1' },
        { thumbnail: 'path_to_thumbnail_2', full: 'path_to_full_image_2' },
        { thumbnail: 'path_to_thumbnail_3', full: 'path_to_full_image_3' },
        { thumbnail: 'path_to_thumbnail_4', full: 'path_to_full_image_4' },
        { thumbnail: 'path_to_thumbnail_5', full: 'path_to_full_image_5' },
        // ... more images
      ],
      showModal: false,
      currentImage: 0
    };
  },
  methods: {
    openModal(index) {
      this.currentImage = index;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    prevImage() {
      this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    }
  }
};
</script>