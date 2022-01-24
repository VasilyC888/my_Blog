import {Component} from '../core/component'

export class HeaderComponent extends Component {
    constructor(id) {
        super(id)

    }

    init() {

        var btn = this.$el.querySelector('.js-header-start')

        btn && btn.addEventListener('click', buttonHandler.bind(this))

    }
}

function buttonHandler() {
    this.hide()
}