sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/vbm/AnalyticMap",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,AnalyticMap,JSONModel, Device) {
        "use strict";
        // AnalyticMap.GeoJSONURL = "test-resources/sap/ui/vbm/demokit/media/analyticmap/L0.json";


        return Controller.extend("Map.project1.controller.View1", {
            onInit: function () {
                debugger;
                var oModel = new JSONModel("../model/Data.json");
                this.getView().setModel(oModel);
    
               // set the device model
                var oDeviceModel = new JSONModel(Device);
                oDeviceModel.setDefaultBindingMode("OneWay");
                this.getView().setModel(oDeviceModel, "device");
                this.mapLegend();
                this.mapSpot();
            },
            // onPressLegend: function() {
            //     if (this.byId("vbi").getLegendVisible() == true) {
            //         this.byId("vbi").setLegendVisible(false);
            //         this.byId("btnLegend").setTooltip("Show legend");
            //     } else {
            //         this.byId("vbi").setLegendVisible(true);
            //         this.byId("btnLegend").setTooltip("Hide legend");
            //     }
            // },
            mapLegend:function()
            {
                var maps=this.getView().byId("vbi");
                var legend=new sap.ui.vbm.Legend({
    
                    items:[
                        
                        new sap.ui.vbm.LegendItem({
                            text: "Expired",
                            color:"#FF0000"
                                }),
                        new sap.ui.vbm.LegendItem({
                            text:"Active/Renewed",
                            color: "#00FF00"
                            }),
                        new sap.ui.vbm.LegendItem({
                           text:"Not renewed/Widthdrawn",
                           color: "#778899"
                            }),
                         new sap.ui.vbm.LegendItem({
                              text:"Not Available",
                              color: "#008080"
                            })
                    ]
                });
                maps.setLegend(legend);
            },

         mapSpot:function()
        {
            debugger;
            var maps=this.getView().byId("vbi");
            var spt=new sap.ui.vbm.Spots({  
                items : [ 
                        
                // new sap.ui.vbm.Spot({position:"77.1024902;28.7040592;0",
                // tooltip:"Dehli",
                // labelText:"12345",
                // labelType:"Success",
                // image:"../model/green.png",
                // type:"Hidden",
                // labelArrow:true,
                // labelPos:5,
                // icon:"sap-icon://arrow-bottom"}),
                            
                            new sap.ui.vbm.Spot({ type : "Error",
                                                  text : "ALBIAN", 
                                                  position : "20;0;0"}),

                // new sap.ui.vbm.Spot({position:"37.622882;55.755202;0",
                // tooltip:"Moscow",
                // labelText:"12345",
                // labelType:"Success",
                // image:"../model/green.png",
                // type:"Hidden",
                // labelArrow:true,
                // labelPos:5,
                // icon:"sap-icon://arrow-bottom"}),

                            // new sap.ui.vbm.Spot({ type : "Succcess",
                            //                       text : "32678", 
                            //                       position : "20;0;0"})
                            // new sap.ui.vbm.Spot({position:"-74.013327;40.705395;0",
                            // tooltip:"New York",
                            // labelText:"12345",
                            // labelType:"Success",
                            // image:"../model/green.png",
                            // type:"Hidden",
                            // labelArrow:true,
                            // labelPos:5,
                            // icon:"sap-icon://arrow-bottom"}),
                             new sap.ui.vbm.Spot({ type : "Success",
                                              text : "USA", 
                                              position : "-74.013327;40.705395;0"}),
                            new sap.ui.vbm.Spot({ type : "Inactive",
                                              text : "Moscow", 
                                              position : "37.622882;55.755202;0"}),
                            new sap.ui.vbm.Spot({ type : "Warning",
                                              text : "Beijing", 
                                              position : "116.407072;39.906235;0"}),
                            new sap.ui.vbm.Spot({ type : "Success",
                                              text : "Delhi", 
                                              position : "77.1024902;28.7040592;0"}),
                            
                          ]
               });
            maps.addAggregation("vos",spt,true );
            }  
        });
    });
