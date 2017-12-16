'use strict';

const path    = require('path');
const globby  = require('globby');

// Create the webpack entries object.
const entries = pattern => globby.sync(pattern)
    .reduce((files, f) => {
        let file = path.basename(f, '.js');
        files[file] = path.resolve(f);
        return files;
    }, {});

const globDefineFiles = pattern => globby.sync(pattern)
    .reduce((files, f) => {
        let cmp = path.basename(path.parse(f).dir);
        files[cmp] = f.replace(/^src\/app/, '.').replace(/.js$/, '');
        return files;
    }, {});

module.exports = () => {
    return {
        spa: true,
        env: "development",
        entries: entries("src/app/*.js"),
        defines: {
            "global": "window",
            "log": "console.log",
            restAPI: JSON.stringify(process.env.REST_API_URL || "http://demo3914762.mockable.io"),
            allInitialStates: JSON.stringify(globDefineFiles('src/app/components/**/state.js')),
            allRoutes: JSON.stringify(globDefineFiles('src/app/components/**/route.js')),
            allActions: JSON.stringify(globDefineFiles('src/app/components/**/actions.js')),
            allActionTypes: JSON.stringify(globDefineFiles('src/app/components/**/actionTypes.js')),
            allServices: JSON.stringify(globDefineFiles('src/app/components/**/services.js')),
            allReducers: JSON.stringify(globDefineFiles('src/app/components/**/reducers.js')),
        },
        browsers: "last 1 version",
        port: {
            browsersync: 3030,
        },
        cssPreProcessor: 'sass',
        watch: {
            js: [
                "src/app/**/*",
                "!{src/assets/design-system,src/assets/design-system/**}",
            ],
            markup: [
                "src/**/*.html",
                "src/assets/style/**/*.css",
                "!{src/assets/design-system,src/assets/design-system/**}",
            ],
            style: [
                "src/assets/style/**/*.less",
                "src/assets/style/**/*.scss",
                "src/assets/style/**/*.sass",
                "src/assets/design-system/src/assets/toolkit/styles/**/*.scss",
            ],
            assets: [
                "src/assets/**/*",
                "!{src/assets/style,src/assets/style/**}",
                "!{src/assets/js,src/assets/js/**}",
                "!{src/assets/design-system,src/assets/design-system/**}",
            ],
            toolkit: {
                assets: [
                    "src/assets/design-system/src/assets/toolkit/**",
                    "!{src/assets/design-system/src/assets/toolkit/scripts,src/assets/design-system/src/assets/toolkit/scripts/**}",
                    "!{src/assets/design-system/src/assets/toolkit/styles,src/assets/design-system/src/assets/toolkit/styles/**}",
                ],
            },
        },
        src: {
            js: [
                "src/app/**/*",
                "!{src/assets/design-system,src/assets/design-system/**}",
            ],
            markup: [
                "src/**/*.html",
                "!src/assets/design-system/**",
                "!{src/assets/design-system,src/assets/design-system/**}",
            ],
            style: [
                "src/assets/style/*.less",
                "src/assets/style/*.scss",
                "src/assets/style/*.sass",
                "!{src/assets/design-system,src/assets/design-system/**}",
            ],
            assets: [
                "src/assets/**/*",
                "!{src/assets/style,src/assets/style/**}",
                "!{src/assets/js,src/assets/js/**}",
                "!{src/assets/design-system,src/assets/design-system/**}",
            ],
            toolkit: {
                assets: [
                    "src/assets/design-system/src/assets/toolkit/**",
                    "!{src/assets/design-system/src/assets/toolkit/scripts,src/assets/design-system/src/assets/toolkit/scripts/**}",
                    "!{src/assets/design-system/src/assets/toolkit/styles,src/assets/design-system/src/assets/toolkit/styles/**}",
                ],
            },
            includes: "./node_modules",
            appdir: path.resolve(__dirname, 'src/app'),
            rootdir: path.resolve(__dirname),
        },
        dest: {
            dist: 'dist',
            js: 'dist/assets/js',
            markup: 'dist',
            style: 'dist/assets/style',
            assets: 'dist/assets',
        },
    };
};
