
$(document).ready(function () {

    $(".close-agregar").on('click', function () {
        $(".modal-agregar").hide();
        return false;
    });

    $(".mostrar-agregar").on('click', function () {
        $(".modal-agregar").show();
        return false;
    });
});