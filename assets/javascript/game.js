
      //VARIABLES

      var wins = 0;
      var losses = 0;
      var villainChoice = 0;          
      var heroChoice = 0; 
      var BC = 0;
      var H = 0;
      var O = 0;
      var WG = 0;

  
    //FUNCTIONS
    
    function restartGame (){

      if( wins > 1 || losses > 1){
        //  Reset the variables
          wins = 0;       
          losses = 0; 
          heroChoice = 0;

          // Let's make random numbers
          villainChoice = Math.floor((Math.random() * 100) + 19);  
          BC = Math.floor((Math.random() * 12) + 1);
          H = Math.floor((Math.random() * 12) + 1);
          O = Math.floor((Math.random() * 12) + 1);
          WG = Math.floor((Math.random() * 12) + 1);

          // Let's write things on the page
          $("#win-text").text(wins);
          $("#loss-text").text(losses);
          $("#villainChoice-text").text(villainChoice);
          $("#heroChoice-text").text(heroChoice);
          $("#game-text").text("Let's Play!");
      };

    };


    //LET'S DO STUFF

    // This time, click to start the game -- this is Lady Shiva
        $("#LS").on("click", function() { 

          //  Reset the variables
          wins = 0;       
          losses = 0; 
          heroChoice = 0;

          // Let's make random numbers
          villainChoice = Math.floor((Math.random() * 100) + 19);  
          BC = Math.floor((Math.random() * 12) + 1);
          H = Math.floor((Math.random() * 12) + 1);
          O = Math.floor((Math.random() * 12) + 1);
          WG = Math.floor((Math.random() * 12) + 1);

          // Let's write things on the page
          $("#win-text").text(wins);
          $("#loss-text").text(losses);
          $("#villainChoice-text").text(villainChoice);
          $("#heroChoice-text").text(heroChoice);
          $("#game-text").text("Let's Play!");

        }
        );
  
    
        // This time, our click event applies to every single Hero on the page. Not just one.
        $(".img-responsive").on("click", function() {  
          
        // Set the random values for the images
        $("#BC").attr("data-value", BC);
        $("#H").attr("data-value", H);
        $("#O").attr("data-value", O);
        $("#WG").attr("data-value", WG);    


        //Set the Data Values for the Hero's Choice
        var heroValue = $(this).attr("data-value");
        heroValue = parseInt(heroValue);
        heroChoice += heroValue;
        //Write the Hero Choice on the page
        $("#heroChoice-text").text(heroChoice);

    
        // All of the same game win-lose logic applies. So the rest remains unchanged.                
    
        if (heroChoice === villainChoice) {
          wins++;
          $("#win-text").text(wins);
          $("#game-text").text("Heroes Win! Click Lady Shiva to play again!")

          }      
        else if (heroChoice > villainChoice) {
          losses++;
          $("#loss-text").text(losses);
          $("#game-text").text("Villain Wins! Click Lady Shiva to defeat her!")
        };
    
        //restart 
        restartGame();
      
         
      });
