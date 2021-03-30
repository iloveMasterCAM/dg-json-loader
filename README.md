## 说明

# 注意事项

该 loader 需要配合 dg-vue-loader 一起使用

# 为什么写这个 loader

在做国际化的实际开发中，经常会写类似这种 代码 $t("xxx.xxx"), 导致整个页面看不到一句中文，很多时候我是靠中文定位，问题位置的，
所有就想替换成中文，哈哈哈哈。
最终会成 $t('SHOU3_YE4.YONG4_HU4_FEN1_ZU3')

# vue3 的配置

vue.config.js

```

module.exports = {
	chainWebpack: (config) => {
		config.module
			.rule("dgjson")
			.test(/\.json$/)
			.use("dg-json-loader")
			.loader("dg-json-loader")
			.end();
	},
};





```
