// such.js is generated from such.djs 

"use strict";

angular.module('wowSuch', []);

angular.module('wowSuch')
    .controller('dogeController', ['$scope', 'dogeData',
        function($scope, dogeData) {
            $scope.multiplier = 1;

            dogeData.success(function(data) {

                var doge = data.
                return .markets.DOGE;

                $scope.value = $scope.dogecoinPrice = doge.lasttradeprice;

                $scope.multipliedValue = function multipliedValue(multiplier) {
                    if (multiplier === "1") {
                        $scope.value = $scope.dogecoinPrice;
                    } else {
                        $scope.value = multiplier * $scope.dogecoinPrice;
                    }
                }

                $scope.dividedValue = function dividedValue(value) {
                    $scope.multiplier = value / $scope.dogecoinPrice;
                }

            });
        }
    ]);

angular.module('wowSuch')
    .factory('dogeData', ['$http',
        function($http) {
            var dogeUrl = 'https://jsonp.nodejitsu.com/?callback=soCallback&url=http%3A%2F%2Fpubapi.cryptsy.com%2Fapi.php%3Fmethod%3Dsinglemarketdata%26marketid%3D132&callback=JSON_CALLBACK';
            return $http.jsonp(dogeUrl);
        }
    ]);

function soCallback(data) {}