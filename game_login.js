// Create function addUser()
function addUser(){
  // Get value of user by id player1_name_input and player2_name_input
  Getvalue(player1_name_input)
  Getvalue(player2_name_input)
  // Store these values locally
  localStorage(player1_name_input,player2_name_input)
  //Assign "game_page.html" to window.location
  window.location(game_page.html)
}

