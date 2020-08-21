import { NavigationActions, StackActions } from 'react-navigation';

let _n;
let _moveable;

function navigator(ref) {
    _n = ref
}

function navigate(screen, params) {
    _n.dispatch(
        NavigationActions.navigate({ routeName: screen, params: params })
    );
}

function reset(screen, params) {
    resetAction = StackActions.reset({
        index: 0,
        key: null,
        params: params,
        actions: [NavigationActions.navigate({ routeName: screen, params: params })],
    });
    _n.dispatch(resetAction);
}

function move(mainScreen, childScreen, params) {
    console.log("Moving called " + childScreen)
    navigateAction = NavigationActions.navigate({
        routeName: childScreen,
        // key: mainScreen,
        params: params,
        action: [
            NavigationActions.navigate({ routeName: mainScreen, params: params }),
            NavigationActions.navigate({ routeName: childScreen, params: params })
        ],
    });
    _n.dispatch(navigateAction);
}

function getParam(navigation, name, val) {
    return navigation.getParam(name, '');
}

function back() {
    popAction = StackActions.pop({
        n: 1,
    });
    _n.dispatch(popAction);
}


export default {
    navigate,
    navigator,
    reset,
    move,
    back,
    getParam
};