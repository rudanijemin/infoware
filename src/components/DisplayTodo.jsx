import React, { useState } from 'react'
import { Container, Form ,Row , Col, Card, CardBody, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import Displaycount from './Displaycount'
import { connect } from 'react-redux'
import { deletetodo } from '../redux/actions/todo'

const DisplayTodo = ({todos,deleteTodo}) => {

  return (
   <Container>
    <Form>
        <Row>
            <Col>
                <Card>
                    <CardBody>
                        <h3>All todo hear</h3>
                        <Displaycount></Displaycount>
                        <ListGroup>
                        {
                            todos.map((todo,index)=>(
                                <ListGroup.Item key={index}>
                                    <h4> {todo.title}</h4>
                                    <p>{todo.descriptin}</p>
                                    <Button onClick={event=>deleteTodo(todo.id)} variant='danger' size='sm'>
                                        Delete
                                    </Button>
                                </ListGroup.Item>
                            ))
                        }
                        </ListGroup>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Form>
   </Container>
  )
}

const mapStateToProps=(state)=>{
    
    return{todos:state.todos}
}

const mapDispatchToProps=(dispatch)=>({
    deleteTodo:(id)=>(dispatch(deletetodo(id)))
})

export default connect(mapStateToProps,mapDispatchToProps) (DisplayTodo)
