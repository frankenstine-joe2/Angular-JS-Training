app.controller('testing-controller', function ($scope) {

    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.currentAlert = "alert-success";
    $scope.textColor = "White";
    $scope.backgroundColor = "Darkgray";
    $scope.student = { "Name": "Xender Cage", "Grade": 12, "Address": "Planer Triclo" };
    $scope.studentsArray = ["Bob", "Alice", "Kevin"];
    $scope.initialEmail = "abc@xyz.com";

    $scope.clickEvent = function () {
        alert("Clicked !");
    };

    $scope.studentClicked = function (name) {
        console.log(name);
    };

    $scope.studentDuplicate = ["Bob", "Alice", "Kevin", "Alice", "Lamo"];

});