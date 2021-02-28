import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import SurveysRepository from '../repositories/SurveysRepository'
import * as yup from 'yup'
import { AppError } from '../errors/AppError'

class SurveysController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body

    const schema = yup.object().shape({
      title: yup.string().required('Title is required'),
      description: yup.string().required('Description is required'),
    })

    try {
      await schema.validate(request.body, { abortEarly: false })
    } catch (err) {
      throw new AppError(err)
    }

    const surveysRepository = getCustomRepository(SurveysRepository)

    const survey = surveysRepository.create({
      title,
      description,
    })

    await surveysRepository.save(survey)

    return response.status(201).json(survey)
  }

  async show(request: Request, response: Response) {
    const surveysRepository = getCustomRepository(SurveysRepository)

    const surveys = await surveysRepository.find()

    return response.json(surveys)
  }
}

export default SurveysController
