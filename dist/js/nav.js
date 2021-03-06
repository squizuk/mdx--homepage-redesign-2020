(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slinky_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _slinky_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slinky_min_js__WEBPACK_IMPORTED_MODULE_0__);


var navigation = function navigation() {
  var options = {
    label: 'Back',
    speed: 200,
    resize: true,
    dragdrop: true,
    title: true,
    linkTitle: true
  };
  var menu = undefined;
  $(window).on('load resize', function () {
    if ($(window).width() < 1180) {
      if (!menu) {
        removeAllActiveStates();
        menu = $('#menu').slinky(options);
      }
    } else if (menu) {
      removeAllActiveStates();
      menu.destroy();
      menu = undefined;
    }
  });
  var menuButton = document.querySelector('.top-bar__hamburger');
  var menuList = document.querySelector('.top-bar__left-part');
  var menuButtonIcon = document.querySelector('.fa.fa-bars.hamburger-icon');
  var body = document.querySelector('body');
  var menuItemsSeconds = document.querySelectorAll('.header-menu__sub');
  var menuItemsThirds = document.querySelectorAll('.header-menu__third');
  var menuLinks = document.querySelectorAll('.header-menu__sub > .header-menu__item');
  var menuItems = document.querySelectorAll('.header-menu__item.hugemenu');

  var removeAllActiveStates = function removeAllActiveStates() {
    menuLinks.forEach(function (link) {
      link.classList.remove('active');
    });
  };

  var removeFocusedStates = function removeFocusedStates() {
    menuItems.forEach(function (item) {
      item.classList.remove('focusin');
    });
  };

  menuItems.forEach(function (item) {
    // item.addEventListener('focusin', () => {
    //     if ($(window).width() > 1180) {
    //         removeFocusedStates();
    //         item.classList.add('focusin');
    //     }
    // })
    item.addEventListener('keydown', function (e, key) {
      if ($(window).width() > 1180 && e.keyCode === 32) {
        e.preventDefault();
        var isActive = item.classList.contains('focusin');
        removeFocusedStates(item);
        isActive ? item.classList.remove('focusin') : item.classList.add('focusin');
      }
    });
    item.addEventListener('mouseleave', function (e) {
      if ($(window).width() > 1180) {
        removeFocusedStates(item);
        menuLinks.forEach(function (link) {
          removeFocusedStates(link);
        });
      }
    }); // item.addEventListener('blur', () => {
    //     if ($(window).width() > 1180) {
    //         removeFocusedStates();
    //     }
    // })
  });
  menuLinks.forEach(function (link) {
    link.addEventListener('focusin', function () {
      if ($(window).width() > 1180) {
        menuLinks.forEach(function (link) {
          link.classList.remove('focusin');
        });
        link.classList.add('focusin');
      }
    });
  });
  menuItemsSeconds.forEach(function (link) {
    if (link.getElementsByTagName('li').length >= 8) {
      link.classList.add('list-long');
    }
  });
  menuItemsThirds.forEach(function (link) {
    if (link.getElementsByTagName('li').length >= 8) {
      link.classList.add('list-long');
    }
  });
  menuLinks.forEach(function (link) {
    if ($(window).width() > 1180) {
      var hasSubmenu = $(link).find('.header-menu__third').length > 0;

      if (hasSubmenu) {
        link.firstElementChild.insertAdjacentHTML('beforeend', '<i class="fa fa-chevron-right"></i>');
      }
    } // let test = setTimeout(() => {
    //     this.classList.add('active');
    //     menuItems.forEach((item) => {
    //         item.classList.remove('right-empty');
    //     });
    //     console.log('test 3')
    // }, 300);
    // let timer;


    link.addEventListener('mouseover', function (yo) {
      if ($(window).width() > 1180) {
        var _hasSubmenu = $(link).find('.header-menu__third').length > 0;

        removeAllActiveStates();

        if (_hasSubmenu) {
          // timer = setTimeout(() => {
          link.classList.add('active');
          menuItems.forEach(function (item) {
            item.classList.remove('right-empty');
          });
          console.log('test 1'); // }, 300);
        } else {
          menuItems.forEach(function (item) {
            item.classList.add('right-empty');
          });
        }
      }
    });
    link.addEventListener('mouseleave', function () {
      link.classList.remove('focusin');
      $(link).find('a').blur(); // if ($(window).width() > 1180) {
      //     // menuItems.forEach((item) => {
      //     // setTimeout(() => {
      // removeAllActiveStates();
      //     item.classList.add('right-empty');
      //     // }, 600);
      //     // })
      // }
      // clearTimeout(timer);
    });
  });
  menuButton.addEventListener('click', function (e) {
    e.preventDefault();
    menuList.classList.toggle('active');
    body.classList.toggle('menu-active');
    menuButtonIcon.classList.toggle('fa-bars');
    menuButtonIcon.classList.toggle('fa-times');
  }, false);
};

