module.exports = {
    status: {
        SUCCESS: { statusCode: 200, statusDescription: 'Success' },
        INTERNAL_ERR: { statusCode: 103, statusDescription: 'Internal Error' },
        REGISTER_FAIL: { statusCode: 403, statusDescription: 'Registration failed'},
        NO_ACCESS: { statusCode: 404, statusDescription: 'Forbidden, no access'},
        NO_USER: {statusCode: 400, statusDescription: 'No Insurance Company found'},
        REGISTER_CUSTOMER_FAIL: { statusCode: 403, statusDescription: 'Register Customer failed'},
        REGISTER_DEVICE_FAIL: { statusCode: 403, statusDescription: 'Register Device failed'},
        LOGIN_FAIL: { statusCode: 403, statusDescription: 'Login failed'},
    },
    TOKEN_SECRET_KEY: '0f4e6141-1889-4059-9adb-ad5146ddee60'
}