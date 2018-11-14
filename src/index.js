import React from 'react';
import ReactDOM from 'react-dom';
import ComponentDetail from './ComponentDetail'
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <ComponentDetail 
                    author="Samantha" 
                    timeAgo="Today 4:00PM" 
                    avatar={faker.image.avatar()}
                    comment="You Rock"
                />
            </ApprovalCard>

            <ApprovalCard>
                < ComponentDetail 
                    author="Alex" 
                    timeAgo="Tomorrow 5:00PM"            
                    avatar={faker.image.avatar()}
                    comment="You Rock"
                />
            </ApprovalCard>

            <ApprovalCard>
                <ComponentDetail 
                    author="Jane"
                    timeAgo="Yesterday 5:00PM"           
                    avatar={faker.image.avatar()}
                    comment="You Rock"
                />
            </ApprovalCard>
        </div>   
    ); 
}

ReactDOM.render(<App />, document.querySelector('#root'));
