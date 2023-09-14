<template>
  <div class="full-width-contact">
    <div class="contact-container">
      <input v-model="email" placeholder="Email" />
      <input v-model="name" placeholder="Name" />
      <textarea v-model="message" placeholder="Your message..."></textarea>
      <button @click="send">Send</button>
    </div>
  </div>
</template>
<style>
.full-width-contact {
  width: 100vw; /* 100% of the viewport width */
  display: flex; /* Makes it easier to center content if needed */
  justify-content: center; /* Horizontally center the inner content */
  align-items: center; /* Vertically center the inner content */
  min-height: 300px; /* Or whatever height you desire */
  background-color: #333; /* Placeholder background color, you can change it */
}
.contact-container {
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
<script>
// Inside your Vue methods:
import axios from "axios";
export default {
  name: "Contact",
  data() {
    return {
      email: "",
      name: "",
      message: "",
    };
  },
  methods: {
    async send() {
      try {
        await axios({
          method: "post",
          url: "http://localhost:3000/contact",
          data: {
            email: this.email,
            name: this.name,
            message: this.message,
          },
        }),
          alert("Message sent successfully!");
      } catch (error) {
        alert("Failed to send message");
      }
    },
  },
};
</script>