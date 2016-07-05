/**
 *  !!! used as template !!!
 *
 * BDD: Behavior Driven Development
 *
 * Given-When-Then scenarios as test
 *
 * Keywords: mocha, chai, test, bdd, tdd,
 *
 * test anything protocol includes UnitTests and TestHarness
 *
 * TestHarness includes Test-Execution-Engine and Test-Data-Repository
 *
 * semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
 * webapplog.com/tdd
 * chaijs.com/guide/stylis
 * visionmedia.github.io/superagent
 * visionmedia.github.io/superagent/#parsing-respons-bodies
 *
 * expect(1 + 1).to.equal(2);
 */

var expect = require("chai").expect;
var converter = require("../test_app/color_converter");

describe("### chai-test-color-converter.js ###", function () {
    describe("RGB to Hex conversion", function () {
        it("converts the basic colors", function () {
            var redHex = converter.rgbToHex(255, 0, 0);
            var greenHex = converter.rgbToHex(0, 255, 0);
            var blueHex = converter.rgbToHex(0, 0, 255);

            expect(redHex).equal("ff0000");
            expect(greenHex).equal("00ff00");
            expect(blueHex).equal("0000ff");
        });
    });

    describe("Hex to RGB conversion", function () {
        it("converts the basic colors", function () {
            var red = converter.hexToRgb("ff0000");
            var green = converter.hexToRgb("00ff00");
            var blue = converter.hexToRgb("0000ff");

            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
        });
    });
});