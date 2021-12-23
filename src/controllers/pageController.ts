import { Request, Response } from "express"
import { Pet } from '../models/Pet'
import { createMenuObject } from '../helpers/createMenuObject'

export const home = (req: Request, res: Response) => {
    let all = Pet.getAll()

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list: all
    })
}

export const dogs = (req: Request, res: Response) => {
    let dogs = Pet.getFromType('dog')

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list: dogs
    })
}

export const cats = (req: Request, res: Response) => {
    let cats = Pet.getFromType('cat')

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list: cats
    })
}

export const fishes = (req: Request, res: Response) => {
    let fishes = Pet.getFromType('fish')

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list: fishes
    })
}

