<template>
    <b-form-group ref="description" name="description" label="Description">
      <b-textarea v-model:value="description" :rows="3" placeholder="Enter description..." />
    </b-form-group>
  </template>
  
  <script>
  export default {
    name: "description",
    props: {
      value: String,
    },
    data: () => ({
        description: "",
    }),
    watch: {
     description: {
        handler: function() {
          this.$emit("update", this.description);
        },
      },
    },
    created() {
      this.description = this.value;
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  