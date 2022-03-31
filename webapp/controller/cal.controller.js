sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("demo1.polaris1.controller.cal", {
            onInit: function () {
                var oModel = new JSONModel();
				oModel.setData({
					startDate: new Date("2022", "3", "30", "8", "0"),
					people: [{
						pic: "sap-icon://pharmacy",
						name: "M1123 (V1)",
						role: "Medicinal Product Working Agency",

						appointments: [
							{
								start: new Date("2022", "0", "8", "8", "0"),
								end: new Date("2022", "0", "8", "09", "0"),
								title: "CP-NEW",
								type: "Type02",
                                info:"CP123123123",
								tentative: false
							},
							// {
							// 	start: new Date("2022", "0", "11", "10", "0"),
							// 	end: new Date("2022", "0", "11", "12", "0"),
							// 	title: "Team meeting",
							// 	info: "room 1",
							// 	type: "Type01",
							// 	pic: "sap-icon://sap-ui5",
							// 	tentative: false
							// },
							{
								start: new Date("2022", "0", "12", "11", "30"),
								end: new Date("2022", "0", "12", "13", "30"),
								title: "Lunch",
								info: "canteen",
								type: "Type03",
								tentative: true
							},
							{
								start: new Date("2022", "0", "15", "08", "30"),
								end: new Date("2022", "0", "15", "09", "30"),
								title: "CP-NEW",
                                info:"CP123123123",
								type: "Type02",
								tentative: false
							},
							// {
							// 	start: new Date("2022", "0", "15", "10", "0"),
							// 	end: new Date("2022", "0", "15", "12", "0"),
							// 	title: "Team meeting",
							// 	info: "room 1",
							// 	type: "Type01",
							// 	pic: "sap-icon://sap-ui5",
							// 	tentative: false
							// },
							// {
							// 	start: new Date("2022", "0", "15", "11", "30"),
							// 	end: new Date("2022", "0", "15", "13", "30"),
							// 	title: "Lunch",
							// 	info: "canteen",
							// 	type: "Type03",
							// 	tentative: true
							// },
							// {
							// 	start: new Date("2022", "0", "15", "13", "30"),
							// 	end: new Date("2022", "0", "15", "17", "30"),
							// 	title: "Discussion with clients",
							// 	info: "online meeting",
							// 	type: "Type02",
							// 	tentative: false
							// },
							{
								start: new Date("2022", "0", "16", "04", "00"),
								end: new Date("2022", "0", "16", "22", "30"),
								title: "Discussion of the plan",
								info: "Online meeting",
								type: "Type04",
								tentative: false
							},
							{
								start: new Date("2022", "0", "18", "08", "30"),
								end: new Date("2022", "0", "18", "09", "30"),
								title: "Meeting with the manager",
								type: "Type02",
								tentative: false
							},
							{
								start: new Date("2022", "0", "18", "11", "30"),
								end: new Date("2022", "0", "18", "13", "30"),
								title: "Lunch",
								info: "canteen",
								type: "Type03",
								tentative: true
							},
							{
								start: new Date("2022", "0", "18", "1", "0"),
								end: new Date("2022", "0", "18", "22", "0"),
								title: "Team meeting",
								info: "regular",
								type: "Type01",
								pic: "sap-icon://pharmacy",
								tentative: false
							},
							{
								start: new Date("2022", "0", "21", "00", "30"),
								end: new Date("2022", "0", "21", "23", "30"),
								title: "New Product",
								info: "room 105",
								type: "Type03",
								tentative: true
							},
							{
								start: new Date("2022", "0", "25", "11", "30"),
								end: new Date("2022", "0", "25", "13", "30"),
								title: "Lunch",
								type: "Type03",
								tentative: true
							},
							{
								start: new Date("2022", "0", "29", "10", "0"),
								end: new Date("2022", "0", "29", "12", "0"),
								title: "Team meeting",
								info: "room 1",
								type: "Type01",
								pic: "sap-icon://sap-ui5",
								tentative: false
							},
							{
								start: new Date("2022", "0", "30", "08", "30"),
								end: new Date("2022", "0", "30", "09", "30"),
								title: "Meet Max Mustermann",
								type: "Type02",
								tentative: false
							},
							{
								start: new Date("2022", "0", "30", "10", "0"),
								end: new Date("2022", "0", "30", "12", "0"),
								title: "Team meeting",
								info: "room 1",
								type: "Type01",
								pic: "sap-icon://sap-ui5",
								tentative: false
							},
							{
								start: new Date("2022", "0", "30", "11", "30"),
								end: new Date("2022", "0", "30", "13", "30"),
								title: "Lunch",
								type: "Type03",
								tentative: true
							},
							{
								start: new Date("2022", "0", "30", "13", "30"),
								end: new Date("2022", "0", "30", "17", "30"),
								title: "Discussion with clients",
								type: "Type02",
								tentative: false
							},
							{
								start: new Date("2022", "0", "31", "10", "00"),
								end: new Date("2022", "0", "31", "11", "30"),
								title: "Discussion of the plan",
								info: "Online meeting",
								type: "Type04",
								tentative: false
							},
							{
								start: new Date("2022", "1", "3", "08", "30"),
								end: new Date("2022", "1", "13", "09", "30"),
								title: "Meeting with the manager",
								type: "Type02",
								tentative: false
							},
							{
								start: new Date("2022", "1", "4", "10", "0"),
								end: new Date("2022", "1", "4", "12", "0"),
								title: "Team meeting",
								info: "room 1",
								type: "Type01",
								pic: "sap-icon://sap-ui5",
								tentative: false
							},
							{
								start: new Date("2022", "3", "30", "8", "0"),
								end: new Date("2022", "3", "30", "9", "30"),
								title: "CP-NEW",
                                info:"CP123123123",
								type: "Type07",
								pic: "sap-icon://sap-ui5",
								tentative: false
							}
						],
						// headers: [
						// 	{
						// 		start: new Date("2022", "0", "15", "8", "0"),
						// 		end: new Date("2022", "0", "15", "10", "0"),
						// 		title: "Reminder",
						// 		type: "Type06"
						// 	},
						// 	{
						// 		start: new Date("2022", "0", "15", "17", "0"),
						// 		end: new Date("2022", "0", "15", "19", "0"),
						// 		title: "Reminder",
						// 		type: "Type06"
						// 	},
						// 	{
						// 		start: new Date("2022", "8", "1", "0", "0"),
						// 		end: new Date("2022", "10", "30", "23", "59"),
						// 		title: "New quarter",
						// 		type: "Type10",
						// 		tentative: false
						// 	},
						// 	{
						// 		start: new Date("2018", "1", "1", "0", "0"),
						// 		end: new Date("2018", "3", "30", "23", "59"),
						// 		title: "New quarter",
						// 		type: "Type10",
						// 		tentative: false
						// 	}
						// ]
					},
						{
							pic: "sap-icon://pharmacy",
							name: "M1123(1)",
							role: "Medicinal Product Working Agency",
							appointments: [
								{
									start: new Date("2022", "0", "10", "18", "00"),
									end: new Date("2022", "0", "10", "19", "10"),
									title: "Discussion of the plan",
									info: "Online meeting",
									type: "Type04",
									tentative: false
								},
								{
									start: new Date("2022", "0", "9", "10", "0"),
									end: new Date("2022", "0", "13", "12", "0"),
									title: "Workshop out of the country",
									type: "Type07",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2022", "0", "15", "08", "00"),
									end: new Date("2022", "0", "15", "09", "30"),
									title: "CP-VARIATION",
									info: "CP-123123123",
									type: "Type04",
									tentative: false
								},
								{
									start: new Date("2022", "0", "15", "10", "0"),
									end: new Date("2022", "0", "15", "12", "0"),
									title: "Team meeting",
									info: "room 1",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								// {
								// 	start: new Date("2022", "0", "15", "18", "00"),
								// 	end: new Date("2022", "0", "15", "19", "10"),
								// 	title: "Discussion of the plan",
								// 	info: "Online meeting",
								// 	type: "Type04",
								// 	tentative: false
								// },
								{
									start: new Date("2022", "0", "16", "10", "0"),
									end: new Date("2022", "0", "31", "12", "0"),
									title: "Workshop out of the country",
									type: "Type07",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2018", "0", "1", "0", "0"),
									end: new Date("2018", "2", "31", "23", "59"),
									title: "New quarter",
									type: "Type10",
									tentative: false
								},
								{
									start: new Date("2022", "01", "11", "10", "0"),
									end: new Date("2022", "02", "20", "12", "0"),
									title: "Team collaboration",
									info: "room 1",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2022", "3", "30", "10", "0"),
									end: new Date("2022", "3", "30", "12", "0"),
									title: "CP-VARIATION",
                                    info:"CP-123123123",
									type: "Type07",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2022", "4", "01", "10", "0"),
									end: new Date("2022", "4", "31", "12", "0"),
									title: "CP-RENEVAL",
									type: "Type08",
									tentative: false
								},
								{
									start: new Date("2022", "7", "1", "0", "0"),
									end: new Date("2022", "7", "31", "23", "59"),
									title: "CP-VARIATION",
									info: "CP-RENEVAL",
									type: "Type04",
									tentative: false
								}
							],
							// headers: [
							// 	{
							// 		start: new Date("2022", "0", "15", "9", "0"),
							// 		end: new Date("2022", "0", "15", "10", "0"),
							// 		title: "Payment reminder",
							// 		type: "Type06"
							// 	},
							// 	{
							// 		start: new Date("2022", "0", "15", "16", "30"),
							// 		end: new Date("2022", "0", "15", "18", "00"),
							// 		title: "Private appointment",
							// 		type: "Type06"
							// 	}
							// ]
						},
						{
							pic: "sap-icon://pharmacy",
							name: "M1123(1)",
							role: "Medicinal Product Working Agency",
							appointments: [
								{
									start: new Date("2022", "0", "15", "08", "30"),
									end: new Date("2022", "0", "15", "09", "30"),
									title: "CP-RENEWAL",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2022", "0", "15", "10", "0"),
									end: new Date("2022", "0", "15", "12", "0"),
									title: "Team meeting",
									info: "room 1",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2022", "0", "15", "13", "00"),
									end: new Date("2022", "0", "15", "16", "00"),
									title: "CP-VARIATION",
									info: "CP-123123123",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2022", "0", "16", "0", "0"),
									end: new Date("2022", "0", "16", "23", "59"),
									title: "PRODUCT",
									info: "CP-RENEVAL",
									type: "Type04",
									tentative: false
								},
								{
									start: new Date("2022", "0", "17", "1", "0"),
									end: new Date("2022", "0", "18", "22", "0"),
									title: "Workshop",
									info: "regular",
									type: "Type07",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2022", "0", "19", "08", "30"),
									end: new Date("2022", "0", "19", "18", "30"),
									title: "Meet John Doe",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2022", "0", "19", "10", "0"),
									end: new Date("2022", "0", "19", "16", "0"),
									title: "Team meeting",
									info: "room 1",
									type: "Type01",
									pic: "sap-icon://sap-ui5",
									tentative: false
								},
								{
									start: new Date("2022", "0", "19", "07", "00"),
									end: new Date("2022", "0", "19", "17", "30"),
									title: "Discussion with clients",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2022", "0", "20", "0", "0"),
									end: new Date("2022", "0", "20", "23", "59"),
									title: "Vacation",
									info: "CP-RENEVAL",
									type: "Type04",
									tentative: false
								},
								{
									start: new Date("2022", "0", "22", "07", "00"),
									end: new Date("2022", "0", "27", "17", "30"),
									title: "Discussion with clients",
									info: "CP-RENEVAL",
									type: "Type02",
									tentative: false
								},
								{
									start: new Date("2022", "2", "13", "9", "0"),
									end: new Date("2022", "2", "17", "10", "0"),
									title: "Payment week",
									type: "Type06"
								},
								{
									start: new Date("2022", "03", "30", "8", "0"),
									end: new Date("2022", "03", "30", "9", "59"),
									title: "CP-RENEVAL",
									info: "CP-1231231",
									type: "Type04",
									tentative: false
								},
								{
									start: new Date("2022", "04", "1", "0", "0"),
									end: new Date("2022", "07", "31", "23", "59"),
									title: "New quarter",
									type: "Type10",
									tentative: false
								}
							],
							headers: [
								{
									start: new Date("2022", "0", "16", "0", "0"),
									end: new Date("2022", "0", "16", "23", "59"),
									title: "Private",
									type: "Type05"
								}
							]
						}
					]
				});
				this.getView().setModel(oModel);

            },

            oNavButton_press:function(oEvent){
                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView1");
            }


        });
    });
