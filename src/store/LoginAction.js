// action
export const SHOW = 'SHOW'
export const HIDE = 'HIDE'
export function showAction(){
    return{
        type:SHOW,
    }
}
export function hideAction(){
    return{
        type:HIDE,
    }
}
export default{
    showAction,
    hideAction
}