# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I would fix this by adding a cohort_id column tot he student model using rails g migration add_columns_to_students in the terminal. Then I would add the column to the migration in the app using add_column and defing the model, name, and datatype. Then run migrations using rails db:migrate updating the schema. The foreign key is attached to the students model because the cohort has_many students and the students belong_to cohort, so each individual student will be attached to a cohorts id with the new cohort_id column.

Researched answer: I would fix this by adding a cohort_id column tot he student model using rails g migration add_columns_to_students in the terminal. Then I would add the column to the migration in the app using add_column and defing the model, name, and datatype. Then run migrations using rails db:migrate updating the schema. The foreign key is attached to the students model because the cohort has_many students and the students belong_to cohort, so each individual student will be attached to a cohorts id with the new cohort_id column. A foreign key is a field that refers to a primary key on another table.

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that need params are show, edit, update and destroy. The params are needed to tell the method which instance of the model is being accessed to be displayed, edited and updated or deleted.

Researched answer: Passing in an id makes can make your website dynamic. when you click on a post the url with the id of that post will go to the route and match the method in the controller to display the proper information on the page. This is the same of delete, edit, update. This prevents information being hard coded and sets up more security from harmful activity if information is stored and protected in the database as opposed to in the frontend.

3. Name three rails generator commands. What is created by each?

Your answer: There is the rails g controller <name> which creates a new controller file in your app. The rails g model <name> creates a new model for your app with the columns that you determine and their data type. The rails g migration is used to create a new migration which is used to update your table and schema in your app.

Researched answer: The rails g migration adds a new file to the migrate directory with a timestamp. The rails g model creates a a migrate file in the db folder and a new model file in app/models. The rails g controller creates a view folder with the name of the controller and model, a _helper.rb file in app/helpers and css file in app/assets/stylesheets.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
The index method would be called, and will display all students.

action: "POST" location: /students
The create method will be called, will create a new student

action: "GET" location: /students/new
The new method will be called, will create a new student form

action: "GET" location: /students/2
The show method will be called, it will display the students at id 2.

action: "GET" location: /students/2/edit
The edit method is called, it will allow you to edit students at id 2 

action: "PATCH" location: /students/2
The update method will be called, It will update the edits made at id 2.

action: "DELETE" location: /students/2
The destroy method will be called, it deletes the instance at id 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
1. As a developer I can create a new rails application
2. As a developer I can create a List model with a title, description, date and completed field.
3. As a user I can view all current tasks in my to do list.
4. As a user I can create navigate to a form page to create a new item.
5. As a user I can click a create button on the for to create a new to do item and be routed back to the home page.
6. As a user I can click delete on a task to remove it from my list.
7. As a user I can click an edit button to go to a form to update a current task and then be routed back to the home page.
8. As a user I can click complete when a task is finished.
9. As a user I can see all completed tasks below unfinished tasks.
10. As a user I can search for tasks in a search bar



