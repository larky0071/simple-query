declare class QueryConstructor {
    _processCount: number;
    _sqlString: string;
    _action: string;
    _find: string;
    _from: string;
    _where: string;
    ACTION(action: string): void;
    FIND(str: string | string[]): void;
    FROM(str: string): void;
    WHERE(str: string): void;
}

declare class ConditionConstructor {
    _processCount: number;
    _sqlConditionString: string;
    AND(): void;
    OR(): void;
    LIKE(column: string, value: any): void;
    ORDER_BY(column: string, DESC: boolean): void;
}