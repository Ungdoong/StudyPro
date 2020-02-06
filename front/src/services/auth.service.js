import axios from 'axios'
import AuthHeader from './auth.header'

const URL = process.env.VUE_APP_LOCAL_URL + 'users/'

class AuthService {
    // 초기 유저 정보업데이트
    checkUserDefault() {
        this.changeHeadersToken(AuthHeader.getToken())
        return axios.post(URL + 'token')
            .then(this.handleResponse)
            .then(res => {
                console.log(res.data)
                this.changeHeadersToken(res.data.user.accessToken)
                if (res.data.user) {
                    this.setToken(res.data.user)
                } else {
                    return res.data
                }
            })
    }

    // 헤더에 포함되는 토큰 업데이트
    changeHeadersToken(token) {
        axios.defaults.headers.common['Authorization'] = token;
    }

    // 로그인
    login(user) {
        return axios
            .post(URL + 'signin', {
                email: user.email,
                password: user.password
            })
            .then(this.handleResponse)
            .then(
                response => {
                    return response.data.user;
                })
    }

    // 로그아웃
    logout() {
        localStorage.removeItem('user')
        sessionStorage.removeItem('user')
    }

    register(formData) {
        return axios.post(URL + 'signup', formData).then(
            res => {
                if (res.data.state == 'success') {
                    return Promise.resolve(res.data)
                } else {
                    return Promise.reject(res.data)
                }
            }
        )
    }

    handleResponse(response) {
        if (response.status === 401) {
            this.logout()
            location.reload(true)

            const error = response.data.state
            return Promise.reject(error)
        }

        return Promise.resolve(response)
    }

    setToken(user) {
        if (user.loginRemain) {
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            sessionStorage.setItem('user', JSON.stringify(user))
        }
    }
}

export default new AuthService()