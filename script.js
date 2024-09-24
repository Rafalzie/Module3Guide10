// Data in an Array
const people = [
    { id: 1, name: "Parrnell Bruckner", birthdate: "9/7/1974", children: 2, country: "China", can_program: false },
    { id: 2, name: "Berti Dugald", birthdate: "3/28/1959", children: 2, country: "Uzbekistan", can_program: false },
    { id: 3, name: "Derwin Woffenden", birthdate: "10/3/1979", children: 4, country: "Poland", can_program: false },
    { id: 4, name: "Even Vallentin", birthdate: "9/24/1998", children: 3, country: "Russia", can_program: false },
    { id: 5, name: "Mohandas Rosekilly", birthdate: "6/6/1956", children: 4, country: "China", can_program: false },
    { id: 6, name: "Ardys Dampney", birthdate: "9/10/1955", children: 1, country: "Nigeria", can_program: false },
    { id: 7, name: "Kin MacClenan", birthdate: "9/29/1952", children: 4, country: "France", can_program: true },
    { id: 8, name: "Isak Moulster", birthdate: "1/1/1982", children: 3, country: "United States", can_program: true },
    { id: 9, name: "Jillayne Miquelet", birthdate: "11/10/1951", children: 5, country: "China", can_program: false },
    { id: 10, name: "Levy Cordeau", birthdate: "8/29/2004", children: 4, country: "Brazil", can_program: true }
  ];
  
  //    Calculates Age from Birthdate
  function calculateAge(birthdate) {
    const birthDateObj = new Date(birthdate);
    const ageDiffMs = Date.now() - birthDateObj.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  //   Total Number of Children Using Array Methods
  const totalChildren = people.reduce((total, person) => total + person.children, 0);
  console.log(`Total number of children: ${totalChildren}`);
  
  //   Name and Age for Each Person
  people.forEach(person => {
    const age = calculateAge(person.birthdate);
    console.log(`name: ${person.name}, Age: ${age}`);
  });
  
  //  All Properties of All People Using for...in Loop
  people.forEach(person => {
    console.log(`\nDetails for ${person.name}:`);
    for (let key in person) {
      if (key === 'can_program') {
        console.log(`${key}: ${person[key] ? 'Yes' : 'No'}`);
      } else {
        console.log(`${key}: ${person[key]}`);
      }
    }
  });
  
  //  Loop to Display Information for First 5 People
  for (let i = 0; i < 5; i++) {
    const age = calculateAge(people[i].birthdate);
    console.log(`\nFor loop - Person ${i + 1}:`);
    console.log(`name: ${people[i].name}, Age: ${age}, Children: ${people[i].children}, Country: ${people[i].country}`);
  }
  
  //   While Loop to Find a Person Who Can Program
  let i = 0;
  while (i < people.length) {
    if (people[i].can_program) {
      console.log(`\nWhile loop found a programmer: ${people[i].name}`);
      break; // Exit the loop once we find a person who can program
    }
    i++;
  }
  
  //   Break to Stop Looping After Finding First Person with More Than 4 Children
  for (let i = 0; i < people.length; i++) {
    if (people[i].children > 4) {
      console.log(`\nBreak loop found someone with more than 4 children: ${people[i].name}`);
      break;
    }
  }
  