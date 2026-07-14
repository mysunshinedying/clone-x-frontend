<script>
import FeedList from "@/components/FeedList.vue";
import TweetBar from "@/components/TweetBar.vue";

export default {
  name: "MainPage",
  components: {TweetBar, FeedList},
  data() {
    return {
      feed: [
        {
          id: 1,
          user: {id: 'User', name: '김유저'},
          content: '안녕하세요',
        },
        {
          id: 2,
          user: {id: 'User', name: '김유저'},
          content: '테스트입니다',
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <div class="title-container">
      <h2>Home</h2>
      <div>User님</div>
    </div>
    <TweetBar/>
    <FeedList :feed="feed"/>
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