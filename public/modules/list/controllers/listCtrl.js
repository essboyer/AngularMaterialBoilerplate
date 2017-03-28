angular.module('listCtrl', ['listService'])
.controller('listCtrl', function(List) {
	
	self = this;

	// Grab all the items from List Service
	List.all()
    .then(function(data) {
        self.listItems = data;
    }, function(error) {});

});