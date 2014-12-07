(function () {
    angular.module('angular-dojo-app', []);
    var dojoxParser;
    define(["dojo/_base/lang",
            "dijit/form/TextBox",
            "dojo/on",
            "dijit/form/Button",
            ,"dojo/text!index.html"],
        function (lang, textBox, on, template) {
            alert("Hello");
            var name = dojo.byId("nameText");
            var nameButton = dojo.byId("nameButton");
            var nameEvent = on(nameButton, "click", function () {
                alert(dojo.byId("nameText"));
            })
        });


    /*
     require([
     "dijit/form/TextBox"],
     function (TextBox) {
     dojoxParser = parser;-+

     angular.bootstrap(document.body, ['angular-dojo-app']);
     });
     */


    angular.module('angular-dojo-app').controller('NameCtrl', function () {
        this.myName = 'Test';
    });
})();