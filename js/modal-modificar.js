
$(document).ready(function () {

    $(".close-actualizar").on('click', function () {
        $(".modal-actualizar").hide();
        return false;
    });

    $(".mostrar-actualizar").on('click', function () {
        $(".modal-actualizar").show();
        return false;
    });
});