"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function toggleCrumbs(e) {
  "A" !== event.target.nodeName && e.classList.add("open");
}
/*
function toTop() {
    $("body, html").animate({
        scrollTop: 0
    }, 1000)
}
const baseScrollTop = () => {
    const btnTop = document.querySelector('.mobile-up');

    btnTop.addEventListener('click', () => {
        btnTop.classList.add('active');
        setTimeout(() => {
            btnTop.classList.remove('active');
        }, 100);
    })

    const btnReveal = function () {
        if (window.scrollY >= 400) {
            btnTop.classList.add('is-visible');
        } else {
            btnTop.classList.remove('is-visible');
        }
    };
    window.addEventListener('scroll', btnReveal);
};

baseScrollTop();
*/


var openMenu = function openMenu() {
  var burger = document.querySelector(".js-burger"),
      headerNav = document.querySelector('.header__nav');
  burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    headerNav.classList.toggle('active');
    headerNav.classList.toggle('b-show');
  });
};

openMenu();
var servicesHeader = document.querySelector('.services-header');

if (servicesHeader) {
  if (innerWidth > 1023) {
    var navLiInnerHeader = servicesHeader.querySelector(".header__left > nav > ul > li:nth-child(3) > a");
    navLiInnerHeader.classList.add('active');
  }
}

function scrollMain() {
  var wrap = document.querySelector('.wrapper');

  if (wrap) {
    var scroll = window.scrollY,
        header = document.querySelector('.header').clientHeight,
        containerIntro = document.querySelector('.intro-section'),
        container = document.querySelector('.main-scroll'),
        containerH = container.clientHeight,
        containerIntroH = containerIntro.clientHeight,
        wrapH = wrap.clientHeight,
        wrapOffset = wrap.getBoundingClientRect().top + scroll,
        wrapFull = wrapH + wrapOffset;

    if (window.innerWidth > 1055) {
      if (scroll >= wrapH - header - containerIntroH) {
        container.classList.add('fixed');
      }
      /*  if (scroll >= wrapOffset - header - containerIntroH && scroll < wrapFull - containerH - header - containerIntroH) {
            container.classList.add('fixed');
            //container.classList.remove("fixedBot");
        } else if (scroll >= wrapOffset - header - containerIntroH && scroll >= wrapFull - containerH - header - containerIntroH) {
            container.classList.remove('fixed');
            //container.classList.add("fixedBot");
        } else {
            container.classList.remove('fixed');
            //container.classList.remove("fixedBot");
        }*/

    }
  }
}

window.addEventListener('scroll', function () {//fixedMainScroll();
});

function fixedMainScroll() {
  var footer = document.querySelector('.footer');
  var mainScroll = document.querySelector('.main-scroll');
  var header = document.querySelector('.header');
  var introSection = document.querySelector('.intro-section');

  if (mainScroll) {
    var mainScrollPosition = mainScroll.getBoundingClientRect().top;
    var mainScrollH = mainScroll.offsetHeight;
    var headerH = header.offsetHeight;
    var footerH = footer.offsetHeight;
    var introSectionH = introSection.offsetHeight - 400;
    var scroll = window.scrollY;
    var treck = introSectionH + mainScrollH;
    console.log(scroll);

    if (scroll > introSectionH) {
      mainScroll.classList.add('fixed');
    }

    if (scroll > treck) {
      mainScroll.classList.remove('fixed');
    }
    /* if (mainScrollPosition >= 0 && mainScrollPosition < 300) {
         mainScroll.classList.add('fixed')
         //footer.classList.add('fixed')
     }*/

  }
}

$(document).ready(function () {
  $('.tel').inputmask("+7 (999)-999-99-99", {
    "placeholder": "_"
  });
  var anchors = document.querySelectorAll('a.scroll-link');
  Array.prototype.forEach.call(anchors, function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href').substr(1);
      $(".js-nav").removeClass("active");
      $(".js-burger").removeClass("active");
      $("body").removeClass("overflow");
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
});

var populatedFalse = function populatedFalse() {
  var input = document.querySelector('#main-form #name');
  var input2 = document.querySelector('#main-form #tel');
  var input3 = document.querySelector('#main-form #email');
  input.classList.remove('populated');
  input2.classList.remove('populated');
  input3.classList.remove('populated');
}; // рекапча


function onCallbackSubmit() {
  var form = document.querySelector('#main-form');
  $(form).parsley().on('form:success', function () {
    form.classList.add('success');
    setTimeout(function () {
      form.reset();
      setFilled();
      populatedFalse();
      form.classList.remove('success');
    }, 8000);
  });
  $(form).parsley().validate(); // всегда внизу
}

function callbackClose() {
  var form = document.querySelector('#main-form');
  form.reset();
  setFilled();
  form.classList.remove('success');
} // для поднятия label


function setFilled() {
  var text = document.querySelectorAll('.iText');
  Array.prototype.forEach.call(text, function (el) {
    if (el.classList.contains('pmask')) {
      el.parentNode.classList.add('filled');
    }

    if (el.value != undefined) {
      if (el.value.length > 0) {
        el.parentNode.classList.add('filled');
        el.parentNode.classList.add('lbhidd');
      } else {
        el.parentNode.classList.remove('filled');
      }
    }

    el.addEventListener('focus', function () {
      el.parentNode.classList.add('filled');
      el.parentNode.classList.remove('lbhidd');
    });
    el.addEventListener('blur', function () {
      if (el.value != undefined) {
        if (el.value.length === 0) {
          el.parentNode.classList.remove('filled');
        } else {
          el.parentNode.classList.add('lbhidd');
        }
      }
    });
  });
}

setFilled();
$(document).ready(function () {
  window.Parsley.on('field:error', function (e) {
    this.$element[0].parentNode.classList.add('error');
  });
  window.Parsley.on('field:success', function (e) {
    this.$element[0].parentNode.classList.remove('error');
  });
});
$(function () {
  $('input').on('change', function () {
    var input = $(this);

    if (input.val().length) {
      input.addClass('populated');
    } else {
      input.removeClass('populated');
    }
  });
  $('#form_textarea').on('change', function () {
    var input = $(this);

    if (input.val().length) {
      input.addClass('populated');
    } else {
      input.removeClass('populated');
    }
  });
  /* setTimeout(function() {
       $('#name').trigger('focus');
   }, 500);*/
});
var scene = document.getElementById('parallax-container');

if (scene) {
  var parallaxInstance = new Parallax(scene);
}

var intro = document.getElementById('intro');

if (intro) {
  var parallaxIntro = new Parallax(intro);
}

var offer = document.getElementById('offer-par');

if (offer) {
  if (innerWidth > 767) {
    var _parallaxIntro = new Parallax(offer);
  }
}

var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}