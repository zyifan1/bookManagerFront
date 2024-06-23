<template>
  <a-card hoverable style="width: 240px">
    <template #cover>
      <img alt="example" src="https://picsum.photos/240/240"/>
    </template>
    <a-card-meta :title="userName">
      <template #description>{{ userAccount }}</template>
    </a-card-meta>
  </a-card>
</template>


<script setup>
import myAxios from "../../plugins/myAxios.js";
import {ref} from "vue";

const userAccount = ref()
const userName = ref()

myAxios.get("/user/getUserInfo", {
  params: {
    userId: window.localStorage.getItem("userId"),
  }
}).then((res) => {
  userAccount.value = res.data.data.userAccount;
  userName.value = res.data.data.userName;
})

</script>

<style scoped>

</style>