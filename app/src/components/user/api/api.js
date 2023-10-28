import axios from "axios";

class ManageAccounts {
  async fetchUsersProfile() {
    let usersProfile = [];
    try {
      const token = localStorage.getItem("token");

      let x = await axios.get(
        "http://localhost:8081/authorization/accounts-list",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      usersProfile = x.data.members_information;
    } catch (error) {
      console.log(error);

      //возможно перенапровить на страницу error505
    }

    return usersProfile;
  }

  async addUserProfile(user, callback) {
    console.log("start");
    try {
      const token = localStorage.getItem("token");
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      // this.closeDialog();
      callback();

      let new_user = await axios.post(
        "http://localhost:8081/member/newMember",
        user,
        config
      );
      console.log(new_user);

      console.log(new_user.data.member);

      let obj_response = {
        event_name: "massageAddUser",
        data: new_user.data,
      };

      return obj_response;
      // this.$emit('massageAddUser', new_user.data);
    } catch (error) {
      //this.$emit('massageErrorAddUser', error.data.message);
      console.log(error);

      let obj_response = {
        event_name: "massageErrorAddUser",
        data: error.data.message,
      };

      return obj_response;
    }
  }
}

export default new ManageAccounts();
