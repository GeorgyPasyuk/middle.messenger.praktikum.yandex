"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventBus {
    constructor() {
        this.listeners = {};
    }
    on(event, callback) {
        var _a;
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        (_a = this.listeners[event]) === null || _a === void 0 ? void 0 : _a.push(callback);
    }
    off(event, callback) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
    }
    emit(event, ...args) {
        if (!this.listeners[event]) {
            throw new Event(`Нет события: ${event}`);
        }
        this.listeners[event].forEach(listener => {
            listener(...args);
        });
    }
}
exports.default = EventBus;
//# sourceMappingURL=EventBus.js.map