const app = Vue.createApp({
  data() {
    return {
      headline: 'Find the Nearest Vending Machines',
      tagline: 'Locate snack vending machines near you!',
      buttonText: 'Explore Now',
      searchTitle: 'Find a Vending Machine',
      searchQuery: '',
      searchButtonText: 'Search',
      machines: [
        { id: 1, name: 'Snack Heaven', description: 'Loaded with chips and drinks', image: 'https://source.unsplash.com/400x300/?vending-machine' },
        { id: 2, name: 'Healthy Snacks', description: 'Organic and healthy options', image: 'https://source.unsplash.com/400x300/?vending-machine-healthy' },
        { id: 3, name: 'Late Night Snacks', description: 'Available 24/7 for midnight cravings', image: 'https://source.unsplash.com/400x300/?vending-machine-snacks' },
        { id: 4, name: 'Fresh Juice Machines', description: 'Cold-pressed juices on demand', image: 'https://source.unsplash.com/400x300/?vending-machine-juice' },
        { id: 5, name: 'Quick Snacks', description: 'Grab and go snacks', image: 'https://source.unsplash.com/400x300/?vending-machine-fast' },
        { id: 6, name: 'Coffee Machines', description: 'Brewed coffee 24/7', image: 'https://source.unsplash.com/400x300/?coffee-machine' }
      ],
      locations: [
        { name: 'Yishun', vendingMachines: 5 },
        { name: 'Sembawang', vendingMachines: 3 },
        { name: 'Ang Mo Kio', vendingMachines: 7 },
        { name: 'Upper Thomson', vendingMachines: 4 },
        { name: 'Punggol', vendingMachines: 8 },
        { name: 'Serangoon', vendingMachines: 6 }
      ]
    }
  },
  computed: {
    filteredMachines() {
      if (!this.searchQuery) {
        return this.machines;
      }
      return this.machines.filter(machine => 
        machine.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    searchMachines() {
      console.log("Search triggered");
    },
    showMachines(location) {
      alert(`${location.name} has ${location.vendingMachines} vending machines.`);
    }
  }
}).mount('#app');