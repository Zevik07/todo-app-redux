const initState = [
    { id: 1, name: 'Learn guitar', completed: false, priority: 'Low' },
    { id: 2, name: 'Learn C++', completed: false, priority: 'Medium' },
    { id: 3, name: 'Learn JS', completed: true, priority: 'High' }
]

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state,
                action.payload
            ];

        case 'todoList/toggleTodoStatus':
            return state.map(todo => todo.id === action.payload
                ? { ...todo, completed: !todo.completed }
                : todo
            );

        default:
            return state;
            break;
    }
}

export default todoListReducer;