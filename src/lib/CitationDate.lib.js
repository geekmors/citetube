
class CitationDate {
    constructor(date = "") {
        this._date = new Date(date)
        this._months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
    }
    get APADateFormat() {
        return (
            this._date.getFullYear()
            + ', '
            + this._months[this._date.getMonth()]
            + ' '
            + this._date.getDate()
        )
    }
    get MLADateFormat() {
        return (
            this._date.getDate()
            + ' '
            + this.getMonthAcro(this._date.getMonth())
            + ' '
            + this._date.getFullYear()
        )
    }
    getMonthAcro(monthIDX) {
        let month = this._months[monthIDX]
        return month.substr(0, 3) + '.'
    }
}
module.exports = CitationDate