(function() {
	"use strict";

	var article = document.querySelector('[itemprop=articleBody]') ||
		document.querySelector('.article-body');

	var clearStyles = function() {
		document.querySelectorAll('style,link[rel="stylesheet"]').forEach(function(e) {
			e.remove();
		});

		var attrs = ['style', 'bgcolor', 'color', 'width', 'height', 'face', 'size', 'align', 'border'];
		document.querySelectorAll('*').forEach(function(e) {
			attrs.forEach(function(attr) {
				e.removeAttribute(attr);
			});
		});
	};

	if (article) {
		chrome.runtime.sendMessage('showPageAction');
	}

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request === 'stripArticle' && sender) {
			document.body.innerHTML = article.innerHTML;
			clearStyles();
		}
	});
})();
