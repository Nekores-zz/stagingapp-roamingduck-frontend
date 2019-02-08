$('.btn-bottomMenuGroup').on('click',()=>{
    $('.buttonGroupMenuDropUp ul').toggleClass("showMenudropUp");
    // if ($('.bottomMenuGroup .buttonGroupMenuDropUpForm').toggleClass("showMenudropUpForm") == 1) {
    //     alert(1);
    // }
    
});
$('.buttonGroupMenuDropUp  ul li a').on('click',()=>{
    $('.menubox .buttonGroupMenuDropUpForm').toggleClass("showMenudropUpForm");
    $('.buttonGroupMenuDropUp ul').toggleClass("showMenudropUp");
    
})
$('.buttonGroupMenuDropUpForm button.closeForm').on('click',()=>{
    $('.menubox .buttonGroupMenuDropUpForm').toggleClass("showMenudropUpForm");
    $('.buttonGroupMenuDropUp ul').toggleClass("showMenudropUp");
})