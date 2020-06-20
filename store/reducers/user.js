const initialState = {
  clips: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ClIP':
      return {
        // expand in consideration of other states
        ...state,
        // to add a new in the array
        clips: [...state.clips, action.clip]
      }
    case 'DELETE_CLIP':
      return {
        ...state,
        clips: state.clips.filter(clip => clip.url !== action.clip.url)
      }
    default:
      return state;
  }
};

export default userReducer;