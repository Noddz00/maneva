$(document).ready(function() {

    $('.js--dugme').click(function () {
        $('html, body').animate({scrollTop: $('.js--cenovnik').offset().top}, 1000);
    });

}); 