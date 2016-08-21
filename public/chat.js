window.onload = function() {
  var messages = [];
  var socket = io.connect('http://localhost:3700');
  var field = document.getElementById("field");
  var sendButton = document.getElementById("send");
  var conetent = document.getElementById("content");

  socket.on('message', function(data){
    if(data.message){
      messages.push(data.message);
      var html = '';
      for(var i =0; i<message.length; i++){
        html += messages[i] + '<br />'
      }
      content.innerHTML = html;
    }else{
      console.log("There is a problem:", data);
    }
  });
  sendButton.onClick = function() {
    var text = field.value;
    socket.emit('send', {message: text});
  };
}
