import React,{Component} from "react"

export default class TodoApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            items:[ 
                    {text: "item#1", done:false, key: new Date().getMilliseconds() + "item#1"},
                    {text: "item#2", done:false, key: new Date().getMilliseconds() + "item#2"},
                    {text: "item#3", done:false, key: new Date().getMilliseconds() + "item#3"},
                    {text: "item#4", done:false, key: new Date().getMilliseconds() + "item#4"}
        ],
        input :""
    }
    }
    moveToggle = (key) =>{
        console.log(key)
            let filtered = this.state.items.map(item =>{
                if(item.key == key){
                    item.done = !item.done;
                }
                return item
            })
            this.setState({items : filtered})
    }
    add = () =>{
        console.log(this.state.input)
        let newItem =  {text: this.state.input, done:false, key: new Date().getMilliseconds()}
        this.setState((state) => ({
            items : [newItem].concat(state.items)
        }))
        this.setState({input:""})
        }
    

    handleChange = (e) =>{
      
      this.setState({input : e.target.value})
    }

    render(){
        return(
            <div className="container">
                <div className="item1">
                    <h2>liste à faire</h2>
                    <form onSubmit = {(e) =>{e.preventDefault(); this.add()}}>
                        <input placeholder = "add todo" value = {this.state.input} onChange={(e) =>this.handleChange(e)}/> 
                    </form>
                    <ul>
                        {
                            this.state.items.map(item => {
                                if(!item.done){
                                   
                                    return (<li key={item.key} onClick={()=>this.moveToggle(item.key)}>{item.text}</li>)

                                }
                            })
                        }
                    </ul>
                   
                   
                </div>
                <div className="item2">
                    <h2>liste terminer</h2>
                    <ul>
                    <ul>
                        {
                            this.state.items.map(item => {
                                if(item.done){
                                    console.log(item.done)
                                    return (<li key={item.key} onClick={()=>this.moveToggle(item.key)}>{item.text}</li>)

                                }
                            })
                        }
                    </ul>
                    </ul>
                    
                </div>
            </div>
        )
    }
}
