import { Request, Response, NextFunction } from 'express'

interface Hashtag {
    name: String
}

const HashTags = ['Blubb', 'Blafasel', 'trööt', 'weissnich']

const getAllTags = (req: Request, res: Response, next: NextFunction) => {
    console.log('Hit controller')
    res.status(200).json(HashTags).send()
}

export default { getAllTags }

