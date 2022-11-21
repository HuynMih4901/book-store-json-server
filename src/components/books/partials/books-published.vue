<template>
    <b-form-group ref="published" name="published" label="Published">
      <b-form-input v-model:value="published" placeholder="Enter published" />
    </b-form-group>
  </template>
  
  <script>
  export default {
    name: "published",
    props: {
      value: String,
    },
    data: () => ({
        published: "",
    }),
    watch: {
      published: {
        handler: function() {
          this.$emit("update", this.published);
        },
      },
    },
    created() {
      this.published = this.value;
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  