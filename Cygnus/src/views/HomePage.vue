<template>
    <Carousel />
    <News />
    <Gallery />
    <WorldProject />
    <Blog />
    <Contact />
</template>
<script>
import Carousel from '../components/Carousel.vue'
import News from '../components/News.vue'
import Gallery from '../components/Gallery.vue'
import Tutorials from '../components/Tutorials.vue'
import WorldProject from '../components/WorldProject.vue'
import Blog from '../components/Blog.vue'
import Contact from '../components/Contact.vue'
export default {
  components: { Carousel, News, Gallery, Tutorials, WorldProject, Blog, Contact },
  name: 'HomePage',
  }
</script>