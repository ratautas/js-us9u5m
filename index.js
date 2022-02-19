!(function () {
  var t,
    e = false,
    o = null,
    n = "static-content",
    i = null,
    r = false,
    a = false,
    c = false,
    d =
      "display: block !important; height: 0 !important; max-height: 0 !important; min-height: 0 !important; overflow-y: auto !important;",
    s = 0,
    u = 0;
  function f() {
    var t,
      e = document.querySelector("#" + o);
    return !(e && ((t = e), t.offsetWidth || t.offsetHeight || t.getClientRects().length));
  }
  function g() {
    var t = window.location.hash;
    return "" === t || (-1 === t.indexOf("#!/c/0/") && -1 === t.indexOf("#!//c/0/"));
  }
  function w(t) {
    var e = document.createElement("script");
    e.src = ec.storefront.staticPages.lazyLoading.scriptJsLink;
    e.onload = t;
    document.querySelector("#" + ec.storefront.staticPages.dynamicContainerID).appendChild(e);
  }
  function y(t, o) {
    var n = 0,
      i = 0,
      r = 0,
      a = 0,
      c = false;
    e &&
      (t.addEventListener("touchstart", function (t) {
        (c = true), (n = t.touches[0].clientX), (i = t.touches[0].clientY), (r = 0), (a = 0);
      }),
      t.addEventListener("touchmove", function (t) {
        (r = t.changedTouches[0].clientX - n), (a = t.changedTouches[0].clientY - i);
      }),
      t.addEventListener("touchend", function (t) {
        c && Math.abs(r) < 10 && Math.abs(a) < 10 && o(t);
      })),
      t.addEventListener("click", function (t) {
        c ? (c = false) : o(t);
      });
  }
  function p(t, e) {
    return function (n) {
      (function (t, e) {
        return "product" === t && (e.ctrlKey || e.metaKey);
      })(t, n) ||
        (n.preventDefault(),
        v(function () {
          if (!f()) {
            var n = window.ec.storefront.staticPages.onClickCallback;
            !a && n && n(), (r = true);
            var i = document.querySelector("#" + o + " .ec-wrapper");
            i &&
              P([i], function (t) {
                t.add("ec-wrapper--transition");
              }),
              Ecwid.openPage(t, e);
          }
        }, 0));
    };
  }
  function v(t, e) {
    e >= 40
      ? console.warn("failed to add Ecwid.OnPageLoaded callback")
      : "object" == typeof Ecwid && "object" == typeof Ecwid.OnPageLoaded
      ? Ecwid.OnPageLoaded.add(t)
      : setTimeout(function () {
          v(t, e + 1);
        }, 50);
  }
  function m() {
    var t = document.querySelector("#" + i),
      e = t.getAttribute("style") || "";
    t.setAttribute("style", e + d);
  }
  function h() {
    requestAnimationFrame(function () {
      var t;
      !(function () {
        if (!a) return;

        var t = document.querySelectorAldocument.querySelector(".ec-wrapper--animated-transitions");
        P(Array.prototype.slice.call(t), function (t) {
          t.remove("ec-wrapper--animated-transitions");
        });
      })();
      t = document.querySelector("#" + i).style.height = "";
      t.style.maxHeight = "";
      t.style.minHeight = "";
      t.style.overflowY = "";
      t.style.display = "block";
      (function () {
        var t = document.querySelector("#" + o);
        t && ((t.style.opacity = 0), (t.style.display = "none"));
      })();
      var e = document.querySelector("#" + o);
      e && e.parentNode && e.parentNode.removeChild(e);
      var n = window.ec.storefront.staticPages.switchToDynamicCallback,
        r = document.querySelector("#" + o + " .ec-wrapper");
      r &&
        P([r], function (t) {
          t.remove("ec-wrapper--transition");
        }),
        !a && n && n();
    });
  }
  function P(t, e) {
    if (Array.isArray(t))
      for (var o in t) {
        var n = t[o].classList;
        !!n && e(n);
      }
  }
  window.ec = window.ec || {};
  window.ec.storefront = window.ec.storefront || {};
  window.ec.storefront.staticPages = window.ec.storefront.staticPages || {};
  window.ec.storefront.staticPages.switchStaticToDynamic = h;
  t = function () {
    if (true === (window.ec.storefront.staticPages.staticStorefrontEnabled || false))
      if (
        ((o = ec.storefront.staticPages.staticContainerID),
        (i = ec.storefront.staticPages.dynamicContainerID),
        document.querySelector("#" + o))
      )
        if (document.querySelector("#" + i)) {
          if (
            (-1 !== window.location.hash.indexOf("#!/c/0") && document.querySelector("#" + o).scrollIntoView(true),
            "ontouchstart" in window && ((e = true), document.body.classList.add("touchable")),
            !!ec.storefront.staticPages.lazyLoading)
          ) {
            if (void 0 === ec.storefront.staticPages.lazyLoading.scriptJsLink)
              return void console.warn("Storefront lazy loading is enabled, but no scriptJsLink is provided");
            if (void 0 === ec.storefront.staticPages.lazyLoading.xProductBrowserArguments)
              return void (
                console.warn("Storefront lazy loading is enabled, but no xProductBrowser arguments are provided")
              );
            b(true);
            var t = true;
            function d() {
              void 0 === t ? console.warn("Unable to fetch script.js outside of lazy loading mode") : (b(false), w(P));
            }
            var P = function () {
              xProductBrowser.apply(this, ec.storefront.staticPages.lazyLoading.xProductBrowserArguments), E();
            };
            function b(t) {
              var n = function (t, e, o) {
                  e ? t.addEventListener(o, d) : t.removeEventListener(o, d);
                },
                i = document.querySelector("#" + o);
              e
                ? ["touchstart", "touchend", "touchcancel", "touchmove"].forEach(function (e) {
                    n(i, t, e);
                  })
                : ["mousedown", "mouseup", "mousemove", "contextmenu", "keydown", "keyup"].forEach(function (e) {
                    n(i, t, e);
                  });
            }
          }
          var _ = ec.storefront.staticPages.mainCategoryId;
          _ && (s = _);
          var L = ec.storefront.staticPages.autoSwitchStaticToDynamicWhenReady;
          if (
            ((a = L || c),
            ec.storefront.staticPages.initialCategoryOffset && (u = ec.storefront.staticPages.initialCategoryOffset),
            m(),
            (function () {
              var t = document.querySelector("#" + o + " ." + n);
              t && (t.style.opacity = 1);
            })(),
            (window.ec.config = window.ec.config || {}),
            (window.ec.config.navigation_scrolling = "DISABLED"),
            !g())
          )
            return m(), void h();
          !(function () {
            function t(t, e) {
              for (var o = document.querySelectorAll(t), n = 0; n < o.length; n++) e(o[n]);
            }
            t("#" + o + " .ec-breadcrumbs a", function (t) {
              var e = t.getAttribute("categoryId");
              e !== s && y(t, p("category", { id: e }));
            });
            var e = document.querySelector("#" + o + " .grid__sort select");
            e &&
              e.addEventListener("change", function (t) {
                p("category", { id: s, sort: e.value })(t);
              }),
              t("#" + o + " .grid__sort .grid-sort__item--filter", function (t) {
                y(t, function () {
                  v(function () {
                    f() || (h(), Ecwid.showProductFilters());
                  }, 0);
                });
              }),
              t("#" + o + " .grid-category__card a", function (t) {
                var e = t.getAttribute("data-category-id");
                y(t, p("category", { id: e }));
              }),
              t("#" + o + " .grid-product:not(.grid-product--view-all) a:not(.open-external-url)", function (t) {
                var e = t.getAttribute("data-product-id");
                y(t, p("product", { id: e }));
              }),
              t(
                "#" + o + " .grid-product:not(.grid-product--view-all) .grid-product__wrap[data-product-id]",
                function (t) {
                  var e = t.getAttribute("data-product-id");
                  y(t, p("product", { id: e }));
                }
              ),
              t("#" + o + " .grid-product--view-all a", function (t) {
                var e = t.getAttribute("data-category-id");
                y(t, p("category", { id: e }));
              }),
              t("#" + o + " .grid-product__buy-now", function (t) {
                var e = t.getAttribute("data-product-id");
                y(t, p("product", { id: e }));
              }),
              t("#" + o + " .footer__link--gift-card", function (t) {
                var e = t.getAttribute("data-product-id");
                y(t, p("product", { id: e }));
              }),
              t("#" + o + " .footer__link--all-products", function (t) {
                y(t, p("search"));
              }),
              t("#" + o + " .footer__link--track-order", function (t) {
                y(t, p("account/orders"));
              }),
              t("#" + o + " .footer__link--shopping-favorites", function (t) {
                y(t, p("account/favorites"));
              }),
              t("#" + o + " .footer__link--shopping-cart", function (t) {
                y(t, p("cart"));
              }),
              t("#" + o + " .footer__link--sigin-in", function (t) {
                y(t, p("signin"));
              }),
              t("#" + o + " .footer__link--my-account", function (t) {
                y(t, p("account/settings"));
              }),
              t("#" + o + " .pager__button", function (t) {
                var e = t.getAttribute("data-page-number") || 2;
                y(t, p("category", { id: s, page: e }));
              }),
              t("#" + o + " .pager__number", function (t) {
                var e = t.getAttribute("data-page-number");
                y(t, p("category", { id: s, page: e }));
              }),
              t("#" + o + " .open-external-url", function (t) {
                y(t, function (t) {
                  t.stopPropagation();
                });
              });
          })();
          var E = function () {
            if (onAPILoaded()) S();
            else
              var t = setInterval(function () {
                onAPILoaded() && (S(), clearInterval(t));
              }, 100);
          };
          void 0 === t && E();
        } else
          console.warn(
            "Static storefront is enabled, but no dynamicContainerID is provided or container is not present"
          );
      else
        console.warn("Static storefront is enabled, but no staticContainerID is provided or container is not present");
    function S() {
      Ecwid.OnAPILoaded.add(function () {
        if (!f()) {
          var t = window.ecwid_initial_data.data.storeClosed,
            e = document.querySelectorAldocument.querySelector(".ecwid-maintenance-wrapper"),
            o = !t && e.length > 0;
          (t || o || k()) && h();
        }
      }),
        Ecwid.OnPageLoad.add(function (t) {
          f() ||
            (("CART" === t.type ||
              "ORDERS" === t.type ||
              "FAVORITES" === t.type ||
              "SIGN_IN" === t.type ||
              "RESET_PASSWORD" === t.type ||
              k()) &&
              h());
        }),
        v(function (t) {
          f() ||
            (a
              ? (function t(e) {
                  if (e <= 0) h();
                  else {
                    var o = (function () {
                      if (!i) return true;
                      try {
                        var t = document.querySelector("#" + i + " .grid-category--loading");
                        if (null != t) return false;
                        var e = document.querySelector("#" + i + " .grid-product--loading");
                        if (null != e) return false;
                      } catch (t) {}
                      return true;
                    })();
                    o
                      ? h()
                      : setTimeout(function () {
                          t(e - 1);
                        }, 100);
                  }
                })(10)
              : (r || "CATEGORY" !== t.type || t.categoryId !== s || t.offset !== u) && h());
        }, 0);
    }
    function onAPILoaded() {
      return !!Ecwid && !!Ecwid.OnAPILoaded && !!Ecwid.OnAPILoaded.add;
    }
    function k() {
      return !!window.ecwidMessages && Object.keys(window.ecwidMessages).length > 0;
    }
  };
  (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState)
    ? t()
    : document.addEventListener("DOMContentLoaded", t);
  window.ec = window.ec || {};
  window.ec.storefront = window.ec.storefront || {};
  window.ec.storefront.staticPages = window.ec.storefront.staticPages || {};
  window.ec.storefront.staticPages.forceDynamicLoadingIfRequired = function () {
    if (!ec.storefront.staticPages.lazyLoading) return;
    if (!ec.storefront.staticPages.lazyLoading.scriptJsLink) return;
    if (!ec.storefront.staticPages.lazyLoading.xProductBrowserArguments) return;

    var t = document.getElementById(ec.storefront.staticPages.staticContainerID);
    if (g()) (t.style.height = ""), (t.style.maxHeight = ""), (t.style.minHeight = ""), (t.style.overflowY = "");
    else {
      for (; t.lastChild; ) t.lastChild.remove();
      w(function () {
        xProductBrowser.apply(this, ec.storefront.staticPages.lazyLoading.xProductBrowserArguments);
      });
    }
  };
})();
