"use strict";
exports.__esModule = true;
var View = /** @class */ (function () {
    function View(containerId, template) {
        var conatinerElement = document.getElementById(containerId);
        if (!conatinerElement) {
            throw '최상위 컨테이너가 없어 UI를 진행하지 못합니다.';
        }
        this.container = conatinerElement;
        this.template = template;
        this.renderTemplate = template;
        this.htmlList = [];
    }
    View.prototype.updateView = function () {
        this.container.innerHTML = this.renderTemplate;
        this.renderTemplate = this.template;
    };
    View.prototype.addHtml = function (htmlString) {
        this.htmlList.push(htmlString);
    };
    View.prototype.getHtml = function () {
        var snapshot = this.htmlList.join('');
        this.clearHtmlList();
        return snapshot;
    };
    View.prototype.setTemplateData = function (key, value) {
        this.renderTemplate = this.renderTemplate.replace("{{__" + key + "__}}", value);
    };
    View.prototype.clearHtmlList = function () {
        this.htmlList = [];
    };
    return View;
}());
exports["default"] = View;
