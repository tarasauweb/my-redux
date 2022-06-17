import "./style.css";
import createStore from './store'
import reducer from "./reducer"
import {countUpActionCreator,countDownActionCreator} from "./reducer"

const count = document.querySelector('h1')
const btnUp = document.querySelector('.btn-up')
const btnDown = document.querySelector('.btn-down')

let store = createStore(reducer)

function render(state) {
    count.textContent = `Count: ${state}`
}

render(store.getState())

btnUp.addEventListener('click', ()=>{
    store.dispatch(countUpActionCreator())
})
btnDown.addEventListener('click', ()=>{
    store.dispatch(countDownActionCreator())
})

store.subscribe(()=>{
    let state = store.getState()
    return render(state)
})

