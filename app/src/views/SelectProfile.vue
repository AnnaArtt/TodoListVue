<template>
  <pre-loader v-if="showPreloader"></pre-loader>
  <div v-else class="home">
    <p class="quation">Who's using?</p>
    <ul>
      <li
        v-for="user in usersProfile"
        :key="user.id"
        @click="$router.push(`/profile/${user._id}`)"
      >
        <UserProfile :user="user" />
      </li>
      <li>
        <div class="add_profile" style="cursor: pointer" @click="openDialog()">
          +
        </div>
        <h2>Add profile</h2>
      </li>
    </ul>
    <AddProfile
      v-model="dialog"
      @massageAddUser="addNewUser"
      @massageErrorAddUser="outMessage"
    />
    <new-button @click="signOut">Sign out</new-button>

    <pop-up :pop_up_active="pop_up_active">{{ message }}</pop-up>
  </div>
</template>

<script>
// @ is an alias to /src
import UserProfile from "@/components/user/UserProfile.vue";
import AddProfile from "@/components/user/AddProfile.vue";
import ManageAccounts from "@/components/user/api/api.js";

export default {
  name: "SelectProfile",
  components: {
    UserProfile,
    AddProfile,
  },
  data() {
    return {
      usersProfile: [],
      dialog: false,
      pop_up_active: false,
      message: "",

      showPreloader: true,
    };
  },
  methods: {
    async getProfiles() {
      this.usersProfile = await ManageAccounts.fetchUsersProfile();
    },
    openDialog() {
      this.dialog = true;
    },
    addNewUser(new_user_data) {
      this.usersProfile.push(new_user_data.member);

      this.outMessage(new_user_data.message);
    },
    signOut() {
      localStorage.clear();
      this.$router.push("/authorithation");
    },
    outMessage(message) {
      this.message = message;
      this.pop_up_active = true;

      setTimeout(() => {
        this.pop_up_active = false;
      }, 5000);
    },
  },
  mounted() {
    this.getProfiles();

    this.$nextTick(() => {
      setTimeout(() => {
        console.log("load");
        this.showPreloader = false;
      }, 3000);
    });
  },
};
</script>

<style lang="scss">
.home {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .quation {
    font-size: 42px;
    color: #484848;
    font-weight: 700;
  }
  h2 {
    font-size: 24px;
    color: #484848;
    font-weight: 500;
  }
  h3 {
    font-size: 14px;
    color: #484848;
    font-weight: 200;
    margin: 0;
  }
  ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 25px;

    max-width: 80vw;
    li {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 10px;
    }
  }
  .add_profile {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #dda1a1;

    border-radius: 50%;
    height: 200px;
    width: 200px;

    font-size: 54px;
    font-weight: 800;
  }
}
</style>
