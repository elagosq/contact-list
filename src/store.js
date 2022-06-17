let state = {
  isFetchingContacts: true,
  isFetchingUser: true,
  contacts: [],
  user: {},
  error: false
};

const listeners = [];

export default {
  getState() {
    return state;
  },
  setState(newState) {
    state = { ...state, ...newState };
    //console.log('state '+ JSON.stringify(state));
    listeners.forEach(listener => listener());
  },
  onChange(newListener) {
    listeners.push(newListener);
    return () => listeners.filter(listener => listener !== newListener);
  }
};
