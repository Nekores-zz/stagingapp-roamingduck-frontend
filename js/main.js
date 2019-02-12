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


    // turtorial popup and wrapper
    function showTutorial(){
        // TUTORIAL YES OR SKIP MODAL
        $('#tutorStart').addClass('show');


        // TUTORIAL STARTED ON YES
        $('.tutorStartTitleYes').on('click', () => {
            $('#tutorStart').removeClass('show');



            var tutorial2 = function () {
                $('#navbarSection').addClass('indexShow');
                $('.navbarSectionTutorPopup-body').addClass('navbarSectionTutorPopup-body-active');

                // TUTORIAL 1: ON PRESS BACK BUTTON
                $('#navbarSectionTutorPopupBack').on('click', () => {
                    // $('.navbarSectionT?utorPopup-body').removeClass('navbarSectionTutorPopup-body-active');
                    // $('.tutorWrapper').removeClass('TutorActive');
                    $('#navbarSection').removeClass('indexShow');
                    $('.navbarSectionTutorPopup-body').removeClass('navbarSectionTutorPopup-body-active');
                    // $('.bottomMenuGroupTutorPopup-body').addClass('bottomMenuGroupTutorPopup-body-active');
                    // $('#tutorBoxOne').addClass('indexShow');
                    tutorial1();
                    // alert(1)
                });
                // TUTORIAL 1: ON PRESS FINISH BUTTON
                $('#navbarSectionTutorPopupFinish').on('click', () => {
                    $('#navbarSection').removeClass('indexShow');
                    $('.navbarSectionTutorPopup-body').removeClass('navbarSectionTutorPopup-body-active');
                    $('.tutorWrapper').removeClass('TutorActive');
                    // tutorial3();
                });
            }


            // function body starts
            var modulePops = function () {
                tutorial3();
            }
            // function body ended

            // function body starts
            var tutorial1 = function () {
                $('#tutorBoxOne').addClass('indexShow');
                $('.bottomMenuGroupTutorPopup-body').addClass('bottomMenuGroupTutorPopup-body-active');

                // TUTORIAL 1: ON PRESS next BUTTON
                $('#bottomMenuTutorPopupNext').on('click', () => {
                    $('.bottomMenuGroupTutorPopup-body').removeClass('bottomMenuGroupTutorPopup-body-active');
                    // $('.tutorWrapper').removeClass('TutorActive');
                    $('#tutorBoxOne').removeClass('indexShow');
                    tutorial2();
                });
                // TUTORIAL 1: ON PRESS Back BUTTON
                $('#bottomMenuTutorPopupBack').on('click', () => {
                    $('.bottomMenuGroupTutorPopup-body').removeClass('bottomMenuGroupTutorPopup-body-active');
                    $('#tutorBoxOne').removeClass('indexShow');
                    tutorial3();
                });
            }
            // function body ended


            // function body starts
            var tutorial3 = function () {
                $('.chatFormInput').addClass('indexShow');
                $('.chatAreaTutorPopup-body').addClass('chatAreaTutorPopup-body-active');

                // TUTORIAL 1: ON PRESS Cancel BUTTON
                $('#chatAreaTutorPopupCancel').on('click', () => {
                    $('.chatAreaTutorPopup-body').removeClass('chatAreaTutorPopup-body-active');
                    $('.tutorWrapper').removeClass('TutorActive');
                });
                // TUTORIAL 1: ON PRESS FINISH BUTTON
                $('#chatAreaTutorPopupNext').on('click', () => {
                    $('.chatAreaTutorPopup-body').removeClass('chatAreaTutorPopup-body-active');
                    $('.chatFormInput').removeClass('indexShow');
                    tutorial1();
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
    }

    // on window load
    showTutorial();



    // navbar tutorial tab on click show tutorial popup
    $('#showTutorialButtn').on('click', () => {
        $('.modal').removeClass('show');
        $('.modal').css({'display': 'none'});
        $('.modal-backdrop.fade.show').css({'display': 'none'});
        
        // show tutorial
        showTutorial();
    });



    // tooltip

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

});

