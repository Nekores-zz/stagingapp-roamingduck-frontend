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

// ON DOCUMENT LOAD
$(document).ready(function () {

    // TUTORIAL YES OR SKIP MODAL
    $('#tutorStart').addClass('show'); 


    // TUTORIAL STARTED ON YES
    $('.tutorStartTitleYes').on('click', ()=>{
        $('.menubox .bottomMenuGroup').addClass('bottomMenuGroupTutor');
        $('#tutorStart').removeClass('show'); 



        var tutorial2 = function() {
            $('#navbarSection').addClass('indexShow');
            $('.navbarSectionTutorPopup-body').addClass('navbarSectionTutorPopup-body-active');

            // TUTORIAL 1: ON PRESS BACK BUTTON
            $('#navbarSectionTutorPopupNext').on('click', () => {
                // $('.navbarSectionTutorPopup-body').removeClass('navbarSectionTutorPopup-body-active');
                // $('.tutorWrapper').removeClass('TutorActive');
                $('#navbarSection').removeClass('indexShow');
                $('.navbarSectionTutorPopup-body').removeClass('navbarSectionTutorPopup-body-active');
                $('.bottomMenuGroupTutorPopup-body').addClass('bottomMenuGroupTutorPopup-body-active');
                $('#tutorBoxOne').addClass('indexShow');
                modulePops();
            });
            // TUTORIAL 1: ON PRESS NEXT BUTTON
            $('#navbarSectionTutorPopupSkip').on('click', () => {
               $('#navbarSection').removeClass('indexShow');
                $('.navbarSectionTutorPopup-body').removeClass('navbarSectionTutorPopup-body-active');
                tutorial3();
            });
        }


        // function body starts
        var modulePops = function() {
            $('#tutorBoxOne').addClass('indexShow');
            $('.bottomMenuGroupTutorPopup-body').addClass('bottomMenuGroupTutorPopup-body-active');

            // TUTORIAL 1: ON PRESS CANCEL BUTTON
            $('#bottomMenuGroupTutorPopupNext').on('click', ()=>{
                $('.bottomMenuGroupTutorPopup-body').removeClass('bottomMenuGroupTutorPopup-body-active');
                $('.tutorWrapper').removeClass('TutorActive');
            });
            // TUTORIAL 1: ON PRESS NEXT BUTTON
            $('#bottomMenuGroupTutorPopupSkip').on('click', ()=>{
                $('.bottomMenuGroupTutorPopup-body').removeClass('bottomMenuGroupTutorPopup-body-active');
                $('#tutorBoxOne').removeClass('indexShow');
                tutorial2();
            });
        }
        // function body ended
        
        
        // function body starts
        var tutorial3 = function() {
            $('.chatFormInput').addClass('indexShow');
            $('.chatAreaTutorPopup-body').addClass('chatAreaTutorPopup-body-active');

            // TUTORIAL 1: ON PRESS BACK BUTTON
            $('#chatAreaTutorPopupBack').on('click', () => {
                $('.chatAreaTutorPopup-body').removeClass('chatAreaTutorPopup-body-active');
                tutorial2();
            });
            // TUTORIAL 1: ON PRESS FINISH BUTTON
            $('#chatAreaTutorPopupFinish').on('click', () => {
                $('.tutorWrapper').removeClass('TutorActive');
                $('.chatAreaTutorPopup-body').removeClass('chatAreaTutorPopup-body-active');
            });
        }
        // function body ended


        // Tutorial Main Container/Wrapper
        $('.tutorWrapper').addClass('TutorActive', modulePops());
    }); 

    // TUTORIAL SKIPED ON SKIP
     $('.tutorStartTitleSkip').on('click', () => {
         $('#tutorStart').removeClass('show'); 
    }); 

    // TUTORIAL SKIPP ON CROSS BUTTON CLICK
    $('#tutorStart button.close').on('click', () => {
        $('#tutorStart').removeClass('show'); 
    }); 

});