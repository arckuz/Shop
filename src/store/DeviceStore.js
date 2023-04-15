import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = [
            {id: 1, name: "Футболки"},
            {id: 2, name: "Наклейки"}
        ]
        this._brands = [
            {id: 1, name: "Футболки"},
            {id: 2, name: "Наклейки"}
        ]
        this._device = [
            {id: 1, name: "желтая футболка", price: "2500", img: 'хз'},
            {id: 2, name: "желтая футболка", price: "2500", img: 'хз'},
            {id: 3, name: "желтая футболка", price: "2500", img: 'хз'},
            {id: 4, name: "желтая футболка", price: "2500", img: 'хз'},

        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevice(device){
        this._device = device
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get device(){
        return this._device
    }
}