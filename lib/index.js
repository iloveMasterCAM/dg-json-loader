const pinyin = require("node-pinyin");

function formatPinyin(source) {
	var result = {};
	let parentName = "";
	function main(jsons) {
		for (var key in jsons) {
			if (!(jsons[key] instanceof Object)) {
				let name = isEn(key);
				if (parentName) {
					result[parentName][name] = jsons[key];
				} else {
					result[name] = jsons[key];
				}
			} else {
				parentName = isEn(key);
				jsons[parentName] = jsons[key];
				result[parentName] = {};
				main(jsons[parentName]);
			}
		}
	}
	main(source);
	return JSON.stringify(result);
}

function isEn(key) {
	let reg = /^[\u4e00-\u9fa5]+$/;
	let name = key;
	reg.test(key) && (name = py(key));
	return name;
}

function py(key) {
	let _name = pinyin(key, {
		style: "toneWithNumber",
	})
		.map((el) => {
			return el[0].toUpperCase();
		})
		.join("_");
	return _name;
}
module.exports = function (source) {
	return formatPinyin(JSON.parse(source));
};
