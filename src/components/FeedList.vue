<script>
export default {
  name: "FeedList",
  props: {
    feed: {
      type: Array,
      required: true,
    }
  },
}
</script>

<template>
  <div class="feed-list-container">
    <div class="feed-container" v-for="item in feed" :key="item.id">
      <div class="feed-header">
        <div class="feed-content">
          {{ item.content }}
        </div>
        <button class="feed-delete-button">X</button>
      </div>
      <div class="feed-name">{{ item.user.name }}</div>
    </div>
  </div>
</template>

<style scoped>
.feed-container {
  height: 80px;
  background-color: white;
  margin: 10px 0;
  color: black;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
}

.feed-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.feed-content {
  padding: 1%;
}

.feed-delete-button {
  background: none;
  border: none;
  cursor: pointer;
}

.feed-name {
  text-align: right;
  font-size: 12px;
}

</style>