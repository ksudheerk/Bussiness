sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("sdk.sdk-tutorial-frontend.controller.View1", {
//		onInit: function() {
//			var view = this.getView();
//
//			jQuery.get("/businesspartners")
//				.always(function() {
//					var data = [{
//						"BusinessPartner": "1",
//						"FirstName": "John",
//						"LastName": "Doe"
//					}, {
//						"BusinessPartner": "2",
//						"FirstName": "Jane",
//						"LastName": "Roe"
//					}, {
//						"BusinessPartner": "3",
//						"FirstName": "John",
//						"LastName": "Smith"
//					}, {
//						"BusinessPartner": "4",
//						"FirstName": "Carla",
//						"LastName": "Coe"
//					}];
//					var model = new JSONModel(data);
//					view.setModel(model, "businessPartner");
//				});
//		}

onInit: function() {
	var view = this.getView();
 	jQuery.get("/firstapp-application/businesspartners")
		.done(function(data) {
 			var model = new JSONModel(data);
 			view.setModel(model, "businessPartner");
 		});
 }
	});
});