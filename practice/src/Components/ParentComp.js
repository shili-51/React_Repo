import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Shilpy'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Shilpy'
            })
        },2000)
    }
    
  render() {
    console.log('************************Parent Comp render*****************')
    return (
      <div>
        Parent Component

        {/* whenever the parent component is rendered, Memo Component is also re-rendered, to prevent this we do export default React.memo(MemoComp) */}
        <MemoComp name={this.state.name}/>
        {/* <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp
