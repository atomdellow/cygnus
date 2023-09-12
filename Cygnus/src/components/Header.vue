<template>
  <nav class="navbar">
    <a href="#">Cygnus</a>
    <a href="#">Worlds</a>
    <a href="#">Projects</a>
    <a href="#">Patreon</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
  </nav>
</template>
<style>
/* Style for the header */
.navbar {
  width: 100%; /* Take up the full width of its container */
  display: flex;
  justify-content: center; /* Horizontally center navbar content */
  align-items: center; /* Vertically center navbar content */
  height: 60px; /* or whatever height you prefer */
  /* other navbar styles */
}

/* Style for the links */
.navbar a {
  text-decoration: none;
  color: black; /* or any color you prefer */
  padding: 10px 15px; /* Adjust as needed */
}

.navbar a:hover {
  background-color: #555; /* or any hover color you prefer */
}

</style>
<script>
export default {
  name: 'Header'
}
</script>