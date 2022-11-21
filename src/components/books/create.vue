<template>
    <b-container>
        <h3 class="mb-5">Create new book</h3>
        <b-row class="flex-row mb-5">
            <b-col class="col-sm-7">
                <b-row clas="flex-row">
                    <b-col>
                        <booksTitle :value="entry.title" @update="v => entry.title = v" />
                    </b-col>
                    <b-col>
                        <booksAuthor :value="entry.author" @update="v => entry.author = v" />
                    </b-col>
                </b-row>
                <b-col class="col-sm-12 my-3">

                    <booksDescription :value="entry.description" @update="v => entry.description = v">
                    </booksDescription>
                </b-col>
                <b-col class="col-sm-12">
                    <booksCategory :value="entry.category" @update="v => entry.category = v"></booksCategory>

                </b-col>
            </b-col>
            <b-col class="col-sm-5">
                <b-col class="mb-3">
                    <booksPublished :value="entry.published" @update="v => entry.published = v"></booksPublished>
                </b-col>
                <b-col class="mb-3">
                    <booksPage :value="entry.pages" @update="v => entry.pages = v"></booksPage>
                </b-col>
                
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-button-group>
                    <b-button @click="submit">Save</b-button>
                    <b-button @click="cancel">Cancel</b-button>
                </b-button-group>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import booksTitle from "./partials/books-title.vue"
import booksAuthor from "./partials/books-author.vue"
import booksCategory from "./partials/books-category.vue"
import booksPublished from "./partials/books-published.vue"
import booksPage from "./partials/books-page.vue"
import booksDescription from "./partials/books-description.vue"
import booksThumb from "./partials/books-thumb.vue"
import axios from "axios"
export default {
    name: "create",
    components: {
        booksTitle,
        booksAuthor,
        booksCategory,
        booksPublished,
        booksPage,
        booksDescription,
        booksThumb
    },
    data() {
        return {
            entry: {
                title: "",
                author: "",
                category: "",
                description: "",
                published: "",
                pages: "",
                thumb: ""
            }
        }
    },
    methods: {
        async submit() {
            console.warn('entry: ', this.entry);
            const result =await axios.post(`http://localhost:3000/books`, {
                title: this.entry.title,
                author: this.entry.author,
                description:this.entry.description,
                category:this.entry.category,
                published:this.entry.published,
                pages: this.entry.pages
            });
            if(result.status == 201)
                this.entry=result.data
                this.$router.push({ name: "list" })
            console.warn(result)

        },
        cancel() {
            
            this.$router.push({ name: "list" })
        }
    },
}
</script>