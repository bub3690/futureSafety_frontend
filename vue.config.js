const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    server: {
    	port: 300
    },
    routes: [
        "/",
        "/business/category1",
        "/business/category2",
        "/business/category3",
        "/business/category4",
    ],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      headless:false,
      renderAfterElementExists: '#app',
      renderAfterTime: 60000,
    }),
  }),
];


module.exports = {
	lintOnSave: false,
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'prod') {
		  config.plugins.push(...productionPlugins);
		}
	},
	publicPath:process.env.BASE_URL,
  devServer: {
    disableHostCheck :true,
  }
        //transpileDependencies: ['vuex','axios','@toast-ui/vue-editor']
};
/*
configureWebpack: {
  devServer: {
    disableHostCheck :true,
  }
}
*/