$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('div.scrollBoton').fadeIn('slow');
    } else {
        $('div.scrollBoton').fadeOut('slow');
    }
});
$('div.scrollBoton').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 100);
});