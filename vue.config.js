module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        pathRewrite: { "^/api": "/" }
      }
      // "/api": {
      //   target: "http://localhost:8080/",
      //   pathRewrite: { "^/api": "/mock" }
      // }
    }
  }
}