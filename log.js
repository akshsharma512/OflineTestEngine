var app = angular.module('dem0', []);
app.controller('log1', function ($scope, $http) {

    var user, pass;

    $http.get('https://api.mlab.com/api/1/databases/offlinedb/collections/table3?apiKey=INZ1LqXv2Q23Ajn_k3eTsoxCldQBSCk-').then(function (response) {
        var out = response.data;
        user = out[0].log.user;
        pass = out[0].log.pass;

        

    });

    document.getElementById("bt1").addEventListener("click", function () {
        var usernew = document.getElementById("in1").value;
        var passnew = document.getElementById("in2").value;

        var u1 = String(user);
        var p1 = String(pass);
        var u2 = String(usernew);
        var p2 = String(passnew);

        if (u1 == u2 && p1 == p2) {
            window.location.href = "index.html";
        } else
            document.getElementById("error").innerHTML = "INVALID USER OR PASSWORD";

    });

});