import React, { FormEvent, FunctionComponent as FC, useEffect, useState } from 'react'

import {Form,Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import List from '../components/List/List'
import TODOI from '../Interface/TodoInterface'


const TodoPage = () => {

    const [todo, setTodo] = useState<string>('');


    const submitHandler = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();

        if(!todo) return window.alert("Please Enter Todo Items");
        addTodo(todo);
        setTodo("");
    }

    const [list, setlist] = useState<TODOI[]>([]);
    const [todos, setTodos] = useState<TODOI[]>([]);
  
    const addTodo = (todo: string): void => {
      const data: TODOI = {
        id: todos.length < 1 ? 1 : todos[todos.length - 1].id + 1,
        text: todo,
        completed: false,
      };
      setTodos((prevTodos: TODOI[]): TODOI[] => [...prevTodos, data]);
      window.alert("ToDo Added!");
    }
  
    const [completed, setCompleted] = useState<TODOI[]>([]);
    const [done, setDone] = useState<TODOI[]>([]);
  
  
  
    const completeTodo = (id: number): void => {
  
      const currentTodo: any = todos.find((todo: TODOI) =>
        todo.id === todo.id);
  
      currentTodo.completed = true;
      setCompleted((prevTodos: TODOI[]): TODOI[] => [...prevTodos, currentTodo]);
      const updatedTodos: TODOI[] = todos.map(
        (todo: TODOI): TODOI => (todo.id === id ? currentTodo : todo)
      )
      setTodos(updatedTodos)
      window.alert("Done Succesfully")
    }
  
    const deleteTodo = (id: number): void => {
  
      const updatedTodos: TODOI[] = todos.filter(
        (todo: TODOI): any => todo.id !== id);
  
      setTodos(updatedTodos)
  
      window.alert("Deleted Succesfully")
  
      const updatedTodo: TODOI[] = completed.filter(
        (todo: TODOI): any => todo.id !== id);
      setCompleted(updatedTodo)
  
    }
  
    useEffect(() => {
      setlist(todos)
    }, [todos])
  
  
    const handleComplete = () => {
      setlist(completed)
    }
    const handleAll = () => {
      setlist(todos);
    }



    return (
        <div>

        <FormContainer>
            <h1 className='text-center'>Todo Page</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="my-3" controlId="todoForm">
                    <Form.Label>Enter the task</Form.Label>
                    <Form.Control type="todo" placeholder="Enter todo task..." 
                    value={todo}
                    onChange={(event) => setTodo(event.target.value) }
                    />
                    <Button variant="primary" type="submit" className="my-3">
                        Add Todo
                    </Button>
                </Form.Group>  
            </Form>
       

        <div className="todo-container"> 
        <div className="formsection"> 
        {/* <TodoPage addTodo = {addTodo}/> */}
        <List 
        todos={list} 
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        />
        </div>
         
      <div className="row-btn"> 
      <Button className="btn py-3" onClick={handleComplete}>Completed</Button>
      <Button className="btn py-3" onClick={handleAll}>All</Button>
      </div>
      </div>

        </FormContainer>
        </div>
    )
}

export default TodoPage