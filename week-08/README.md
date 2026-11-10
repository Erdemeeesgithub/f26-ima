# Field-note 

[Domino Web](https://erdemeeesgithub.github.io/f26-ima/week-08/dominos-p3/)

I started with the domino thing we did in class and made it into a fortune game. Each domino is saved as an object like { top: 2, bottom: 5 } in an array, and a loop puts all 28 on the page. When you click one, it adds the two numbers and shows a fortune for that number. If you get 7, the background flashes because it’s the lucky number. There’s also a “draw one” button that picks a random domino.

In class the array was just HTML elements, but I changed it to hold data instead. Then one function makes the dominoes from that data. That made it way easier to show just one domino, because I only had to give the function a different list. My roommate tried it and said the design is kind of messy. I think I made some mistakes while following the professor in class. It was a little confusing, so I used W3Schools and AI to help me with arrays and Math.random().
