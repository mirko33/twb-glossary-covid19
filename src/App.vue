<template>
  <v-app>
    <v-app-bar app color="#e8991c" height=90 dark flat >
      <v-img alt="TWB Logo" class="shrink mr-2" contain src="@/assets/logo.png" transition="scale-transition" width="30" />
<!-- language selection -->
   <v-select
      v-model="value"
      :items="headers"
      label="Languages"
      multiple
      hide-details 
      return-object
    >
      <template v-slot:selection="{ item, index }">
        <v-chip small color="rgba(0, 0, 0, 0.54)" v-if="index < 7">
          <span>{{ item.text }}</span>
        </v-chip>
        <span
          v-if="index > 6"
          class="white--text caption"
        >(+{{ value.length - 7 }} others)</span>
      </template>
    </v-select>
<!-- end of language selection -->
      <v-text-field v-model="search" clearable prepend-inner-icon="search" label="Search" single-line class="mx-3" hide-details flat @change="search"></v-text-field>
    </v-app-bar>
    <v-content>
    <v-hover
        v-slot:default="{ hover }"
    >
 
     <v-data-table dense light :headers="selectedHeaders" :items="glossary.glossary" class="elevation-1" :disable-sort=true :search="search">
     <template #item.ar.term="{item}">
      <div style="text-align:right;">
       <span>{{item.ar.term}}</span>
      </div>
     </template>
     </v-data-table>
    </v-hover>
    </v-content>
    <v-row justify="center"> </v-row>
    <v-footer color="#e8991c" app>
     <span class="white--text">&copy; 2020 Translators without Borders</span>
  <v-spacer></v-spacer>
   <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ on }">
        <v-icon v-on="on">info</v-icon>
      </template>
      <v-card>
        <v-card-title>About this glossary</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
<About/>
        </v-card-text>
        <v-card-actions>
          <v-btn color="orange darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-footer>
  </v-app>
</template>

<script>
import About from '@/views/About.vue'
import json from '@/assets/data/glossary.json'
export default {
  name: 'App',
  components: { About },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      glossary: json,
      search: '',
      value: [],
      selectedHeaders: [],
      dialog: false,
      headers: [
        { text: 'English', value: 'English.term' },
        { text: 'Vietnamese', value: 'Vietnamese.term' },
        { text: 'Simplified Chinese', value: 'Simplified_Chinese.term' },
        { text: 'Tagalog', value: 'Tagalog.term' },
        { text: 'Burmese', value: 'Burmese.term' },
        { text: 'Kurmanji', value: 'Kurdish_Kurmanji.term' },
        { text: 'Arabic', value: 'Arabic.term' },
        { text: 'Swahili', value: 'Swahili.term' },
        { text: 'Kibaku', value: 'Kibaku.term' },
        { text: 'Waha', value: 'Waha.term' },
        { text: 'Bura Pabir', value: 'Bura_Pabir.term' },
        { text: 'Mandara', value: 'Mandara.term' }
      ]
    }
  },
  methods: {
    filter(value, search, item) {
      return value != null &&
        search != null &&
        typeof value === 'string' &&
        value.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
    },
  },
  watch: {
    value(val) {
      this.selectedHeaders = val ;
    }
  },
  created() {
    this.selectedHeaders = this.headers;
  }
}
</script>
<style>
tbody tr:nth-of-type(even) {
  background-color: rgba(0, 0, 0, .10) !important;
  cursor: pointer;
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .05) !important;
  cursor: pointer;
}
.v-data-table__mobile-row__header {
 font-weight: 300 !important;
}
.v-data-table__mobile-row__cell {
 font-weight: 500;
}
.v-data-table-header-mobile {
display: none !important;
}
.v-data-footer__pagination {
margin-right: 1px !important;
margin-left: 1px !important;
}
.v-application--is-ltr .v-data-footer__select .v-select {
 margin-top: 1px !important;
 margin-bottom: 5px !important;
}
</style>
