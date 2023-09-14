<template>
  <div class="carousel-container">
    <div
      class="carousel-slides"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
        <img :src="slide.image" alt="Slide Image" />
        <p>{{ slide.caption }}</p>
      </div>
    </div>

    <button @click="prevSlide" class="carousel-button carousel-prev">
      Prev
    </button>
    <button @click="nextSlide" class="carousel-button carousel-next">
      Next
    </button>
  </div>
</template>
<style>

.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px; /* You can adjust this */
  background-color: #666;
  min-height: 300px; /* Or whatever height you desire */
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 20px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  cursor: pointer;
}

.carousel-prev {
  left: 10px;
}

.carousel-next {
  right: 10px;
}
</style>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      slides: [
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2487_cline_vr_studio_20190318.jpg/1280px-2487_cline_vr_studio_20190318.jpg",
          caption: "Slide 1",
        },
        {
          image:
            "https://images.pexels.com/photos/7562349/pexels-photo-7562349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Slide 2",
        },
        {
          image:
            "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/26/1467018952-ps-vr-game.jpg?resize=1200:*",
          caption: "Slide 3",
        },
        // Add more slides as needed
      ],
      currentIndex: 0,
      autoSlideInterval: null,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.clearAutoSlide();
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.slides.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Loop back to the start
      }
      this.resetAutoSlide();
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.slides.length - 1; // Loop to the end
      }
      this.resetAutoSlide();
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(this.nextSlide, 2000);
    },
    clearAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
    resetAutoSlide() {
      this.clearAutoSlide();
      this.startAutoSlide();
    },
  },
};
</script>