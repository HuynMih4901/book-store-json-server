<template>
    <b-form-group name="title" label="Title">
      <b-form-input v-model:value="title" placeholder="Enter title of book"/>
    </b-form-group>
  </template>
  
  <script>
  export default {
    name: "title",
    props: {
      value: String,
    },
    data: () => ({
       title: "",
    }),
    watch: {
      title: {
        handler: function(){
          this.$emit('update', this.title);
        }
      }
    },
    created() {
      this.title = this.value;
      console.log(this.value)
    },
  };
  </script>
  
  <style>
  
  </style>
  