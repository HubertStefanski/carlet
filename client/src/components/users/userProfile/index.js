import React, { Fragment, Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as api from '../../../api.js';




class UserProfile extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: [],
  //     isLoaded: false
  //   }
  // }


  // componentDidMount() {
    // const { id } = props.match.params.id;
//     api.getUser(id)
//       .then(resp => {
//         this.setState({
//           isLoaded: true,
//           user: resp
//         })
//       },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//           console.log(error);
//         }
//       );
//   }

//   render() {
//     const { isLoaded, user } = this.state;
//     if (!isLoaded) {
//       return <div>Loading</div>
//     }
//     else {

//       return (
//         <Fragment>
//           <Link
//             to={`/users/${id}}`}>
//             <img
//               className="card-img-tag center "
//               alt={this.user.name}
//               src={this.user.avatar}
//             />
//           </Link>
//           <h3> Detail page stub </h3>
//         </Fragment >
//       );
//     };
//   }
 }

export default withRouter(UserProfile);