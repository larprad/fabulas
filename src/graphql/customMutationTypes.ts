import { CreateStory_customMutation, DeleteStory_customMutation } from '../API'
import { DeepOmit } from '../utils/DeepOmit'

export type CreateStoryMutation = DeepOmit<Exclude<CreateStory_customMutation, null | undefined>, '__typename'>
export type DeleteStoryMutation = DeepOmit<Exclude<DeleteStory_customMutation, null | undefined>, '__typename'>
