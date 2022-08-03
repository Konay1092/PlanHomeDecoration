console.log("hay");
$(document).ready(function () {
  //Start back to top
  $(".btn-backtotops").hide();
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();

    if (getscrolltop >= 370) {
      $(".btn-backtotops").fadeIn(1000);
    } else {
      $(".btn-backtotops").fadeOut(1000);
    }
  });
  //End back to top
  // Start Header

  //for bugger()
  $(".navbuttons").click(function () {
    $(".navbuttons").toggleClass("crossxs");
  });

  //for nav
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    console.log(getscrolltop);

    if (getscrolltop >= 200) {
      $(".navbar").add("navmenus");
    } else {
      $(".nvabar").remove("navmenus");
    }
  });

  //Start Properties
  $(".propertylists").click(function () {
    // for active items
    $(this).addClass("activeitems").siblings().removeClass("activeitems");
    //for filter
    let getattvalue = $(this).attr("data-filter");
    if (getattvalue === "all") {
      $(".filters").show("slide", 500);
    } else {
      $(".filters").hide("slide", 500);
      $(".filters")
        .not("." + getattvalue)
        .hide("slide", 3000);
      $(".filters")
        .filter("." + getattvalue)
        .show("slide", 500);
    }
  });
  //for imgae overlay (or) lightbox2
  lightbox.option({
    showImageNumberLabel: false,
  });

  //End Properties
  // Start Adv
  $(window).scroll(function () {
    let getscrolltop = $(this).scrollTop();
    console.log(getscrolltop);
    if (getscrolltop >= 900) {
      $(".advimages").addClass("fromlefts");
      $(".advtexts").addClass("fromrights");
    } else {
      $(".advimages").removeClass("fromlefts");
      $(".advtexts").removeClass("fromrights");
    }
  });
  // End Adv
  //Start Footer section
  const getyear = $("#getyear");
  const getfullyear = new Date().getUTCFullYear();
  getyear.text(getfullyear);
  //End Footer section
});
