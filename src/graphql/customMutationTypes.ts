import { CreateStory_customMutation } from '../API'
import { DeepOmit } from '../utils/DeepOmit'

export type CreateStoryMutation = DeepOmit<Exclude<CreateStory_customMutation, null | undefined>, '__typename'>
export type Story = DeepOmit<Exclude<CreateStory_customMutation['createStory'], true>, '__typename'>
