Once you clone the repository and add the code in your IDE you can run in the project directory
### `npm install`
It will install all the dependencies required to the app.
In the project directory, you can run:
### `npm start`
Runs the app in the development mode
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.

I have used react-router-dom for navigating between listpage and detailpage.
Listpage shows the list of upcoming movies and on scrolling it will update the state by fetching more data of 20 movies per page till total number of pages provided by API.
On clicking any movie card will navigate to the detailpage with the id of that specific movie in which it fetches the details of that particular movie and display.
In both pages navigation bar is implemented at top so that at any point of time we can go to homepage (listpage) by clicking on home icon.
Search bar is shown in listpage only which fetches the movie list related to the keyword searched and displays them, infinite scrolling also supports on searched movie list.
I have used redux library for state management which helps to manage every asynch functions in the app.
I have also used env variables for keeping API key and API url private.

API provided for this web application is very good however the documentation of API website is bit confusing which made me spend extra hours finding the right API.
API endpoint for upcoming movies contains released movies also, since there is no other endpoint available to get list of upcoming movies I decided to use it.
Sketch of the design dont have colour (color coding is mentioned but not specified where to use), font size, font family and dimentions of movie cards are not clearly mentioned, so I decided to develop on the basis of visual matching of the page with the sketch.
I have used bootstrap library for styling of the web pages which is not specified anywhere in requirement. I hope it is fine.

Thank you for this opportunity of expressing my skills and being part of this wonderfull hiring process is really exciting.
