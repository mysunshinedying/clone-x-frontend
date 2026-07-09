<script>
import InputField from "@/components/InputField.vue";

export default {
  name: "LoginPage",
  components: {InputField},
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log(this.email, this.password);
    }
  }
}
</script>

<template>
  <div>
    <!--<input type="text" :placeholder="'Email'" v-model="email"/>
    <input type="password" :placeholder="'Password'" v-model="password"/>-->
    <InputField
        :type="'text'"
        :placeholder="'Email'"
        :modelValue="email"
        v-model="email"/>

    <InputField
        :type="'password'"
        :placeholder="'Password'"
        :modelValue="password"/>

    <button class="login-button" @click="login">로그인하기</button>
    <div>
      계정이 없으신가요?
      <span class="signup-button">가입하기</span>
    </div>
  </div>
</template>

<style scoped>
.login-button {
  border-radius: 20px;
  border: 1px solid #fff;
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}

.signup-button {
  color: aqua;
  cursor: pointer;
  text-decoration: underline;
}
</style>