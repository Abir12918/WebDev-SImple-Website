// Array of math jokes
const mathJokes = [
    "Why was the math book sad? Because it had too many problems.",
    "What did the zero say to the eight? Nice belt!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why did seven eat nine? Because you're supposed to eat three squared meals a day!",
    "How do you organize a space party? You planet!",
    "Why did the student do multiplication problems on the floor? The teacher told him not to use tables.",
    "Why was the equal sign so humble? Because it knew it wasn't less than or greater than anyone else.",
    "What's a math teacher's favorite season? Sum-mer!",
    "What did one math book say to the other? Don't bother me; I've got my own problems!",
    "Why did the math book look sad? Because it had too many problems."
  ];
  
  // Function to display a random math joke
  function tellMathJoke() {
    const jokeDisplay = document.getElementById('jokeDisplay');
    jokeDisplay.textContent = '';
  
    const randomIndex = Math.floor(Math.random() * mathJokes.length);
    const randomJoke = mathJokes[randomIndex];
  
    jokeDisplay.textContent = randomJoke;
  }
  
  // Add a click event listener to tell a math joke when the button is clicked
  const tellJokeButton = document.getElementById('tellJoke');
  tellJokeButton.addEventListener('click', tellMathJoke);
  