/*
	Basic structure of Strata from HTML5 UP html5up.net | @ajlkn
	Free for private and commercial use under CCA 3.0 license (html5up.net/license)
	Significant customizations by Mark Marner-Hausen 
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			//$window.on('load', function() {

				//$('#two').poptrox({
				//	caption: function($a) { return $a.next('h3').text(); },
				//	overlayColor: '#2c2c2c',
				//	overlayOpacity: 0.85,
				//	popupCloserText: '',
				//	popupLoaderText: '',
				//	selector: '.work-item a.image',
				//	usePopupCaption: true,
				//	usePopupDefaultStyling: false,
				//	usePopupEasyClose: false,
				//	usePopupNav: true,
				//	windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				//});

			//});

})(jQuery);

function readmore() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "inline";
	}
  } 


  function readmore_articles() {
    const section = document.querySelector('#two');
    const hiddenArticles = section.querySelectorAll('.work-item.hidden');
    const readMoreContainer = document.querySelector('#readMoreContainer');
    const readLessContainer = document.querySelector('#readLessContainer');

    hiddenArticles.forEach(article => {
        article.classList.remove('hidden');
    });

    readMoreContainer.classList.add('hidden');
    readLessContainer.classList.remove('hidden');
}

function readless_articles() {
    const section = document.querySelector('#two');
    const articles = section.querySelectorAll('.work-item');
    const readMoreContainer = document.querySelector('#readMoreContainer');
    const readLessContainer = document.querySelector('#readLessContainer');

    articles.forEach((article, index) => {
        if (index >= 4 && article.id !== 'readMoreContainer' && article.id !== 'readLessContainer') {
            article.classList.add('hidden');
        }
    });

    readMoreContainer.classList.remove('hidden');
    readLessContainer.classList.add('hidden');
}
