


// adding custom matchers
beforeEach(function () {

    var path = '';

    if (typeof window.karma === 'undefined') {
        // using for just JASMINE
        path += './spec/fixtures/'
    } else {
        // using JASMINE with KARMA
        path += '/Users/llanese/Sites/wi.mobile/Source/WI.Web/tests/jasmine/spec/fixtures/';
    }

    // The default path is 'spec/javascript/fixtures' fixing path:
    jasmine.getFixtures().fixturesPath = path;

    /*
     http://localhost:9876/Users/llanese/Sites/wi.mobile/Source/WI.Web/tests/jasmine/spec/fixtures/cookie.html
     */


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


describe('Testing external libs are loaded:', function () {

    it('jquery.js library is loaded', function () {
        expect(window.$).toBeDefined();
    });

    it('yepnope.js is loaded', function () {
        expect(window.yepnope).toBeDefined();
    });

    it('Swiper plugin is loaded', function(){
        expect(window.Swiper).toBeDefined();
    });

    xit('widthdetector plugin is loaded', function(){
        expect(window.WMS.debounce).toBeDefined();
    });

    it('fetch_grid plugin is loaded', function(){
        expect(window.WMS.fetchGrid).toBeDefined();
    });

});


describe('Testing WMS libs are loaded:',function(){

    it('core.js is loaded', function () {
        expect(window.WMS).toBeDefined();
    });

    it('fetch_grid is loaded',function(){
        expect(window.WMS.fetchGrid).toBeDefined();
    });

});


describe('Testing core.js Object structure:', function () {


    it("WMS.features.svgCapable() object must be defined", function () {
        expect(window.WMS.features.svgCapable).toBeDefined();
    });

    it("WMS.features.online object must be defined", function () {
        expect(WMS.features.online).toBeDefined();
    });

    it("WMS.features.jsActivated() object must be defined", function () {
        expect(window.WMS.features.jsActivated).toBeDefined();
    });

    it("WMS.navCollapse() object must be defined", function () {
        expect(window.WMS.navCollapse).toBeDefined();
    });

    it("WMS.AddEventListenerLogo() object must be defined", function () {
        expect(window.WMS.AddEventListenerLogo).toBeDefined();
    });

    it("WMS.AddEventListenerNav() object must be defined", function () {
        expect(window.WMS.AddEventListenerNav).toBeDefined();
    });

    it("WMS.AddEventListenerNav() object must be defined", function () {
        expect(window.WMS.AddEventListenerNav).toBeDefined();
    });

    it("WMS.AddEventListenerBtn() object must be defined", function () {
        expect(window.WMS.AddEventListenerBtn).toBeDefined();
    });

    it("WMS.removeEventListener() object must be defined", function () {
        expect(window.WMS.removeEventListener).toBeDefined();
    });

    it("WMS.slideRunner() object must be defined", function () {
        expect(window.WMS.slideRunner).toBeDefined();
    });

    it("WMS.scrollTop() object must be defined", function () {
        expect(window.WMS.scrollTop).toBeDefined();
    });


});


describe('Testing gridModule.js Object structure:',function(){

    it('WMS.fetchGrid object must be defined',function(){
        expect(window.WMS.fetchGrid).toBeDefined();
    });

    it("WMS.initBase object must be defined", function () {
        expect(window.WMS.initBase).toBeDefined();
    });

    it("WMS.initGrid object must be defined", function () {
        expect(window.WMS.initGrid).toBeDefined();
    });

    it('WMS.accordionInit object must be defined',function(){
        expect(window.WMS.accordionInit).toBeDefined();
    });

});


describe('Testing widthdetector.js Object structure:',function(){

    xit('WMS.calc() object must be defined',function(){
        expect(window.WMS.calc).toBeDefined();
    });

    xit('WMS.debounce() object must be defined',function(){
        expect(window.WMS.debounce).toBeDefined();
    });

    it('WMS.windowWidth() object must be defined',function(){
        expect(window.WMS.windowWidth).toBeDefined();
    });

    it('WMS.windowHeight() object must be defined',function(){
        expect(window.WMS.windowHeight).toBeDefined();
    });

    xit('WMS.parseImg() object must be defined',function(){
        expect(window.WMS.parseImg).toBeDefined();
    });

});


describe('Testing HASH from CMS:', function () {

    var path ='';
    if (typeof window.karma === 'undefined') {
        // using for just JASMINE
        path += './spec/fixtures/'
    } else {
        // using JASMINE with KARMA
        path += '/Users/llanese/Sites/wi.mobile/Source/WI.Web/tests/jasmine/spec/fixtures/';
    }
    // The default path is 'spec/javascript/fixtures' fixing path:
    jasmine.getFixtures().fixturesPath = path;

    /*
     http://localhost:9876/Users/llanese/Sites/wi.mobile/Source/WI.Web/tests/jasmine/spec/fixtures/cookie.html
     */

    var fixture = readFixtures('/Users/llanese/Sites/wi.mobile/Source/WI.Web/tests/jasmine/spec/fixtures/' + 'video.html');


    for(i=0; i<3;i++) {

        it("Validating the HASH:" + i, function(){

            expect(fixture).toContain('script');
            expect( $(fixture).find("script").eq(i).toBeDefined )

        });

    }

});


describe('Testing screen calculations', function () {

    xit ('calc on Small must be true',function(){
        // based on boolean: if medium=1 works <=> small=0
        expect(WMS.calc()).toBe('small')

    });

});

xdescribe('Validate CSS selectors',function(){

    // no using fixture
    beforeEach(function(){
        elem = $('<section id="full-content">' +
            '<section id="promotion"></section>' +
            '</article>');
    });

    it('test css ids selectors',function(){
       expect(elem).toBe("#full-content")
    });


    it('detect whether an element has section',function(){
      expect(elem).toContain('section')
    });


});


xdescribe('Validation forms', function () {

    // TODO: replace for WebRegistration.html = not is empty!
    var input = $('<input value="val" class="caca" />');

    it ('should detect if an input has a value ',function(){
        expect(input).toHaveValue('val');
    });

    it ('forms cannot be empty', function(){
        expect( $('.caca') ).not.toBe('');
    });

});


xdescribe("NAV functionality (testing fixture)", function () {

    beforeEach(function(){
        jasmine.getFixtures().load('video.html');
    });

    it('Test "click_nav" exist on DOM', function(){
        var node=document.getElementById('click_nav');
        expect(node).not.toBe(null);
    });

    it('Testing position right',function(){
        var test = document.getElementById('click_nav'),
            r = window.getComputedStyle(test, null).getPropertyValue("right");
        expect(r).toBe('5px');
    });


    it('NAV start no-collapse',function(){
        var test = document.getElementById('full-content'),
            m = window.getComputedStyle(test, null).getPropertyValue("top");
        expect(m).toBe('0px');
    });


    xit('NAV clicked and expanded',function(){
        // we are NOT going to execute the script.js unless we use .andCallThrough()
        spyOn(WMS, 'navCollapse').andCallThrough();

        // execute the method()
        WMS.navCollapse();
        expect(WMS.navCollapse).toHaveBeenCalled();

        waitsFor(4);

        var test = document.getElementById('full-content'),
            m = window.getComputedStyle(test, null).getPropertyValue("top");

        expect(m).toBe("0px");

    });

});



xdescribe('Testing attributes elements from the framework on the pages:', function () {

    describe('testing pages attributes: ', function () {

        it('validate specific number of emailRegistration.html:', function () {
            loadFixtures("emailRegistration.html");

            expect($("#header").length).toBe(1);
            expect($("#full-content").length).toBe(1);
            expect($("footer").length).toBe(1);
        });


        it('validate specific number of index.html', function () {
            loadFixtures("index.html");

            expect($("#header").length).toBe(1);
            expect($("#full-content").length).toBe(1);
            expect($("footer").length).toBe(1);
        });


        it('validate specific number of cookie.html', function () {
            loadFixtures("cookie.html");

            expect( $(" #header").length).toBe(1);
            expect($("footer").length).toBe(1);
        });


        it('validate specific number of privacy.html', function () {
            loadFixtures("privacy.html");

            expect( $(" #header").length).toBe(1);
            expect($("footer").length).toBe(1);
        });


        it('validate specific number of terms.html', function () {
            loadFixtures("terms.html");

            expect( $(" #header").length).toBe(1);
            expect($("footer").length).toBe(1);
        });

    });

});




// using fixture
xdescribe('Testing fixtures:', function () {

    it ('fixtures process',function(){

        // Ajax load a fixture and returned as string. No DOM interaction.
        expect(readFixtures).toBeDefined();

        // not load, just passing as String
        expect(setFixtures).toBeDefined();

        // Ajax load and appended the fixture into the DOM
        expect(loadFixtures).toBeDefined();

    });

    it("load fixtures from a file:",function(){

        loadFixtures('video.html');
        expect( $("#full-content") ).toExist();

    });

    it("read fixture without appending to DOM:",function(){

        var fixture = readFixtures('video.html');
        expect(fixture).toContain('script');
        expect( $(fixture).find("script").eq(0).toBeDefined )

    });

    it('receive the fixture as  a parameter',function(){

        setFixtures('<div class="sandbox"></div>');
        expect($('.sandbox')).toExist();

    });


    // sandbox helpers function
    it('sandbox function',function(){

        expect(sandbox).toBeDefined();
        setFixtures( sandbox({ 'class' : 'some-class' }));
        expect( $('.some-class')).toExist();

        // REMOVE: don't use console.log
        var n = sandbox();
        console.log(n.attr('id'));
        console.log(n);



    });



});



// ask yourself: how and when we will use them
// spy: replaces the function it is spying on. When spying something you don't execute it.
xdescribe('Testing spies', function () {


    it ('testing spies 2',function(){
        // .andCallThrough()
        // we are NOT going to execute the script.js unless we use .andCallThrough()
        spyOn(myObj, 'someMethod').andCallThrough();

        myObj.someMethod();
        expect(myObj.someMethod).toHaveBeenCalled();
        // expect(myObj.someMethod()).toBe('hello');
    });

    it ('testing spies 3',function(){
        // .andReturn() mandatory string return
        spyOn(myObj, 'someMethod').andReturn('hello');
        expect(myObj.someMethod()).toBe('hello');
    });

    it ('testing spies 4',function(){
        // .andCallFake() mandatory function return
        spyOn(myObj, 'someMethod').andCallFake(function(){
            return 'hello';
        });
        expect(myObj.someMethod()).toBe('hello');
    });

    it('',function(){
        // we replace all ajax call. We are not going to run them.
        spyOn($, 'ajax');

        setFixtures( sandbox() );

        // this is what we do instead
        $('#sandbox').asyncCall();

        // we manually trigger the success
        $.ajax.mostRecentCall.args[0].success('<li>test1</li><li>test2</li>');

        // validate the success
        expect( $('#sandbox').find('li').length).toBe(2);
    });

});




describe("email capture submit form", function() {

    beforeEach(function() {
        var fixture = readFixtures('emailRegistration.html');
    });


    xdescribe("toHaveBeenTriggered", function() {

        it("was clicked", function() {
            var form = $('.free-play');
            var button =  $('[name="send"]');

            var spyEvent = spyOnEvent( $('.free-play'), "click");
            expect(spyEvent).not.toHaveBeenTriggered();


            $('.free-play').click();
            expect(spyEvent).toHaveBeenTriggered();
        });

    });


    xit("should bind form submit to button", function() {

        var form = $('.free-play');
        var button =  $('[name="send"]');
        var click = jQuery.Event("click", { target: button });

        // submit is not going to happen
        var spyEvent = spyOnEvent( $('[name="send"]' ), 'click');
        $('[name="send"]').click();


        expect('click').toHaveBeenTriggeredOn( $('[name="send"]') )
        expect(spyEvent).toHaveBeenTriggered()

    });

});


describe('Validating AddEventListenerLogo:',function(){

    it('AddEventListenerLogo receive an element:',function(){
        expect(window.WMS.AddEventListenerLogo).toBeDefined();
    });

});


describe("RWD Testing carousel measures:", function () {

    // navigator or navigator.userAgent
    beforeEach(function(){
        // The default path is 'spec/javascript/fixtures' fixing path:
        var fixture = readFixtures('/Users/llanese/Sites/wi.mobile/Source/WI.Web/tests/jasmine/spec/fixtures/' + 'index.html');
    });

    //jasmine.getFixtures().load('index.html');
    if (window.matchMedia('screen and (max-width:768px)').matches || navigator.userAgent.match(/iPhone/i) || (navigator.userAgent.match(/iPod/i)) ) {

        it('Testing RWD full-content functionality on SMALL environments', function () {
            var S = window.getComputedStyle(document.querySelector('.s-container'), "").getPropertyValue("height");
            expect(S).toBe('130px');
        })

    }

    if (window.matchMedia('screen and (min-width:768px)').matches || navigator.userAgent.match(/iPad/i) ){

        xit('Testing RWV full-content functionality on MEDIUM environments', function () {
            var M = window.getComputedStyle(document.querySelector('.s-container'), "").getPropertyValue("height");
            expect(M).toBe('320px');
        })

    }

});



// TODO: use the getCSSProperties from blog
describe("RWD Testing nav CSS functionality:", function () {

    // navigator or navigator.userAgent
    beforeEach(function(){
        // The default path is 'spec/javascript/fixtures' fixing path:
        var fixture = readFixtures('/Users/llanese/Sites/wi.mobile/Source/WI.Web/tests/jasmine/spec/fixtures/' + 'index.html');
    });

    if (window.matchMedia('screen and (max-width:768px)').matches || navigator.userAgent.match(/iPhone/i) || (navigator.userAgent.match(/iPod/i)) ) {

        it('Testing RWD full-content functionality on SMALL environments', function () {
            var test = document.getElementById("full-content"),
                w = window.getComputedStyle(document.querySelector('#full-content'), "").getPropertyValue("top");

                expect(w).toBe('152px');
        })

    }

    if (window.matchMedia('screen and (min-width:768px)').matches || navigator.userAgent.match(/iPad/i) ){

        xit('Testing RWV full-content functionality on MEDIUM environments', function () {
            var test = document.getElementById("full-content"),
                w = window.getComputedStyle(document.querySelector('#full-content'), "").getPropertyValue("top");

            expect(w).toBe('0px');
        })

    }

});


