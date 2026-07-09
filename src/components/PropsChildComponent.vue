<script>
export default {
  name: "PropsChildComponent",
  data() {
    return {
      message: '나는 자식컴포넌트입니다.',
    };
  },
  props: {
    toChild: String
  }
}
</script>

<template>
  <div>{{ message }}</div>
  <div>{{ toChild }}</div>
</template>

<style scoped>

</style>