'use strict';

printio.controller('HeaderCtrl', ['$scope', function($scope) {
    $scope.openCart = function() {
        PIO.open({
            goTo:'tpl-cart'
        });
    };

    /**
     * widget setup
     * see http://print.io/platform-web-customization for more info
     * TODO: add in your recipeId
     */
    PIO.config({
        recipeId:"f255af6f-9614-4fe2-aa8b-1b77b936d9d6",
        url:"https://widget.print.io/widget/",
        fns:{
            onCartChange:function(cart){
                console.log()
                $scope.$apply(function() {
                    $scope.cartItems = PIO.getNumItems();
                });
            }
        }
    });

    $scope.cartItems = PIO.getNumItems();
}]);