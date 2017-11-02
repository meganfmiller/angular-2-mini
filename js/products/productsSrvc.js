angular.module('myApp').service('productsSrvc', function($http) {
    this.getShoeData = function(){
        return $http.get('https://practiceapi.devmountain.com/products?category=shoes')
            .then(response => {
                return response.data;
            })
    }

    this.getSockData = function(){
        return $http.get('https://practiceapi.devmountain.com/products?category=socks')
            .then(response => {
                return response.data;
            })
    }
});