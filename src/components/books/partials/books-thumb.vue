<template>
    <div>
        <input type="file" @change="uploadFile">
        <button @click="submitFile">Upload!</button>
      </div>
</template>
<script>
export default{
    name: "books-thumb",
    data(){
        return{}
    },
   
    methods: {
      uploadFile() {
        this.Images = this.$refs.file.files[0];
      },
      submitFile() {
        let reader = new FileReader();
      reader.readAsDataURL(this.Images);
      reader.onload = (e) => {
        // luu base64 zo json db
      };
      }
    }
}
</script>