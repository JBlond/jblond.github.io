jQuery.noConflict();
jQuery(document).ready(function () {
	"use strict";
	jQuery.ajax({
		type: 'GET',
		url: 'https://api.github.com/users/jblond/repos',
		encoding: 'UTF-8',
		success: function (msg) {
			jQuery(msg).each(function () {
				jQuery(".repos").append('<p><a href="' +
					jQuery(this)[0].html_url +'">' +
					jQuery(this)[0].name + '</a> ' +
					'<a href="' + jQuery(this)[0].clone_url + '" type="button" class="btn btn-clone">Clone https</a> '	+
					'<a href="ssh://' + jQuery(this)[0].ssh_url + '" type="button" class="btn btn-clone">Clone ssh</a> ' +
					'<br><code>' +
					jQuery(this)[0].description +
					'</code> '+
					'</p><hr>');
				window.console.log(jQuery(this)[0].fork);
			});
		}
	});
});
