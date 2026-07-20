<script>
import FeedList from "@/components/FeedList.vue";
import TweetBar from "@/components/TweetBar.vue";
import {userStore} from "@/store/user.js";

export default {
  name: "MainPage",
  components: {TweetBar, FeedList},
  data() {
    return {
      userStore: userStore()
    }
  }
}
</script>

<template>
  <div>
    <div class="title-container">
      <h2>Home</h2>
      <div>{{ userStore.getUserName }} 님</div>
    </div>
    <TweetBar/>
    <FeedList/>
  </div>
</template>

<style scoped>
.title-container {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>