<template>
    <b-form-group ref="pages" name="pages" label="Pages">
      <b-form-input v-model:value="pages" placeholder="Enter pages" />
    </b-form-group>
  </template>
  
  <script>
  export default {
    name: "pages",
    props: {
      value: String,
    },
    data: () => ({
        pages: "",
    }),
    watch: {
      pages: {
        handler: function() {
          this.$emit("update", this.pages);
        },
      },
    },
    created() {
      this.pages = this.value;
    },
  };
  </script>
  
  <style>
  
  </style>
  