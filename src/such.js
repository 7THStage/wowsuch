// such.js is generated from such.djs

"use strict";

angular.module('wowSuch', []);

angular.module('wowSuch')
    .controller('dogeController', ['$scope', 'dogeData', 'usdData',
        function($scope, dogeData, usdData) {
            $scope.numberOfDogecoinInput = 1;

            dogeData.success(function(data) {

                $scope.numberOfBTCInput = $scope.singleDogecoinPriceInBTC = data;

                $scope.amendDogecoinInput = function amendDogecoinInput(numberOfDogecoinInput) {
                    if (numberOfDogecoinInput === "1") {
                        $scope.numberOfBTCInput = $scope.singleDogecoinPriceInBTC;
                    } else {
                        $scope.numberOfBTCInput = numberOfDogecoinInput * $scope.singleDogecoinPriceInBTC;
                    }

                    $scope.numberOfUSDInput = (numberOfDogecoinInput * $scope.singleDogecoinPriceInBTC) * $scope.singleBTCPriceInUSD;
                }

                $scope.amendBTCInput = function amendBTCInput(numberOfBTCInput) {
                    $scope.numberOfDogecoinInput = numberOfBTCInput / $scope.singleDogecoinPriceInBTC;
                    $scope.numberOfUSDInput = numberOfBTCInput * $scope.singleBTCPriceInUSD;
                }

                usdData.success(function(data) {
                    $scope.singleBTCPriceInUSD = data;
                    $scope.numberOfUSDInput = data * $scope.numberOfBTCInput;

                    $scope.amendUSDInput = function amendUSDInput(numberOfUSDInput) {
                        $scope.numberOfDogecoinInput = (numberOfUSDInput / $scope.singleDogecoinPriceInBTC) / $scope.singleBTCPriceInUSD;
                        $scope.numberOfBTCInput = numberOfUSDInput / $scope.singleBTCPriceInUSD;
                    }
                });

            });
        }
    ]);

angular.module('wowSuch')
    .factory('dogeData', ['$http',
        function($http) {
            var dogeUrl = 'https://moolah.ch/api/rates?f=DOGE&t=BTC&a=1.json';
            return $http.get(dogeUrl);
        }
    ]);

angular.module('wowSuch')
    .factory('usdData', ['$http',
        function($http) {
            var dataUrl = 'https://moolah.ch/api/rates?f=BTC&t=USD&a=1.json';
            return $http.get(dataUrl);
        }
    ]);
