<script>
import {userStore} from "@/store/user.js";

export default {
  name: "TweetBar",
  data() {
    return {
      userStore: userStore()
    }
  }
}
</script>

<template>
  <div class="container">
    <input type="text" :placeholder="`what's good, ${userStore.getUserName}?`" class="input-form"/>
    <img src="@/assets/search.png" alt="검색" class="search-icon"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  height: auto;
  position: relative;
}

.input-form {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 10px;
  z-index: 0;
}

.search-icon {
  box-sizing: border-box;
  width: 40px;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
  position: absolute;
  right: 0;
  z-index: 1;
  border: 1px solid #1d9bf0;
  cursor: pointer;
}

</style>