export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    'BQBRTSdpXYtBWDCkAslPOGRx1AdfQhB-UL_ASM5Qvs5h6Km455Y-jFw3JcgO8rnBKjsq1Yw0e1ckiPh1KvvDrJFCsSe7q8hPuifGV8GRd2_JL7y6Ok61iQ_xJ2cFNxu1oAXZ8669S1GR17ec2K-gIrXyTJHX',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN': {
      return {
        ...state,
        token: action.token,
      };
    }
    default:
      return state;
  }
};

export default reducer;
