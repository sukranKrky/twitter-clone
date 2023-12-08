import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id:1,
    userName: "Cazy_Lama13",
    fullName: "crazy_Lama13",
    avatar:
    "https://pbs.twimg.com/profile_images/1574511799231254528/erPyRKia_400x400.jpg",
  },
  accounts: [
    {
      id:1,
      userName: "Cazy_Lama13",
      fullName: "Crazy_Lama13",
      avatar:
        "https://pbs.twimg.com/profile_images/1574511799231254528/erPyRKia_400x400.jpg",
    },
    {
      id: 2,
      userName: "hande_Avci",
      fullName: "hndvc",
      avatar:
        " https://i.pinimg.com/550x/04/7f/1b/047f1b4d1f20cb0d4ac4a4b093425eed.jpg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // state manüpile etme metodları.
    _addAccounts: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccounts, _removeAccount, _setCurrentAccount } =
  auth.actions;
export default auth.reducer;
