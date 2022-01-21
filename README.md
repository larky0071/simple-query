# simple-db-manage
## *- What about simplifying MySQL queries?*

## **test usage examples**

### multiple selection
```js
//SELECT * FROM name_table WHERE id = '16'

const { actions, queryConstructor } = require('simple-db-manage')

const query = new queryConstructor()
query.ACTION(actions.SELECT)
query.FIND('*')
query.FROM('name_table')
query.WHERE('id = "16"')
```

### multiple selection
```js
//SELECT id, field1, field2 FROM name_table WHERE id = '16'

const { actions, queryConstructor } = require('simple-db-manage')

const query = new queryConstructor()
query.ACTION(actions.SELECT)
query.FIND(['id', 'field1', 'field2'])
query.FROM('name_table')
query.WHERE('id = "16"')
```
### more difficult condition
```js
//SELECT * FROM name_table WHERE field1 LIKE 'value1' and field2 LIKE 'value2' order by date DESC limit 3, 5

const { actions, queryConstructor, conditionConstructor } = require('simple-db-manage')

const condition = new conditionConstructor()
condition.LIKE('field1', 'value1')
condition.AND()
condition.LIKE('field2', 'value2')
condition.ORDER_BY('date', true)
condition.LIMIT(5, 3)

const query3 = new queryConstructor()
query3.ACTION(actions.SELECT)
query3.FIND('*')
query3.FROM('name_table')
query3.WHERE(condition)
```