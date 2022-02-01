/*global QUnit*/

sap.ui.define([
	"zam_test/controller/zam_test.controller"
], function (Controller) {
	"use strict";

	QUnit.module("zam_test Controller");

	QUnit.test("I should test the zam_test controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
