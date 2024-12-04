//STEP 1
// Create a string array containing your five favorite movies
// let favoriteMovies = ["The Shawshank Redemption", "Inception", "The Dark Knight", "Forrest Gump", "The Matrix"]

// Display the second movie in the array
// console.log(favoriteMovies[1])


//STEP 2
// Declare an array called movies using the function constructor method
// let movies = new Array(5)

// Assign your favorite movies to each index in the array
// movies[0] = "The Shawshank Redemption"
// movies[1] = "Inception"
// movies[2] = "The Dark Knight"
// movies[3] = "Forrest Gump"
// movies[4] = "The Matrix"

// Display the first movie in the array
// console.log(movies[0])

//STEP 3
// Declare an array called movies using the function constructor method
// let movies = new Array(5)

// Assign your favorite movies to each index in the array
// movies[0] = "The Shawshank Redemption"
// movies[1] = "Inception"
// movies[2] = "The Dark Knight"
// movies[3] = "Forrest Gump"
// movies[4] = "The Matrix"

// Add a new movie into the 3rd position (index 2)
// movies.splice(2, 0, "Interstellar")

// Display the length of the array
// console.log(movies.length)



//STEP 4
// Declare an array called movies using literal notation
// let movies = ["The Shawshank Redemption", "Inception", "The Dark Knight", "Forrest Gump", "The Matrix"]

// // Use the delete operator to remove the first movie in the array
// delete movies[0]

// // Use the console to display the contents of the array
// console.log(movies)


//STEP 5
// Declare an array called movies using literal notation
// let movies = [
//     "The Shawshank Redemption",
//     "Inception",
//     "The Dark Knight",
//     "Forrest Gump",
//     "The Matrix",
//     "Pulp Fiction",
//     "The Godfather"
// ];

// // Use a for/in loop to iterate through the array and display each movie
// for (let index in movies) {
//     console.log(movies[index]);
// }


//STEP 6

// Declare an array called movies using literal notation
// let movies = [
//     "The Shawshank Redemption",
//     "Inception",
//     "The Dark Knight",
//     "Forrest Gump",
//     "The Matrix",
//     "Pulp Fiction",
//     "The Godfather"
// ];

// // Use a for/of loop to iterate through the array and display each movie
// for (let movie of movies) {
//     console.log(movie);
// }


//STEP 7

// Declare an array called movies using literal notation
// let movies = [
//     "The Shawshank Redemption",
//     "Inception",
//     "The Dark Knight",
//     "Forrest Gump",
//     "The Matrix",
//     "Pulp Fiction",
//     "The Godfather"
// ];

// // Sort the array
// movies.sort();

// // Use a for/of loop to iterate through the sorted array and display each movie
// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 8

// Declare an array called movies using literal notation
// let movies = [
//     "The Shawshank Redemption",
//     "Inception",
//     "The Dark Knight",
//     "Forrest Gump",
//     "The Matrix",
//     "Pulp Fiction",
//     "The Godfather"
// ];

// // Create a new array called leastFavMovies
// let leastFavMovies = [
//     "Movie 43",
//     "The Room",
//     "Cats"
// ];

// // Display both arrays within the console window
// console.log("Movies I like:\n");
// for (let movie of movies) {
//     console.log(movie);
// }

// console.log("\nMovies I regret watching:\n");
// for (let movie of leastFavMovies) {
//     console.log(movie);
// }


//STEP 9


// Declare an array called movies using literal notation
// let movies = [
//     "The Shawshank Redemption",
//     "Inception",
//     "The Dark Knight",
//     "Forrest Gump",
//     "The Matrix",
//     "Pulp Fiction",
//     "The Godfather"
// ];

// // Create a new array called leastFavMovies
// let leastFavMovies = [
//     "Movie 43",
//     "The Room",
//     "Cats"
// ];

// // Merge the two arrays into a single array called allMovies
// let allMovies = movies.concat(leastFavMovies);

// // Sort the merged array in reverse order
// allMovies.sort().reverse();

// // Display the reversed sorted list in the console
// console.log("All Movies in Reverse Sorted Order:\n");
// for (let movie of allMovies) {
//     console.log(movie);
// }


//STEP 10

// Declare an array called movies using literal notation
// let movies = [
//     "The Shawshank Redemption",
//     "Inception",
//     "The Dark Knight",
//     "Forrest Gump",
//     "The Matrix",
//     "Pulp Fiction",
//     "The Godfather"
// ];

// // Create a new array called leastFavMovies
// let leastFavMovies = [
//     "Movie 43",
//     "The Room",
//     "Cats"
// ];

// // Merge the two arrays into a single array called allMovies
// let allMovies = movies.concat(leastFavMovies);

// // Sort the merged array in reverse order
// allMovies.sort().reverse();

