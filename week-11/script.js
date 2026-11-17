const exhibits = [
    { name: "The Mirror Room", visitors: 120, minutes: 12, rating: 4.8 },
    { name: "The Forgotten Garden", visitors: 80, minutes: 25, rating: 4.9 },
    { name: "The Clock Tower", visitors: 200, minutes: 5, rating: 3.2 },
    { name: "The Whispering Hall", visitors: 60, minutes: 40, rating: 4.7 },
    { name: "The Empty Gallery", visitors: 150, minutes: 2, rating: 2.1 }
];

const names = exhibits.map(exhibit => exhibit.name);

console.log(names);

const durations = exhibits.map(exhibit => exhibit.minutes);

console.log(durations);

const popular = exhibits.filter(exhibit => exhibit.visitors > 100);

console.log(popular);