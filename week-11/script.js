const exhibits = [
    { name: "The Mirror Room", visitors: 120, minutes: 12, rating: 4.8 },
    { name: "The Forgotten Garden", visitors: 80, minutes: 25, rating: 4.9 },
    { name: "The Clock Tower", visitors: 200, minutes: 5, rating: 3.2 },
    { name: "The Whispering Hall", visitors: 60, minutes: 40, rating: 4.7 },
    { name: "The Empty Gallery", visitors: 150, minutes: 2, rating: 2.1 }
];

const chart = document.querySelector("#chart");
const chart2 = document.querySelector("#chart2");

const maxMinutes = Math.max(
    ...exhibits.map(exhibit => exhibit.minutes)
);
const maxRating = Math.max(
    ...exhibits.map(exhibit => exhibit.rating)
);

exhibits.forEach(exhibit => {

    const row = document.createElement("div");
    row.className = "chart-row";

    const label = document.createElement("span");
    label.textContent = exhibit.name;

    const bar = document.createElement("div");
    bar.className = "bar";

    const width = exhibit.minutes / maxMinutes * 100;

    bar.style.width = `${width}%`;

    const value = document.createElement("span");
    value.textContent = exhibit.minutes;

    row.append(label, bar, value);
    chart.append(row);

});

exhibits.forEach(exhibit => {

    const row = document.createElement("div");
    row.className = "chart-row";

    const label = document.createElement("span");
    label.textContent = exhibit.name;

    const bar = document.createElement("div");
    bar.className = "bar";

    const width = exhibit.rating / maxRating * 100;

    bar.style.width = `${width}%`;

    const value = document.createElement("span");
    value.textContent = exhibit.rating;

    row.append(label, bar, value);
    chart2.append(row);

});