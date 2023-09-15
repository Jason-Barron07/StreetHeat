<template>
    <div>
      <router-link to="/admin"></router-link>
      <div class="input-body">
        <form @submit.prevent="addForm" class="d-flex flex-column gap-5">
          <input
            type="text"
            v-model="editUser.userID"
            placeholder="Id"
            name=""
            id=""
            required
          />
          <input
            type="text"
            v-model="editUser.firstName"
            placeholder="firstName"
            name=""
            id=""
            required
          />
          <input
            type="text"
            v-model="editUser.lastName"
            placeholder="lastName"
            name=""
            id=""
            required
          />
          <input
            type="number"
            v-model="editUser.userAge"
            placeholder="userAge"
            name=""
            id=""
            required
          />
          <input
            type="text"
            v-model="editUser.gender"
            placeholder="gender"
            name=""
            id=""
          />
          <input
          type="text"
          v-model="editUser.userRole"
          placeholder="userRole"
          name=""
          id=""
        />
        <input
        type="text"
        v-model="editUser.emailAdd"
        placeholder="emailAdd"
        name=""
        id=""
      />
      <input
      type="text"
      v-model="editUser.userProfile"
      placeholder="profileLUrl"
      name=""
      id=""
    />
          <button type="submit" class="btn">Save</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {

    computed:{
            users(){
                return this.$store.state.users
            }
        },
        mounted(){
            this.$store.dispatch('fetchUsers')
        },

    data() {
      return {
        editUser: {
         userID: this.id,
          firstName:"",
          lastName:"",
          userAge: "",
          gender: "",
          userRole: "",
          emailAdd: "",
         userProfile: "",
        },
      };
    },
    props: ["id?"],
    methods: {
      addForm() {
        this.$store.dispatch("EditUsers", this.editUser);
      },
    },
  };
  </script>
  
  <style scoped>
  </style> 