var searchBar = function searchBar() {
  var searchButton = document.querySelector('.top-bar__search');
  var bannerInput = document.querySelector('.hero-banner input');
  var searchScreen = document.querySelector('.search-screen');
  var closeButton = document.querySelector('.search-screen__top-close');
  var body = document.querySelector('body');

  var showSearch = function showSearch() {
    searchScreen.classList.add('active');
    body.classList.add('blurred');
    $(searchScreen).find('.tt-input').focus();
  };

  searchButton && searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    showSearch();
  });
  bannerInput && bannerInput.addEventListener('click', function (e) {
    e.preventDefault(); // showSearch();
  });
  closeButton && closeButton.addEventListener('click', function (e) {
    e.preventDefault();
    searchScreen.classList.remove('active');
    body.classList.remove('blurred');
    $(searchScreen).find('.tt-input').val('');
  });
};

navigation();
searchBar();

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*global jQuery*/

/*
 * Slinky
 * Rather sweet menus
 * @author Ali Zahid <ali.zahid@live.com>
 * @license MIT
 */
var Slinky =
/*#__PURE__*/
function () {
  _createClass(Slinky, [{
    key: "options",
    // default options
    get: function get() {
      return {
        resize: true,
        speed: 300,
        theme: 'slinky-theme-default',
        title: false,
        linkTitle: false
      };
    }
  }]);

  function Slinky(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Slinky);

    // save settings
    this.settings = _objectSpread({}, this.options, {}, options); // let's go!

    this._init(element);
  } // setup the DOM just for us


  _createClass(Slinky, [{
    key: "_init",
    value: function _init(element) {
      // the two elements of water and moisture
      this.menu = jQuery(element);
      this.base = this.menu.children().first();
      var menu = this.menu,
          settings = this.settings; // set theme

      menu.addClass('slinky-menu').addClass(settings.theme); // set transition speed

      this._transition(settings.speed); // add arrows to links with children


      jQuery('a + ul', menu).prev().addClass('next'); // wrap link text with <span>
      // mostly for styling

      jQuery('li > a', menu).wrapInner('<span>'); // create header item

      var header = jQuery('<li>').addClass('header'); // prepend it to the list

      jQuery('li > ul', menu).prepend(header); // create back buttons

      var back = jQuery('<a>').prop('href', '#').addClass('back'); // prepend them to the headers

      jQuery('.header', menu).prepend(back); // do we need to add titles?

      if (settings.title) {
        // loop through each child list
        jQuery('li > ul', menu).each(function (index, element) {
          var target = jQuery(element).parent().find('a').first(); // get the label from the parent link

          var label = target.text(); // get the url from the parent link

          var url = settings.linkTitle && target.attr('href'); // if it's not empty, create the title

          if (label) {
            var htmlTag = url ? '<a>' : '<header>';
            var title = jQuery(htmlTag).addClass('title').text(label); // if url exists and the linkTitle option is set to true add url to header

            url && title.attr('href', url); // append it to the immediate header

            jQuery('> .header', element).append(title);
          }
        });
      } // add click listeners


      this._addListeners(); // jump to initial active


      this._jumpToInitial();
    } // click listeners

  }, {
    key: "_addListeners",
    value: function _addListeners() {
      var _this = this;

      var menu = this.menu,
          settings = this.settings;
      jQuery('a', menu).on('click', function (e) {
        // prevent broken/half transitions
        if (_this._clicked + settings.speed > Date.now()) {
          return false;
        } // cache click time to check on next click


        _this._clicked = Date.now(); // get the link

        var link = jQuery(e.currentTarget); // prevent default if it's a hash
        // or a Slinky button

        if (link.attr('href').indexOf('#') === 0 || link.hasClass('next') || link.hasClass('back')) {
          e.preventDefault();
        } // time to move


        if (link.hasClass('next')) {
          // one step forward
          // remove the current active
          menu.find('.active').removeClass('active'); // set the new active

          link.next().show().addClass('active'); // make the chess move

          _this._move(1); // resize the menu if need be


          if (settings.resize) {
            _this._resize(link.next());
          }
        } else if (link.hasClass('back')) {
          // and two steps back
          // just one step back, actually
          // make the move
          _this._move(-1, function () {
            // remove the current active
            menu.find('.active').removeClass('active'); // set the new active

            link.parent().parent().hide().parentsUntil(menu, 'ul').first().addClass('active');
          }); // resize the menu if need be


          if (settings.resize) {
            _this._resize(link.parent().parent().parentsUntil(menu, 'ul'));
          }
        }
      });
    } // jump to initial active on init

  }, {
    key: "_jumpToInitial",
    value: function _jumpToInitial() {
      var menu = this.menu,
          settings = this.settings; // get initial active

      var active = menu.find('.active');

      if (active.length > 0) {
        // remove initial active
        active.removeClass('active'); // jump without animation

        this.jump(active, false);
      } // set initial height on the menu
      // to fix the first transition resize bug


      setTimeout(function () {
        return menu.height(menu.outerHeight());
      }, settings.speed);
    } // slide the menu

  }, {
    key: "_move",
    value: function _move() {
      var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      // don't bother packing if we're not going anywhere
      if (depth === 0) {
        return;
      }

      var settings = this.settings,
          base = this.base; // get current position from the left

      var left = Math.round(parseInt(base.get(0).style.left)) || 0; // set the new position from the left

      base.css('left', "".concat(left - depth * 100, "%")); // callback after the animation

      if (typeof callback === 'function') {
        setTimeout(callback, settings.speed);
      }
    } // resize the menu
    // to match content height

  }, {
    key: "_resize",
    value: function _resize(content) {
      var menu = this.menu;
      menu.height(content.outerHeight());
    } // set the transition speed

  }, {
    key: "_transition",
    value: function _transition() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
      var menu = this.menu,
          base = this.base;
      menu.css('transition-duration', "".concat(speed, "ms"));
      base.css('transition-duration', "".concat(speed, "ms"));
    } // jump to an element

  }, {
    key: "jump",
    value: function jump(target) {
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!target) {
        return;
      }

      var menu = this.menu,
          settings = this.settings;
      var to = jQuery(target); // get all current active

      var active = menu.find('.active'); // how many moves must we jump?

      var count = 0; // this many
      // until we reach the parent list

      if (active.length > 0) {
        count = active.parentsUntil(menu, 'ul').length;
      } // remove current active
      // hide all lists


      menu.find('ul').removeClass('active').hide(); // get parent list

      var menus = to.parentsUntil(menu, 'ul'); // show parent list

      menus.show(); // show target

      to.show().addClass('active'); // set transition speed to 0 if no animation

      if (!animate) {
        this._transition(0);
      } // make the checkers move


      this._move(menus.length - count); // resize menu if need be


      if (settings.resize) {
        this._resize(to);
      } // set transition speed to default after transition


      if (!animate) {
        this._transition(settings.speed);
      }
    } // go big or go home
    // just go home

  }, {
    key: "home",
    value: function home() {
      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var base = this.base,
          menu = this.menu,
          settings = this.settings; // set transition speed to 0 if no animation

      if (!animate) {
        this._transition(0);
      } // get current active


      var active = menu.find('.active'); // get all parent lists

      var parents = active.parentsUntil(menu, 'ul'); // make the move

      this._move(-parents.length, function () {
        // remove the current active
        active.removeClass('active').hide(); // hide all parents except base

        parents.not(base).hide();
      }); // resize if need be


      if (settings.resize) {
        this._resize(base);
      } // set transition speed back to default


      if (animate === false) {
        this._transition(settings.speed);
      }
    } // crush, kill, destroy

  }, {
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      var base = this.base,
          menu = this.menu; // remove all headers

      jQuery('.header', menu).remove(); // remove Slinky links
      // and click listeners

      jQuery('a', menu).removeClass('next').off('click'); // remove inline styles

      menu.css({
        height: '',
        'transition-duration': ''
      });
      base.css({
        left: '',
        'transition-duration': ''
      }); // remove Slinky HTML

      jQuery('li > a > span', menu).contents().unwrap(); // remove any current active

      menu.find('.active').removeClass('active'); // remove any Slinky style classes

      var styles = menu.attr('class').split(' ');
      styles.forEach(function (style) {
        if (style.indexOf('slinky') === 0) {
          menu.removeClass(style);
        }
      }); // reset fields

      var fields = ['settings', 'menu', 'base'];
      fields.forEach(function (field) {
        return delete _this2[field];
      });
    }
  }]);

  return Slinky;
}(); // jQuery plugin


