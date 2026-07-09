<template>
  <div class="container">
    <LoginPage/>
  </div>
</template>

<!-- Options API -->
<script>
import LoginPage from "@/views/LoginPage.vue";
export default {
  name: 'App',
  components: { LoginPage }
}
</script>

<!-- Composition API
<script setup>
  import { ref } from 'vue';
  const msg = ref("안녕하세요.");
</script>
-->

<style>
  body {
    background-color: black;
    color: white;
  }

  .container {
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
