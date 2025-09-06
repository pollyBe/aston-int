import { withLoading } from '@/shared/lib/hoc/WithLoading'
import { PostsList as BasePostList } from './PostsList'

export const PostsListWithLoading = withLoading(BasePostList)
