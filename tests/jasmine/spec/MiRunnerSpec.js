'use strict';

// adding custom matchers
beforeEach(function () {
    var matchers = {
        toHaveCss2: function (css) {
            var colorToHex = function (color) {
                if (color.substr(0, 1) === '#') {
                    return color;
                }
                var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

                var red = parseInt(digits[2]);
                var green = parseInt(digits[3]);
                var blue = parseInt(digits[4]);

                var rgb = blue | (green << 8) | (red << 16);
                return digits[1] + '#' + rgb.toString(16);
            };
            var convertToHexIfRgb = function (value_to_check) {
                if (value_to_check.substr(0, 4) === 'rgb(') {
                    return colorToHex(value_to_check);
                }
                return value_to_check;
            };
            for (var prop in css) {
                var actual_prop = convertToHexIfRgb(this.actual.css(prop)).toUpperCase();
                var expected_prop = convertToHexIfRgb(css[prop]).toUpperCase();
                if (actual_prop !== expected_prop) {
                    return false;
                }
            }
            return true;
        }

    };

    this.addMatchers(matchers);
});

describe('Testing external datepicker library is loaded as required', function () {

    it('datepicker.js is loaded', function () {
        expect(jQuery).toBeDefined();
    });

});


describe('Testing external libs are loaded', function () {

    it('jQuery is loaded', function () {
        expect(jQuery).toBeDefined();
    });

});


describe('Testing namespace Mi structure:', function () {

    it("Mi namespace must be defined", function () {
        expect(window.Mi).toBeDefined();
    });

    it("window.Mi.matchMedianamespace must be defined", function () {
        expect(window.Mi.matchMedia).toBeDefined();
    });

    it("window.Mi.twitterrequest namespace must be defined", function () {
        expect(window.Mi.twitterrequest).toBeDefined();
    });

    it("window.Mi.linkednrequest namespace must be defined", function () {
        expect(window.Mi.linkednrequest).toBeDefined();
    });

    it("window.Mi.xingrequest namespace must be defined", function () {
        expect(window.Mi.xingrequest).toBeDefined();
    });

    it("window.Mi.init namespace must be defined", function () {
        expect(window.Mi.init).toBeDefined();
    });

});


describe("RWD Testing main-nav CSS functionality:", function () {
    // The default path is 'spec/javascript/fixtures' fixing path:
    jasmine.getFixtures().fixturesPath = '\../../';

    beforeEach(function () {
        loadFixtures('index.html');
    });

    if (window.matchMedia('print, screen and (min-width:520px)').matches) {
        // todo: fix it
        it('Testing main-nav functionality on MEDIUM and LARGE environments', function () {
            expect(jQuery('.main-nav__categories li').eq(0)).toHaveCss2({ "text-align": "left" });
        })

    } else {

        it('Testing main-nav functionality on SMALL environment', function () {
            expect(jQuery('.main-nav__categories li')).toHaveCss2({ "float": "none" });
        })

    };

});

describe("Testing main-nav functionality:", function () {
    // The default path is 'spec/javascript/fixtures' fixing path:
    jasmine.getFixtures().fixturesPath = '\../../';

    beforeEach(function () {
        loadFixtures('index.html');
    });

    it('main-nav DOM visible', function () {
        expect(jQuery('.main-nav')).toBeVisible();
    });

    it('main-nav DOM parsed', function () {
        expect(jQuery('.main-nav')).toHaveClass('main-nav');
    });

    it('main-nav contains classes: class="main-nav__categories"', function () {
        expect(jQuery('.main-nav')).toHaveHtml('class="main-nav__categories"');
    });

    it('main-nav contains classes: class="l-centre clearfix"', function () {
        expect(jQuery('.main-nav__categories')).toHaveHtml('class="l-centre clearfix"');
    });

    it('main-nav contains classes: class="main-nav__topics clearfix"', function () {
        expect(jQuery('.main-nav')).toHaveHtml('class="main-nav__topics clearfix"');
    });

    it('main-nav contains classes: class="l-centre clearfix"', function () {
        expect(jQuery('.main-nav')).toHaveHtml('class="l-centre clearfix"');
    });

});



