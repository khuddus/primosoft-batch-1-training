import { UPDATE_USER } from "../actions/user-actions";
import { SHOW_ERROR } from "../actions/user-actions";
export default function userReducer(state = "", { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    case SHOW_ERROR:
      return payload.user;
    default:
      return state;
  }
}
