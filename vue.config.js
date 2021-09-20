module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/mcdis/'
    : '/',
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/app.scss";`
            }
        }
    }
}