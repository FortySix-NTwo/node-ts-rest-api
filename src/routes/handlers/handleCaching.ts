import { Request, Response, NextFunction } from 'express'

import { redisClient } from '../../config'
import { HTTP400Error } from '../../utils'

const handleCaching = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const key: string = req.params.key || req.body.key || req.query.key
    if (!key) {
      throw new HTTP400Error()
    }
    const result = redisClient.get(key)
    if (!result) {
      return
    }
    res.status(200).send(result)
  } catch (error) {
    next()
  }
}

export default [handleCaching]
