<template>
    <div class="block latestPostBlock">
        <v-container>
            <h2 class="text-center">Latest Post</h2>
            <v-row>
                <v-col v-for="item in items" :key="item.id" cols="12" md="4">
                    <v-card outlined class="mx-auto">
                        <v-img class="align-end text-white" height="200" :src="item.src">
                            <v-card-title>{{ item.title }}</v-card-title>
                        </v-img>

                        <v-card-subtitle class="pt-4">
                            {{ item.subtitle }}
                        </v-card-subtitle>

                        <v-card-text>
                            <div>{{ item.description }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="primary" text>More</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
    
<script>
export default {
    name: "LatestPost",
    data: () => ({
        show: false,
        items: [
            {
                id: 1,
                title: "Top western road trips",
                subtitle: "1,000 miles of wonder",
                description: "Embark on a scenic journey through the American West, with breathtaking landscapes and historic landmarks. A road trip to remember",
                src: require("../assets/images/img10.jpg")
            },
            {
                id: 2,
                title: "Christmas tales to read",
                subtitle: "2,000 miles of wonder",
                description: "Spread joy and cheer this holiday season with festive decor, warm gatherings, and meaningful gifts. Make memories to cherish forever.",
                src: require("../assets/images/img11.jpg")
            },
            {
                id: 3,
                title: "20 movies not to miss in 2020",
                subtitle: "3,000 miles of wonder",
                description: "Escape reality and immerse yourself in a world of imagination through the magic of movies. Discover new stories, emotions, and adventures.",
                src: require("../assets/images/img12.jpg")
            }
        ]
    })
};
</script>