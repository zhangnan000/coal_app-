import Axios from '@/utils/request'
// 我的发布列表页
const myReleaseList = query => {
    return Axios({
        url: '/Listing/GetAllList',
        method: 'get',
        params:query
    })
}
export {
    myReleaseList
}