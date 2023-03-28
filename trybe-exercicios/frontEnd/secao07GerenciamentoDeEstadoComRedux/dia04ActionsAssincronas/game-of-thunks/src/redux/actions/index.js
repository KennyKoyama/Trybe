export const UPDATE_INFO_STARTED = 'UPDATE_INFO_STARTED';
export const UPDATE_INFO_SUCCESSFUL = 'UPDATE_INFO_SUCCESSFUL';
export const UPDATE_INFO_FAILED = 'UPDATE_INFO_FAILED';
export const HANDLE_CHANGE_INPUT = 'HANDLE_CHANGE_INPUT';

export const updateInfoStarted = () => ({
  type: UPDATE_INFO_STARTED,
});

export const updateInfoSuccessful = (info) => ({
  type: UPDATE_INFO_SUCCESSFUL,
  payload: info,
});

export const updateInfoFailed = () => ({
  type: UPDATE_INFO_FAILED,
});

export const handleChangeInput = (value) => ({
  type: HANDLE_CHANGE_INPUT,
  payload: value,
});

export function fetchInfo(charName) {
  return (dispatch) => {
    dispatch(updateInfoStarted());
    fetch(`https://anapioficeandfire.com/api/characters?name=${charName}`)
      .then((response) => response.json())
      .then((data) => dispatch(updateInfoSuccessful(data[0])))
      .catch((error) => {
        console.log(error);
        dispatch(updateInfoFailed());
      });
  };
}
