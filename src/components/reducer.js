const data = window.localStorage.getItem("login")

function appReducer(state = {state :JSON.parse(data)}, action) {
  switch (action.type) {
    case "setLogin":
      return{ state: action.payload };
    default:
      return state;
  }
}

export default appReducer;
