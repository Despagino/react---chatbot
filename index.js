//importing 
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';
//end of importing 


//component
const App = () => {
    return (

        <div className="ui container comments">

            <ApprovalCard>
                <CommentDetail
                    author="Gino"
                    date="Today at 5:45PM"
                    text="Wow"
                    avatar={faker.image.avatar}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    date="Today at 5:51PM"
                    text="Great!"
                    avatar={faker.image.avatar}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    date="Tody at 5:59PM"
                    text="Amazing."
                    avatar={faker.image.avatar}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Lebron"
                    date="Yesterday at 3:59PM"
                    text="Ehhh."
                    avatar={faker.image.avatar}
                />
            </ApprovalCard>
        </div>
    );
};
// end of component



// displaying to HTML
ReactDOM.render(<App />, document.getElementById('root'));
