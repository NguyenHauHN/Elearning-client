!function e(t, n, r) {
  function o(s, a) {
    if (!n[s]) {
      if (!t[s]) {
        var u = "function" == typeof require && require;
        if (!a && u)return u(s, !0);
        if (i)return i(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      var l = n[s] = {exports: {}};
      t[s][0].call(l.exports, function (e) {
        var n = t[s][1][e];
        return o(n || e)
      }, l, l.exports, e, t, n, r)
    }
    return n[s].exports
  }

  for (var i = "function" == typeof require && require, s = 0; s < r.length; s++)o(r[s]);
  return o
}({
  1: [function (e, t, n) {
    "use strict";
    !function (e, t, n, r) {
      t.has(r, "dashboard") || (r.dashboard = {}), r.dashboard.DashboardView = e.create({
        initialize: function () {
          r.data.dashboard_empty || (this.course_progress_fetcher = new r.dashboard.CourseProgressFetcher, this.unenrolling_manager = new r.dashboard.UnenrollingManager, r.goal_setter.init("dashboard")), n(".btn[title], h1 span[title]").tooltip()
        }, scrollCloudsAndSun: function () {
          var e = n("html").hasClass("night"), t = n(".clouds-header"), r = n(".sun"), o = e ? 126 : 64;
          n(window).scroll(function () {
            var e = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            t.css("top", .6 * e + 68 + "px"), r.css("top", .4 * e + o + "px")
          })
        }
      }), r.renderer.ready(function () {
        r.view = new r.dashboard.DashboardView, r.view.scrollCloudsAndSun()
      })
    }(Class, _, jQuery, MEMRISE)
  }, {}]
}, {}, [1]), function e(t, n, r) {
  function o(s, a) {
    if (!n[s]) {
      if (!t[s]) {
        var u = "function" == typeof require && require;
        if (!a && u)return u(s, !0);
        if (i)return i(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      var l = n[s] = {exports: {}};
      t[s][0].call(l.exports, function (e) {
        var n = t[s][1][e];
        return o(n || e)
      }, l, l.exports, e, t, n, r)
    }
    return n[s].exports
  }

  for (var i = "function" == typeof require && require, s = 0; s < r.length; s++)o(r[s]);
  return o
}({
  1: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0}), n.default = function (e, t, n, r) {
      var o = $("html");
      MEMRISE.modal.content({
        modalId: "modal-chat-selector",
        template: "chat-selector",
        styleVersion: 2,
        backdrop: "static",
        seeThru: !1,
        removeOnHidden: !0,
        templateVars: {proChats: n, grammarChats: r, targetLanguage: t, grammarVariant: "grammar_chat" === e}
      }, function () {
        o.addClass("no-scroll")
      }, function () {
        o.removeClass("no-scroll"), $(".modal").hide()
      })
    }
  }, {}], 2: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", {value: !0});
    n.default = {
      learn: {class: "learn", text: "modeTitle_learn"},
      classic_review: {class: "classic-review", text: "modeTitle_review"},
      speed_review: {class: "speed-review", text: "modeTitle_speed"},
      difficult_words: {class: "difficult-words", text: "modeTitle_difficult"},
      listening_skills: {class: "listening-skills", text: "modeTitle_listening"},
      meet_the_natives: {class: "meet-the-natives", text: "modeTitle_locals"},
      pro_chat: {class: "pro-chat", text: "modeTitle_chat"},
      grammar_chat: {class: "grammar-chat", text: "modeTitle_grammar"}
    }
  }, {}], 3: [function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(n, "__esModule", {value: !0});
    var o = r(e(15)), i = r(e(19)), s = r(e(20)), a = r(e(22)), u = r(e(21)), c = r(e(2)), l = function (e) {
      function t() {
        return (0, i.default)(this, t), (0, a.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
      }

      return (0, u.default)(t, e), (0, s.default)(t, [{
        key: "sessionIsLocked", value: function () {
          var e = this.props, t = e.isUnlocked, n = e.userIsPro, r = e.session;
          return !n && !t && r.is_pro
        }
      }, {
        key: "getHasSeenUpsell", value: function () {
          return this.props.hasSeenUpsell
        }
      }, {
        key: "view", value: function () {
          var e = this, t = this.props, n = t.session, r = t.upsellAction, o = c.default[n.session_type], i = "single-continue-button " + o.class, s = _.noop, a = n.url;
          return this.sessionIsLocked() && (a = "#", s = function () {
            r(n.session_type, e)
          }), m("a", {
            href: a,
            class: i,
            onclick: s
          }, [m("div", {class: "single-continue-button-icon"}), m("div", {class: "single-continue-button-label"}, [m("div", {class: "single-continue-button-next"}, _t("scb_next")), m("div", {class: "single-continue-button-text"}, _t(o.text))]), m("div", {class: "single-continue-button-arrow"})])
        }
      }], [{
        key: "nextNonProSession", value: function (e, t) {
          return t || e.is_unlocked || !e.next_session.is_pro ? e.next_session : _.sample(e.selector.filter(function (e) {
            return !e.is_pro && e.is_enabled
          }))
        }
      }]), t
    }(r(e(11)).default);
    n.default = l
  }, {11: 11, 15: 15, 19: 19, 2: 2, 20: 20, 21: 21, 22: 22}], 4: [function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(n, "__esModule", {value: !0});
    var o = r(e(15)), i = r(e(19)), s = r(e(20)), a = r(e(22)), u = r(e(21)), c = function (e) {
      function t() {
        return (0, i.default)(this, t), (0, a.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
      }

      return (0, u.default)(t, e), (0, s.default)(t, [{
        key: "review", value: function (e) {
          if (e > 0)return m("div", {
            className: "card-counter",
            title: _t("Review (__reviewNum__)", {reviewNum: e}),
            "data-toggle": "tooltip"
          }, m("div", null, m("svg", {width: "33", height: "30"}, m("g", {
            fillRule: "nonzero",
            fill: "#27A2F5"
          }, m("path", {d: "M18.705 22.698l.04.069A.627.627 0 0 0 19.6 23l7.554-4.36a.627.627 0 0 0 .225-.858l-4.5-7.794a.627.627 0 0 0-.855-.234l-7.554 4.362a.627.627 0 0 0-.225.857l2.393 4.145-4.042-.221s.955.438-.6-.546c-1.556-.984-1.843.131-1.843.131s-.3 4.05.368 4.613c.67.563 2.124-.573 2.124-.573l6.06.176z"}), m("path", {d: "M24.58 18.303c-3.484 2.011-7.987.735-10.058-2.85-2.07-3.586-.924-8.124 2.56-10.136 3.485-2.012 7.988-.736 10.058 2.85 2.07 3.586.924 8.124-2.56 10.136zm-1.184-2.05c2.384-1.377 3.169-4.482 1.752-6.935-1.416-2.454-4.497-3.327-6.882-1.95-2.384 1.376-3.168 4.48-1.751 6.934 1.416 2.454 4.497 3.327 6.881 1.95zM9.137 21.534S4.669 24.9 7.685 26.387c3.015 1.486 1.452-4.853 1.452-4.853z"})))), m("div", {className: "review"}, e))
        }
      }, {
        key: "difficult", value: function (e) {
          if (e > 0)return m("div", {
            className: "card-counter",
            title: _t("Difficult (__diffNums__)", {diffNums: e}),
            "data-toggle": "tooltip"
          }, m("div", {className: "difficult-icon"}, m("svg", {
            width: "18",
            height: "30"
          }, m("path", {
            d: "M13.242 8.658H8.385L9.69.47c.067-.42-.46-.646-.702-.302L.075 12.854c-.187.267-.003.64.316.64h4.857l-1.305 8.188c-.067.42.46.646.702.301l8.913-12.686c.187-.266.003-.639-.316-.639",
            "fill-rule": "nonzero",
            fill: "#FD9538"
          }))), m("div", {className: "difficult"}, e))
        }
      }, {
        key: "view", value: function () {
          var e = this.props, t = e.reviewCount, n = e.difficultCount;
          return m("div", {className: "card-counter-container"}, this.review(t), this.difficult(n))
        }
      }]), t
    }(r(e(11)).default);
    n.default = c
  }, {11: 11, 15: 15, 19: 19, 20: 20, 21: 21, 22: 22}], 5: [function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(n, "__esModule", {value: !0});
    var o = r(e(15)), i = r(e(19)), s = r(e(20)), a = r(e(22)), u = r(e(21)), c = function (e) {
      function t() {
        return (0, i.default)(this, t), (0, a.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
      }

      return (0, u.default)(t, e), (0, s.default)(t, [{
        key: "view", value: function () {
          var e = this.props, t = e.toggleModeSelectorModal, n = e.buttonClasses;
          return m("div", {
            class: "mode-selector-button " + n,
            onclick: t
          }, [m("div", {class: "mode-selector-button-icon"}), m("div", {class: "mode-selector-button-label"}, _t("scb_modeSelector_label"))])
        }
      }]), t
    }(r(e(11)).default);
    n.default = c
  }, {11: 11, 15: 15, 19: 19, 20: 20, 21: 21, 22: 22}], 6: [function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(n, "__esModule", {value: !0});
    var o = r(e(15)), i = r(e(19)), s = r(e(20)), a = r(e(22)), u = r(e(21)), c = r(e(2)), l = function (e) {
      function t() {
        return (0, i.default)(this, t), (0, a.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
      }

      return (0, u.default)(t, e), (0, s.default)(t, [{
        key: "exit", value: function (e, t) {
          var n = this, r = this.props, o = r.modes, i = r.continueButton, s = r.category;
          window.setTimeout(function () {
            if ("upsell" === e) n.props.upsellAction(t, i); else if ("chats" === e) {
              var r = n.getChats(o, "pro_chat"), a = n.getChats(o, "grammar_chat");
              n.props.chatsAction(t, s, r, a)
            }
            n.props.close()
          }, 300), this.props.hide = !0, document.getElementsByTagName("html")[0].classList.remove("no-scroll")
        }
      }, {
        key: "show", value: function () {
          this.props.hide = !1, document.getElementsByTagName("html")[0].classList.add("no-scroll")
        }
      }, {
        key: "isModeEligibleForUnlockedSession", value: function (e) {
          var t = this.props, n = t.userIsPro, r = t.unlocked;
          return !n && e.is_enabled && e.is_pro && r
        }
      }, {
        key: "isModeEligibleForPremiumUpsell", value: function (e) {
          var t = this.props, n = t.userIsPro, r = t.unlocked;
          return !n && e.is_enabled && e.is_pro && !r
        }
      }, {
        key: "isChatMode", value: function (e) {
          var t = this.props, n = t.userIsPro, r = t.unlocked;
          return (n || r) && ("pro_chat" === e.session_type || "grammar_chat" === e.session_type) && e.is_enabled
        }
      }, {
        key: "getChats", value: function (e, t) {
          return e.filter(function (e) {
            return e.session_type === t
          })[0].chats
        }
      }, {
        key: "setModes", value: function (e, t) {
          var n = this, r = e.map(function (e) {
            var r = e.is_enabled ? "enabled" : "disabled", o = e.counter > 0 ? m("div", {className: "mode-counter"}, e.counter) : null, i = c.default[e.session_type].text, s = e.session_type === t ? "next-up" : "", a = e.url || "#", u = "", l = _.noop;
            return n.isModeEligibleForUnlockedSession(e) ? u = "unlocked" : n.isModeEligibleForPremiumUpsell(e) && (u = "pro", a = "#", l = function () {
              n.exit("upsell", e.session_type)
            }), n.isChatMode(e) && (a = "#", l = function () {
              n.exit("chats", e.session_type)
            }), m("a", {
              href: a, class: "mode-icon-wrapper", onclick: function () {
                l()
              }
            }, m("div", {className: "mode-icon " + e.session_type + " " + r + " " + s}, o, m("div", {className: u})), m("div", {className: "mode-icon-label"}, _t(i)))
          });
          return m("div", {className: "mode-icons"}, r)
        }
      }, {
        key: "view", value: function () {
          var e = this, t = this.props, n = t.title, r = t.hide, o = t.continueButton, i = t.modes, s = t.sessionType, a = this.setModes(i, s), u = r ? "exit" : "";
          return m(".mode-selector-modal-enter", m("div", {className: "mode-selector-modal " + u}, m("div", {className: "mode-selector-modal-content"}, m("div", {
            className: "mode-selector-modal-close",
            onclick: function () {
              e.exit(null, null)
            }
          }, m("svg", {width: "24", height: "24", viewBox: "0 0 24 24"}, m("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M18.717 6.697l-1.414-1.414L12 10.586 6.697 5.283 5.283 6.697 10.586 12l-5.303 5.303 1.414 1.414L12 13.414l5.303 5.303 1.414-1.414L13.414 12z",
            opacity: ".75"
          }))), m("h3", null, n), a, o)))
        }
      }], [{
        key: "getPremiumUrl", value: function (e) {
          return "/premium/?session_type=" + e + "&source=mode_selector#features"
        }
      }]), t
    }(r(e(11)).default);
    n.default = l
  }, {11: 11, 15: 15, 19: 19, 2: 2, 20: 20, 21: 21, 22: 22}], 7: [function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var o = r(e(6)), i = r(e(3)), s = r(e(5)), a = r(e(4)), u = r(e(1));
    t.exports = function (e, t, n, r, c) {
      function l(t, n) {
        var r = e("#" + t + "-upsell-modal");
        r.find(".see-all-plans").attr("href", o.default.getPremiumUrl(t)), r.find(".close").click(function () {
          n.getHasSeenUpsell()(!0)
        }), r && (r.modal("show"), "meet_the_natives" === t && videojs("#mtn-video", {controlBar: !1}).ready(function () {
          this.play()
        }))
      }

      return {
        widget: function (d) {
          var f = {
            vm: {
              course: n.prop(d.course),
              currentFilter: n.prop(d.currentFilter),
              hideGoal: n.prop(!d.course.isGoalSet())
            }, controller: function () {
              return {
                vm: f.vm, quitCourse: function () {
                  var e = this.vm.course().id();
                  t.modal.yes_no(_t("Quit this course"), t.trans.quitCourse, function () {
                    !function (e) {
                      n.post({url: "/ajax/courses/quit/", data: {course_id: e}}).then(function () {
                        return t.dashboard.cardsComponent.removeCard(e)
                      })
                    }(e)
                  })
                }
              }
            }, view: function (d) {
              var f = d.vm.course(), p = f.isInProgress(), m = p ? ["detail"] : ["detail", "wide"], h = f.has_items(), v = [];
              return f.showSCB && (v = function (e, t) {
                var c = document.getElementById("mode-selector-modal-wrapper"), d = e.nextUp(), f = d.selector, p = d.is_unlocked, m = e.nextUpNonPro, h = d.next_session.session_type, v = new i.default({
                  isUnlocked: p,
                  session: e.hasSeenUpsell ? m : d.next_session,
                  userIsPro: t,
                  upsellAction: l,
                  hasSeenUpsell: e.setSeenUpsell
                }), _ = function (e) {
                  return [new a.default({reviewCount: e.review(), difficultCount: e.difficult()})]
                }(e), g = void 0;
                if (f && f.length > 0) {
                  var y = new o.default({
                    title: e.name(),
                    category: e.category(),
                    show: !1,
                    close: function () {
                      n.mount(c, null)
                    },
                    upsellAction: l,
                    chatsAction: u.default,
                    continueButton: v,
                    modes: f,
                    userIsPro: t,
                    unlocked: p,
                    sessionType: e.hasSeenUpsell ? m.session_type : h
                  });
                  g = new s.default({
                    toggleModeSelectorModal: function () {
                      y.show(), n.mount(c, y)
                    }, buttonClasses: "enabled"
                  })
                } else g = new s.default({toggleModeSelectorModal: r.noop, buttonClasses: "disabled"});
                return [_, v, g]
              }(f, t.user.is_premium)), n(".course-card-container.js-course-card-container", {
                id: "course-" + f.id(),
                key: f.id()
              }, [n(".course-progress-box", {}, [n(".card-top", [n(".card-image-col", [n('a[href="' + f.url() + '"]', [n(".img-crop", [n('img.course-photo[src="' + f.photo() + '"]'), n('img.category-photo[src="' + f.category().photo + '"]')])])]), n(".card-main-container", [n(".top-main", [n(".wrapper", [n("div", {class: m.join(" ")}, [n('p.title[title="' + f.name() + '"]', [n('a[href="' + f.url() + '"]', f.name())])]), n(".pull-right", [p ? function (e) {
                function r() {
                  e.hideGoal(!e.hideGoal())
                }

                var o = e.course(), i = o.goal(), s = e.hideGoal() ? ".inactive" : ".active";
                return o.isGoalSet() && !o.isGoalAchieved() ? n("span.simple-btn.goal-setter-btn" + s, {title: _t("Goal setter lets you set learning targets")}, [n("span.onoff", {onclick: r}, [_t("Today: "), n("span.pts", [n("span.orange", [i.points]), _t(" / __goal__ pts", {goal: i.goal})])])]) : o.isGoalSet() && o.isGoalAchieved() ? n("span.simple-btn.goal-setter-btn.done" + s, {title: _t("Goal setter lets you set learning targets")}, [n("span.onoff", {onclick: r}, _t("Goal complete!"))]) : n("span.simple-btn.goal-setter-btn.inactive", {
                  onclick: function () {
                    t.goal_setter.goals[o.id()].showPopup()
                  }, title: _t("Goal setter lets you set learning targets")
                }, [n("span.onoff", _t("Set a daily goal"))])
              }(d.vm) : "", n('a[href="' + f.leaderboardUrl() + '"]', [n("span.simple-btn.leaderboard-btn", [n("span.leaderboard-icon")])]), function (r) {
                var o = r.vm.course();
                return n("span.ctrl-btn", [n("span.icon"), n("ul.tooltip", [n("li", [n("a.option-btn", {href: o.url()}, [n("i.option-pin"), _t("Course details")])]), n("li", [n("a.option-btn", {
                  onclick: function (n) {
                    n.preventDefault(), t.sharing.facebookShareClick(e(n.target))
                  },
                  href: "#",
                  "data-url": o.url(),
                  "data-title": o.name(),
                  "data-picture": o.photo(),
                  "data-description": o.description(),
                  "data-caption": _t("Memrise is a fun and easy way to learn and improve your memory!")
                }, [n("i.option-share"), _t("Share with friends")])]), "teaching" === r.vm.currentFilter() ? "" : n("li", [n("span.option-btn", {
                  onclick: function () {
                    r.quitCourse()
                  }
                }, [n("i.option-delete"), _t("Quit course")])])])])
              }(d)]), function (e) {
                var t = e.isInProgress();
                return n(".wrapper", [n(".course-progress", [n("div", {class: (t ? ["right"] : ["right", "half"]).join(" ")}, [n("span", _t("__learned__ / __all__ words learned", {
                  learned: e.learned(),
                  all: e.item_count()
                }))]), n(".progress-bar-container", [n(".progress-bar", {style: "width: " + e.percent_complete() + "%"})]), t ? "" : n(".left.half", [n("span.course-complete-text", "Course Complete!")])])])
              }(f), f.isGoalSet() && p && !d.vm.hideGoal() ? function (e, o, i) {
                var s = Math.min(parseInt(i.points / i.goal * 100), 100);
                if (!(o >= 0 && o < 7))throw"expecting day to be a value between 0 and 6";
                return n(".goal-setter", [n(".streak-edit", [n(".level" + function (e) {
                    return 1500 === e ? ".first" : 6e3 === e ? ".second" : ".third"
                  }(i.goal)), n(".duration", _t("__duration__ mins a day", {
                  duration: function (e) {
                    return 1500 === e ? 5 : 6e3 === e ? 15 : 45
                  }(i.goal)
                })), n("span.simple-btn.edit-goal-btn", {
                  onclick: function () {
                    t.goal_setter.goals[e].showPopup()
                  }, title: _t("Adjust your goal")
                }, [n("span", _t("Edit goal"))])]), n(".streak-row", [n(".streak", [n(".streak-bubbles", function (e, t, o) {
                  for (var i = r.range(0, 7).concat(r.range(0, 7)).map(function (e) {
                    return c.getWeekdayName(e, 1)
                  }), s = [], a = [], u = Math.min(o ? t : t + 1, 7) - 1, l = (e + 7 - u) % 7; u >= 0;) {
                    var d = i[l];
                    0 === u ? o ? s.push(n("span.streak-bubble.complete", [n("span", d)])) : a.push(n("span.streak-bubble.current", [n("span", d)])) : s.push(n("span.streak-bubble.complete", [n("span", d)])), l++, u--
                  }
                  for (var f = o ? 7 - s.length : 6 - s.length, p = 0; p < f; p++)a.push(n("span.streak-bubble.incomplete", [n("span", i[l + p])]));
                  return [n("span.complete", s), a]
                }(o, i.streak, 100 === s))]), n(".streak-fake-btn", [n(".num", i.streak), n(".text", _t("streak"))])], n(".goal-setter-progress", [n(".bar", {style: "width: " + s + "%"})]))])
              }(f.id(), t.data.day_of_the_week, f.goal()) : ""])])])]), h ? n(".card-bottom", [n(".course-actions", v)]) : ""])])
            }
          };
          return f
        }, model: function (e) {
          var o = this;
          this.audio_mode = n.prop(e.audio_mode), this.video_mode = n.prop(e.video_mode), this.id = n.prop(e.id), this.name = n.prop(e.name), this.photo = n.prop(e.photo), this.percent_complete = n.prop(e.percent_complete || 0), this.learned = n.prop(e.learned || 0), this.num_things = n.prop(e.num_things), this.ignored = n.prop(e.ignored || 0), this.category = n.prop(e.category), this.description = n.prop(e.description ? e.description : ""), this.item_count = n.prop(e.num_things - e.ignored), this.has_items = n.prop(this.item_count() > 0), this.url = n.prop(e.url), this.goal = n.prop(e.goal), this.difficult = n.prop(e.difficult || 0), this.review = n.prop(Math.min(e.review || 0, 999)), this.leaderboardUrl = n.prop(e.url + "leaderboard"), r.isEmpty(e.next_session) ? this.showSCB = !1 : (this.showSCB = !0, this.nextUp = n.prop(e.next_session), this.hasSeenUpsell = !1, this.nextUpNonPro = function (e, n) {
            return t.user.is_premium || e.is_unlocked || !e.next_session.is_pro ? e.next_session : r.sample(e.selector.filter(function (e) {
              return !e.is_pro && e.is_enabled
            }))
          }(this.nextUp()), this.setSeenUpsell = function (e) {
            o.hasSeenUpsell = e, n.redraw()
          }), this.isGoalSet = function () {
            return this.goal() && this.goal().goal > 0
          }, this.isGoalAchieved = function () {
            var e = this.goal();
            return e.points >= e.goal
          }, this.isInProgress = function () {
            return this.percent_complete() < 100
          }
        }
      }
    }
  }, {1: 1, 3: 3, 4: 4, 5: 5, 6: 6}], 8: [function (e, t, n) {
    "use strict";
    var r = function (e) {
      return e && e.__esModule ? e : {default: e}
    }(e(12));
    t.exports = function (t, n, o, i, s, a) {
      function u(e, n) {
        n || t('*[data-toggle="tooltip"]').tooltip({container: "body"})
      }

      function c(e) {
        var r = parseInt(e.category_id), a = e.courses_filter, f = {
          vm: {
            isLoading: o.prop(!0),
            isReviewNumsLoaded: function (e) {
              return e && i.has(n.data.cat_review_nums, e)
            },
            courses: o.prop({}),
            toReviewTotal: o.prop(0),
            coursesOrder: o.prop([]),
            widgets: o.prop({}),
            currentFilter: o.prop(a),
            categories: o.prop(e.learning_categories),
            currentCatId: o.prop(isNaN(r) ? null : r),
            hasMoreCourses: o.prop(!0)
          }, controller: function () {
            var e = {
              $window: t(window), vm: f.vm, setGoal: function (e, t) {
                var n = this.vm.courses()[e];
                n.goal(t), this.vm.widgets()[e].vm.hideGoal(!n.isGoalSet())
              }, removeCard: function (e) {
                delete this.vm.courses()[e], this.vm.coursesOrder(i.without(this.vm.coursesOrder(), e)), 0 === i.size(this.vm.courses()) && (this.vm.currentFilter() === v && localStorage.removeItem(l), window.location.reload())
              }, setCourses: function (e, t) {
                var n = function (t) {
                  var n = [], r = {};
                  return e.forEach(function (e) {
                    r[e.id] = new h(e), n.push(e.id)
                  }), [r, n]
                }();
                this.vm.courses(i.assign(this.vm.courses(), n[0])), this.vm.coursesOrder(this.vm.coursesOrder().concat(n[1])), this.vm.isLoading(!1), this.vm.hasMoreCourses(t)
              }, resetCourses: function () {
                this.vm.courses({}), this.vm.coursesOrder([]), this.vm.hasMoreCourses(!0)
              }, setToReviewTotal: function (e) {
                this.vm.toReviewTotal(e)
              }, loadMoreCourses: function () {
                o.startComputation(), this.vm.isLoading(!0), o.endComputation();
                var e = this.vm.currentFilter(), t = i.size(this.vm.courses()), n = t >= d ? 2 * d : d;
                p.fetchCourses(e, e === v ? this.vm.currentCatId() : null, t, n)
              }, onScroll: function () {
                var e = this.vm.coursesOrder().length;
                if (!(e < 1 || !this.vm.hasMoreCourses() || this.vm.isLoading())) {
                  var n = t("#course-" + this.vm.coursesOrder()[e - 1]).offset();
                  if (n) {
                    var r = this.$window.scrollTop() + this.$window.height();
                    n.top < r && this.loadMoreCourses()
                  }
                }
              }
            };
            return e.$window.on("scroll", i.throttle(e.onScroll.bind(e), 500)), e
          }, view: function (e) {
            var t = function (t) {
              var r = e.vm, o = r.courses(), s = r.currentFilter(), a = r.widgets();
              return i.map(r.coursesOrder(), function (e) {
                var t = o[e];
                return n.goal_setter.goals[e] = new n.Goal(e, t.photo(), t.name(), t.goal() || {}, !1, !1), void 0 === a[e] && (a[e] = m({
                  course: t,
                  currentFilter: s
                })), a[e]
              })
            }();
            return [function (e) {
              var t, r, a, u, d = e.vm.currentFilter(), f = e.vm.currentCatId(), m = e.vm.categories(), h = e.vm.isReviewNumsLoaded(f);
              switch (d) {
                case y:
                  t = b[g];
                  break;
                case v:
                  var w = i.find(m, function (e) {
                    return e.id === f
                  });
                  if (u = h ? n.data.cat_review_nums[f] : e.vm.toReviewTotal(), void 0 === w)return localStorage.removeItem(l), void window.location.reload();
                  t = w.name, u > 0 && (r = s("/garden/review/%s/", w.slug), a = " " + _t("Review (__reviewNum__)", {reviewNum: u}));
                  break;
                default:
                  t = b[d]
              }
              return o(".courses-filter-container", [o(".left", [o(".title-container", [o("h1.title", t)])]), o(".right", [d === _ ? o("a.button.green.capped", {href: "/course/create/"}, _t("Create course")) : "", r ? o("a.button.blue", {href: r}, a) : "", o(".select-container", [o("select.courses-filter", {
                name: "courses-filter",
                title: _t("Filter your page content"),
                onchange: function (t) {
                  var n = t.target;
                  !function (e, t) {
                    var n = t.options[t.selectedIndex], r = n.getAttribute("data-choice"), i = n.value, s = e.vm.currentFilter(), a = e.vm.currentCatId();
                    r === s && i === a || (t.disabled = !0, r === v && (i = parseInt(i)), e.vm.isLoading(!0), e.resetCourses(), o.redraw(), p.fetchCourses(r, r === v ? parseInt(i) : null).then(function () {
                      var n = c.getSavedFilter();
                      n.courses_filter = r, e.vm.currentFilter(r), r === v && (n.category_id = i, e.vm.currentCatId(i)), c.savedFilter(n), e.vm.widgets({}), e.vm.isLoading(!1), t.disabled = !1
                    }))
                  }(e, n)
                }
              }, i.map(b, function (e, t) {
                var r;
                if (t === y) a = {
                  "data-choice": g,
                  value: g,
                  disabled: "disabled"
                }, d === t && (a.selected = !0), r = o("option", a, e); else if (t === v) r = o("optgroup", {label: e}, i.map(m, function (e) {
                  var t, r = e.id, i = {"data-choice": v, value: r}, a = h ? n.data.cat_review_nums[r] : 0;
                  return d === v && f === r ? (i.selected = !0, t = e.name) : t = a > 0 ? s("%s (%d)", e.name, a) : e.name, o("option", i, t)
                })); else {
                  var a = {"data-choice": t, value: t};
                  d === t && (a.selected = !0), r = o("option", a, e)
                }
                return r
              }))])])])
            }(e), o("div", {config: u}, e.vm.isLoading() ? t.concat(function (t) {
              var n = e.vm.coursesOrder().length > 0 ? 1 : 2, r = i.map(i.range(0, n), function () {
                return o(".loading-item", [o(".loading-animation", [o(".background-masker.title-separator"), o(".background-masker.image-right"), o(".background-masker.image-bottom"), o(".background-masker.stats-top"), o(".background-masker.stats-left"), o(".background-masker.progress-top"), o(".background-masker.progress-bottom")])])
              });
              // return o(".loading-wrapper", r)
            }()) : t)]
          }
        };
        return f
      }

      var l = "dashboard_filter", d = 4, f = e(7)(t, n, o, i, a), p = e(10)(t, n, o, i), m = f.widget, h = f.model, v = "learning", _ = "teaching", g = "most_recent", y = "initial", b = {
        initial: _t("Filter Results"),
        with_goal: _t("With Goal Set"),
        most_recent: _t("Recently Learned"),
        teaching: _t("Teaching"),
        learning: _t("By Category")
      };
      return c.getSavedFilter = function () {
        var e = JSON.parse(localStorage.getItem(l));
        return null !== e && void 0 !== e.courses_filter || (e = 1 === n.data.learning_categories.length ? {
          courses_filter: "learning",
          category_id: n.data.learning_categories[0].id
        } : {courses_filter: "initial"}), e.learning_categories = n.data.learning_categories, c.savedFilter(e), e
      }, c.savedFilter = function (e) {
        try {
          localStorage.setItem(l, (0, r.default)(e))
        } catch (e) {
        }
      }, c
    }
  }, {10: 10, 12: 12, 7: 7}], 9: [function (e, t, n) {
    "use strict";
    !function (t, n, r, o, i, s, a) {
      n.has(o, "dashboard") || (o.dashboard = {}), o.dashboard.CourseProgressFetcher = function () {
        o.data.cat_review_nums = {};
        var t = e(8)(r, o, i, n, s, a), u = e(10)(r, o, i, n), c = t.getSavedFilter(), l = r(".js-course-cards-component")[0], d = t(c);
        o.dashboard.cardsComponent = i.mount(l, d), u.fetchCourses(c.courses_filter, c.category_id).then(i.endComputation)
      }
    }(Class, _, jQuery, MEMRISE, m, sprintf, datetime)
  }, {10: 10, 8: 8}], 10: [function (e, t, n) {
    "use strict";
    t.exports = function (e, t, n, r) {
      return {
        fetchCourses: function (e, o) {
          var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4;
          "initial" === e && (e = "most_recent");
          var a = {
            courses_filter: e,
            offset: i,
            limit: s,
            get_review_count: "learning" === e && !r.has(t.data.cat_review_nums, o) && null !== o
          };
          return o && (a.category_id = o), n.request({url: "/ajax/courses/dashboard/", data: a}).then(function (e) {
            o && a.get_review_count && (t.data.cat_review_nums[o] = e.to_review_total), t.dashboard.cardsComponent.setToReviewTotal(e.to_review_total), t.dashboard.cardsComponent.setCourses(e.courses, e.has_more_courses)
          })
        }
      }
    }
  }, {}], 11: [function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(n, "__esModule", {value: !0});
    var o = r(e(19)), i = r(e(20)), s = function () {
      function e(t) {
        (0, o.default)(this, e), this.props = t || {};
        var n = this;
        this.controller = function () {
          var e = {};
          return n.init(e), e
        }, this.controller.$original = this.init
      }

      return (0, i.default)(e, [{
        key: "init", value: function (e) {
        }
      }, {
        key: "instance", value: function () {
          var e = this, t = new this.controller;
          return t.render = function () {
            return e.view(t)
          }, t
        }
      }]), e
    }();
    n.default = s
  }, {19: 19, 20: 20}], 12: [function (e, t, n) {
    t.exports = {default: e(24), __esModule: !0}
  }, {24: 24}], 13: [function (e, t, n) {
    t.exports = {default: e(25), __esModule: !0}
  }, {25: 25}], 14: [function (e, t, n) {
    t.exports = {default: e(26), __esModule: !0}
  }, {26: 26}], 15: [function (e, t, n) {
    t.exports = {default: e(27), __esModule: !0}
  }, {27: 27}], 16: [function (e, t, n) {
    t.exports = {default: e(28), __esModule: !0}
  }, {28: 28}], 17: [function (e, t, n) {
    t.exports = {default: e(29), __esModule: !0}
  }, {29: 29}], 18: [function (e, t, n) {
    t.exports = {default: e(30), __esModule: !0}
  }, {30: 30}], 19: [function (e, t, n) {
    "use strict";
    n.__esModule = !0, n.default = function (e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }
  }, {}], 20: [function (e, t, n) {
    "use strict";
    n.__esModule = !0;
    var r = function (e) {
      return e && e.__esModule ? e : {default: e}
    }(e(14));
    n.default = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), (0, r.default)(e, o.key, o)
        }
      }

      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }()
  }, {14: 14}], 21: [function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    n.__esModule = !0;
    var o = r(e(16)), i = r(e(13)), s = r(e(23));
    n.default = function (e, t) {
      if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, s.default)(t)));
      e.prototype = (0, i.default)(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
    }
  }, {13: 13, 16: 16, 23: 23}], 22: [function (e, t, n) {
    "use strict";
    n.__esModule = !0;
    var r = function (e) {
      return e && e.__esModule ? e : {default: e}
    }(e(23));
    n.default = function (e, t) {
      if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== (void 0 === t ? "undefined" : (0, r.default)(t)) && "function" != typeof t ? e : t
    }
  }, {23: 23}], 23: [function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    n.__esModule = !0;
    var o = r(e(18)), i = r(e(17)), s = "function" == typeof i.default && "symbol" == typeof o.default ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e
    };
    n.default = "function" == typeof i.default && "symbol" === s(o.default) ? function (e) {
      return void 0 === e ? "undefined" : s(e)
    } : function (e) {
      return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : s(e)
    }
  }, {17: 17, 18: 18}], 24: [function (e, t, n) {
    var r = e(36), o = r.JSON || (r.JSON = {stringify: JSON.stringify});
    t.exports = function (e) {
      return o.stringify.apply(o, arguments)
    }
  }, {36: 36}], 25: [function (e, t, n) {
    e(89);
    var r = e(36).Object;
    t.exports = function (e, t) {
      return r.create(e, t)
    }
  }, {36: 36, 89: 89}], 26: [function (e, t, n) {
    e(90);
    var r = e(36).Object;
    t.exports = function (e, t, n) {
      return r.defineProperty(e, t, n)
    }
  }, {36: 36, 90: 90}], 27: [function (e, t, n) {
    e(91), t.exports = e(36).Object.getPrototypeOf
  }, {36: 36, 91: 91}], 28: [function (e, t, n) {
    e(92), t.exports = e(36).Object.setPrototypeOf
  }, {36: 36, 92: 92}], 29: [function (e, t, n) {
    e(95), e(93), e(96), e(97), t.exports = e(36).Symbol
  }, {36: 36, 93: 93, 95: 95, 96: 96, 97: 97}], 30: [function (e, t, n) {
    e(94), e(98), t.exports = e(86).f("iterator")
  }, {86: 86, 94: 94, 98: 98}], 31: [function (e, t, n) {
    t.exports = function (e) {
      if ("function" != typeof e)throw TypeError(e + " is not a function!");
      return e
    }
  }, {}], 32: [function (e, t, n) {
    t.exports = function () {
    }
  }, {}], 33: [function (e, t, n) {
    var r = e(52);
    t.exports = function (e) {
      if (!r(e))throw TypeError(e + " is not an object!");
      return e
    }
  }, {52: 52}], 34: [function (e, t, n) {
    var r = e(80), o = e(81), i = e(78);
    t.exports = function (e) {
      return function (t, n, s) {
        var a, u = r(t), c = o(u.length), l = i(s, c);
        if (e && n != n) {
          for (; c > l;)if ((a = u[l++]) != a)return !0
        } else for (; c > l; l++)if ((e || l in u) && u[l] === n)return e || l || 0;
        return !e && -1
      }
    }
  }, {78: 78, 80: 80, 81: 81}], 35: [function (e, t, n) {
    var r = {}.toString;
    t.exports = function (e) {
      return r.call(e).slice(8, -1)
    }
  }, {}], 36: [function (e, t, n) {
    var r = t.exports = {version: "2.5.1"};
    "number" == typeof __e && (__e = r)
  }, {}], 37: [function (e, t, n) {
    var r = e(31);
    t.exports = function (e, t, n) {
      if (r(e), void 0 === t)return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n)
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r)
          };
        case 3:
          return function (n, r, o) {
            return e.call(t, n, r, o)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    }
  }, {31: 31}], 38: [function (e, t, n) {
    t.exports = function (e) {
      if (void 0 == e)throw TypeError("Can't call method on  " + e);
      return e
    }
  }, {}], 39: [function (e, t, n) {
    t.exports = !e(44)(function () {
      return 7 != Object.defineProperty({}, "a", {
          get: function () {
            return 7
          }
        }).a
    })
  }, {44: 44}], 40: [function (e, t, n) {
    var r = e(52), o = e(45).document, i = r(o) && r(o.createElement);
    t.exports = function (e) {
      return i ? o.createElement(e) : {}
    }
  }, {45: 45, 52: 52}], 41: [function (e, t, n) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, {}], 42: [function (e, t, n) {
    var r = e(68), o = e(65), i = e(69);
    t.exports = function (e) {
      var t = r(e), n = o.f;
      if (n)for (var s, a = n(e), u = i.f, c = 0; a.length > c;)u.call(e, s = a[c++]) && t.push(s);
      return t
    }
  }, {65: 65, 68: 68, 69: 69}], 43: [function (e, t, n) {
    var r = e(45), o = e(36), i = e(37), s = e(47), a = function (e, t, n) {
      var u, c, l, d = e & a.F, f = e & a.G, p = e & a.S, m = e & a.P, h = e & a.B, v = e & a.W, _ = f ? o : o[t] || (o[t] = {}), g = _.prototype, y = f ? r : p ? r[t] : (r[t] || {}).prototype;
      f && (n = t);
      for (u in n)(c = !d && y && void 0 !== y[u]) && u in _ || (l = c ? y[u] : n[u], _[u] = f && "function" != typeof y[u] ? n[u] : h && c ? i(l, r) : v && y[u] == l ? function (e) {
        var t = function (t, n, r) {
          if (this instanceof e) {
            switch (arguments.length) {
              case 0:
                return new e;
              case 1:
                return new e(t);
              case 2:
                return new e(t, n)
            }
            return new e(t, n, r)
          }
          return e.apply(this, arguments)
        };
        return t.prototype = e.prototype, t
      }(l) : m && "function" == typeof l ? i(Function.call, l) : l, m && ((_.virtual || (_.virtual = {}))[u] = l, e & a.R && g && !g[u] && s(g, u, l)))
    };
    a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
  }, {36: 36, 37: 37, 45: 45, 47: 47}], 44: [function (e, t, n) {
    t.exports = function (e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    }
  }, {}], 45: [function (e, t, n) {
    var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
  }, {}], 46: [function (e, t, n) {
    var r = {}.hasOwnProperty;
    t.exports = function (e, t) {
      return r.call(e, t)
    }
  }, {}], 47: [function (e, t, n) {
    var r = e(60), o = e(71);
    t.exports = e(39) ? function (e, t, n) {
      return r.f(e, t, o(1, n))
    } : function (e, t, n) {
      return e[t] = n, e
    }
  }, {39: 39, 60: 60, 71: 71}], 48: [function (e, t, n) {
    var r = e(45).document;
    t.exports = r && r.documentElement
  }, {45: 45}], 49: [function (e, t, n) {
    t.exports = !e(39) && !e(44)(function () {
        return 7 != Object.defineProperty(e(40)("div"), "a", {
            get: function () {
              return 7
            }
          }).a
      })
  }, {39: 39, 40: 40, 44: 44}], 50: [function (e, t, n) {
    var r = e(35);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
      return "String" == r(e) ? e.split("") : Object(e)
    }
  }, {35: 35}], 51: [function (e, t, n) {
    var r = e(35);
    t.exports = Array.isArray || function (e) {
        return "Array" == r(e)
      }
  }, {35: 35}], 52: [function (e, t, n) {
    t.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e
    }
  }, {}], 53: [function (e, t, n) {
    "use strict";
    var r = e(59), o = e(71), i = e(74), s = {};
    e(47)(s, e(87)("iterator"), function () {
      return this
    }), t.exports = function (e, t, n) {
      e.prototype = r(s, {next: o(1, n)}), i(e, t + " Iterator")
    }
  }, {47: 47, 59: 59, 71: 71, 74: 74, 87: 87}], 54: [function (e, t, n) {
    "use strict";
    var r = e(57), o = e(43), i = e(72), s = e(47), a = e(46), u = e(56), c = e(53), l = e(74), d = e(66), f = e(87)("iterator"), p = !([].keys && "next" in [].keys()), m = function () {
      return this
    };
    t.exports = function (e, t, n, h, v, _, g) {
      c(n, t, h);
      var y, b, w, x = function (e) {
        if (!p && e in C)return C[e];
        switch (e) {
          case"keys":
          case"values":
            return function () {
              return new n(this, e)
            }
        }
        return function () {
          return new n(this, e)
        }
      }, k = t + " Iterator", S = "values" == v, O = !1, C = e.prototype, M = C[f] || C["@@iterator"] || v && C[v], P = M || x(v), T = v ? S ? x("entries") : P : void 0, j = "Array" == t ? C.entries || M : M;
      if (j && (w = d(j.call(new e))) !== Object.prototype && w.next && (l(w, k, !0), r || a(w, f) || s(w, f, m)), S && M && "values" !== M.name && (O = !0, P = function () {
          return M.call(this)
        }), r && !g || !p && !O && C[f] || s(C, f, P), u[t] = P, u[k] = m, v)if (y = {
          values: S ? P : x("values"),
          keys: _ ? P : x("keys"),
          entries: T
        }, g)for (b in y)b in C || i(C, b, y[b]); else o(o.P + o.F * (p || O), t, y);
      return y
    }
  }, {43: 43, 46: 46, 47: 47, 53: 53, 56: 56, 57: 57, 66: 66, 72: 72, 74: 74, 87: 87}], 55: [function (e, t, n) {
    t.exports = function (e, t) {
      return {value: t, done: !!e}
    }
  }, {}], 56: [function (e, t, n) {
    t.exports = {}
  }, {}], 57: [function (e, t, n) {
    t.exports = !0
  }, {}], 58: [function (e, t, n) {
    var r = e(84)("meta"), o = e(52), i = e(46), s = e(60).f, a = 0, u = Object.isExtensible || function () {
        return !0
      }, c = !e(44)(function () {
      return u(Object.preventExtensions({}))
    }), l = function (e) {
      s(e, r, {value: {i: "O" + ++a, w: {}}})
    }, d = t.exports = {
      KEY: r, NEED: !1, fastKey: function (e, t) {
        if (!o(e))return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
        if (!i(e, r)) {
          if (!u(e))return "F";
          if (!t)return "E";
          l(e)
        }
        return e[r].i
      }, getWeak: function (e, t) {
        if (!i(e, r)) {
          if (!u(e))return !0;
          if (!t)return !1;
          l(e)
        }
        return e[r].w
      }, onFreeze: function (e) {
        return c && d.NEED && u(e) && !i(e, r) && l(e), e
      }
    }
  }, {44: 44, 46: 46, 52: 52, 60: 60, 84: 84}], 59: [function (e, t, n) {
    var r = e(33), o = e(61), i = e(41), s = e(75)("IE_PROTO"), a = function () {
    }, u = function () {
      var t, n = e(40)("iframe"), r = i.length;
      for (n.style.display = "none", e(48).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;)delete u.prototype[i[r]];
      return u()
    };
    t.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (a.prototype = r(e), n = new a, a.prototype = null, n[s] = e) : n = u(), void 0 === t ? n : o(n, t)
      }
  }, {33: 33, 40: 40, 41: 41, 48: 48, 61: 61, 75: 75}], 60: [function (e, t, n) {
    var r = e(33), o = e(49), i = e(83), s = Object.defineProperty;
    n.f = e(39) ? Object.defineProperty : function (e, t, n) {
      if (r(e), t = i(t, !0), r(n), o)try {
        return s(e, t, n)
      } catch (e) {
      }
      if ("get" in n || "set" in n)throw TypeError("Accessors not supported!");
      return "value" in n && (e[t] = n.value), e
    }
  }, {33: 33, 39: 39, 49: 49, 83: 83}], 61: [function (e, t, n) {
    var r = e(60), o = e(33), i = e(68);
    t.exports = e(39) ? Object.defineProperties : function (e, t) {
      o(e);
      for (var n, s = i(t), a = s.length, u = 0; a > u;)r.f(e, n = s[u++], t[n]);
      return e
    }
  }, {33: 33, 39: 39, 60: 60, 68: 68}], 62: [function (e, t, n) {
    var r = e(69), o = e(71), i = e(80), s = e(83), a = e(46), u = e(49), c = Object.getOwnPropertyDescriptor;
    n.f = e(39) ? c : function (e, t) {
      if (e = i(e), t = s(t, !0), u)try {
        return c(e, t)
      } catch (e) {
      }
      if (a(e, t))return o(!r.f.call(e, t), e[t])
    }
  }, {39: 39, 46: 46, 49: 49, 69: 69, 71: 71, 80: 80, 83: 83}], 63: [function (e, t, n) {
    var r = e(80), o = e(64).f, i = {}.toString, s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (e) {
      return s && "[object Window]" == i.call(e) ? function (e) {
        try {
          return o(e)
        } catch (e) {
          return s.slice()
        }
      }(e) : o(r(e))
    }
  }, {64: 64, 80: 80}], 64: [function (e, t, n) {
    var r = e(67), o = e(41).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function (e) {
        return r(e, o)
      }
  }, {41: 41, 67: 67}], 65: [function (e, t, n) {
    n.f = Object.getOwnPropertySymbols
  }, {}], 66: [function (e, t, n) {
    var r = e(46), o = e(82), i = e(75)("IE_PROTO"), s = Object.prototype;
    t.exports = Object.getPrototypeOf || function (e) {
        return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
      }
  }, {46: 46, 75: 75, 82: 82}], 67: [function (e, t, n) {
    var r = e(46), o = e(80), i = e(34)(!1), s = e(75)("IE_PROTO");
    t.exports = function (e, t) {
      var n, a = o(e), u = 0, c = [];
      for (n in a)n != s && r(a, n) && c.push(n);
      for (; t.length > u;)r(a, n = t[u++]) && (~i(c, n) || c.push(n));
      return c
    }
  }, {34: 34, 46: 46, 75: 75, 80: 80}], 68: [function (e, t, n) {
    var r = e(67), o = e(41);
    t.exports = Object.keys || function (e) {
        return r(e, o)
      }
  }, {41: 41, 67: 67}], 69: [function (e, t, n) {
    n.f = {}.propertyIsEnumerable
  }, {}], 70: [function (e, t, n) {
    var r = e(43), o = e(36), i = e(44);
    t.exports = function (e, t) {
      var n = (o.Object || {})[e] || Object[e], s = {};
      s[e] = t(n), r(r.S + r.F * i(function () {
          n(1)
        }), "Object", s)
    }
  }, {36: 36, 43: 43, 44: 44}], 71: [function (e, t, n) {
    t.exports = function (e, t) {
      return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
  }, {}], 72: [function (e, t, n) {
    t.exports = e(47)
  }, {47: 47}], 73: [function (e, t, n) {
    var r = e(52), o = e(33), i = function (e, t) {
      if (o(e), !r(t) && null !== t)throw TypeError(t + ": can't set as prototype!")
    };
    t.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, n, r) {
        try {
          (r = e(37)(Function.call, e(62).f(Object.prototype, "__proto__").set, 2))(t, []), n = !(t instanceof Array)
        } catch (e) {
          n = !0
        }
        return function (e, t) {
          return i(e, t), n ? e.__proto__ = t : r(e, t), e
        }
      }({}, !1) : void 0), check: i
    }
  }, {33: 33, 37: 37, 52: 52, 62: 62}], 74: [function (e, t, n) {
    var r = e(60).f, o = e(46), i = e(87)("toStringTag");
    t.exports = function (e, t, n) {
      e && !o(e = n ? e : e.prototype, i) && r(e, i, {configurable: !0, value: t})
    }
  }, {46: 46, 60: 60, 87: 87}], 75: [function (e, t, n) {
    var r = e(76)("keys"), o = e(84);
    t.exports = function (e) {
      return r[e] || (r[e] = o(e))
    }
  }, {76: 76, 84: 84}], 76: [function (e, t, n) {
    var r = e(45), o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    t.exports = function (e) {
      return o[e] || (o[e] = {})
    }
  }, {45: 45}], 77: [function (e, t, n) {
    var r = e(79), o = e(38);
    t.exports = function (e) {
      return function (t, n) {
        var i, s, a = String(o(t)), u = r(n), c = a.length;
        return u < 0 || u >= c ? e ? "" : void 0 : (i = a.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? a.charAt(u) : i : e ? a.slice(u, u + 2) : s - 56320 + (i - 55296 << 10) + 65536
      }
    }
  }, {38: 38, 79: 79}], 78: [function (e, t, n) {
    var r = e(79), o = Math.max, i = Math.min;
    t.exports = function (e, t) {
      return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
    }
  }, {79: 79}], 79: [function (e, t, n) {
    var r = Math.ceil, o = Math.floor;
    t.exports = function (e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? o : r)(e)
    }
  }, {}], 80: [function (e, t, n) {
    var r = e(50), o = e(38);
    t.exports = function (e) {
      return r(o(e))
    }
  }, {38: 38, 50: 50}], 81: [function (e, t, n) {
    var r = e(79), o = Math.min;
    t.exports = function (e) {
      return e > 0 ? o(r(e), 9007199254740991) : 0
    }
  }, {79: 79}], 82: [function (e, t, n) {
    var r = e(38);
    t.exports = function (e) {
      return Object(r(e))
    }
  }, {38: 38}], 83: [function (e, t, n) {
    var r = e(52);
    t.exports = function (e, t) {
      if (!r(e))return e;
      var n, o;
      if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e)))return o;
      if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e)))return o;
      if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e)))return o;
      throw TypeError("Can't convert object to primitive value")
    }
  }, {52: 52}], 84: [function (e, t, n) {
    var r = 0, o = Math.random();
    t.exports = function (e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + o).toString(36))
    }
  }, {}], 85: [function (e, t, n) {
    var r = e(45), o = e(36), i = e(57), s = e(86), a = e(60).f;
    t.exports = function (e) {
      var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
      "_" == e.charAt(0) || e in t || a(t, e, {value: s.f(e)})
    }
  }, {36: 36, 45: 45, 57: 57, 60: 60, 86: 86}], 86: [function (e, t, n) {
    n.f = e(87)
  }, {87: 87}], 87: [function (e, t, n) {
    var r = e(76)("wks"), o = e(84), i = e(45).Symbol, s = "function" == typeof i;
    (t.exports = function (e) {
      return r[e] || (r[e] = s && i[e] || (s ? i : o)("Symbol." + e))
    }).store = r
  }, {45: 45, 76: 76, 84: 84}], 88: [function (e, t, n) {
    "use strict";
    var r = e(32), o = e(55), i = e(56), s = e(80);
    t.exports = e(54)(Array, "Array", function (e, t) {
      this._t = s(e), this._i = 0, this._k = t
    }, function () {
      var e = this._t, t = this._k, n = this._i++;
      return !e || n >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]])
    }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
  }, {32: 32, 54: 54, 55: 55, 56: 56, 80: 80}], 89: [function (e, t, n) {
    var r = e(43);
    r(r.S, "Object", {create: e(59)})
  }, {43: 43, 59: 59}], 90: [function (e, t, n) {
    var r = e(43);
    r(r.S + r.F * !e(39), "Object", {defineProperty: e(60).f})
  }, {39: 39, 43: 43, 60: 60}], 91: [function (e, t, n) {
    var r = e(82), o = e(66);
    e(70)("getPrototypeOf", function () {
      return function (e) {
        return o(r(e))
      }
    })
  }, {66: 66, 70: 70, 82: 82}], 92: [function (e, t, n) {
    var r = e(43);
    r(r.S, "Object", {setPrototypeOf: e(73).set})
  }, {43: 43, 73: 73}], 93: [function (e, t, n) {
  }, {}], 94: [function (e, t, n) {
    "use strict";
    var r = e(77)(!0);
    e(54)(String, "String", function (e) {
      this._t = String(e), this._i = 0
    }, function () {
      var e, t = this._t, n = this._i;
      return n >= t.length ? {value: void 0, done: !0} : (e = r(t, n), this._i += e.length, {value: e, done: !1})
    })
  }, {54: 54, 77: 77}], 95: [function (e, t, n) {
    "use strict";
    var r = e(45), o = e(46), i = e(39), s = e(43), a = e(72), u = e(58).KEY, c = e(44), l = e(76), d = e(74), f = e(84), p = e(87), m = e(86), h = e(85), v = e(42), _ = e(51), g = e(33), y = e(80), b = e(83), w = e(71), x = e(59), k = e(63), S = e(62), O = e(60), C = e(68), M = S.f, P = O.f, T = k.f, j = r.Symbol, E = r.JSON, N = E && E.stringify, F = "prototype", I = p("_hidden"), L = p("toPrimitive"), U = {}.propertyIsEnumerable, A = l("symbol-registry"), G = l("symbols"), D = l("op-symbols"), R = Object[F], q = "function" == typeof j, z = r.QObject, B = !z || !z[F] || !z[F].findChild, H = i && c(function () {
      return 7 != x(P({}, "a", {
          get: function () {
            return P(this, "a", {value: 7}).a
          }
        })).a
    }) ? function (e, t, n) {
      var r = M(R, t);
      r && delete R[t], P(e, t, n), r && e !== R && P(R, t, r)
    } : P, W = function (e) {
      var t = G[e] = x(j[F]);
      return t._k = e, t
    }, V = q && "symbol" == typeof j.iterator ? function (e) {
      return "symbol" == typeof e
    } : function (e) {
      return e instanceof j
    }, J = function (e, t, n) {
      return e === R && J(D, t, n), g(e), t = b(t, !0), g(n), o(G, t) ? (n.enumerable ? (o(e, I) && e[I][t] && (e[I][t] = !1), n = x(n, {enumerable: w(0, !1)})) : (o(e, I) || P(e, I, w(1, {})), e[I][t] = !0), H(e, t, n)) : P(e, t, n)
    }, Q = function (e, t) {
      g(e);
      for (var n, r = v(t = y(t)), o = 0, i = r.length; i > o;)J(e, n = r[o++], t[n]);
      return e
    }, $ = function (e) {
      var t = U.call(this, e = b(e, !0));
      return !(this === R && o(G, e) && !o(D, e)) && (!(t || !o(this, e) || !o(G, e) || o(this, I) && this[I][e]) || t)
    }, Y = function (e, t) {
      if (e = y(e), t = b(t, !0), e !== R || !o(G, t) || o(D, t)) {
        var n = M(e, t);
        return !n || !o(G, t) || o(e, I) && e[I][t] || (n.enumerable = !0), n
      }
    }, K = function (e) {
      for (var t, n = T(y(e)), r = [], i = 0; n.length > i;)o(G, t = n[i++]) || t == I || t == u || r.push(t);
      return r
    }, X = function (e) {
      for (var t, n = e === R, r = T(n ? D : y(e)), i = [], s = 0; r.length > s;)!o(G, t = r[s++]) || n && !o(R, t) || i.push(G[t]);
      return i
    };
    q || (a((j = function () {
      if (this instanceof j)throw TypeError("Symbol is not a constructor!");
      var e = f(arguments.length > 0 ? arguments[0] : void 0), t = function (n) {
        this === R && t.call(D, n), o(this, I) && o(this[I], e) && (this[I][e] = !1), H(this, e, w(1, n))
      };
      return i && B && H(R, e, {configurable: !0, set: t}), W(e)
    })[F], "toString", function () {
      return this._k
    }), S.f = Y, O.f = J, e(64).f = k.f = K, e(69).f = $, e(65).f = X, i && !e(57) && a(R, "propertyIsEnumerable", $, !0), m.f = function (e) {
      return W(p(e))
    }), s(s.G + s.W + s.F * !q, {Symbol: j});
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Z.length > ee;)p(Z[ee++]);
    for (var te = C(p.store), ne = 0; te.length > ne;)h(te[ne++]);
    s(s.S + s.F * !q, "Symbol", {
      for: function (e) {
        return o(A, e += "") ? A[e] : A[e] = j(e)
      }, keyFor: function (e) {
        if (!V(e))throw TypeError(e + " is not a symbol!");
        for (var t in A)if (A[t] === e)return t
      }, useSetter: function () {
        B = !0
      }, useSimple: function () {
        B = !1
      }
    }), s(s.S + s.F * !q, "Object", {
      create: function (e, t) {
        return void 0 === t ? x(e) : Q(x(e), t)
      },
      defineProperty: J,
      defineProperties: Q,
      getOwnPropertyDescriptor: Y,
      getOwnPropertyNames: K,
      getOwnPropertySymbols: X
    }), E && s(s.S + s.F * (!q || c(function () {
        var e = j();
        return "[null]" != N([e]) || "{}" != N({a: e}) || "{}" != N(Object(e))
      })), "JSON", {
      stringify: function (e) {
        if (void 0 !== e && !V(e)) {
          for (var t, n, r = [e], o = 1; arguments.length > o;)r.push(arguments[o++]);
          return "function" == typeof(t = r[1]) && (n = t), !n && _(t) || (t = function (e, t) {
            if (n && (t = n.call(this, e, t)), !V(t))return t
          }), r[1] = t, N.apply(E, r)
        }
      }
    }), j[F][L] || e(47)(j[F], L, j[F].valueOf), d(j, "Symbol"), d(Math, "Math", !0), d(r.JSON, "JSON", !0)
  }, {
    33: 33,
    39: 39,
    42: 42,
    43: 43,
    44: 44,
    45: 45,
    46: 46,
    47: 47,
    51: 51,
    57: 57,
    58: 58,
    59: 59,
    60: 60,
    62: 62,
    63: 63,
    64: 64,
    65: 65,
    68: 68,
    69: 69,
    71: 71,
    72: 72,
    74: 74,
    76: 76,
    80: 80,
    83: 83,
    84: 84,
    85: 85,
    86: 86,
    87: 87
  }], 96: [function (e, t, n) {
    e(85)("asyncIterator")
  }, {85: 85}], 97: [function (e, t, n) {
    e(85)("observable")
  }, {85: 85}], 98: [function (e, t, n) {
    e(88);
    for (var r = e(45), o = e(47), i = e(56), s = e(87)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < a.length; u++) {
      var c = a[u], l = r[c], d = l && l.prototype;
      d && !d[s] && o(d, s, c), i[c] = i.Array
    }
  }, {45: 45, 47: 47, 56: 56, 87: 87, 88: 88}]
}, {}, [9]), function e(t, n, r) {
  function o(s, a) {
    if (!n[s]) {
      if (!t[s]) {
        var u = "function" == typeof require && require;
        if (!a && u)return u(s, !0);
        if (i)return i(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      var l = n[s] = {exports: {}};
      t[s][0].call(l.exports, function (e) {
        var n = t[s][1][e];
        return o(n || e)
      }, l, l.exports, e, t, n, r)
    }
    return n[s].exports
  }

  for (var i = "function" == typeof require && require, s = 0; s < r.length; s++)o(r[s]);
  return o
}({
  1: [function (e, t, n) {
    "use strict";
    t.exports = function (e) {
      e.renderer.ready(function () {
        var t = document.getElementById("m-sidebar-goal-countdown");
        if (null !== t)var n = m.mount(t, new function (e) {
          return {
            view: function (e) {
              var t = moment.duration(e.timeTillMidnight(), "seconds");
              return m(".sidebar-box.goal-countdown", [m(".countdown-header", [m("span.header-img-container", m("span.header-img")), m("span.header-text", _t("Streak Clock"))]), m(".countdown-body", [m("span.countdown-text", _t("Time left to complete your daily goals")), m("span.countdown-duration", [m("span.time-block", [m("span.time-num", t.get("hours")), m("span.time-text", _t("hours"))]), m("span.time-block", [m("span.time-num", t.get("minutes")), m("span.time-text", _t("mins"))])])]), m(".sidebar-main-btn", m('a.simple[href="/settings/"]', _t("Change timezone")))])
            }, controller: function () {
              this.timeTillMidnight = m.prop(e)
            }
          }
        }(e.data.time_till_midnight)), r = setInterval(function () {
          var e = n.timeTillMidnight();
          e <= 0 ? clearInterval(r) : n.timeTillMidnight(e - 60), m.redraw()
        }, 6e4)
      })
    }
  }, {}], 2: [function (e, t, n) {
    "use strict";
    t.exports = function (e, t, n, r) {
      var o = r("#m-sidebar-leaderboard"), i = t.newLeaderboard({
        endPoint: "/ajax/leaderboard/mempals/",
        fullBoardUrl: "/home/leaderboard/",
        howMany: 5
      });
      t.renderer.ready(function () {
        o.length > 0 && n.mount(o[0], i)
      })
    }
  }, {}], 3: [function (e, t, n) {
    "use strict";
    t.exports = function (e) {
      var t = e(".sidebar-profile .content-stats"), n = e(".js-num", t), r = e(".js-placeholder", t), o = n.css("font-size").replace("px", "");
      e.each(n, function () {
        for (var t = e(this); t.width() > t.parent().width();)o--, n.css("font-size", o + "px")
      }), r.hide(), n.show()
    }
  }, {}], 4: [function (e, t, n) {
    "use strict";
    t.exports = function (e, t, n, r) {
      function o(t) {
        var n = t.getFullYear().toString(), r = (t.getMonth() + 1).toString(), o = t.getDate().toString();
        return e.size(r) < 2 && (r = "0" + r), e.size(o) < 2 && (o = "0" + o), [n + "-" + r + "-" + o]
      }

      var i = {};
      i.analytics_url = n.prop("/home/learning-statistics/"), i.premium_url = n.prop("/premium/?source=dashboard"), i.view = function (s) {
        var a = s.stats();
        return t.user.is_premium ? function (t) {
          if (void 0 !== t) {
            for (var s = i.analytics_url(), a = _t("More"), u = [], c = [], l = new Date, d = o(l), f = function (t) {
              if (!e.size(t))return [0, 0];
              var n = e.values(t), r = e.max(n);
              return [Math.round(.75 * r), Math.round(.5 * r)]
            }(t.streak_data), p = 0; p < 30; p++) {
              var m = void 0 === t.streak_data[d] ? 0 : t.streak_data[d], h = l.getDay(), v = r.getWeekdayName(h), _ = l.getDate(), g = r.getMonthName(l.getMonth()), y = _t("__events__ events on __day__ __num__, __month__", {
                events: m,
                day: v,
                num: _,
                month: g
              }), b = "";
              m > f[0] ? b = "high" : m > f[1] ? b = "average" : m > 0 && (b = "low");
              var w = n("span.cell", {"data-date": d, "data-events": m, title: y, class: b});
              c.unshift({dayOfWeek: h, content: w}), l.setDate(_ - 1), d = o(l)
            }
            var x = [], k = [];
            for (u.push(function (e) {
              for (var t = [], o = 0; o < 7; o++) {
                var i = 1 + o, s = i > 6 ? 0 : i, a = n("span.cell.dayInitial", r.getWeekdayName(s, !0));
                t.push(a)
              }
              return [n(".cellWrapper", t)]
            }()); e.size(c);) {
              var S = c.shift();
              if (1 !== S.dayOfWeek) x.push(S.content); else {
                for (; e.size(x) < 7;) {
                  var O = n("span.cell.empty");
                  x.unshift(O)
                }
                k = [n(".cellWrapper", x)], u.push(k), x = [S.content]
              }
            }
            return u.push([n(".cellWrapper", x)]), [n(".sidebar-box.sidebar-premium", n(".premium-header", [n("span.premium-image"), n("span.premium-text", _t("Pro"))]), n(".premium-content", [n(".text", _t("This month's learning graph")), n("a.monthlyStreak", {
              href: s,
              class: "horizontal"
            }, u), n("p.text", _t("Best streak")), n("p.emphasized", _t("__streak__ days", {streak: t.longest_streak})), n("p.text", _t("Last 7 days")), n("p.emphasized", t.time_spent)]), n(".sidebar-main-btn.premium-link", n("a", {
              href: s,
              class: "simple"
            }, a)))]
          }
        }(a) : function (e) {
          var t = _t("dashboard_module_stats_button"), r = {
            href: "#",
            class: "premium-upsell-btn"
          }, o = $("#stats-upsell-modal");
          r.onclick = function () {
            o && o.modal("show")
          };
          var i = n(".sidebar-main-btn.premium-link", n("a", r, t));
          return [n(".sidebar-box.sidebar-premium", n(".premium-header", [n("span.premium-image"), n("span.premium-text", _t("dashboard_module_stats_header"))]), n("span.premium-stats-image"), i)]
        }()
      }, i.controller = function () {
        return {stats: n.request({method: "GET", url: "/ajax/metrics/dashboard_sidebar_stats/"})}
      }, t.renderer.ready(function () {
        var e = document.getElementById("m-sidebar-premium");
        null !== e && n.mount(e, i)
      })
    }
  }, {}], 5: [function (e, t, n) {
    "use strict";
    !function (t, n, r, o) {
      e(2)(t, n, r, o, Handlebars), e(4)(t, n, r, datetime), e(3)(o), e(1)(n), e(6)(o, "dashboard"), o(document).ready(function () {
        o('*[data-toggle="tooltip"]').tooltip()
      })
    }(_, MEMRISE, m, jQuery)
  }, {1: 1, 2: 2, 3: 3, 4: 4, 6: 6}], 6: [function (e, t, n) {
    "use strict";
    t.exports = function (e, t) {
      var n = e("#promotion-modal");
      n && (n.on("show.bs.modal", function (e) {
        var r = n.data("tracking-name");
        analytics.track("upsell_viewed", {upsell_name: r, source: t})
      }), n.modal("show"))
    }
  }, {}]
}, {}, [5]), function e(t, n, r) {
  function o(s, a) {
    if (!n[s]) {
      if (!t[s]) {
        var u = "function" == typeof require && require;
        if (!a && u)return u(s, !0);
        if (i)return i(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      var l = n[s] = {exports: {}};
      t[s][0].call(l.exports, function (e) {
        var n = t[s][1][e];
        return o(n || e)
      }, l, l.exports, e, t, n, r)
    }
    return n[s].exports
  }

  for (var i = "function" == typeof require && require, s = 0; s < r.length; s++)o(r[s]);
  return o
}({
  1: [function (e, t, n) {
    "use strict";
    !function (e, t, n, r) {
      t.has(r, "dashboard") || (r.dashboard = {}), r.dashboard.UnenrollingManager = e.create({
        initialize: function () {
          this.start_observing()
        }, start_observing: function () {
          this.on_unenrolled = t.bind(this.on_unenrolled, this), t(r.courses).on("unenrolled", this.on_unenrolled)
        }, on_unenrolled: function (e) {
          var t = n('[data-course-id="' + e + '"]');
          t.find("[title]").tooltip("destroy"), t.slideUp(function () {
            n(this).remove()
          })
        }
      })
    }(Class, _, jQuery, MEMRISE)
  }, {}]
}, {}, [1]), function e(t, n, r) {
  function o(s, a) {
    if (!n[s]) {
      if (!t[s]) {
        var u = "function" == typeof require && require;
        if (!a && u)return u(s, !0);
        if (i)return i(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      var l = n[s] = {exports: {}};
      t[s][0].call(l.exports, function (e) {
        var n = t[s][1][e];
        return o(n || e)
      }, l, l.exports, e, t, n, r)
    }
    return n[s].exports
  }

  for (var i = "function" == typeof require && require, s = 0; s < r.length; s++)o(r[s]);
  return o
}({
  1: [function (e, t, n) {
    "use strict";
    !function (e, t, n) {
      var r = [1500, 6e3, 2e4];
      t.Goal = function (i, s, a, u, c, l) {
        var d = this;
        this.course_id = i, this.img_url = s, this.course_name = a, this.header_text = l, this.data = u, this.course_complete = c, this.active = !n.isEmpty(u), this.showPopup = function () {
          t.modal.content({
            modalId: "goal-setter-popup",
            showHeader: !1,
            showFooter: !1,
            backdrop: !0,
            keyboard: !0,
            template: "goal-setter",
            seeThru: !1,
            removeOnHidden: !0,
            templateVars: {
              course_id: d.course_id,
              img_url: d.img_url,
              course_name: d.course_name,
              header_text: d.header_text ? d.header_text : _t("Set a daily goal - hit your goal every day to win bonuses!")
            }
          }, function () {
            switch (d.data.goal) {
              case r[0]:
                e(".first").addClass("active");
                break;
              case r[1]:
                e(".second").addClass("active");
                break;
              case r[2]:
                e(".third").addClass("active")
            }
            e(".goal-choice").on("click", function () {
              var t = e(this), n = t.dataAttr("level");
              e(".goal-choice").removeClass("active"), e(".dot").removeClass("active"), t.addClass("active"), e(".dot", t).addClass("active"), d.data.goal = r[n], d.save(), t.find(".main-text").first().text("Saved!").css("color", "rgb(255, 117, 107)")
            }), n.has(t, "garden") && (t.garden.session_params.shown_goal_setter = !0)
          }, this.hiddenCallback)
        }, this.hidePopup = function (r) {
          "dashboard" === o.context && t.dashboard.cardsComponent.setGoal(this.course_id, this.data), e("#goal-setter-popup").fadeOut(400, function () {
            e(this).remove(), e(".modal-backdrop").remove(), n.isFunction(r) && r()
          }), e(".modal").hide()
        }, this.off = function () {
          var t = this;
          m.startComputation(), e.ajax({
            url: "/ajax/course/daily-goal/",
            type: "POST",
            data: {course_id: t.course_id},
            success: function () {
              t.active = !1, t.data.points = 0, t.data.goal = 0, t.data.streak = 0, "during-session" === o.context ? t.hidePopup(t.redirectHome) : t.hidePopup(t.render), m.endComputation()
            }
          })
        }, this.save = function () {
          var t = this, n = {course_id: t.course_id, daily_goal: t.data.goal};
          m.startComputation(), e.ajax({
            url: "/ajax/course/daily-goal/", type: "POST", data: n, success: function (e) {
              void 0 === t.data.points && (t.data.points = 0), void 0 === t.data.goal && (t.data.goal = 0), t.active = t.data.goal > 0, t.data.goal_achieved = e.goal_achieved, t.data.streak = e.streak, "during-session" === o.context ? t.hidePopup(t.redirectHome) : "end-session" === o.context ? t.hidePopup(function () {
                t.render(), o.animate_bar(t.course_id)
              }) : t.hidePopup(t.render), m.endComputation()
            }
          })
        }, this.redirectHome = function () {
          window.onbeforeunload = null, window.location.href = "/home"
        }, this.render = function () {
          if ("end-session" === o.context) {
            var n = e(".course_box .bottom"), r = e(".upper", n), i = e(".progress", n), s = e(".text", r), a = e(".course_points", r), u = e(".edit", r), l = e(".bar", i);
            if (d.active) {
              if (n.addClass("goal-setter-shadow"), 0 === t.garden.session_data.initial_session_points && (r.add(i).add(l).show(), t.goal_setter.animate_bar(t.garden.session_params.course_id)), c) m = _t("Course completed!"), s.text(m), r.addClass("center"), a.add(u).remove(); else if (d.data.goal_achieved) m = _t("Today's goal complete!"), d.data.streak > 0 && (m += "<span class='streak_info'>", m += plural(_t("Current streak: %(count)d day"), _t("Current streak: %(count)d days"), d.data.streak), m += "</span>"), s.html(m), r.addClass("done"), a.add(u).remove(); else {
                var f = e(".pts", n), p = e(".goal", n), m = _t("Today's goal:");
                s.text(m), f.text(d.data.points), p.text(d.data.goal)
              }
              (c || d.data.goal_achieved) && t.garden.session_data.session.goal_points >= d.data.points && l.addClass("notrans")
            } else r.add(i).hide()
          }
        }
      };
      var o = t.goal_setter = {};
      e.extend(!0, t.goal_setter, {
        goals: {}, init: function (e) {
          o.context = e, o.registerEvents()
        }, initFireworks: function () {
          t.fireworks.init(), e("body").append("<div class='fireworks-close-btn js-close-fireworks'>x</div>"), e(".js-close-fireworks").fadeIn(2e3).on("click", function () {
            t.fireworks.closeFireworks()
          })
        }, animate_bar: function (r) {
          if (void 0 !== t.garden.session_data.session.goal_points) {
            var o = this.goals[r].data, i = this.goals[r].course_complete, s = e(".course_box .bottom"), a = e(".bar", s), u = e(".sparkle", s);
            if ((i || o.goal_achieved) && t.garden.session_data.session.goal_points < o.goal) a.width("100%"), setTimeout(function () {
              n.include([2, 4, 5, 10], o.streak) && !t.user.is_premium ? (t.shownGoalUpsell = !0, t.goal_setter.initFireworks(), setTimeout(function () {
                t.goal_setter.showPromoPopup(o.streak)
              }, 3e3)) : (u.show(), s.addClass("bounce"))
            }, 2e3); else if (o.points > 0 && o.goal > 0) {
              var c = o.points / o.goal * 100, l = (c > 100 ? 100 : c) + "%";
              a.width(l)
            } else a.hide()
          }
        }, showPromoPopup: function (r) {
          var o = n.include([2, 4, 5], r) ? 20 : 50, i = "?offer=" + t.CONSTANTS.DISCOUNT_CODES[o] + "&upsell_name=streak_upgrade&source=eos&session_type=" + t.garden.getSessionType();
          t.modal.content({
            modalId: "end-session-promo-popup",
            showHeader: !1,
            showFooter: !1,
            backdrop: !1,
            keyboard: !0,
            template: "show-streak-promo",
            seeThru: !1,
            removeOnHidden: !0,
            templateVars: {
              url: "/premium/pay/annual/" + i,
              mainText: _t("Congratulations!"),
              percentage: o,
              subText: _t("You've hit a __numDay__ day goal streak!", {numDay: r})
            },
            shadow: !1,
            fadeTime: "slow"
          }, function () {
            var n = e("#end-session-promo-popup");
            e(".skip", n).on("click", function () {
              t.fireworks.closeFireworks()
            }), e(".btn-promo", n).on("click", function () {
            })
          })
        }, hideModal: function () {
          var t = e("#end-session-promo-popup");
          t.fadeOut(400, function () {
            t.remove()
          })
        }, registerEvents: function () {
          var n = e(document);
          if ("dashboard" === o.context) n.on("click", ".turn-off", function () {
            var t = e(this).data("target");
            o.goals[t].off()
          }); else if ("end-session" === o.context) r = t.garden.session_params.course_id, n.on("click", ".edit", function () {
            o.goals[r].showPopup()
          }), n.on("click", ".turn-off", function () {
            o.goals[r].off()
          }), 0 === t.garden.session_data.initial_session_points && e(".end_of_session .next_btn").on("click", function () {
            o.goals[r].showPopup()
          }); else if ("during-session" === o.context) {
            var r = t.garden.session_params.course_id;
            t.garden.session_params.shown_goal_setter = !1, 0 === t.garden.session_data.initial_session_points && (n.on("click", ".session-exit", function () {
              if (!t.garden.session_params.shown_goal_setter)return o.goals[r].hiddenCallback = function () {
                window.location.href = "/home"
              }, o.goals[r].showPopup(), !1
            }), n.on("click", ".turn-off", function () {
              o.goals[r].off()
            }))
          }
        }
      })
    }(jQuery, MEMRISE, _)
  }, {}]
}, {}, [1]);
//# sourceMappingURL=https://d2rhekw5qr4gcj.cloudfront.net/garden/dist/js/dashboard-880f4db47813.js.map
