import { actions as searchActions } from "./SearchContacts";
import { actions as contactDetailsActions } from "./ContactDetails";
import { SEARCH_REQUEST_MIN_INTERVAL_IN_MILLIS } from "../httpApi/fakeHttpApi";

export const updateSearchPhrase = newPhrase =>
  (dispatch, getState, { httpApi }) => {
    // debugger;
    dispatch(
      searchActions.updateSearchPhraseStart({ newPhrase }),
    );
    httpApi.getFirst5MatchingContacts({ namePart: newPhrase })
      .then(({ data }) => {
        // debugger;
        const matchingContacts = data.map(contact => ({
          id: contact.id,
          value: contact.name,
        }));
        // FIXED? - TODO something is wrong here
        dispatch(
          searchActions.updateSearchPhraseSuccess({ matchingContacts: matchingContacts }),
        );
      })
      .catch((error) => {
        // FIXED? - TODO something is missing here
        dispatch(
          searchActions.updateSearchPhraseFailure(),
        );
      });
  };

export const selectMatchingContact = selectedMatchingContact =>
  (dispatch, getState, { httpApi, dataCache }) => {
    debugger;
    // FIXED? - TODO something is missing here
    const getContactDetails = ({ id }) => {
      debugger;
      console.log(`getContactDetails call id is: ${id}`);
      return httpApi
        .getContact({ contactId: id })
        .then(({ data }) => {
          debugger;
          return {
            id: data.id,
            name: data.name,
            phone: data.phone,
            addressLines: data.addressLines,
          }
        });
    };

    dispatch(
      searchActions.selectMatchingContact({ selectedMatchingContact }),
    );

    dispatch(
      contactDetailsActions.fetchContactDetailsStart(),
    );

    getContactDetails({ id: selectedMatchingContact.id })
      .then((contactDetails) => {
        // TODO something is missing here
        debugger;
        dataCache.store({
          key: contactDetails.id,
        });

        // TODO something is wrong here
        debugger;
        dispatch(
          contactDetailsActions.fetchContactDetailsSuccess({
            contactDetails
          }),
        );
      })
      .catch(() => {
        dispatch(
          contactDetailsActions.fetchContactDetailsFailure(),
        );
      });
  };
