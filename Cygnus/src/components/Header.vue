<template>
<div class="navbar">
  <div class="navbar-content">
    <a href="#">Cygnus</a>
    <a href="#">Worlds</a>
    <a href="#">Projects</a>
    <a href="#">Tutorials</a>
    <a href="#">Patreon</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
  </div>
</div>

</template>
<style>
html, body {
    margin: 0;
    padding: 0;
}
/* Style for the header */
.navbar {
   color: white;
  width: 100%; /* Take up the full width of its container */
  display: flex;
  justify-content: center; /* Horizontally center navbar content */
  /* align-items: center; Vertically center navbar content */
  height: 60px; /* or whatever height you prefer */
  /* other navbar styles */
    background-color: #333; /* dark background for visibility; change as needed */
    padding: 10px 0; /* some vertical padding for appearance */
    margin: 0 0;
    text-align: center; /* centers the content horizontally */
}

/* Style for the links */
.navbar a {
  text-decoration: none;
  color: black; /* or any color you prefer */
  padding: 10px 15px; /* Adjust as needed */
}
/* This styles the content inside the bar */
.navbar-content {
   
    display: inline-block; /* allows it to size with its content and be centered by text-align on its parent */
}
.navbar a:hover {
  color: black;
  background-color: #1ed5d2; /* or any hover color you prefer */
}
/* This styles the individual links in the bar */
.navbar-content a {
    color: white; /* makes text white for visibility against the dark background */
    margin: 0 15px; /* adds some spacing between links */
    text-decoration: none; /* removes underline */
}

</style>
<script>
export default {
  name: 'Header'
}
</script>