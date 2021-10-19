const { expect } = require("chai");
require("chai").should();
const { expectRevert } = require("@openzeppelin/test-helpers");
const Tweet = artifacts.require("Tweet");
contract("SportTweet", function ([user0]) {
	beforeEach(async () => {
		this.SportTweet = await Tweet.new();
	});

	describe("Creating tweet", () => {
		it("should emit an event and create a tweet", async () => {
			await this.SportTweet.createSportTweet("Jacques");
		});
	});
    describe("Modifying tweet", () => {
		it("should emit an event and modify a tweet", async () => {
			await this.SportTweet.modifyTweet(0,"Jacques");
		});
	});
    describe("deleting tweet", () => {
		it("should emit an event and delete a tweet", async () => {
			await this.SportTweet.deleteTweet(1);
		});
	});

    describe("get tweet", () => {
		it("should emit an event and display a tweet", async () => {
			test = await this.SportTweet.getListTweet();
            return test;
		});
	});
});
