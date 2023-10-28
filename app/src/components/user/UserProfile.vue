<template>
  <img v-if="user.status == 'mather'" src="@/assets/women_profile.png" alt="" />
  <img
    v-else-if="user.status == 'father'"
    src="@/assets/men_profile.png"
    alt=""
  />
  <img v-else-if="user.status == 'son'" src="@/assets/son_profile.png" alt="" />
  <img
    v-else-if="user.status == 'daughter'"
    src="@/assets/daughter_profile.png"
    alt=""
  />
  <h2>{{ user.userName }}</h2>
  <p>{{ userStatus }}</p>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    userStatus: {
      cache: false,
      get() {
        if (this.user.status != undefined && this.user.status != null) {
          let str =
            this.user.status.slice(0, 1).toUpperCase() +
            this.user.status.slice(1);
          return str;
        } else {
          console.log("Я был нулячий");
          return "Error";
        }
      },
    },
  },
};
</script>

<style scoped lang="scss">
img {
  height: 200px;
}
</style>
