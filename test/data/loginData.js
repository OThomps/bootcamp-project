module.exports =
    //storing user data
    [
        {
            name: "no_email",
            email: "",
            password: "123abcD!",
            expectedUrl: "/"

        },
        {
            name: "no_pwd",
            email: "othompson+2@qualityworkscg.com",
            password: "",
            expectedUrl: "/"
        },
        {
            name: "default_user",
            email: "test@tester.com",
            password: "123abcD!",
            expectedUrl: "https://ui-automation-camp.vercel.app/products"
        },
    ];
