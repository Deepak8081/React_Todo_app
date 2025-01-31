
const TodoCard = (props) => {

  const {children, handleDeleteTodo, index, handleEditTodo} = props ;

  return (
    <div>
    <li className="todoItem" > {children}
    
    <div className="actionsContainer">
      <button onClick={() => {
        handleEditTodo(index)
      }}>
          <i className="fa-regular fa-pen-to-square"></i>
      </button>
         
      <button onClick={() => {
        handleDeleteTodo(index)
      }}>
           <i className="fa-solid fa-trash"></i>
      </button>
    </div>
         
    </li>
       
    </div>
  )
}

export default TodoCard
