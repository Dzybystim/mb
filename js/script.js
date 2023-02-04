document.addEventListener('DOMContentLoaded', () => {

  const scrollItems = document.querySelectorAll('.scroll-item');

  const scrollAnimation = () => {
    let windowTop = (window.innerHeight) + window.scrollY;
    console.log(windowTop)
    scrollItems.forEach(el => {
      let scrollOffset = el.offsetTop + (el.offsetHeight);
      if (windowTop >= scrollOffset) {
        el.classList.add('animation-class');
      } else {
        el.classList.remove('animation-class');
      };
    });

  };


  scrollAnimation();
  window.addEventListener('scroll', () => {
    scrollAnimation();
  });
});

function initMap() {
  // The location of Uluru
  const uluru = { lat: 50.419824, lng: 30.351626 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;


// const openPopUp = document.getElementById('myBtn');
// const closePopUp = document.getElementById('close');
// const popUp = document.getElementById('mailform');

// openPopUp.addEventListener('click', function (e) {
//   e.preventDefault();
//   popUp.classList.add('active');
// })

// closePopUp.addEventListener('click', () => {
//   popUp.classList.remove('active');
// })

// $("#sendMail").on("click", function() {
//   var phone = $("phone").val();
//   var name = $("name").val();
//   var message = $("message").val();

//   if(phone == "") {
//       $("#errorMess").text("спробуйте ввести номер ще раз");
//       return false;
//   } else if(name == "") {
//       $("#errorMess").text("А як до Вас звертатися?");
//       return false;
//   }

//   $("#errorMess").text("");

//   $.ajax({
//       url: 'ajax/mail.php',
//       type: 'POST',
//       cache: false,
//       data: {'phone': phone, 'name': name, 'message': message },
//       dataType: 'html',
//       beforeSend: function() {
//           $("sendMail").prop("disabled", true);
//       },
//       success: function(data) {
//           alert(data);
//           $("sendMail").prop("disabled", false);
//       }
//   });

// });


// var wow = new WOW(
//   {
//     boxClass:     'wow',      // animated element css class (default is wow)
//     animateClass: 'animated', // animation css class (default is animated)
//     offset:       0,          // distance to the element when triggering the animation (default is 0)
//     mobile:       true,       // trigger animations on mobile devices (default is true)
//     live:         true,       // act on asynchronously loaded content (default is true)
//     callback:     function(box) {
//       // the callback is fired every time an animation is started
//       // the argument that is passed in is the DOM node being animated
//     },
//     scrollContainer: null,    // optional scroll container selector, otherwise use window,
//     resetAnimation: true,     // reset animation on end (default is true)
//   }
// );