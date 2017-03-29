/**
 * Created by xiaoconglau on 29/03/2017.
 */
import { combineReducers } from 'redux'
import home from "./homeReduces"


const app = combineReducers( {
    count: home
} )

export default app