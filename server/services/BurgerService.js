import { FAKEDB } from "../db/FAKEDB";

let id = 2

class BurgerService{
    getAll() {
        return FAKEDB.burger
    }

    create(newBurger) {
        newBurger.id = id++
        FAKEDB.burger.push(newBurger)
        return newBurger
    }

    delete(id) {
        findBurger(id)
        FAKEDB.burger = FAKEDB.burger.filter(b => b.id != id)
    }
    edit(editedBurger, id) {
        const foundBurger = findBurger(id)
        Object.keys(editedBurger).forEach(key => {
            foundBurger[key] = editedBurger[key]
        })
        return foundBurger
    }

    getOne(id) {
        const foundBurger = findBurger(id)
        return foundBurger
    }
}


function findBurger(id) {
    let foundBurger = FAKEDB.burger.find(b => b.id == id)
    if (!foundBurger) { throw new Error("invalid id") }
    return foundBurger
}

export const burgerService = new BurgerService()