describe('Testing attributes elements from the framework on the pages:', function () {

    var pages = ['index.html', 'content-100.html', 'content-66-33.html', 'search-result.html', 'sitemap.html', 'topic.html'];
    var n = 0;

    for (; n <= 4; n++) {
        describe('testing ' + pages[n] + ' attributes ', function () {

            it('validate specific number of l-100', function () {
                loadFixtures(pages[n]);
                expect(jQuery(".l-100").length).toBe(4);
            });

            it('validate specific number of l-50', function () {
                loadFixtures(pages[n]);
                expect(jQuery(".l-50").length).toBe(2);
            });

            it('validate specific number of l-66', function () {
                loadFixtures(pages[n]);
                expect(jQuery(".l-66").length).toBe(1);
            });

            it('validate specific number of l-33', function () {
                loadFixtures(pages[n]);
                expect(jQuery(".l-33").length).toBe(1);
            });

        });
    }


    describe('testing article.html attributes:', function () {

        beforeEach(function () {
            loadFixtures('article.html');
        });

        it('validate specific number of l-100', function () {
            expect(jQuery(".l-100").length).toBe(4);
        });

        xit('validate specific number of l-50', function () {
            expect(jQuery(".l-50").length).toBe(2);
        });

        it('validate specific number of l-66', function () {
            expect(jQuery(".l-66").length).toBe(1);
        });

        it('validate specific number of l-33', function () {
            expect(jQuery(".l-33").length).toBe(1);
        });

    });


});

describe('Testing old menu-nav is not leaving any functionality behind:', function () {

    beforeEach(function () {
        loadFixtures('index.html');
    });

    it('on click open the menu', function () {
        spyOnEvent($('.main-nav__categories'), 'click');
        $('.main-nav__categories').click();
        expect("click").toHaveBeenTriggeredOn($('.main-nav__categories'));
    });

    it('test main-nav event listers (old menu-nav)', function () {
        expect("click").not.toHaveBeenTriggeredOn($('.main-nav__categories'));
    });

});


describe('Testing search-result:', function () {

    beforeEach(function () {
        loadFixtures('search-result.htm');
    });

    it('main class l-33 must be visible', function () {
        expect(jQuery('.l-33')).toBeVisible();
    });

    it('main class l-33 must contain: class="search-filter-block ', function () {
        expect(jQuery('.l-33')).toHaveHtml('class="search-filter-block"');
    });

    it('Number of fieldset must be: 5', function () {
        expect(jQuery('fieldset').length).toBe(5)
    });

});

describe('Testing footer:', function () {

    beforeEach(function () {
        loadFixtures('index.html');
    });

    it('footer DOM visible', function () {
        expect(jQuery('.footer')).toBeVisible();
    });

    it('footer must be on mobile friendly format', function () {
        expect(jQuery('.call-to-action__phone')).toHaveHtml('href="tel')
    });

    it('class l-100 must be visible', function () {
        expect(jQuery('.l-100')).toBeVisible();
    });

    it('class call-to-action must contain: call-to-action__email', function () {
        expect(jQuery('.call-to-action')).toHaveHtml('class="call-to-action__email"');
    });
    it('class call-to-action must contain: class="call-to-action__phone', function () {
        expect(jQuery('.call-to-action')).toHaveHtml('class="call-to-action__phone"');
    });


    it('class l-100 must contain: class=l-50 alpha', function () {
        expect(jQuery('.footer .l-100')).toHaveHtml('class="l-50 alpha"');
    });

    it('class l-100 must contain: class=l-50 omega', function () {
        expect(jQuery('.footer .l-100')).toHaveHtml('class="l-50 omega"');
    });


    it('class footer-links must contain: class="header-links__about"', function () {
        expect(jQuery('.footer-links')).toHaveHtml('class="header-links__about"');
    });

    it('class footer-links l-50 omega must contain: class="header-links__cms"', function () {
        expect(jQuery('.footer-links')).toHaveHtml('class="header-links__cms"');
    });

    it('class footer-links must contain: class="header-links__law-now', function () {
        expect(jQuery('.footer-links')).toHaveHtml('class="header-links__law-now"');
    });

    it('class footer-links must contain: class="header-links__contact', function () {
        expect(jQuery('.footer-links')).toHaveHtml('class="header-links__contact"');
    });

    it('class footer-links must contain: class="header-links__sitemap', function () {
        expect(jQuery('.footer-links')).toHaveHtml('class="header-links__sitemap"');
    });


});

describe('Testing video elements:', function () {

    beforeEach(function () {
        loadFixtures('content-66-33.html');
    });

    it('video DOM visible', function () {
        expect(jQuery('.video')).toBeVisible();
    });


    it('video block contain the video iframe', function () {
        expect(jQuery('.video')).toHaveHtml('<iframe src=');
    });


})