import React, { useState } from 'react'
import { Container, Row ,Col, Card, Form, Button} from 'react-bootstrap';
import DisplayTodo from './DisplayTodo';
import Displaycount from './Displaycount';
import {addtodo} from "../redux/actions/todo"
import { connect } from 'react-redux';
import {v4} from 'uuid'

const Addtodo = ({addTodo}) => {
   const [todo , setTodo]= useState({
        title:'',
        descriptin:'',
        id:''
    })
    const handleSubmit =(event)=>{
        event.preventDefault();
        //add to do in store

        addTodo({...todo,id:v4()})
        console.log(todo);
        addTodo(todo);

        setTodo({
            title:'',
            descriptin:'',
        })
    }
  return (
    <Container>
        <Row>
            <Col>
                <Card className='shadow-sm'>
                    <Card.Body>
                        <h3> Add too doo</h3>
                        <Displaycount></Displaycount>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label> Todo Title</Form.Label>
                                <Form.Control type='text'
                                 placeholder='enter her'
                                value={todo.title}
                                onChange={event=>setTodo({...todo,title:event.target.value})}
                                 />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label> Todo Describtion</Form.Label>
                                <Form.Control as={'textarea'} type='text' placeholder='enter her'
                                value={todo.descriptin}
                                onChange={event=>setTodo({...todo,descriptin:event.target.value})}
                                />
                            </Form.Group>

                            <Container>
                                <Button type='submit'>
                                    Add Todo
                                </Button>
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

const mapStateToProps=(state)=>({})

const mapDispatchToProps=(dispatch)=>({
    addTodo:(todo)=>(dispatch(addtodo(todo)))
})

export default connect(mapStateToProps,mapDispatchToProps) ( Addtodo);
