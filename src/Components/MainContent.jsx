import React from 'react'
import InputTexts from 'InputTexts'

class toDoCard extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className='cardContainer'>
                <h1>Here Goes the Todo title</h1>
                <h3>Here Goes the Description of the Todo Item</h3>
                <footer>Here Goes the Date informations</footer>
            </div>
        )
    }
};  



 function MainContent (){
    return(
        <div className = "MainContent">
            <InputTexts />
            <toDoCard />
        </div>
    )
 };

 export default MainContent