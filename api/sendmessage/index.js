module.exports = async function (context, req) {
    context.bindings.message = {
        target: 'message',
        arguments: [
            'hello'
        ],
        userId: 'danish'
    }
}