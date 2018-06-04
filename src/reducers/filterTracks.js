const initialState = '';

export default function playlists(state = initialState, action) {
  if (action.type === 'FIND_TRACK') {
    return action.payload
  }

  return state;
}