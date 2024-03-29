export const UPDATE_SEARCH_PHRASE__START = "UPDATE_SEARCH_PHRASE__START";
export const UPDATE_SEARCH_PHRASE__SUCCESS = "UPDATE_SEARCH_PHRASE__SUCCESS";
export const UPDATE_SEARCH_PHRASE__FAILURE = "UPDATE_SEARCH_PHRASE__FAILURE";

// Fixed - TODO something is missing here - not doing anything with the phrase!
export const updateSearchPhraseStart = ({ newPhrase }) => {
  return {
    type: UPDATE_SEARCH_PHRASE__START,
    payload: { newPhrase }
  }
};
export const updateSearchPhraseSuccess = ({ matchingContacts }) => ({
  type: UPDATE_SEARCH_PHRASE__SUCCESS,
  payload: {
    matchingContacts,
  },
});
export const updateSearchPhraseFailure = () => ({
  type: UPDATE_SEARCH_PHRASE__FAILURE,
});

export const SELECT_MATCHING_CONTACT = "SELECT_MATCHING_CONTACT";

export const selectMatchingContact = ({ selectedMatchingContact }) => {
  return {
    type: SELECT_MATCHING_CONTACT,
    payload: {
      selectedMatchingContact,
    },
  }
}
