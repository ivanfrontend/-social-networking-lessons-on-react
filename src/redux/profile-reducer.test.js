import profileReducer, { AddPost, deletePost } from "./profile-reducer";


let state = {
    post:  [
        {id: 1, post: 'hi', likecount: 19},
        {id: 2, post: 'i\'am fine', likecount: 15},
        {id: 3, post: 'yo', likecount: 8}
    ]
};

it('new post should be added', () => {

    let action = AddPost('my first ui test')


    let newState = profileReducer(state, action)

    expect(newState.post.length).toBe(4); 
    
  });
  
  it('message new post', () => {

    let action = AddPost('my first ui test')

   

    let newState = profileReducer(state, action)

    expect(newState.post[3].post).toBe('my first ui test'); 
    
  });


  it('delete message', () => {

    let action = deletePost(1)
 
    let newState = profileReducer(state, action)

    expect(newState.post.length).toBe(2); 
    
  });
