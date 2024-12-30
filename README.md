# WX-Hotel


  微信酒店通，一键在手，天下我有！ 通过手机APP、公众号H5 亦或是 微信和支付宝小程序，智能订房、入住、身份认证、门锁控制 和 电器控制 带来顶级智能酒店的体验。

  WeChat hotel access, a key in hand, the world I have!Through mobile APP, public number H5 or WeChat and alipay APP, intelligent room booking, check-in, identity authentication, door lock control and electrical control bring the experience of top smart hotels.


  阿里云服务已到期，暂时没有线上运行的实例；APP、公众号H5、 微信和支付宝小程序都有对应项目代码。

  Aliyun service has expired, and there is no instance of online operation.APP, public number H5, WeChat and alipay applets have corresponding project codes

// 文件路径: generateDirectoryStructure.js

const fs = require('fs');
const path = require('path');

function generateDirectoryStructure(rootDir, outputFile) {
    const writeStream = fs.createWriteStream(outputFile);

    function walkDir(currentPath, indentLevel) {
        const files = fs.readdirSync(currentPath);

        files.forEach(file => {
            const fullPath = path.join(currentPath, file);
            const stats = fs.statSync(fullPath);

            const indent = ' '.repeat(4 * indentLevel);
            if (stats.isDirectory()) {
                writeStream.write(`${indent}${file}/\n`);
                walkDir(fullPath, indentLevel + 1);
            } else {
                writeStream.write(`${indent}${file}\n`);
            }
        });
    }

    walkDir(rootDir, 0);
    writeStream.end();
}

const rootDirectory = '.'; // 你可以在这里指定根目录
const outputFilePath = 'directory_structure.md'; // 输出文件路径

generateDirectoryStructure(rootDirectory, outputFilePath);