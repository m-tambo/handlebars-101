function getUser() {

   let promise = new Promise(resolve, reject) {

          return $.ajax({
           url: 'https://randomuser.me/api/',
           dataType: 'json',
           success: function(data) {
             console.log(data);
           }
         });

   }

}
