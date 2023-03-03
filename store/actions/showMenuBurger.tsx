export const showMenuBurger = (toggle: boolean) => {
    return {
        type: "TOGGLE_MENU",
        payload: toggle,
    };
};
