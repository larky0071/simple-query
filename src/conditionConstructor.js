class ConditionConstructor {
    _processCount = 0;
    _processedConditions = [];
    _sqlConditionString = "";

    _process() {
        this._processCount++;
        this._sqlConditionString = this._processedConditions.join(' ');
        this._sqlConditionString += ";";
        this.__render(); //debug
    }

    __render() {
        const colors = require('colors/safe'); //debug
        console.log(colors.magenta('[ConditionConstructor]'), colors.yellow(`${this._processCount} PROCESS`), colors.green('[UPDATE STATE]'), this._sqlConditionString); //debug
    }

    AND() {
        this._processedConditions.push("AND")
        this._process();
    }

    OR() {
        this._processedConditions.push("OR")
        this._process();
    }

    LIKE(column, value) {
        this._processedConditions.push(`${column} LIKE '${value}'`);
        this._process();
    }

    ORDER_BY(column, DESC = false) {
        this._processedConditions.push(`ORDER BY ${column} ${DESC === false ? "ASC" : "DESC"}`);
        this._process();
    }

    LIMIT(count, offset = 0) {
        this._processedConditions.push(`LIMIT ${offset <= 0 ? count : `${offset}, ${count}`}`);
        this._process();
    }
}

module.exports = ConditionConstructor