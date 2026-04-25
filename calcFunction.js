module.exports = async function (context, req) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    context.res = {
        body: "Result: " + (a + b)
    };
};
