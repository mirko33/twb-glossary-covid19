<template>
  <v-row justify="center">
    <v-dialog v-model="opened" scrollable max-width="300px">
      <v-card>
        <v-card-title>{{ item }}</v-card-title>
        <v-divider></v-divider>
         <v-card>
            <v-btn color="warning" fab small dark>
              <v-icon>mdi-voice</v-icon>
            </v-btn>
          <v-card-text>
           Entry
          </v-card-text>
         </v-card>
        <v-card-text style="height: 300px;">
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="#e8991c" text @click="opened = !opened">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    item: {
      type: String,
      required: true
    },
    opened: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    opened () {
      this.$emit('closepressed', this.opened)
    }
  }
}
</script>
