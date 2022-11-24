$(".btn").click(function() {
  var buttonData = this.innerHTML;
  console.log(buttonData);
  buttonFunc(buttonData);
})

function test(buttonData) {
  console.log(buttonData);
  buttonFunc(buttonData);
}

var number1;
var number2;
var action;
var result;

// calculation and display
function buttonFunc(buttonData) {
  switch (buttonData) {
    case "DEL":
      $(".display-input").html(function(i, txt) {
        if (action != null) {
          number2 = number2.slice(0, -1);
        } else {
          number1 = number1.slice(0, -1);
        }
        return txt.slice(0, -1);
      });
      break;
    case "+":
      action = "+";
      break;
    case "-":
      action = "-";
      break;
    case "x":
      action = "x";
      break;
    case "/":
      action = "/";
      break;
    case ".":
      $(".display-input").html(function(i, txt) {
        if (txt.includes(".") == true) {
          return
        }
        if (action != null) {
          number2 += ".";
        } else {
          number1 += ".";
        }
        return txt += ".";
      });
      break;
    case "=":
      if (number1 == null) {
        number1 = 0;
      }
      switch (action) {
        case "+":
          number1 = +number1;
          number2 = +number2;
          result = number1 + number2;
          break;
        case "-":
          number1 = +number1;
          number2 = +number2;
          result = number1 - number2;
          break;
        case "x":
          number1 = +number1;
          number2 = +number2;
          result = number1 * number2;
          break;
        case "/":
          number1 = +number1;
          number2 = +number2;
          result = number1 / number2;
          break;
      }

      $(".display-input").html(function(i, txt) {
        return txt = result;
      });
      number1 = result;
      number2 = null;
      action = null;
      result = null;
      break;
    case "RESET":
      $(".display-input").html(function(i, txt) {
        number1 = null;
        number2 = null;
        action = null;
        return txt = "";
      });
      break;
    default:
      $(".display-input").html(function(i, txt) {
        if (txt == 0 || txt == "too long" || txt == "error") {
          txt = "";
        }
        if (action == null) {
          if (number1 == null) {
            number1 = buttonData
          } else {
            number1 += buttonData;
          }
          return number1
        } else {
          if (number2 == null) {
            number2 = buttonData
          } else {
            number2 += buttonData;
          }
          return number2
        }
        return "error"
      });
  }
  if ($(".overcontainer").width() < 400) {
    if ($(".display-input").html().length < 16) {
      $(".display-input").css("fontSize", "2rem");
    }
    if ($(".display-input").html().length >= 16) {
      $(".display-input").css("fontSize", "1rem");
    }
    if ($(".display-input").html().length >= 32) {
      $(".display-input").css("fontSize", "0.5rem");
    }
  } else {
    if ($(".display-input").html().length < 32) {
      $(".display-input").css("fontSize", "2rem");
    }
    if ($(".display-input").html().length >= 32) {
      $(".display-input").css("fontSize", "1rem");
    }
    if ($(".display-input").html().length >= 64) {
      $(".display-input").css("fontSize", "0.75rem");
    }
  }
  $(".display-action").html(function(i, txt) {
    return txt = action;
  })
}

//themes
function clearAllThemes() {
  $("body").removeClass(["th1-main-background", "th2-main-background", "th3-main-background"]);
  $(".container-top").removeClass(["th1-text","th2-text","th3-text"]);
  $(".radio-wrapper").removeClass(["th1-other-background", "th2-other-background", "th3-other-background"]);
  $(".container-display").removeClass(["th1-display-background", "th1-text", "th2-display-background", "th2-text", "th3-display-background", "th3-text"]);
  $(".container-btn").removeClass(["th1-other-background", "th2-other-background", "th3-other-background"]);
  $(".btn-main").removeClass(["btn-th1-main", "btn-th2-main", "btn-th3-main"]);
  $(".btn-other1").removeClass(["btn-th1-rstdel", "btn-th2-rstdel", "btn-th3-rstdel"]);
  $(".btn-other2").removeClass(["btn-th1-eqls", "btn-th2-eqls", "btn-th3-eqls"]);
}
$(".themes").click(function() {
  if (this.id === 'radio-th1') {
    clearAllThemes();
    $("body").addClass("th1-main-background");
    $(".container-top").addClass("th1-text");
    $(".radio-wrapper").addClass("th1-other-background");
    $(".container-display").addClass(["th1-display-background", "th1-text"]);
    $(".container-btn").addClass("th1-other-background");
    $(".btn-main").addClass("btn-th1-main");
    $(".btn-other1").addClass("btn-th1-rstdel");
    $(".btn-other2").addClass("btn-th1-eqls");
  }
  if (this.id === 'radio-th2') {
    clearAllThemes();
    $("body").addClass("th2-main-background");
    $(".container-top").addClass("th2-text");
    $(".radio-wrapper").addClass("th2-other-background");
    $(".container-display").addClass(["th2-display-background", "th2-text"]);
    $(".container-btn").addClass("th2-other-background");
    $(".btn-main").addClass("btn-th2-main");
    $(".btn-other1").addClass("btn-th2-rstdel");
    $(".btn-other2").addClass("btn-th2-eqls");
  }
  if (this.id === 'radio-th3') {
    clearAllThemes();
    $("body").addClass("th3-main-background");
    $(".container-top").addClass("th3-text");
    $(".radio-wrapper").addClass("th3-other-background");
    $(".container-display").addClass(["th3-display-background", "th3-text"]);
    $(".container-btn").addClass("th3-other-background");
    $(".btn-main").addClass("btn-th3-main");
    $(".btn-other1").addClass("btn-th3-rstdel");
    $(".btn-other2").addClass("btn-th3-eqls");
  }
});
