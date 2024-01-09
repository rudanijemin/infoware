import React from 'react'
import { connect } from 'react-redux'

const Displaycount = ({todos}) => {
  return (
    <h6>diaplayed count:{todos.length}</h6>
  )
}
const mapStateToProps=(state)=>({todos:state.todos})

const mapDispatchToProps=(dispatch)=>({})
export default connect(mapStateToProps,mapDispatchToProps) (Displaycount)
