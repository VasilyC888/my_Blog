import {Component} from '../core/component'

export class HeaderComponent extends Component {
    constructor(id) {
        super(id)

    }

    init() {
        if (localStorage.getItem('visited')) {
            this.hide()
        }

        var btn = this.$el.querySelector('.js-header-start')
        btn && btn.addEventListener('click', buttonHandler.bind(this))
    }
}

function buttonHandler() {
    localStorage.setItem('visited', JSON.stringify(true))
    this.hide()
}