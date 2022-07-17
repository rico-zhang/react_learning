import { LOCATION_CHANGE } from "./actionTypes";

export default function connectRouter(history) {
  const initState = {
    action: history.action,
    location: history.location,
  };
  return (state = initState, action) => {
    switch (action.type) {
      case LOCATION_CHANGE:
        return action.payload;
      default:
        return state;
    }
  };
}
