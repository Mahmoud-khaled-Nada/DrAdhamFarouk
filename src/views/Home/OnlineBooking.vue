<template>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    The Date
                </th>
                <th class="text-left">
                    The Hour
                </th>
                <th class="text-left">
                    Available
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.the_date }}</td>
                <td>{{ item.the_hour }}</td>
                <td> <v-btn>{{ itme.available }}</v-btn> </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
export default {
    data() {
        return {
            desserts: [
                {
                    name: 'Saturday',
                    the_date: "1/3/2023",
                    the_hour: " 5.20",
                    available: "yes",
                },
                {
                    name: 'Sunday',
                    the_date: "1 / 3 / 2023",
                    the_hour: "5.20",
                    available: "yes",
                },
                {
                    name: 'Monday',
                    the_date: "1 / 3 / 2023",
                    the_hour: "5.20",
                    available: "no",
                },
                {
                    name: 'Tuesday',
                    the_date: "1 / 3 / 2023",
                    the_hour: "5.20 ",
                    available: "yes",
                },
                {
                    name: 'Wednesday',
                    the_date: " 1 / 3 / 2023",
                    the_hour: "5.20",
                    available: "yes",
                },
                {
                    name: 'Thursday',
                    the_date: "1 / 3 / 2023",
                    the_hour: " 5.20",
                    available: "no",
                },
                {
                    name: 'Friday',
                    the_date: "1 / 3 / 2023",
                    the_hour: "5.20",
                    available: "yes",
                },
            ],
        }
    },
}
</script>