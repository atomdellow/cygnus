<template>
  <footer class="footer-container">
    <!-- Site Map Column -->
    <div class="footer-column">
      <h4>Site Map</h4>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
        <li><router-link to="/news">News</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/tutorials">Tutorials</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
      </ul>
    </div>

    <!-- Contact Information Column -->
    <div class="footer-column">
      <h4>Contact Information</h4>
      <p>Email: example@example.com</p>
      <p>Phone: +123 456 789</p>
      <p>Address: 123 St, City, Country</p>
    </div>

    <!-- Social Media Links Column -->
    <div class="footer-column">
      <h4>Follow Us</h4>
      <ul>
        <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
        <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
        <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
        <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: white;
}

.footer-column {
  flex: 1;
  margin: 0 15px;
}

.footer-column h4 {
  border-bottom: 2px solid white;
  padding-bottom: 10px;
}

.footer-column ul {
  list-style-type: none;
  padding: 0;
}

.footer-column ul li {
  margin: 5px 0;
}

.footer-column ul li a {
  color: white;
  text-decoration: none;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}
</style>
<script>
export default {
  name: 'Footer'
}
</script>