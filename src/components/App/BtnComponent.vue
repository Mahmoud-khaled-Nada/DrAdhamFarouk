<template>
    <div class="d-flex justify-space-around">
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn color="#00d084" v-bind="props">
                    <i class="mdi-translate mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true"></i>
                </v-btn>
                <v-btn color="#00d084">
                    <i class="mdi-weather-sunny mdi v-icon notranslate v-theme--light" aria-hidden="true" style="font-size: 24px; height: 24px; width: 24px;"></i>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>
<script>
export default {
    data: () => ({
        items: [
            { title: "English" },
            { title: "Arabic" },
        ],
    }),
}
</script>