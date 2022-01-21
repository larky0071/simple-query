const { actions, queryConstructor, conditionConstructor } = require('../index')

//SELECT * FROM name_table WHERE id = '16'
const query1 = new queryConstructor()
query1.ACTION(actions.SELECT)
query1.FIND('*')
query1.FROM('name_table')
query1.WHERE('id = "16"')

//SELECT id, field1, field2 FROM name_table WHERE id = '16'
const query2 = new queryConstructor()
query2.ACTION(actions.SELECT)
query2.FIND(['id', 'field1', 'field2'])
query2.FROM('name_table')
query2.WHERE('id = "16"')

//SELECT * FROM name_table WHERE field1 LIKE 'value1' and field2 LIKE 'value2' order by date DESC limit 3, 5
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

