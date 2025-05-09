var buk = (e) => {
  if (typeof e == "string" || typeof e == "function" || typeof e == "object") {
    return {
      onclick: function (func) {
        const t = document.querySelectorAll(e);
        t.forEach((d) => {
          d.addEventListener('click', func)
        })
      },
      hidden: function (time, func) {
        if (!time) {
          if (typeof e == "object") {
            e.style.display = "none";
          } else {
            const t = document.querySelectorAll(e)
            t.forEach((g) => {
              g.style.display = "none";
            })
          }
        } else {
          setTimeout(() => {
            if (typeof e == "object") {
              e.style.display = "none";
            } else {
              const t = document.querySelectorAll(e)
              t.forEach((g) => {
                g.style.display = "none";
              })
            }
            if (func) {
              (func)();
            }
          }, time)
        }

      },
      showflex: function (time, func) {
        if (!time) {
          if (typeof e == "object") {
            e.style.display = "flex";
          } else {
            const t = document.querySelectorAll(e)
            t.forEach((g) => {
              g.style.display = "flex";
            })
          }
        } else {
          setTimeout(() => {
            if (typeof e == "object") {
              e.style.display = "flex";
            } else {
              const t = document.querySelectorAll(e)
              t.forEach((g) => {
                g.style.display = "flex";
              })
            }
            if (func) {
              (func)();
            }
          }, time)
        }
      },
      showblock: function (time, func) {
        if (!time) {
          if (typeof e == "object") {
            e.style.display = "block";
          } else {
            const t = document.querySelectorAll(e)
            t.forEach((g) => {
              g.style.display = "block";
            })
          }
        } else {
          setTimeout(() => {
            if (typeof e == "object") {
              e.style.display = "block";
            } else {
              const t = document.querySelectorAll(e)
              t.forEach((g) => {
                g.style.display = "block";
              })
            }
            if (func) {
              (func)();
            }
          }, time)
        }
      },
      toggleflex: function (time, func) {
        const ff2 = document.querySelector(e).style.display;
        if (!time) {
          if (ff2 == "block" || ff2 == "flex" || ff2 == "") {
            document.querySelectorAll(e).forEach((b) => {
              b.style.display = "none"
            })
          } else {
            document.querySelectorAll(e).forEach((b) => {
              b.style.display = "flex"
            })
          }
        } else {
          setTimeout(() => {
            if (ff2 == "block" || ff2 == "flex" || ff2 == "") {
              document.querySelectorAll(e).forEach((b) => {
                b.style.display = "none"
              })
            } else {
              document.querySelectorAll(e).forEach((b) => {
                b.style.display = "flex"
              })
            }
            if (func) {
              (func)();
            }
          }, time)
        }
      },
      toggleblock: function (time, func) {
        const ff2 = document.querySelector(e).style.display;
        if (!time) {
          if (ff2 == "block" || ff2 == "flex" || ff2 == "") {
            document.querySelectorAll(e).forEach((b) => {
              b.style.display = "none"
            })
          } else {
            document.querySelectorAll(e).forEach((b) => {
              b.style.display = "block"
            })
          }
        } else {
          setTimeout(() => {
            if (ff2 == "block" || ff2 == "flex" || ff2 == "") {
              document.querySelectorAll(e).forEach((b) => {
                b.style.display = "none"
              })
            } else {
              document.querySelectorAll(e).forEach((b) => {
                b.style.display = "block"
              })
            }
            if (func) {
              (func)();
            }
          }, time)
        }
      },
      style: function (csss) {
        let fl;
        if (typeof e == 'string') {
          fl = document.querySelectorAll(e)
        } else {
          fl = e
        }
        for (let key in csss) {
          if (typeof e == 'string') {
            fl.forEach((b) => {
              b.style[key] = csss[key]
            })
          } else {
            e.style[key] = csss[key]
          }
        }
      },
      ScrollToElement: function () {
        if (typeof e == 'object') {
          e.scrollIntoView({ behavior: "smooth" })
        } else {
          document.querySelectorAll(e).forEach((f) => {
            f.scrollIntoView({ behavior: "smooth" })
          })
        }
      },
      on: function (action, func) {
        if (typeof e == 'object') {
          e.addEventListener(action, func)
        } else {
          document.querySelectorAll(e).forEach((f) => { f.addEventListener(action, func) })
        }
      },
      html: function (htmls) {
        if (typeof e == 'object') {
          e.innerHTML = htmls
        } else {
          document.querySelectorAll(e).forEach((g) => {
            g.innerHTML = htmls
          })

        }
      },
      text: function (htmls) {
        if (typeof e == 'object') {
          e.innerText = htmls
        } else {
          document.querySelectorAll('div').forEach((g) => {
            g.innerText = htmls 
          })

        }
      },
      value: function () {
        if (typeof e == "object") {
          return e.value
        } else {
          return document.querySelector(e).value
        }
      },
      attr: function (name, value) {
        if (!value) {
          if (typeof e == "object") {
            return e.getAttribute(name)
          } else {
            return document.querySelector(e).getAttribute(name)
          }
        } else {
          if (typeof e == "object") {
            return e.setAttribute(name, value)
          } else {
            return document.querySelectorAll(e).forEach((f) => { f.setAttribute(name, value) })
          }
        }
      },
      notdraggable: function () {
        if (typeof e == 'object') {
          e.draggable = false
        } else {
          document.querySelectorAll(e).forEach((f) => {
            f.draggable = false
          })
        }
      },
      followthemouse: function () {
        if (typeof e == 'object') {
          document.addEventListener('mousemove', function (f) {
            let x = f.clientX;
            let y = f.clientY;
            e.style.left = x + "px"
            e.style.right = x + "px"
            e.style.bottom = y + "px"
            e.style.top = y + "px"
          })
        } else {
          document.addEventListener('mousemove', function (f) {
            let x = f.clientX;
            let y = f.clientY;
            document.querySelectorAll(e).forEach((f) => { f.style.left = x + "px" })
            document.querySelectorAll(e).forEach((f) => { f.style.right = x + "px" })
            document.querySelectorAll(e).forEach((f) => { f.style.bottom = y + "px" })
            document.querySelectorAll(e).forEach((f) => { f.style.top = y + "px" })
          })
        }


      },
      addclass: function (classs) {
        if (typeof e == 'object') {
          e.classList.add(classs)
        } else {
          document.querySelectorAll(e).forEach((f) => {
            f.classList.add(classs)
          })
        }
      },
      toggleclass: function (classs) {
        if (typeof e == 'object') {
          e.classList.toggle(classs)
        } else {
          document.querySelectorAll(e).forEach((f) => {
            f.classList.toggle(classs)
          })
        }
      },
      removeclass: function (classs) {
        if (typeof e == 'object') {
          e.classList.remove(classs)
        } else {
          document.querySelectorAll(e).forEach((f) => {
            f.classList.remove(classs)
          })

        }
      },
      remove: function () {
        if (typeof e == 'object') {
          e.remove()
        } else {
          document.querySelectorAll(e).forEach((f) => {
            f.remove()
          })
        }
      },
      file: function () {
        let re;
        if (typeof e == 'object') {
          re = e.files
        } else {
          re = document.querySelector(e).files
        }
        if (!re) {
          throw Error("This Is Not Input Tag OR Not Type Of Files")
        } else {
          return re
        }
      },
      RamdomChar: function (length) {
        if (!length) {
          throw Error("You Can't Tell Length")
        } else {
          let char = "abcdefghijklopqrsurejfncjcefcrcrekkcdjdkdxmm vnbfgtwqu iozalxscdnvbh123456789010".split(' ').join("")
          let resuit = "";
          for (let a = 0; a < length; a++) {
            resuit += char.charAt(Math.floor(Math.random() * char.length))
          }
          if (typeof e == 'object') {
            e.innerHTML = resuit;
          } else {
            document.querySelectorAll(e).forEach((f) => {
              f.innerHTML = resuit;
            })
          }
        }
      }
      ,
      RamdomNum: function (length) {
        if (!length) {
          throw Error("You Can't Tell Length")
        } else {
          let num = Math.floor(Math.random() * length + 1)
          if (typeof e == 'object') {
            e.innerHTML = num;
          } else {
            document.querySelectorAll(e).forEach((f) => {
              innerHTML = num;
            })
          }
        }
      },
      RamdomEmail: function () {
        let emaillist = [
          "joni@gmail.com",
          "joni@yahoo.com",
          "bayeed@gmail.com",
          "bayed@yahoo.com",
          "res@gmail.com",
          "res@yahoo.com",
          "base@gmail.com",
          "base@yahoo.com",
          "wes@gmail.com",
          "wes@yahoo.com",
          "gg@gmail.com",
          "rohid@gmail.com",
          "babay@gmail.com",
          "ramzan@gmail.com",
          "alam@gmail.com",
          "chai@gmail.com",
          "tea@gmail.com",

        ]
        let email = emaillist[Math.floor(Math.random() * emaillist.length)]
        if (typeof e == 'object') {
          e.innerHTML = email;
        } else {
          document.querySelectorAll(e).forEach((f) => {
            f.innerHTML = email;
          })
        }
      },
      Counter: function (value, func) {
        if (typeof value == "string" || typeof value == "number") {
          let co = 0;
          function remove() {
            clearInterval(count)
            if (func) {
              (func)();
            }
          }
          let count = setInterval(function () {
            co += 1
            if (co - 1 == Number(value)) {
              remove()
            }
            else {
              if (typeof e == 'object') {
                e.innerHTML = co
              } else {
                document.querySelectorAll(e).forEach((b) => {
                  b.innerHTML = co
                })
              }
            }
          }, 20)
        } else {
          throw Error(`You Can't Use ${typeof value} In Count Value`)
        }

      }

    }
  } else {
    throw Error(`You Can't Use Element Selector in ${typeof e}`);

  }

}



var useRouter = () => {
  return {
    push: function (url) {
      if (!url || !typeof url == "string") {
        location.replace({}, "", '/')
      } else {
        location.replace({}, "", url)
      }
    },
    reload: function () {
      location.reload()
    },
    pathname: function () {
      return location.pathname
    },
    hashname: function () {
      return location.hash
    },
    port: function () {
      return location.port
    },
    hostname: function () {
      return location.hostname
    },
    host: function () {
      return location.host
    },
    href: function () {
      return location.href
    }

  }

}


