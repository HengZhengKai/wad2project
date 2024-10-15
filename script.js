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

// Create a new Vue component for the vending machine map
Vue.component('vending-map', {
    template: '<div id="map"></div>',
    
    mounted() {
        this.initMap();
    },

    methods: {
        initMap() {
            // The location to center the map (e.g., a city)
            const mapCenter = { lat: 1.3521, lng: 103.8198 }; // Example: Singapore's coordinates

            // Create a map centered at the location
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: mapCenter,
            });

            // Array of vending machine locations
            const vendingMachines = [
                { lat: 1.290270, lng: 103.851959 },  // Example: Location 1
                { lat: 1.335136, lng: 103.744484 },  // Example: Location 2
                { lat: 1.303632, lng: 103.860892 },  // Example: Location 3
                { lat: 1.345678, lng: 103.987654 },  // Example: Location 4
            ];

            // Loop through locations and add a marker for each vending machine
            vendingMachines.forEach((location) => {
                new google.maps.Marker({
                    position: location,
                    map: map,
                });
            });
        }
    }
});

// Instantiate the Vue app
new Vue({
    el: '#locations'
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
