var webpackConfig = require('./config/webpack.test.config.js');

module.exports = function(config) {
  config.set({

    // 基础路径，用在files，exclude属性上
    basePath: '',


    // 测试框架
    // 可用的框架：https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','sinon-chai'],


    // 需要加载到浏览器的文件列表
    files: [
      'test/**/*.spec.js'
    ],


    // 排除的文件列表
    exclude: [
    ],


    // 在浏览器使用之前处理匹配的文件
    // 可用的预处理: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.spec.js': ['webpack']
    },


    //  使用测试结果报告者
    //  可能的值: "dots", "progress"
    //  可用的报告者：https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'spec', 'coverage-istanbul'],


    //  服务端口号
    port: 9876,

    //webpack配置
    webpack: webpackConfig,


    // 启用或禁用输出报告或者日志中的颜色
    colors: true,


    // 日志等级
    // 可能的值: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    //启用或禁用自动检测文件变化进行测试
    autoWatch: true,


    // 测试启动的浏览器
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],


    // 开启或禁用持续集成模式
    // 设置为true, Karma将打开浏览器，执行测试并最后退出
    singleRun: false,


    // 并发级别（启动的浏览器数）
    concurrency: Infinity,

    coverageIstanbulReporter: {
      dir: './coverage',
      reports: ['text-summary', 'html'],
      fixWebpackSourcePaths: true
    },
  })
}
