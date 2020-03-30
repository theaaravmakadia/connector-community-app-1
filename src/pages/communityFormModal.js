import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import TextBox from '../components/forms/textbox'
// import Button from '../components/forms/button'
class CommunityFormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             step: true,
             communityName: '',
            communityMission: '',
            zipCode: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        event.preventDefault();
        this.setState({communityName: event.target.value});
    }
    handleSubmit(boolean) {
        this.setState({step: !this.state.step});
        console.log(this.state.step);
    }
    render() {
        // if(this.state.step) {
        //     console.log(this.state.step);
        // }
       return (
           <ModalRoutingContext.Consumer>
               {({modal, closeTo}) => (
                   <div>
                       {modal ? (
                           <Link to={closeTo}>
                               Close
                           </Link>
                       ) : (
                        <header>
                        <h1>
                        Website Title
                        </h1>
                        </header>
                       )}
                       <div>
                           <h2> Register a community.</h2>
                       </div>
                       <div>
                           <p>
                               Community Name
                           </p>
                       </div>
                       <div>
                           <TextBox value={this.state.communityName}  onChange={this.handleChange}/>
                       </div>
                       <div>
                           <p>Community Zipcode</p>
                       </div>
                       <div>
                           <TextBox value={this.state.zipCode} />
                       </div>
                       <div>
                           <p>
                               Community Mission
                           </p>
                       </div>
                       <div>
                           <TextBox value={this.state.communityMission}/>
                       </div>
                       <div>
                           <button className="button" onClick={this.handleSubmit}>Submit</button>
                           {/* <Button link="#" text="Yes" onClick={this.handleSubmit}/> */}
                       </div>
                   </div>
               )}
           </ModalRoutingContext.Consumer>
       );
        // else if(this.state.step === 2) {
        //     console.log(this.state.step);
        // }
        // return (
        //     <ModalRoutingContext.Consumer>
        //         {({modal, closeTo}) => (
        //             <div>
        //                 {modal ? (
        //                     <Link to={closeTo}>
        //                         Close
        //                     </Link>
        //                 ) : (
        //                     <header>
        //                         <h1>
        //                             Website Title
        //                         </h1>
        //                     </header>
        //                 )}
        //                 <div>
        //                     <h2> Thank you for creating your community.</h2>
        //                 </div>
        //                 <div>
        //                     <p>{this.state.communityName} is up and running. <br/>
        //                     We will try our best to find <br/>
        //                     people in your community who need help.
        //                     </p>
        //                     <p>Spread the word by copying the link below <br/>
        //                     and sharing on the social media.
        //                     </p>
        //                 </div>
        //             </div>
        //         )}
        //     </ModalRoutingContext.Consumer>
        // );
    }
}
export default CommunityFormModal