function setProperty(settingName, settingValue) {
	var obj = {};
	obj[settingName] = settingValue;
	chrome.storage.sync.set(obj);
}

function setLanguage(language) {
	setProperty("language", language);
	chrome.tabs.reload();
	window.close();
}

function debug(msg) {
	console.log("LEXIKA: " + msg);
}