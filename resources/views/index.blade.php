<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel Chat</title>
    <link rel="stylesheet" href="./css/app.css">
</head>
<body>
   <div class="app">
       <header>
        <h1>Chat Room</h1>
        <input type="text" name="username" id="username" placeholder="Please enter a user name....">
       </header>
       <div id="message"></div>
       <form id="message_form">
           <input type="text" name="message" id="message_input" placeholder="Write a message...">
           <button type="submit" id ="message_send">Send</button>
       </form>
    </div>
    <script  src="./js/app.js"defer></script>
</body>
</html>