/********************
 * HELPER FUNCTIONS *
 ********************/










/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const getTodoName = (todo) => {
  return todo.text;
}

const getPriority = (todo) => {
  return todo.priority;
}

const isComplete = (todo) => {
  return todo.complete;
}

const isHighPriority = (todo) => {
  return todo.priority === 2;
  
}


const priority1Only = (todos) => {
  let lowPriorityTodos = [];
  for (const item of todos) {//for every item in my todos
    if (!isHighPriority(item)) {
      lowPriorityTodos.push(item)

    }
  }

return lowPriorityTodos;
}

const priority2Only = (todos) => {
  let highPriority = [];
  for (const item of todos) {
    if (isHighPriority(item)) {
      highPriority.push(item)

    }

  }
return highPriority
}

const names = (todos) => {
  return todos.map(getTodoName);
}

const priorities = (todos) => {
  return todos.map(getPriority);

}

const justComplete = (todos) => {
  return todos.filter(isComplete)
}

const notComplete = (todo) => {
  return todo.complete === false
}

const justNotComplete = (todos) => {
  return todos.filter(notComplete)
}














// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
