lawyers = [
    { name: 'John Doe', expertise: 'Criminal Law', location: 'New York', rating: 4.5 },
    { name: 'Jane Smith', expertise: 'Family Law', location: 'California', rating: 4.0 },
    { name: 'Mark Johnson', expertise: 'Corporate Law', location: 'Texas', rating: 4.8 }
  ];

  searchResults: any[] = []; // Stores search results
  searchQuery: string = ''; // Two-way data binding for the search bar

  // Dummy Data for Online Lawyers (25+ lawyers example)
  onlineLawyers = [
    { name: 'Anna Lee', expertise: 'Family Law', location: 'California', rating: 4.7, img: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'David Adams', expertise: 'Criminal Law', location: 'New York', rating: 4.9, img: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Sophia Wu', expertise: 'Corporate Law', location: 'Texas', rating: 4.6, img: 'https://randomuser.me/api/portraits/women/3.jpg' },
    // Add more lawyers here (25+ total)
  ];

  displayedLawyersCount = 6; // Initially showing 6 lawyers
  displayedOnlineLawyers: any[] = []; // Stores displayed online lawyers

  ngOnInit(): void {
    // Display initial set of online lawyers
    this.displayOnlineLawyers();
  }

  // Search Functionality
  searchLawyers(): void {
    const query = this.searchQuery.toLowerCase();
    this.searchResults = this.lawyers.filter(lawyer =>
      lawyer.expertise.toLowerCase().includes(query) ||
      lawyer.location.toLowerCase().includes(query)
    );
  }

  // Function to Display Online Lawyers
  displayOnlineLawyers(): void {
    this.displayedOnlineLawyers = this.onlineLawyers.slice(0, this.displayedLawyersCount);
  }

  // Load more online lawyers when the button is clicked
  loadMoreOnlineLawyers(): void {
    this.displayedLawyersCount += 6;
    this.displayOnlineLawyers();

    // If all lawyers are displayed, disable the button
    if (this.displayedLawyersCount >= this.onlineLawyers.length) {
      // Logic to handle "No more lawyers" state
    }
  }
