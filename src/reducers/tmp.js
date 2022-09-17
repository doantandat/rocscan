import * as Types from "./../constants/Typesaction";

let Initstate = {
    TMP: {},

};

const reducer = (state = Initstate, action) =>
{
    switch (action.type) {
        case Types.TMP:
            state = {
                ...state,
                TMP: action.result
            };
            // console.log(state);
            return { ...state };


        default:
            return { ...state };


    }
};
export default reducer;
