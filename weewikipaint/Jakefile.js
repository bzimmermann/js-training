/*global desc, task, jake, fail, complete */
(function () {
    "use strict";

    task("default", ["lint"]);

    desc("Lint everything");

    task("lint", [], function () {
        var lint = require("./build/lint/lint_runner.js");
        lint.validateFileList(filesToValidate(), nodeLintOptions(), {});
    });

    function filesToValidate() {
        return new jake.FileList()
            .include("**/*.js")
            .exclude("node_modules")
            .exclude("_lint_runner_test.js")
            .toArray();
    }

    function nodeLintOptions() {
        return {
            bitwise: true,
            curly: false,
            eqeqeq: true,
            forin: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            regexp: true,
            undef: true,
            strict: true,
            trailing: true,
            node: true
        };
    }

})();

