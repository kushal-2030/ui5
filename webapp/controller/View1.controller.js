sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/integration/library"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("demo1.polaris1.controller.View1", {
            onInit: function () {
                debugger;
                var cardManifests = new JSONModel()
                cardManifests.loadData(sap.ui.require.toUrl("demo1/polaris1/model/data1.json"));
                this.getView().setModel(cardManifests, "data");
                this.getView().bindElement("/Products('4712')");
                // var chart= new JSONModel();
                // chart.loadData("model/data.json");
                // this.getView().setModel(chart,"data1");
                // this.chart= this.getView().byId("idVizFrame3");
                // this.chart.setVizProperties({
                //     title: {

                //         text: " "

                //     },
                //     plotArea: {
                //         dataLabel: {
                //             visible:true
                //         }
                //     },
                //     legend:{
                        
                //     }
                // })

                // this.chart= this.getView().byId("idVizFrame2");
                // this.chart.setVizProperties({
                //     title: {

                //         text: " "

                //     },
                //     plotArea: {
                //         dataLabel: {
                //             visible: true
                //         }
                //     }
                // })
                // this.chart= this.getView().byId("idVizFrame1");
                // this.chart.setVizProperties({
                //     title: {

                //         text: " "

                //     },
                //     plotArea: {
                //         dataLabel: {
                //             visible: true
                //         }
                //     }
                // })
                 var data1= new JSONModel();
                 data1.loadData("model/data1.json");
                 this.getView().setModel(data1,"data");
            },

            ohandle_press:function(){
                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("cal");
            }
            
        });
    });
