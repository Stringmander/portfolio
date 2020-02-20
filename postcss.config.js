module.exports = {
    plugins: [
        require("postcss-easy-import"),
        require("tailwindcss"),
        process.env.NODE_ENV === "production"
            ? [
                "@fullhuman/postcss-purgecss",
                {
                    content: [
                        "./pages/**/*.{js,jsx,ts,tsx}",
                        "./components/**/*.{js,jsx,ts,tsx}"
                    ],
                    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
                }
            ]
            : undefined,
        require("autoprefixer"),
        require("cssnano")
    ]
};
