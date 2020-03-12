import { createSelector } from 'reselect';

const num = (state) => {
    return state.app.num
}

export default createSelector(
    num,
    (num) => {
        return { num }
    }
)