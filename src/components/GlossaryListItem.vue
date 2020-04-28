<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable max-width="300px">
        <v-card>
          <v-card-title>{{ term }}</v-card-title>
          <v-divider></v-divider>
          <v-card>
            <v-btn color="warning" fab small dark>
              <v-icon>mdi-voice</v-icon>
            </v-btn>
            <v-card-text>
              Entry
            </v-card-text>
          </v-card>
          <v-card-text style="height: 300px;">Jlksjdf</v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="#e8991c" text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <p @click.stop="dialog = true">{{ term }}</p>
  </div>
</template>

<script>
export default {
  props: {
    term: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style></style>
