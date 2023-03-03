<template>
    <v-row justify="center" class="mn-center">
        <v-col cols="12" sm="9" md="9" lg="8">
            <v-sheet elevation="10" rounded="xl">
                <v-sheet class="pa-3 bg-primary text-center" rounded="t-xl">
                    <h2>Select Consultation Type</h2>
                </v-sheet>

                <div class="pa-4">
                    <!-- <v-chip-group selected-class="text-primary" column> -->
                    <form>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)"
                                    :counter="10" label="Name" required @input="v$.name.$touch"
                                    @blur="v$.name.$touch"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="state.email" :error-messages="v$.email.$errors.map(e => e.$message)"
                                    label="E-mail" required @input="v$.email.$touch" @blur="v$.email.$touch"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="state.email" :error-messages="v$.email.$errors.map(e => e.$message)"
                                    label="E-mail" required @input="v$.email.$touch" @blur="v$.email.$touch"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-select v-model="state.select" :items="items"
                                    :error-messages="v$.select.$errors.map(e => e.$message)" label="Item" required
                                    @change="v$.select.$touch" @blur="v$.select.$touch"></v-select>
                            </v-col>
                            <v-col cols="12">
                                <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Pick an avatar" prepend-icon="mdi-camera" label="Avatar"></v-file-input>
                            </v-col>

                            <v-col cols="12" class="text-center">
                                <v-btn rounded="lg" color="primary" @click="v$.$validate" style="margin-right: 5px;">
                                    Rounded Button
                                </v-btn>
                                <v-btn variant="outlined" color="primary" @click="clear">
                                    clear
                                </v-btn>
                            </v-col>
                        </v-row>
                    </form>
                    <!-- </v-chip-group> -->
                </div>
            </v-sheet>
        </v-col>
    </v-row>
</template>
<script>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

export default {
    setup() {
        const initialState = {
            name: '',
            email: '',
            select: null,
            checkbox: null,
        }

        const state = reactive({
            ...initialState,
        })

        const items = ref([
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ])

        const rules = {
            name: { required },
            email: { required, email },
            select: { required },
            items: { required },
            checkbox: { required },
        }

        const v$ = useVuelidate(rules, state)

        function clear() {
            v$.value.$reset()

            for (const [key, value] of Object.entries(initialState)) {
                state[key] = value
            }
        }

        return { state, items, clear, v$ }
    },
}
</script>

<style scoped>
.mn-center {
    transform: translate(0, 60px);
}
</style>