// // Use the console to display the list in reverse sorted order
// console.log("All Movies in Reverse Sorted Order:\n");
// for (let movie of allMovies) {
//     console.log(movie);
// }

// // Use an array function to return just the last item in the array
// let lastMovie = allMovies.pop();
// console.log("\nThe Last Movie in the Array:\n" + lastMovie);


//STEP 11
// Declare an array called movies using literal notation
// let movies = [
//     "The Shawshank Redemption",
//     "Inception",
//     "The Dark Knight",
//     "Forrest Gump",
//     "The Matrix",
//     "Pulp Fiction",
//     "The Godfather"
// ];

// // Create a new array called leastFavMovies
// let leastFavMovies = [
//     "Movie 43",
//     "The Room",
//     "Cats"
// ];

// // Merge the two arrays into a single array called allMovies
// let allMovies = movies.concat(leastFavMovies);

// // Sort the merged array in reverse order
// allMovies.sort().reverse();

// // Display the list in reverse sorted order
// console.log("All Movies in Reverse Sorted Order:\n");
// for (let movie of allMovies) {
//     console.log(movie);
// }

// // Use a method to return just the first item in the array
// let firstMovie = allMovies.shift();
// console.log("\nThe First Movie in the Array:\n" + firstMovie);


//STEP 12

// Declare an array called movies using literal notation
// let movies = [
//     "The Shawshank Redemption",
//     "Inception",
//     "The Dark Knight",
//     "Forrest Gump",
//     "The Matrix",
//     "Pulp Fiction",
//     "The Godfather"
// ];

// // Create a new array called leastFavMovies
// let leastFavMovies = [
//     "Movie 43",
//     "The Room",
//     "Cats"
// ];

// // Merge the two arrays into a single array called allMovies
// let allMovies = movies.concat(leastFavMovies);

// // Sort the merged array in reverse order
// allMovies.sort().reverse();

// // Display the list in reverse sorted order
// console.log("All Movies in Reverse Sorted Order:\n");
// for (let movie of allMovies) {
//     console.log(movie);
// }

// // Function to retrieve indices of movies not liked
// function getIndicesOfMoviesNotLiked(allMovies, leastFavMovies) {
//     let indices = [];
//     for (let i = 0; i < allMovies.length; i++) {
//         if (leastFavMovies.includes(allMovies[i])) {
//             indices.push(i);
//         }
//     }
//     return indices;
// }

// // Retrieve indices of movies not liked
// let indices = getIndicesOfMoviesNotLiked(allMovies, leastFavMovies);
// console.log("\nIndices of Movies Not Liked:\n" + indices);

// // Movies to replace the least favorite ones
// let likedMovies = [
//     "Interstellar",
//     "Whiplash",
//     "Parasite"
// ];

// // Replace movies not liked with liked movies
// for (let i = 0; i < indices.length; i++) {
//     allMovies[indices[i]] = likedMovies[i];
// }

// // Display the updated list of movies
// console.log("\nUpdated List of Movies:\n");
// for (let movie of allMovies) {
//     console.log(movie);
// }


//STEP 13

// Create a multi-dimensional array containing your favorite movies and their rankings
// let movies = [
//     ["The Shawshank Redemption", 1],
//     ["Inception", 2],
//     ["The Dark Knight", 3],
//     ["Forrest Gump", 4],
//     ["The Matrix", 5]
// ];

// // Use the filter() method to filter out only the movie names
// let movieNames = movies.map(movie => movie.filter(item => typeof item === "string"));

// // Flatten the array to get a simple array of movie names
// movieNames = movieNames.flat();

// // Display the movie names in the console
// console.log("Favorite Movies:");
// movieNames.forEach(movie => console.log(movie));


//STEP 14

// Create a string array called employees using literal notation
// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

// // Create an anonymous function called showEmployee
// let showEmployee = function(employeeArray) {
//     console.log("Employees:\n");
//     for (let employee of employeeArray) {
//         console.log(employee);
//     }
// };

// // Call the function, passing in the employees array
// showEmployee(employees);


//STEP 15
// function filterValues(arr) {
//     return arr.filter(function(item) {
//         return item !== false && item !== null && item !== 0 && item !== '';
//     });
// }

// // Test Data
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));





//STEP 16

// function getRandomItem(arr) {
//     let randomIndex = Math.floor(Math.random() *arr.length);
//     return arr[randomIndex];
// }

// // Test the function with a numeric array of 10 numbers
// let numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let randomItem = getRandomItem(numericArray);

// console.log(randomItem);


//STEP 17
// function getLargestNumber(arr) {
//     return Math.max(...arr);
// }

// // Test the function with a numeric array
// let numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let largestNumber = getLargestNumber(numericArray);

// console.log(largestNumber); 