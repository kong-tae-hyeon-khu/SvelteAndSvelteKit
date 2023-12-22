
// Before +page.server.js, Run.
// Resolve => 넘겨줌.
export const handle = ({event, resolve}) => {
    // console.log(event);
    // return resolve(event);

    if (event.url.pathname === "/user/signin" || event.pathname === "/user/signup") {
        return resolve(event);
    }

    else {
        console.log(event.url.pathname)
        return resolve(event);
    }
}