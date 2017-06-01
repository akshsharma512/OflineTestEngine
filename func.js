
function updateOnlineStatus() {
            document.getElementById("status").innerHTML =
                "User is online";
        }

        function updateOfflineStatus() {
            document.getElementById("status").innerHTML =
                "User is offline";
        }
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOfflineStatus);

    



  