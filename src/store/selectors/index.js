import getAppProps from './app'

export default function getSelector (state) {
    return {
        app: getAppProps(state)
    }
}