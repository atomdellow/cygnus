<template>
  <div class="worlds-projects">
    <h1>Worlds/Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.name">
        <router-link :to="`/worlds/${project.name.toLowerCase().replace(/ /g, '-')}`">
          {{ project.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WorldsProjectsPage',
  data() {
    return {
      projects: [
        { name: 'Golden Glove Gym' },
        { name: 'Knights and Ghouls' },
        { name: 'Colosseum Gladiators' },
        { name: 'Catagatchi' }
      ]
    };
  }
}
</script>

<style scoped>
.worlds-projects {
  background-color: grey;
  color: white;
  padding: 20px;
}

.worlds-projects h1 {
  color: white;
}

.worlds-projects ul {
  list-style-type: none;
  padding: 0;
}

.worlds-projects li {
  margin: 10px 0;
}
</style>
