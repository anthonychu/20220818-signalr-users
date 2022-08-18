module.exports = async function (context, req, connectionInfo) {
    const user = req.user;
    context.log(req.user);
    if (req.user.username !== req.params.userid) {
        throw new Error('Unauthorized');
    }
    context.res.body = connectionInfo;
}