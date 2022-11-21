<template>

</template>
<script>
export default {
    name: "Home",
    data(){
        return{
           
        }
    },
    methods:{
        signout(){
            localStorage.clear();
            this.$router.push({name: "signin"})
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info")
        if(!user){
            this.$router.push({name: "signup"})
        }
    }
}
</script>