$(function() {

  const diceOne = ['A','E','A','N','E','G'];
  const diceTwo = ['A','H','S','P','C','O'];
  const diceThree = ['A','S','P','F','F','K'];
  const diceFour = ['O','B','J','O','A','B'];
  const diceFive = ['I','O','T','M','U','C'];
  const diceSix = ['A','E','A','N','E','G'];
  const diceSeven = ['L','R','E','I','X','D'];
  const diceEight = ['E','I','U','N','E','S'];
  const diceNine = ['W','N','G','E','E','H'];
  const diceTen = ['L','N','H','N','R','Z'];
  const diceEleven = ['T','S','T','I','Y','D'];
  const diceTwelve = ['O','W','T','O','A','T'];
  const diceThirteen = ['E','R','T','T','Y','L'];
  const diceFourteen = ['T','O','E','S','S','I'];
  const diceFifteen = ['T','E','R','W','H','V'];
  const diceSixteen = ['N','U','I','H','M','Qu'];

  const wordCollection = [];
  const currentWordList = [];


  //
  // $('.dice')

  $('#startButton').on('click', function() {

    // const shuffle = $(.dice)[Math.floor(Math.random() * dice.length)]

    const randOne = diceOne[Math.floor(Math.random() * diceOne.length)];
    $('#diceOne').text(randOne);

    const randTwo = diceTwo[Math.floor(Math.random() * diceTwo.length)];
    $('#diceTwo').text(randTwo);

    const randThree = diceThree[Math.floor(Math.random() * diceThree.length)];
    $('#diceThree').text(randThree);

    const randFour = diceFour[Math.floor(Math.random() * diceFour.length)];
    $('#diceFour').text(randFour);

    const randFive = diceFive[Math.floor(Math.random() * diceFive.length)];
    $('#diceFive').text(randFive);

    const randSix = diceSix[Math.floor(Math.random() * diceSix.length)];
    $('#diceSix').text(randSix);

    const randSeven = diceSeven[Math.floor(Math.random() * diceSeven.length)];
    $('#diceSeven').text(randSeven);

    const randEight = diceEight[Math.floor(Math.random() * diceEight.length)];
    $('#diceEight').text(randEight);

    const randNine = diceNine[Math.floor(Math.random() * diceNine.length)];
    $('#diceNine').text(randNine);

    const randTen = diceTen[Math.floor(Math.random() * diceTen.length)];
    $('#diceTen').text(randTen);

    const randEleven = diceEleven[Math.floor(Math.random() * diceEleven.length)];
    $('#diceEleven').text(randEleven);

    const randTwelve = diceTwelve[Math.floor(Math.random() * diceTwelve.length)];
    $('#diceTwelve').text(randTwelve);

    const randThirteen = diceThirteen[Math.floor(Math.random() * diceThirteen.length)];
    $('#diceThirteen').text(randThirteen);

    const randFourteen = diceFourteen[Math.floor(Math.random() * diceFourteen.length)];
    $('#diceFourteen').text(randFourteen);

    const randFifteen = diceFifteen[Math.floor(Math.random() * diceFifteen.length)];
    $('#diceFifteen').text(randFifteen);

    const randSixteen = diceSixteen[Math.floor(Math.random() * diceSixteen.length)];
    $('#diceSixteen').text(randSixteen);
  });

  $('#clearButton').on('click', function() {
    $('.dice').text('');
  });


//input for player word
  $('#input').submit(function(event) {
    event.preventDefault();
    const wordPlayed = $('#playerWord').val().toLowerCase();

    $('#list').append('<li>'+wordPlayed+'</li>');
    console.log(wordPlayed);

    $('#playerWord').on('click', function() {
      $(this).val('');
    });
  });


// $('#addToList').on('click', function() {
//         var list = $('li').append(currentWordList);
// });

      //
      //
      // console.log(list);

//check for word validity. loop through wordCollection array.



  // // var board = $('.dice')
  //
  // for (var i = 0; i < diceOne.length; i ++) {
  //   diceOne[i].
  // }
  //
  //
  //
  //
  // for (var i = 0; i < choiceButtons.length; i++) {
  //   choiceButtons[i].addEventListener("click", function() {





}); //leave this - closes the opening function.













// const shuffleWord = word => {
//   // function shuffleWord(word)
//     var j, x, i;
//     var wordArray = word.split('');
//     for (i = wordArray.length; i; i--) {
//       j = Math.floor(Math.random() * i);
//       x = wordArray[i - 1];
//       wordArray[i - 1] = wordArray[j];
//       wordArray[j] = x;
//     }
//     return wordArray.join('');
//   }
