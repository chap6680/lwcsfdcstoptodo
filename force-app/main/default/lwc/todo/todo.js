    import { LightningElement, track } from 'lwc';

    export default class Todo extends LightningElement {
        
        newTask='My New Taskx';

        @track
        todoTasks = [
        ]
/*            {
                id: 1,
                name: 'Task 1'
            },
            {
                id: 2,
                name: 'Task 2'
            },
           {
                id: 3,
                name: 'Task 3'
            },
*/

        newTask = '';

        updateNewTask(event) {
            this.newTask  = event.target.value;
           // console.log(event.target.value);
           // console.log(this.newTask);
        }

        addTaskToList(event) {
            //unshift moves to front, push end
              this.todoTasks.unshift({
            id: this.todoTasks.length + 1,
            name: this.newTask
        });
        this.newTask = '';
        };

        
    /*
    *   This method is used to delete the task from todo list
    *   based on the task id
    */
    deleteTaskFromList(event) {

        let idToDelete = event.target.name;
        let todoTasks = this.todoTasks;
        let todoTaskIndex;

        /*
        *   Method 1 - Finding the index of the task to be deleted
        *   and deleting it using the below command
        */
        for(let i=0; i<todoTasks.length; i++) {
            if(idToDelete === todoTasks[i].id) {
                todoTaskIndex = i;
            }
        }

        // * Comment the below line if you're using one of the two approaches given below
        todoTasks.splice(todoTaskIndex, 1);

        /*
        *   Un-Comment any one of the two below methods
        *   which are used to directly splice or delete
        *   the element from the array based on the index.
        *   We're finding the index by using the findIndex()
        *   function available in JavaScript
        */

        // * Method 2
        /*
        todoTasks.splice(
            todoTasks.findIndex(function(todoTask) {
                return todoTask.id === idToDelete;
            })
            , 1
        );
        */

        // * Method 3
        // todoTasks.splice(todoTasks.findIndex(todoTask => todoTask.id === idToDelete), 1);
        }
    }