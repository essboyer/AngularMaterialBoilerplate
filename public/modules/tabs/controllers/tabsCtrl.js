angular.module('tabsCtrl', ['tabsService'])
.controller('tabsCtrl', function(Tabs) {
	
	self = this;

	// Grab all the items from Tabs Service
	Tabs.all()
    .then(function(data) {
        self.tabItems = data;
    }, function () {});

});