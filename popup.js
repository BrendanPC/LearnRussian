function setBlacklist(status, permanence) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var url = new URL(tabs[0].url);
		
		if(status) {
			var obj = {};
			obj[url.hostname] = {blacklist: status, permanent: permanence};
			chrome.storage.sync.set(obj, function() {
				chrome.tabs.reload();
				window.close();
			});
		}
		else {
			chrome.storage.sync.remove(url.hostname, function() {
				chrome.tabs.reload();
				window.close();
			});
		}
	});
}

function setVisualSetting(settingName, settingValue) {
	var settingButtons = document.getElementsByName(settingName);
	for(var i=0;i<settingButtons.length;i++) {
			settingButtons[i].checked = settingButtons[i].value === settingValue;
	}
}

document.addEventListener('DOMContentLoaded', function() {
	var language_select = document.getElementById('language_select');
	var black_button = document.getElementById('blacklist_button');
	var white_button = document.getElementById('whitelist_button');
	var blackonce_button = document.getElementById('blackonce_button');

	language_select.addEventListener('change', function(event) {
		setLanguage(event.target.value);
	});
	
	black_button.addEventListener('click', function() {
		setBlacklist(true, true);
	});
	
	white_button.addEventListener('click', function() {
		setBlacklist(false, false);
	});
	
	blackonce_button.addEventListener('click', function() {
		setBlacklist(true, false);
	});

	var densitySlider = document.getElementsByName('density')[0];
	var difficultySettings = document.getElementsByName('difficulty');
	document.getElementById('rtiy__settings').addEventListener('change', function() {
    	// for(var i=0;i<densitySettings.length;i++) {
		// 	if(densitySettings[i].checked) density = densitySettings[i].value;
		// }
		var density = densitySlider.value;
		var difficulty;
		for(var i=0;i<difficultySettings.length;i++) {
			if(difficultySettings[i].checked) difficulty = difficultySettings[i].value;
		}
		setProperty('density', density);
		setProperty('difficulty', difficulty);
	});

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {request: "dictionary"}, function(response) {
			var screen = document.getElementById('rtiy__dictionary');
			if(response == null) {
				screen.innerHTML += "Something went wrong. Try reloading the page.<br>";
				return;
			}
			
			if(response.blacklist) {
				black_button.style.display = 'none';
				blackonce_button.style.display = 'none';
				screen.innerHTML += "The extension is currently disabled here.<br>";
			}
			else {
				white_button.style.display = 'none';
				var dict = response.dictionary;
				var keys = Object.keys(dict).sort();
				for(var i=0;i<keys.length;i++) {
					var row = screen.insertRow();
					row.insertCell(0).innerHTML = dict[keys[i]][1];
					row.insertCell(1).innerHTML = dict[keys[i]][0];
					row.insertCell(2).innerHTML = dict[keys[i]][2];
				}
			}
			document.getElementsByName('density')[0].value = response.density;
			setVisualSetting('difficulty', response.difficulty);
		});
	});
});

chrome.storage.sync.get(["language"]).then((result) => {
	document.getElementById('language_select').value = result["language"];
});
