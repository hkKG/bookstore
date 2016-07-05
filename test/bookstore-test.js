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
 * ping 127.0.0.1
 */
var request = require("superagent");
var chai = require("chai"),
    assert = chai.assert, // JUnit, TDD => with/wihout - optional message
    expect = chai.expect, // BDD
    should = chai.should(); // BDD

describe("### bookstore-test.js ==> http://localhost:3000  ###", function () {
    it("returns status 200 for /", function (done) {
        request
            .get('http://127.0.0.1:3000')
            .end(function (err, res) {
                // we expect error to not exist
                should.not.exist(err);
                // we expect res to exist be an object
                should.exist(res);
                res.should.be.an('object');
                res.status.should.equal(200);
                res.status.should.eql(200);
                //------------------------
                expect(res.status).equal(200);
                assert(res.statusCode == 200);
                done();
            });
    });
});
