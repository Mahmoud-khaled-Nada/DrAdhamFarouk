<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card class="mx-auto" color="grey-lighten-4" max-width="100%" v-bind="props">
        <v-img :aspect-ratio="16 / 9" cover
          src="http://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-_38.jpg">
          <v-expand-transition>
            <div v-if="isHovering" class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
              style="height: 100%">
              $14.99
            </div>
          </v-expand-transition>
        </v-img>

        <v-card-text>
          <v-timeline density="compact" align="start">
            <v-timeline-item v-for="message in messages" :key="message.time" :dot-color="message.color" size="x-small">
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong>
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  data: () => ({
    messages: [
      {
        from: 'Plastic Surgery',
        message: `means restoration of the natural form of human
                            body. The extensive field of Plastic Surgery intervenes with the
                            boundaries of other fields of science and art`,
        color: 'deep-purple-lighten-1',
      },
      //   {
      //     from: 'John Doe',
      //     message: '',
      //     time: '10:37am',
      //     color: 'green',
      //   },
    ],
  }),
}
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>




<!--
                            <v-sheet class="pa-2 ma-2">
                            <div class="sconde-infor">
                                <img
                                    src="http://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-_38.jpg" />
                                <p>
                                    Plastic Surgery means restoration of the natural form of human
                                    body. The extensive field of Plastic Surgery intervenes with the<br />
                                    boundaries of other fields of science and art
                                </p>
                            </div>
                        </v-sheet>
 -->
