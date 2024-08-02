const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'bootstrap-vue'
  ],
  devServer: {
    proxy: {
      "/api": {	
        target: "http://internal-test-LB-ECS-backend-970728-249192087.ca-central-1.elb.amazonaws.com",
        changeOrigin: true,
        // pathRewrite: { '^/api': '' },
      }
    }
  },
  lintOnSave: false
});
