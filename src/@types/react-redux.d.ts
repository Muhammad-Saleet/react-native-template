import 'react-redux'
import { RootState } from "../redux/store"

declare module 'react-redux' {
    // eslint-disable-next-line
    interface DefaultRootState extends RootState { }
}
