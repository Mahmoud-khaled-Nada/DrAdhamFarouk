<template>
    <v-container>
        <v-row justify="space-around">
            <v-card width="100%">
                <v-img height="350"
                    src="http://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-_38.jpg"
                    cover class="text-white">
                    <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                        <v-toolbar-title class="text-h6">
                            Info...
                        </v-toolbar-title>
                    </v-toolbar>
                </v-img>
                <v-card-text>
                    <div class="font-weight-bold ms-1 mb-2">
                        Today
                    </div>
                    <v-timeline density="compact" align="start">
                        <v-timeline-item v-for="message in messages" :key="message.time" :dot-color="message.color"
                            size="x-small">
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
        </v-row>
    </v-container>
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

</style>