import axios from 'axios'

const URL = process.env.VUE_APP_API_URL

class PostService {
    createPost(payload) {
        return axios.post(URL + "posts/detail",
            payload
        )
    }

    createComment(payload) {
        return axios.post(URL + "comments", {
            type: payload.type,
            post_id: payload.post_id,
            content: payload.content
        })
    }

    // 스터디 검색에 들어가는 내용들이 있어야 한다.
    // getStudy(payload) {
    //     //const { minorclass, majorclass}  = payload
    //     //return axios.get

    // }
    getPostNumber(payload) {
        return axios.get(URL + "posts/number",
            {
                params: {
                    board: payload.board,
                    type: payload.type,
                    study_id: payload.study_id
                }
            })
    }

    getAllPost(payload) {
        return axios.get(URL + "posts/list",
            {
                params: {
                    board: payload.board,
                    type: payload.type,
                    study_id: payload.study_id,
                    offset: payload.offset,
                }
            })
    }

    getPostContents(payload) {
        return axios.get(URL + "posts", {
            params: {
                type: payload.type,
                post_id: payload.post_id,
            }
        })
    }

    getPostComments(payload) {
        return axios.get(URL + "comments", {
            params: {
                type: payload.type,
                post_id: payload.post_id
            }
        })
    }
}

export default new PostService()