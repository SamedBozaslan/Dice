  
 var playerScore1 = Math.floor(Math.random() * 6);

 var playerScore2 = Math.floor(Math.random() * 6);

 var dicePic=[

     'images/dice1.png', 'images/dice2.png', 'images/dice3.png',

      'images/dice4.png', 'images/dice5.png', 'images/dice6.png'

   ]

   document.querySelector(".img1").setAttribute("src", dicePic[ playerScore1 ] );

   document.querySelector(".img2").setAttribute("src", dicePic[ playerScore2 ] );

   if(playerScore1 === playerScore2){

     document.querySelector("h1").innerHTML = "Draw!";

   }

   if(playerScore1 > playerScore2){

     document.querySelector("h1").innerHTML = "Player1 wins!";

   }

   if(playerScore1 < playerScore2){

     document.querySelector("h1").innerHTML = "Player2 wins!";

   }