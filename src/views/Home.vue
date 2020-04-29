<template>
  <div class="home">
    <v-text-field
      v-model="search"
      label="Search"
      single-line
      hide-details
      />
    <v-hover
        v-slot:default="{ hover }"
        disabled
    >
     <v-data-table dense light :headers="headers" :items="glossary.glossary" loading-text="Loading... Please wait" class="elevation-1" :search="search" :items-per-page="5" fixed-header group-by="domain" @click:row="goToEntry"> // hide-default-footer>
     </v-data-table>
    </v-hover>
  </div>
</template>

<script>
import json from '@/assets/data/glossary.json'
// import GlossaryListItem from '@/components/GlossaryListItem.vue'

export default {
  name: 'home',
  // components: { GlossaryListItem },
  data () {
    return {
      expanded: [],
      glossary: json,
      tabs: null,
      dialogm1: '',
      dialog: false,
      search: '',
      headers: [
        { text: 'Domain', value: 'domain' },
        { text: 'English', value: 'en.term' },
        { text: 'Hausa', value: 'ha.term' },
        { text: 'Kanuri', value: 'kr.term' },
        { text: 'Test', value: 'nn.term', align: 'start' }
      ]
    }
  },
  methods: {
    goToEntry (item) {
      this.$router.push(`/open/${item}`)
    }
  }
}
</script>
<style>
tbody tr:nth-of-type(even) {
  background-color: rgba(255, 190, 88, 1);
  cursor: pointer;
}
tbody tr:nth-of-type(odd) {
  //background-color: rgba(0, 0, 0, .05);
  background-color: rgba(253, 227, 167, 1);
  cursor: pointer;
}
</style>
