<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Kaamelott Soundboard"/>

    <ListView for="sound in sounds" @itemTap="onItemTap" class="list-group">
      <v-template>
        <Label :text="sound.title"  class="list-group-item-heading"  />
      </v-template>
    </ListView>

  </Page>
</template>

<script>
import * as http from "http";
import * as audio from "nativescript-audio";

const player = new audio.TNSPlayer();

export default {
    data () {
        return {
            sounds: [
            ]
        };
    },
    mounted: function() {
      let self = this;

      http.getJSON("https://raw.githubusercontent.com/2ec0b4/kaamelott-soundboard/master/sounds/sounds.json")
        .then(function(result) {
          self.sounds = result;
        }, function() {
          console.log('error http')
        });
    },
    methods: {
      onItemTap(event) {
        player.playFromUrl({
          audioFile: 'https://raw.githubusercontent.com/2ec0b4/kaamelott-soundboard/master/sounds/' + event.item.file,
          loop: false,
        });
      }
    },
}
</script>

<style scoped>

</style>
