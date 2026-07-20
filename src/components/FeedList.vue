<script>
import FeedItem from "@/components/FeedItem.vue";
import {FeedStore} from "@/store/feed.js";

export default {
  name: "FeedList",
  data() {
    return {
      feedStore: FeedStore()
    }
  },
  components: {FeedItem},
  created() {
    this.feedStore.initFeed()
  },
}
</script>

<template>
  <div class="feed-list-container">
    <div v-if="feedStore.feedData.length > 0">
      <feedItem v-for="feed in feedStore.feedData" :key="feed.id" :feed="feed"/>
    </div>
    <div v-else>
      <div>피드가 없습니다.</div>
    </div>
  </div>
</template>

<style scoped>
.feed-list-container {
  height: 60vh;
  overflow-y: auto;
}

</style>