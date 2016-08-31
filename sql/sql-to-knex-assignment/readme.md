## SQL To Knex Assignment

For this assignment you will be taking your knowledge of SQL and Knex and writing the necessary Knex code to output SQL below. Fork and clone this repo and submit a pull request with your answers. You can use [http://michaelavila.com/knex-querylab/](http://michaelavila.com/knex-querylab/) to check your answers

#### Turn the following SQL queries into Knex queries (you can write them next to each SQL query or below):

1. `SELECT * FROM students;`

knex.select('*').from('students');

2. `SELECT * FROM students WHERE id=1;`

knex('students').where('id', 1);

2. `SELECT * FROM students WHERE id=5 LIMIT 1;`

knex('students').where('id', 5).limit(1);

3. `SELECT COUNT(*) FROM students;`

knex('students').count();

4. `SELECT MIN('year') FROM students;`

knex('students').min('year');

5. `SELECT * FROM students WHERE name IS NOT NULL;`

knex('students').whereNotNull();

6. `SELECT * FROM todos WHERE id IN ('1', '2', '3') OR user_id IN ('4', '5', '6');`

knex('todos').where('id',[1,2,3]).orWhere('user_id',[4,5,6]);

7. `SELECT * FROM students LIMIT 10 OFFSET 30;`

knex('students').limit(10).offset(30);

8. `INSERT INTO students (name,fav_color) VALUES ('tyler','purple');`

knex('students').insert({name: 'tyler', color: 'purple'});

9. `INSERT INTO students (name,fav_color) VALUES ('liz','blue') RETURNING *;`

knex('students').returning().insert({name: 'liz', color:'blue'})

10. `UPDATE students SET name ='cho' WHERE id=5;`

knex('students').where('id', 5).update({name: 'cho'});
'todos', 'students.id', 'students.id'
;11. `DELETE * FROM students;`

knex('students').delete();

12. `UPDATE "students" SET "score" = "score" + 10 WHERE id=1;`

knex('students').where('id', 1).update({score: 'score'});

13. `SELECT * FROM "students" LEFT OUTER JOIN "todos" ON "students"."id" = "todos"."student_id";`

knex('students').leftOuterJoin('todos', 'students.id', 'todos.students.id');

14. `SELECT * FROM "students" RIGHT OUTER JOIN "todos" ON "students"."id" = "todos"."student_id";`

knex('students').rightOuterJoin('todos', 'students.id', 'todos.students.id');

#### Answer the following questions:

1. See the documentation for `pluck` - when would a method like this be useful?

knex('students').pluck('id').then(function(ids) {
  console.log(ids);
});

2. How do you specify that a column must be unique using Knex?

column.unique() 

3. How do you specify that a column can not be NULL using Knex?

column.notNullable()

4. Can you also write raw SQL within knex queries? If so, how do you do that?

Yes : knex('students')
  .select(knex.raw('count(*) as student_count, status'))
  .where(knex.raw(1))
  .orWhere(knex.raw('status <> ?', [1]))
  .groupBy('status')

