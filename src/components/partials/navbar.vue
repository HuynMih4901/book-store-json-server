<template>
    <b-container fluid>
        <b-navbar class="mx-5 px-5">
            <b-navbar-brand href="#">OnBooker</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav class="d-flex">
                <b-navbar-nav class="mx-auto">
                    <b-nav-item href="#/books">Books</b-nav-item>
                    <b-nav-item href="#">Categories</b-nav-item>
                    <b-nav-item href="#">Blog</b-nav-item>
                    <b-nav-item href="#">About Us</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav right>
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <b-navbar-brand href="#">
                                <b-icon icon="person-circle" aria-hidden="true"></b-icon>
                            </b-navbar-brand>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>
</template>
<script>
import Search from './search.vue'
export default {
    name: "navbar",
    data(){
        return{
           
        }
    },
    components: {
        Search
    }
}
</script>