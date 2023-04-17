import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = [
            {id: 1, name: "Футболки"},
            {id: 2, name: "Наклейки"},
            {id: 3, name: "Кепки"},
            {id: 4, name: "Картхолдеры"},
            {id: 5, name: "Кофты"},
            {id: 6, name: "Браслеты"}
        ]
        this._brands = [
            {id: 1, name: "Гучи"},
            {id: 2, name: "Прада"},
            {id: 3, name: "Гучи"},
            {id: 4, name: "Прада"},

        ]
        this._device = [
            {id: 1, name: "желтая футболка", price: "2500", img: 'хз'},
            {id: 2, name: "желтая футболка", price: "2500", img: 'хз'},
            {id: 3, name: "желтая футболка", price: "2500", img: 'хз'},
            {id: 4, name: "желтая футболка", price: "2500", img: 'хз'},
            {id: 5, name: "желтая футболка", price: "2500", img: 'хз'},
            {id: 6, name: "желтая футболка", price: "2500", img: 'хз'},
            {id: 7, name: "желтая футболка", price: "2500", img: 'хз'},
            {id: 8, name: "желтая футболка", price: "2500", img: 'хз'},

        ]
        this._selectedType = {}
        this._selectedBrand = {}
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

    setSelectedType(type){
        this._selectedType=type;
    }
    setSelectedBrand(brand){
        this._selectedBrand=brand;
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._device
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}