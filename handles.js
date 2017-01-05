//sample data modified from randomUser.me
var randomUser = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "stella",
        "last": "meyer"
      },
      "location": {
        "street": "7385 kapellenweg",
        "city": "schmalkalden-meiningen",
        "state": "saarland",
        "postcode": 58225
      },
      "email": "stella.meyer@example.com",
      "picture": {
        "medium": "https:\/\/randomuser.me\/api\/portraits\/med\/women\/50.jpg"
      },
      "nat": "DE"
    }
  ]
}

//handlebars step one: grap the html from the script tag
let userHTML = $('#handleGrab').html()

//handlebars step two: compile it into a template
let userTemplate = Handlebar.compile(userHTML)

//handlebars step three:render the HTML by passing the data to the template
let userOutput = userTemplate(randomUser)

//handlebars step four: put the complete HTML into the DOM
$('#displayUser').append(userOutput)
