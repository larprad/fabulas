import { GetStory_customQuery, ListStorys_customQuery } from '../API'
import { DeepOmit } from '../utils/DeepOmit'

export type GetStoryQuery = DeepOmit<Exclude<GetStory_customQuery, null | undefined>, '__typename'>
export type Story = DeepOmit<Exclude<GetStory_customQuery['getStory'], null | undefined>, '__typename'>

export type ListStorysQuery = DeepOmit<Exclude<ListStorys_customQuery, null | undefined>, '__typename'>
export type Storys = DeepOmit<Exclude<ListStorys_customQuery['listStorys'], null | undefined>, '__typename'>
