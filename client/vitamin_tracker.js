Template.body.events({
	"submit .new-food": function(event) {
		//Prevent default browser form submit
		event.preventDefault();

		//Get value from form element
		var foodname = event.target.text.value;

		//Query NDB API to get food NDB number for food
		var number_response = Meteor.call("getFoodno", foodname);

		Session.set("numberResponse", number_response);

		//Clear form
		event.target.text.value = "";
	}
});

Template.body.helpers({
	numberResponse: function () {
      return Session.get("numberResponse");
    }
})

Template.nutrientlist.helpers({
  text: "Insert nutrient list"  
});
