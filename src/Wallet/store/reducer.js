const initialState = {
  seedPhrase: [
    {
      id: 1,
      phrase: "happiness",
    },
    {
      id: 2,
      phrase: "sadness",
    },
    {
      id: 3,
      phrase: "automatic",
    },
    {
      id: 4,
      phrase: "language",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "WALLET/SET_BALANCE":
      return {
        ...state,
        balance: action.payload,
      };
    case "WALLET/SET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};
export { initialState };
export default reducer;
