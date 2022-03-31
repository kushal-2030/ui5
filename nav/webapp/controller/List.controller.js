sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("rot.nav.controller.List", {
            onInit: function () {

            },

            onPress:function(oEvent){
                    var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("detail");
            }
        });
    });
