(function() {
    'use strict';

    // Define the AngularJS module
    angular.module('ShoppingListCheckOff', [])

    // Define the service to share data between controllers
    .service('ShoppingListCheckOffService', function() {
        var service = this;

        // Initial data
        var toBuyItems = [
            { name: 'Cookies', quantity: 10 },
            { name: 'Chocolates', quantity: 5 },
            { name: 'Milk', quantity: 2 },
            { name: 'Bread', quantity: 1 },
            { name: 'Eggs', quantity: 12 }
        ];
        var boughtItems = [];

        // Expose the data and methods to the controllers
        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getBoughtItems = function() {
            return boughtItems;
        };

        service.buyItem = function(index) {
            var item = toBuyItems.splice(index, 1)[0];
            boughtItems.push(item);
        };
    })

    // Define the ToBuyController
    .controller('ToBuyController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {
        var vm = this;
        vm.items = ShoppingListCheckOffService.getToBuyItems();

        vm.buyItem = function(index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }])

    // Define the AlreadyBoughtController
    .controller('AlreadyBoughtController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {
        var vm = this;
        vm.items = ShoppingListCheckOffService.getBoughtItems();
    }]);

})();
