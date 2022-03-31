sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("rot.nav.controller.Detail", {
            onInit: function () {

            },
            onNavButton_Press:function(){
                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("home");
            }
        });
    });
