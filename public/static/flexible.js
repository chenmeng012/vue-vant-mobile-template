;(function (doc, win) {

  var isAndroid = win.navigator.appVersion.match(/android/gi);
  var isIPhone = win.navigator.appVersion.match(/iphone/gi);

  var scale = 1.0;
  var ratio = 1;
  if(isIPhone) {
    if (parseInt(window.devicePixelRatio) == 2) {
      scale *= 0.5;
      ratio *= 2;
    }
    if (parseInt(window.devicePixelRatio) == 3) {
      scale *= (1/3);
      ratio *= 3;
    }
  }

  let metaEl = doc.createElement("meta");
  metaEl.setAttribute('name', 'viewport')
  metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ',' + ' minimum-scale=' + scale + ', width=device-width,' + ' user-scalable=no')
  doc.head.appendChild(metaEl)

  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = (clientWidth / 10)  + 'px'

    // 解决某些浏览器缩放字体大写的问题
    var docElFontSize = docEl.style.fontSize.replace(/px/gi, '')
    var computedFontSize = win.getComputedStyle(docEl)['font-size'].replace(/px/gi, '')
    docElFontSize != computedFontSize && (docEl.style.fontSize = docElFontSize * docElFontSize / computedFontSize + 'px')
  }
  if (!doc.addEventListener) return
  recalc()
  win.addEventListener(resizeEvt, recalc, false)
})(document, window);
