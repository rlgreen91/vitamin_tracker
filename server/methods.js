Meteor.methods({
	getFoodno: function (foodname) {
		//Get the food NDB number based on the food name

		this.unblock();

		var api_url = "http://api.nal.usda.gov/ndb/search/?q=" + foodname + "&api_key=uf5Lw6JKuBqHJPTS5RYUUc9NxFD8aH9s2IoaESK8";

		var api_response = Meteor.http.call("POST", api_url, function(error, result){
			console.log(result.content);
		});

		return api_response;
	}
})