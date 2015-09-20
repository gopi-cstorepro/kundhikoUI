var strCONST_qcserverURL = 'http://localhost:55922/';
$(document).ready(function () {
    $(document).on("click", "#btnCreateUser", function (e) {
        e.preventDefault();
        createUser();
    });

    $(document).on("click", "#btnCreateDriverRoute", function (e) {
        e.preventDefault();
        createDriverRoute();
    });


});


function createUser() {
    var formData = $('#frmCreateUser').serialize();

    $.ajax({
        type: "POST",
        url: strCONST_qcserverURL + "Resources/handler/createUser.ashx",
        data: formData,
        success: function (data) {
            try {
                localStorage.myname = "Greg";
                window.location.href =  'driverinfo.html';
            }
            catch (e) {

            }
        }
    });
}



function createDriverRoute() {
    var formData = $('#frmCreateDriverRoute').serialize();

    $.ajax({
        type: "POST",
        url: strCONST_qcserverURL + "Resources/handler/createDriverRoute.ashx",
        data: formData,
        success: function (data) {
            try {
                window.location.href = 'search.html';
            }
            catch (e) {

            }
        }
    });
}

