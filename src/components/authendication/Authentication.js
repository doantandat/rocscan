import * as action from "./../../actions/index";
class Authentication
{
    isAuthenticated()
    {
        let token = null;

        token = action.GetUser();
        // console.log(token.code)
        if (token.code === 200)
            return true
        return false;
    }

}

const authentication = new Authentication();
export default authentication;
