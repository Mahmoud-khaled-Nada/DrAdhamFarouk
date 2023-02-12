<template >
    <v-btn color="primary" @click="showPageNumber">
        Normal Button
       
    </v-btn>

    <p>
        {{ dataRows.name.long }}

    </p>
</template>

<script>
import showPageNumber from '../../api/general';

export default {
    data() {
        return {
            dataRows: [],
        }
    },
    methods: {
        async showPageNumber() {
            try {
                const response = await showPageNumber.showPageNumber();
                const fetchData = response.data.data
                this.dataRows = fetchData
                console.log(fetchData);
                // for (let i in fetchData) {
                //   const item = fetchData[i];
                //   this.dataRows.push(item);
                //   console.log(this.dataRows);

                // }
            } catch (error) {
                console.log(error.data);
            }
        },
    }
};
</script>