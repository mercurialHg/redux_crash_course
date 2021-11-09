import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});


/// connecting a Component to the store
/// connect() returns a Component that is connected to the Redux store (here named C.)
/// C. is based on `Posts` component  
/// (or C. is the `Posts` comp. but with extra capabilities; either way C. is a React comp. that is connected to the Redux Store)
/// this new C. element that is exported will have the capability to dispatch actions to the store
/// [dispatch = an action that is sent to the dispatcher (smth. that processes actions and sends it to the root reducer)]
/// 

export default connect(mapStateToProps, { fetchPosts })(Posts);
