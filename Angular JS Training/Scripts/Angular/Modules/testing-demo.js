var app = angular.module('testing-demo', []);

//Custom Directive
app.directive("joe", function () {
    return {
        restrict: "ECMA",
        template: "Built in custom directive"
    };
});

app.run(function ($rootScope) {
    $rootScope.color = 'blue';
});