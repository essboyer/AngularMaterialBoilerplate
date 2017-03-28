angular.module('cardsCtrl', ['cardsService'])
.controller('cardsCtrl', function(Cards) {
	
	self = this;
	
	// Grab all the items from Cards Service
	Cards.all()
    .then(function(data) {
        console.log(data);
        self.cardItems = data;
    }, function(error){
        console.error("Something busted...");
    });

});