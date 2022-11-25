const fs = require('fs')

if (fs.existsSync('../hexo/package.json')){
  const version = JSON.parse(fs.readFileSync('../hexo/package.json')).version
  if (version.split('.')[0] === '5') {
    const oldConfigPath = '../../_config.old.yml'
    const configPath = '../../_config.yet-the-books-custom.yml'
    if (!fs.existsSync(configPath) && !fs.existsSync(oldConfigPath)) { // 根目录下不存在任何配置文件
      fs.writeFileSync(configPath, fs.readFileSync('./_config.yml'))
    }
    if (fs.existsSync(configPath)){ // 已有配置文件
      fs.writeFileSync( '../../_config.new.yml', fs.readFileSync('./_config.yml'))
    }
    fs.unlinkSync('./_config.yml')
  }
}

// 借鉴自 https://github.com/HCLonely/hexo-theme-webstack/blob/master/move_config.js