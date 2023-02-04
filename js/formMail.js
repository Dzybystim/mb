// $("#sendMail").on("click", function () {
//     var phone = $("#phone").val().trim();
//     var name = $("#name").val().trim();
//     var message = $("#message").val().trim();

//     if (phone == "") {
//         $("#errorMess").text("спробуйте ввести номер ще раз");
//         return false;
//     } else if (name == "") {
//         $("#errorMess").text("А як до Вас звертатися?");
//         return false;
//     }

//     $("#errorMess").text("");

//     $.ajax({
//         url: 'ajax/mail.php',
//         type: 'POST',
//         cache: false,
//         data: { 'phone': phone, 'name': name, 'message': message },
//         dataType: 'plain-text',
//         beforeSend: function () {
//             $("sendMail").prop("disabled", true);
//         },
//         success: function (data) {
//             if (!data)
//                 alert("Щось пішло не за планом");
//             else
//                 $("#popup").trigger("reset");

//             $("#sendMail").prop("disabled", false);
//         }
//     });

// });

// Отправка заявки  // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
$(document).ready(function () {

    $("#sendMail").on("click", function () {
        var phone = $("#phone").val().trim();
        var name = $("#name").val().trim();

        if (phone == "") {
            $("#errorMess").text("спробуйте ввести номер ще раз");
            return false;
        } else if (name == "") {
            $("#errorMess").text("А як до Вас звертатися?");
            return false;
        }

        $("#errorMess").text("");

        $.ajax({
            type: "POST",
            url: "ajax/mail.php",
            data: $(this).serialize()
        }).done(function () {
            $('.js-overlay-thank-you').fadeIn();
            $(this).find('input').val('');
            $('#popup').trigger('reset');
        });
        return false;
    });

    // Закрыть попап «спасибо»
    $('.js-close-thank-you').click(function () { // по клику на крестик
        $('.js-overlay-thank-you').fadeOut();
    });

    $(document).mouseup(function (e) { // по клику вне попапа
        var popup = $('#popup');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.js-overlay-thank-you').fadeOut();
        }
    });

    // Маска ввода номера телефона (плагин maskedinput)
    $(function ($) {
        $('[name="phone"]').mask("+38 (099) 999-9999");
    });
});