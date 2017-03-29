/**
 * Created by xiaoconglau on 29/03/2017.
 */
export default function app( state = { count: 1 }, action ) {
    switch ( action.type ) {
        case "add": {
            let c = state.count + 1;
            return { count: c }
        }
            break;
        default: {
            return state;
        }
    }

}