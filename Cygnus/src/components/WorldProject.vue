<template>
  <div class="full-width-worlds">
    <div>
      <h1>Horizon Worlds</h1>
    </div>
    <div class="world-cards-container">
      <div class="world-card" v-for="item in items" :key="item.id">
        <img :src="item.thumbnail" alt="Card image" />
        <div class="world-card-description">
          {{ item.description }}
        </div>
        <button class="world-read-more-button">Read more</button>
      </div>
    </div>
  </div>
</template>
<style>
  .full-width-worlds {
    width: 100vw; /* 100% of the viewport width */
    display: flex; /* Makes it easier to center content if needed */
    justify-content: center; /* Horizontally center the inner content */
    align-items: center; /* Vertically center the inner content */
    background-color: #333; /* Placeholder background color, you can change it */
}
/* Card container */
.world-cards-container {
    width: 100vw; /* make it full-width */
    padding: 20px; /* padding around all cards */
    display: flex;
    flex-direction: column; /* stack children vertically */
    gap: 20px; /* space between the cards */
    align-items: center; /* center cards horizontally */
}

/* Individual card styles */
.world-card {
    width: 90%; /* make it 90% of the viewport width */
    max-width: 1000px; /* Limit the maximum width of the card for ultra-wide screens */
    border: 1px solid #e0e0e0;
    border-radius: 10px; /* rounded corners */
    overflow: hidden; /* ensures content doesn't spill out */
    background-color: #fff;
    display: flex;
    flex-direction: column; /* stack children vertically */
    align-items: center; /* center children horizontally */
    padding: 20px; /* inner spacing */
}

.world-card img {
    width: 100%; /* make the thumbnail/image take the full card width */
    height: auto; /* keep aspect ratio */
    object-fit: cover; /* cover the whole area of the thumbnail container */
    margin-bottom: 15px; /* spacing between image and description */
}

.world-card-description {
    flex: 1; /* allows the description to take up the available space */
    margin: 15px 0; /* spacing */
}

.world-read-more-button {
    background-color: #3498db; /* example color */
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    align-self: center; /* center the button within the card */
}

.world-read-more-button:hover {
    background-color: #2980b9; /* slightly darker shade for hover effect */
}
</style>
<script>
export default {
  name: 'WorldProject',
  
  data() {
    return {
      items: [
        {
          id: 1,
          thumbnail: 'path_to_image1.jpg',
          description: 'Golden Glove Gym, what is it, what it does differently than others, and when will it be done?'
        },
        {
          id: 2,
          thumbnail: 'path_to_image2.jpg',
          description: 'Colleseum Gladiadors will be a Weapons focused gladiador game, similar the other pvp worlds of this type'
        },
                {
          id: 2,
          thumbnail: 'path_to_image3.jpg',
          description: 'Cygnus HQ on Horizon Worlds will represent the worlds created by the Studio, and partners'
        },
        // ... more items ...
      ]
    };
  }
}
</script>