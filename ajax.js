function getUser() {
   return new Promise( function( resolve, reject ) {

      $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
      })
      .done(function(data) {
         resolve(data);
      })
   })
}

getUser()
   .then(function(data) {
      return newUser(data)
   })
