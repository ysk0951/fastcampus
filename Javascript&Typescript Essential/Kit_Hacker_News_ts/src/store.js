"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Store = void 0;
var Store = /** @class */ (function () {
    function Store() {
        var _this = this;
        this.setFeeds = function (feeds) {
            _this.feeds = feeds.map(function (feed) { return (__assign(__assign({}, feed), { read: false })); });
        };
        this.feeds = [];
        this._currentPage = 1;
    }
    Object.defineProperty(Store.prototype, "currentPage", {
        get: function () {
            return this._currentPage;
        },
        set: function (page) {
            this._currentPage = page;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "nextPage", {
        get: function () {
            return this._currentPage + 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "prevPage", {
        get: function () {
            return this._currentPage > 1 ? this._currentPage - 1 : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "numberOfFeed", {
        get: function () {
            return this.feeds.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "hasFeeds", {
        get: function () {
            return this.feeds.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    Store.prototype.getFeed = function (position) {
        return this.feeds[position];
    };
    Store.prototype.getAllFeeds = function () {
        return this.feeds;
    };
    Store.prototype.makeRead = function (id) {
        var feed = this.feeds.find(function (feed) { return feed.id === id; });
        if (feed) {
            feed.read = true;
        }
    };
    return Store;
}());
exports.Store = Store;
