document.addEventListener('DOMContentLoaded', function () {

  $(".rating").rateYo({
    "starSvg": `<svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.8999 12.8589L14.1529 16L12.7589 10.08L17.3999 6.09684L11.2884 5.57474L8.8999 0L6.5114 5.57474L0.399902 6.09684L5.0324 10.08L3.6469 16L8.8999 12.8589Z" fill="" />
        </svg>  
        `,
    ratedFill: "#0071DA",
    normalFill: "#bcbcbc",
    spacing: "5px",
    readOnly: true,
    starWidth: "16px"
  });

  $('.burger').on('click', function () {
    $(".mobile-menu").toggleClass("mobile-menu--active");
    $(".overlay").toggleClass("overlay--active");
  });

  $(".overlay").on("click", function () {
    $(".mobile-menu").removeClass("mobile-menu--active");
    $(".overlay").removeClass("overlay--active");
  });

  $(".mobile-menu__cross").on("click", function () {
    $(".mobile-menu").removeClass("mobile-menu--active");
    $(".overlay").removeClass("overlay--active");
  });


  $(".mini-card--locked").each(function(i){
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".mini-card__prompt").eq(i).addClass("mini-card__prompt--active");
      $(this).css('transform', 'translateY(-10px)');
      $(this).siblings().find(".mini-card__prompt").removeClass('mini-card__prompt--active');
      $(this).siblings().css('transform', 'translateY(0px)');
      setTimeout(() => {
        if($(this).css('transform') == 'matrix(1, 0, 0, 1, 0, -10)'){
          $(".mini-card__prompt").eq(i).removeClass("mini-card__prompt--active");
          $(this).css('transform', 'translateY(0px)');
        };
      }, 2000);
    })
  })

}) 