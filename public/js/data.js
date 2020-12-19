"use strict"
class Data {
    static get dataNameKey() {
        return '___cite_tube___xlkw98o3hl8o78us'
    }
    static get exists() {
        if (localStorage) {
            if (localStorage.getItem(this.dataNameKey))
                return true
            else
                return false
        }
        return false
    }
    static set(collection, data) {
        var _data = localStorage.getItem(this.dataNameKey)
        if (!_data)
            _data = {}
        else
            _data = JSON.parse(_data)
        _data[collection] = data
        localStorage.setItem(this.dataNameKey, JSON.stringify(_data))
        return this
    }
    static get(collection) {
        var _data = localStorage.getItem(this.dataNameKey)
        if (_data) {
            _data = JSON.parse(_data)
            return _data[collection]
        }
        return false
    }
}