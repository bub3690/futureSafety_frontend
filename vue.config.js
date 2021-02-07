const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: [
        "/",
        "/business/category1",
        "/business/category2",
        "/business/category3",
        "/business/category4",
    ],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    }),
  }),
];


module.exports = {
	lintOnSave: false,
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
		  config.plugins.push(...productionPlugins);
		}
	},
	publicPath:'',
	configureWebpack: {
		 devServer: {
			 disableHostCheck :true,
		 }
	}
        //transpileDependencies: ['vuex','axios','@toast-ui/vue-editor']
};
