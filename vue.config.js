const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false // این دستور باعث میشود که نیازی به استفاه از multiword در component ها نباشد
})
