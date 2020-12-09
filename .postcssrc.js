module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*','!border-bottom', '!border-top', '!border-left', '!border-right', '!border'],// 设置某些元素不需要转换（注： 如border这类属性，需将所有形式都写上）
      selectorBlackList: ['.px-'], // 过滤掉.px-开头的class，不进行rem转换
      // minPixelValue: 13 // 小于13的都不会转换

      // 除了上面三种方式使得某些属性不进行转换外，还可以将属性小写的px改为大写Px（PX）
      // 例如：border: 1Px red solid; 或者border: 1PX red solid;
    }
  }
}
