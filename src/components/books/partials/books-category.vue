<template>
    <b-form-group ref="category" name="category" label="Category">
      <b-form-input v-model:value="category" placeholder="Enter category" />
    </b-form-group>
  </template>
  
  <script>
  export default {
    name: "category",
    props: {
      value: String,
    },
    data: () => ({
        category: "",
    }),
    watch: {
      category: {
        handler: function() {
          this.$emit("update", this.category);
        },
      },
    },
    created() {
      this.category = this.value;
    },
  };
  </script>
  
  <style>
  
  </style>
  