$(() => {
$('.newTweet').on('keyup', function (event) {
    let newNumber = 140 - $(this).val().length;
    $(this).siblings('.counter').text(newNumber);
    
    if(newNumber > 0) {
        $(this).siblings('.counter').css("color", "#244571");
    } else { if(newNumber < 0) {
        $(this).siblings('.counter').css("color", "red");
    }
}})
});