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
    <div class="logo-container">
      <img src="@/assets/x-logo.png" class="logo" alt="X 로고"/>
    </div>
    <InputField
        :type="'text'"
        :placeholder="'Email'"
        v-model="email"
        errorMsg="이메일을 입력하세요"
    />

    <InputField
        :type="'password'"
        :placeholder="'Password'"
        v-model="password"
        errorMsg="비밀번호를 입력하세요"
    />

    <button class="button" @click="login">로그인하기</button>
    <div>
      계정이 없으신가요?
      <router-link class="signup-button" to="/signup">가입하기</router-link>
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