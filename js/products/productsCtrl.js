angular.module('myApp').controller('productsCtrl', function($scope, $stateParams, productsSrvc){
    console.log($stateParams.id)
    if($stateParams.id === 'shoes') {
        productsSrvc.getShoeData().then(shoes => {
            $scope.productData = shoes
        })
    } else if($stateParams.id === 'socks') {
        productsSrvc.getSockData().then(socks => {
            $scope.productData = socks
        })
    }
})