;

(function ($) {
  $.fn.slinky = function (options) {
    var menu = new Slinky(this, options);
    return menu;
  };
})(jQuery);

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

(function () {
  var mainSearchHeading = globals.mainSearchHeading,
      mainSearchUrl = globals.mainSearchUrl,
      suggestionUrl = globals.suggestionUrl;
  var mainSearch = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      // url: 'https://mdx.funnelback.co.uk/s/suggest.json?collection=mdx-courses&show=3&fmt=json++&partial_query=%QUERY',
      url: mainSearchUrl,
      wildcard: '%QUERY',
      filter: function filter(engine) {
        return $.map(engine, function (item) {
          // eslint-disable-line
          if (item.disp) {
            return {
              url: item.disp.url,
              value: item.disp.title
            };
          }
        });
      },
      prefetch: {
        cache: false
      }
    }
  });
  var suggestion = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      // url: 'https://mdx.funnelback.co.uk/s/suggest.json?collection=mdx-meta&show=5&partial_query=%QUERY',
      url: suggestionUrl,
      wildcard: '%QUERY',
      filter: function filter(engine) {
        var results = $.map(engine, function (item) {
          // eslint-disable-line
          return {
            value: item
          };
        });
        results = results.filter(function (item, index, self) {
          return index === self.findIndex(function (t) {
            return t.value === item.value;
          });
        });
        return results;
      },
      prefetch: {
        cache: false
      }
    }
  });
  mainSearch.clear();
  suggestion.clear();
  $('#multiple-datasets .typeahead').typeahead({
    highlight: true,
    minLength: 3
  }, {
    name: 'suggestion',
    display: 'value',
    limit: 7,
    source: suggestion,
    templates: {
      suggestion: function suggestion(el) {
        return "<div class=\"search__suggestion-component\">".concat(el.value, "</div>");
      },
      empty: '<p>Sorry, no results for this query</p>'
    }
  }, {
    name: 'main',
    display: 'value',
    limit: 7,
    source: mainSearch,
    templates: {
      header: '<h3 class="search__suggestion-header">' + mainSearchHeading + '</h3>',
      suggestion: function suggestion(el) {
        return "<a class=\"search__suggestion-component\" href=\"".concat(el.url, "\"><p class=\"search__suggestion-text\">").concat(el.value, "</p></a>");
      }
    }
  });
  $('#multiple-datasets .typeahead').on('typeahead:selected', function (e, datum) {
    e.preventDefault();

    if (datum && datum.url) {
      window.location.href = datum.url;
    }
  });
  $('#multiple-datasets .tt-hint').attr('title', 'Search query hint');
  $('#multiple-datasets .tt-input').attr({
    'title': 'Search query',
    'name': 'query'
  });
  $('.hero-banner__search-input .typeahead').typeahead({
    highlight: true,
    minLength: 3
  }, {
    name: 'suggestion',
    display: 'value',
    limit: 7,
    source: suggestion,
    templates: {
      suggestion: function suggestion(el) {
        return "<div class=\"search__suggestion-component\">".concat(el.value, "</div>");
      },
      empty: '<p>Sorry, no results for this query</p>'
    }
  });
  $('.hero-banner__search-input .tt-hint').attr('title', 'Search query hint');
  $('.hero-banner__search-input .tt-input').attr({
    'title': 'Search query',
    'name': 'query'
  });
})();

/***/ })

},[[20,0]]]);