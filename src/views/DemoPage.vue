<script>
export default {
  name: "DemoPage",
  data() {
    return {
      count: 0,
      index: 0
    };
  },
  computed: {
    computedValue() {
      return this.count * 2;
    }
  },
  watch: {
    count(newValue, oldValue) {
      console.log(`count 변화 감지: ${oldValue} -> ${newValue}`);
    }
  },
  methods: {
    incrementCount() {
      this.count++;
    },
    incrementIndex() {
      this.index++;
    }
  }
};
</script>

<template>
  <div>
    <p>index: {{ index }}</p>
    <p>계산된 값: {{ computedValue }}</p>
    <button @click="incrementCount">incrementCount</button>
    <button @click="incrementIndex">incrementIndex</button>
  </div>

</template>


<style scoped>

</style>