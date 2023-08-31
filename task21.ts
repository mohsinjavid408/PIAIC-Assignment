interface Country {
    name: string;
    population: number;
    capital: string;
  }
  
  let Countries: Country[] = [
    { name: "USA", population: 331002651, capital: "Washington, D.C." },
    { name: "Canada", population: 37742154, capital: "Ottawa" },
    { name: "Mexico", population: 128932753, capital: "Mexico City" },
  ];
  
  console.log(Countries);


//   [
//     { name: 'USA', population: 331002651, capital: 'Washington, D.C.' },
//     { name: 'Canada', population: 37742154, capital: 'Ottawa' },
//     { name: 'Mexico', population: 128932753, capital: 'Mexico City' }
//   ]