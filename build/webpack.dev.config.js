module.exports = {
    devtool: 'eval-cheap-module-source-map'
}
//cheap表示忽略source-map列信息
//module定位ts源码，而不是loder转义的js代码
//eval-source-map会将source-map以dataurl打包到文件中