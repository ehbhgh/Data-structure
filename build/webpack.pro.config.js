const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//在每次成功构建后清空dist目录
module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}