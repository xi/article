(function() {
	"use strict";

	var article = document.querySelector('[itemprop=articleBody]') ||
		document.querySelector('.article-body');

	if (article) {
		chrome.runtime.sendMessage('showPageAction');
	}

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request === 'stripArticle' && sender) {
			document.body.innerHTML = article.innerHTML;
		}
	});
})();
