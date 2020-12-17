export const SET_SEARCH = 'SET_SEARCH';
export const setSearch = search => ({
  type: SET_SEARCH,
  payload: search
});

export const SET_LOADING = 'SET_LOADING';
export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading
});
