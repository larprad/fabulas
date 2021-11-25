import { GetStory_customQuery, ListStorys_customQuery } from '../API'
import { DeepOmit } from '../utils/DeepOmit'

export type GetStoryQuery = DeepOmit<Exclude<GetStory_customQuery, null | undefined>, '__typename'>
export type Story = DeepOmit<Exclude<GetStory_customQuery['getStory'], true>, '__typename'>

export type ListStoriesQuery = DeepOmit<Exclude<ListStorys_customQuery, null | undefined>, '__typename'>
export type Stories = DeepOmit<Exclude<ListStorys_customQuery['listStorys'], true>, '__typename'>
