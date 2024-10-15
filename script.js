// index.html
const home = Vue.createApp({

    data() {
        return {
        }
    },

    mounted(){
    },

    methods: {
    }
})

home.mount('#home')

// products.html
const products = Vue.createApp({

    data() {
        return {
        }
    },

    mounted(){
    },

    methods: {
    }
})

products.mount('#products')

// locations.html
// const locations = Vue.createApp({

//     data() {
//         return {
//         }
//     },

//     mounted(){
//     },

//     methods: {
//     }
// })

// locations.mount('#locations')

new Vue({
    el: '#locations',
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            // Initialize the map centered in Singapore
            const map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 1.3521, lng: 103.8198 },
                zoom: 12
            });

            // Example: You can replace this with actual data fetching vending machine locations
            const vendingMachineLocations = [
                { lat: 1.2804, lng: 103.8354 }, // Example location 1
                { lat: 1.2903, lng: 103.8515 }, // Example location 2
                // Add more locations as needed
            ];

            // Display markers for each vending machine location
            vendingMachineLocations.forEach(location => {
                new google.maps.Marker({
                    position: location,
                    map: map,
                    title: 'Vending Machine'
                });
            });
        }
    }
});

// about.html
const about = Vue.createApp({

    data() {
        return {
        }
    },

    mounted(){
    },

    methods: {
    }
})

about.mount('#about')
