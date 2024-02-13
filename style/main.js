window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

$(function () {
    if (!$(".envelope").hasClass("open")) {
      $(".envelope").click(function () {
        $(this).removeClass("new").addClass("open");
      });
    }
  });
  
  $(document).on("click", ".envelope:not(.open)", function() {
    $(this).removeClass("new").addClass("open");
});




// var button = document.querySelector("button");

// button.addEventListener("click", function() {
//   var changeTop = (Math.random() * ($(window).height() - $("button").height()));
//   var changeLeft = (Math.random() * ($(window).width() - $("button").width()));
//   $("button").css("margin-top", changeTop + "px");
//   $("button").css("margin-left", changeLeft + "px");
// });

$(document).ready(function() {
    var yesButton = $("#yes");

    yesButton.click(function() {
        var changeTop = Math.random() * ($(window).height() - yesButton.height());
        var changeLeft = Math.random() * ($(window).width() - yesButton.width());
        
        yesButton.css("margin-top", changeTop + "px");
        yesButton.css("margin-left", changeLeft + "px");
    });
});

// $('#no').click(function() {
//     window.location.href = "amplop.html"; // Ganti dengan URL halaman yang diinginkan
// });

const audio = document.querySelector("audio");
const body = document.body;

audio.addEventListener("play", () => {
  body.classList.add("play-music");
});

audio.addEventListener("pause", () => {
  body.classList.remove("play-music");
});

