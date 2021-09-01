import axios from "axios"

const baseURL = "https://jsonplaceholder.typicode.com"
const axiosInstance = axios.create({ baseURL })

// log every request made
axiosInstance.interceptors.request.use((req) => {
    console.log(`${req.method}:${req.url}`)
    return req
})

// add error handling for generic errors
axiosInstance.interceptors.response.use(
    (res) => {
        return res
    },
    (err) => {
        const requestUrl = `${err?.config?.method || ""}:${err?.config?.url || ""}`

        // request cancelled
        if (axios.isCancel(err)) {
            console.log(`RequestCancelled: ${err.message}`)
            throw { value: "RequestCancelled", message: "the request was cancelled using a cancel token" }

            // request was made and got an error (status code not in 2xx range)
        } if (err.response) {
            const status = err?.response?.status || "none"
            console.log(`${requestUrl} => RequestFailed: status ${status}`)
            console.log(JSON.stringify(err?.response?.data, null, 2))

            throw {
                value: "ServerError",
                message: "server returned an error",
                data: err?.response?.data,
            }

            // request was made but no response was received
        } else if (err.request) {
            console.log(`${requestUrl} => NoResponseReceived`)
            throw { value: "NoResponseReceived", message: "no response received" }

            // failed to make a request to the server
        } else {
            console.log("NoRequestMade: could not make request to server")
            throw { value: "NoRequestMade", message: "could not make request to server" }
        }
    },
)

export default axiosInstance
