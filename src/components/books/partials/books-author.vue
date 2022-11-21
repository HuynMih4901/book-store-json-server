<template>
  <b-form-group name="author" label="Author">
    <b-form-input v-model:value="author" placeholder="Enter author" />
  </b-form-group>
</template>
  
<script>
export default {
  name: "author",
  props: {
    value: String,
  },
  data: () => ({
    author: "",
  }),
  watch: {
    author: {
      handler: function () {
        this.$emit("update", this.author);
      },
    },
  },
  created() {
    this.author = this.value;
  },
};
</script>
  
<style>

</style>
  