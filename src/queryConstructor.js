class QueryConstructor {
    _processCount = 0;
    _sqlString = null;
    _action = null;
    _find = null;
    _from = null;
    _where = null;

    constructor() { this._process(); }

    _process() {
        this._processCount++;
        this._sqlString = `${this._action} ${this._find} FROM ${this._from} WHERE ${this._where}`.replaceAll('null', '#####');
        this.__render(); //debug
    }

    __render() {
        const colors = require('colors/safe'); //debug
        console.log(colors.magenta('[QueryConstructor]'), colors.yellow(`${this._processCount} PROCESS`), colors.green('[UPDATE STATE]'), this._sqlString); //debug
    }

    ACTION(action) {
        this._action = action;
        this._process();
    }

    FIND(str) {
        this._find = str;
        this._process();
    }

    FROM(str) {
        this._from = str;
        this._process();
    }

    WHERE(obj) {
        if (obj._sqlConditionString) this._where = obj._sqlConditionString;
        else this._where = obj;
        this._process();
    }
}

module.exports = QueryConstructor