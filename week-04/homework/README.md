# FIELD NOTE

Design I made on Figma

<img width="1215" height="678" alt="Screenshot 2026-10-06 at 16 07 03" src="https://github.com/user-attachments/assets/21f31e5c-4d17-438f-a535-7a54c67a93b2" />

Website I did

<img width="1508" height="902" alt="Screenshot 2026-10-06 at 16 06 28" src="https://github.com/user-attachments/assets/e1aab893-3e02-4bb9-a667-3fa2e7cab1f3" />


1. What changed when you began thinking about relationships between elements instead of styling each element separately?

I worked more on the container and let it arrange the inside elements instead of styling each box one by one. This line, display: grid with 1fr 1fr 1fr, puts all three event boxes side by side with equal space. And adding a gap in the middle handles the spacing instead of using margins on each element box. 

I accidentally gave each event card the same class as its container. so every element box became its own grid and it took me long time to understand why it was doing weird shapes. Images got squished into a thin strip next to the text. After changing the class name, it was fixed.

I also found out that <p > can't go inside another <p >. It took me another 10 minutes to find why my style was not working. 

2. Resizing

When I made the browser narrow, the 3 event columns and my 5 review columns got squished instead of wrapping. Some of the element boxes disappeared. Making the web page responsive to any px size is something I am looking forward to learning. 

3. Website
https://www.pinterest.com/

I really like how Pinterest laid out its pictures. It is so organized, yet they still fit together neatly in columns with consistent gaps, so the page feels organized instead of messy. When I resize the browser, the number of columns changes, but the layout still works.
