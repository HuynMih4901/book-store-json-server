<template>
    <div>
        <b-container>
            <b-row class="flex-row mb-5" justify="space-between">
                <b-col class="col-sm-4">
                    <Search />
                </b-col>
                <b-col class="col-sm-6"></b-col>
                <b-col class="col-sm-2 text-end">
                    <b-button>
                        <router-link :to="{ name: 'create' }" class="d-flex align-items-center">
                            <span>Thêm mới</span>
                        </router-link>
                    </b-button>
                </b-col>
            </b-row>
        </b-container>
        <div class="ma-5">
            <b-container class="grey lighten-3">
                <b-card flat class="pa-3" justify="space-between">
                    <!-- Table to display -->
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="text-left">
                                    <span class="caption text-capitalize">
                                        <h2>#</h2>
                                    </span>
                                </th>
                                <th class="text-left">
                                    <span class="caption text-capitalize">
                                        <h2>Title</h2>
                                    </span>
                                </th>
                                <th class="text-left">
                                    <span class="caption text-capitalize">
                                        <h2>Author</h2>
                                    </span>
                                </th>
                                <th class="text-left">
                                    <span class="caption text-capitalize">
                                        <h2>Category</h2>
                                    </span>
                                </th>
                                <th class="text-left">
                                    <span class="caption text-capitalize">
                                        <h2>Published</h2>
                                    </span>
                                </th>
                                <th class="text-left">
                                    <span class="caption text-capitalize">
                                        <h2>Pages</h2>
                                    </span>
                                </th>
                                <th class="text-left">
                                    <span class="caption text-capitalize">
                                        <h2>Description</h2>
                                    </span>
                                </th>
                                <th class="text-left">
                                    <span class="caption text-capitalize">
                                        <h2>Action</h2>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="entry in entries" :key="entry.title">
                                <td>
                                    {{ entry.id }}
                                </td>
                                <td>
                                    {{ entry.title }}
                                </td>
                                <td>
                                    {{ entry.author }}
                                </td>
                                <td>
                                    {{ entry.category }}
                                </td>
                                <td>
                                    {{ entry.published }}
                                </td>
                                <td>
                                    {{ entry.pages }}
                                </td>
                                <td>
                                    {{ entry.description }}
                                </td>
                                <td>
                                    <div class="d-flex">
                                        <li class="me-3">
                                            <router-link :to="'view?id=' + entry.id"  tag="li"
                                                class="d-flex align-items-center">
                                                <b-icon icon="eye" aria-hidden="true"></b-icon>
                                            </router-link>
                                        </li>
                                        <li class="me-3">
                                            <router-link :to="'update/'+ entry.id" tag="li"
                                                class="d-flex align-items-center">
                                                <b-icon icon="pencil-square" aria-hidden="true"></b-icon>
                                            </router-link>
                                        </li>
                                        <b-button @click="dlt(entry)"><b-icon icon="trash" aria-hidden="true"></b-icon></b-button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </b-card>
            </b-container>
        </div>
    </div>
</template>
  
<script>
import axios from "axios"
import Search from "../partials/search.vue"
export default {
    name: "list",
    components: {
        Search
    },
    data() {
        return {
            entries: [
                {
                    id: "",
                    title: "",
                    author: "",
                    description: "",
                    category: "",
                    published: "",
                    pages: ""
                }

            ]
        };
    },
    methods: {
        async getData() {
            let result = await axios.get("http://localhost:3000/books")
            this.entries = result.data;
            console.log(this.entries[0])
        },
        async dlt(entry){
            let result = await axios.delete(`http://localhost:3000/books/${entry.id}`)
            let ok = alert("do you want to delete?")
            if(ok){
                result.getData()
            }
            else{
                this.$router.currentRoute
            }
            this.getData()
            
        }
    },
    created() {
        this.getData()
    }
};
</script>
  
<style scoped>
table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: gray;
    width: 100%;
}

th {
    border-bottom: 2px solid #ddd;
    text-align: left;
}

td.left {
    text-align: left;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
}

td.right {
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
}

td.center {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

button {
    background-color: greenyellow;
}

li:hover {
    color: blue;
}
</style>