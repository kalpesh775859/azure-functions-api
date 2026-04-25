module.exports = async function (context, req) {
    const name = req.query.name || "User";
    context.res = {
        body: "Hello " + name + " from Azure Functions!"
    };
};
