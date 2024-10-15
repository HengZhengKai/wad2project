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
const locations = Vue.createApp({

    data() {
        return {
        }
    },

    mounted(){
    },

    methods: {
    }
})

locations.component('MapComponent', {
    template: '<div id="map" class="map"></div>',
    mounted() {
      this.loadMap();
    },
    methods: {
      loadMap() {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAaxersdl9GsV0071TjsJCPE1b9e2KZ_yE&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        
        window.initMap = this.initMap; // Set initMap to this component's method
      },
      initMap() {
        const map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 1.3521, lng: 103.8198 },
          zoom: 12
        });
  
        const vendingMachineLocations = [
          { lat: 1.2804, lng: 103.8354 }, // Example location 1
          { lat: 1.2903, lng: 103.8515 }, // Example location 2
        ];
  
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

locations.mount('#locations')

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
