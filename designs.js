//Defining the makeGrid function which is called when the user inputs their desired values
function makeGrid() {
    let latitude, longitude;
    latitude = $('#inputWeight').val();
    longitude = $('#inputHeight').val();
    for(tr=1; tr<=longitude; tr++) { // create table rows
      $('#pixelCanvas').append('<tr></tr>');
    }
    for(td=1; td<=latitude; td++){ // create table columns
      $('tr').append('<td></td>');
    }
  }
  
//prevent form from submitting
  $('#sizePicker').submit(function(dontSend) {
    dontSend.preventDefault(); 
    let tr = $('#pixelCanvas').find('tr');
    tr.remove();
    makeGrid();
  });
  
  // Aplying color to cell background
  $('#pixelCanvas').on('click','td', function(apply) {
    let color = $('#colorPicker').val();
    $(apply.target).css('background-color', color);
  });
  
  //a function to undo color selection
  $('#pixelCanvas').on('dblclick','td',function(undoSelection){
    $(undoSelection.target).css('background-color','transparent');
  });
  
  
  