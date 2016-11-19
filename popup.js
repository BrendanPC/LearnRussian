function setBlacklist(status, permanence) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var url = tabs[0].url;
		var obj = {};
				obj[url] = {blacklist: status, permanent: permanence};
				if(status) {
					chrome.storage.sync.set(obj, function() {
						chrome.tabs.reload();
						window.close();
					});
				}
				else {
					chrome.storage.sync.remove(url, function() {
						chrome.tabs.reload();
						window.close();
					});
				}
	});
}

document.addEventListener('DOMContentLoaded', function() {
	var black_button = document.getElementById('blacklist_button');
	var white_button = document.getElementById('whitelist_button');
	
	black_button.addEventListener('click', function() {
		setBlacklist(true, false);
		
	});
	
	white_button.addEventListener('click', function() {
		setBlacklist(false, false);
	});

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {request: "dictionary"}, function(response) {
			var screen = document.getElementById('dictionary');
			if(response == null) {
				screen.innerHTML += "Something went wrong. Try reloading the page.<br>";
				return;
			}
			
			if(response.blacklist) {
				black_button.style.display = 'none';
				screen.innerHTML += "The extension has been disabled on this page.<br>";
			}
			else {
				white_button.style.display = 'none';
				var dict = response.dictionary;
				var keys = Object.keys(dict).sort();
				for(var i=0;i<keys.length;i++) {
					screen.innerHTML += dict[keys[i]][1] + " \"" + dict[keys[i]][0] + "\"<br>";
				}
			}
		});
	});
});

