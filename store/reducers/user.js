const initialState = {
  clips: []
}

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'ADD_ClIP':
      return {
        // expand in consideration of other states
        ...oldState,
        // to add a new in the array
        clips: [...oldState.clips, action.clip]
      }
    case 'DELETE_CLIP':
      return {
        ...oldState,
        clips: oldState.clips.filter(clip => clip.url !== action.clip.url)
      }
      break;
    default:
      return state;
  }
};

export default reducer;