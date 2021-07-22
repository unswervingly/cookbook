import {
    CHANGE_SWITCH,
} from './constants'

export const changeSwitchAction = (checked) => {
    return {
        type: CHANGE_SWITCH,
        checked: checked
    }
}