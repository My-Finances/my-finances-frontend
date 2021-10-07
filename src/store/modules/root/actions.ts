export function changeTheme(theme: boolean) {
  return {
    type: "@root/CHANGE_THEME",
    payload: { theme },
  };
}
