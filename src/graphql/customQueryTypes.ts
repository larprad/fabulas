import { GetStory_customQuery, ListStorys_customQuery, ListBlocks_customQuery, GetBlock_customQuery } from '../API'
import { DeepOmit } from '../utils/DeepOmit'

export type GetStoryQuery = DeepOmit<Exclude<GetStory_customQuery, null | undefined>, '__typename'>
export type Story = DeepOmit<Exclude<GetStory_customQuery['getStory'], true>, '__typename'>

export type ListStoriesQuery = DeepOmit<Exclude<ListStorys_customQuery, null | undefined>, '__typename'>
export type Stories = DeepOmit<Exclude<ListStorys_customQuery['listStorys'], true>, '__typename'>

export type ListBlocksQuery = DeepOmit<Exclude<ListBlocks_customQuery, null | undefined>, '__typename'>
export type Blocks = DeepOmit<Exclude<ListBlocks_customQuery['listBlocks'], true>, '__typename'>

export type GetBlockQuery = DeepOmit<Exclude<GetBlock_customQuery, null | undefined>, '__typename'>
export type Block = DeepOmit<Exclude<GetBlock_customQuery['getBlock'], true>, '__typename'>
