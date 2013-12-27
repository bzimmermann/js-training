/*global desc, task, jake, fail, complete */
(function () {
    "use strict";

    desc("Build and Test");
    task("default", ["lint", "test"]);

    desc("Lint everything");

    task("lint", [], function () {
        var lint = require("./build/lint/lint_runner.js");
        var passed = lint.validateFileList(filesToValidate(), nodeLintOptions(), {});
        if (!passed) fail("Lint failed");
    });

    desc("Test everything");

    task("test", [], function() {
        console.log("test go here");
    });

    desc("Integration");

    task("integration", ["default"], function () {
        console.log("1. Make sure 'git status' is clean");
        console.log("2. Build on the integration box");
        console.log("   a. Walk over the integration box");
        console.log("   b. 'git pull'");
        console.log("   c. './jake.sh");
        console.log("   d. If jake fails, stop! Try again after fixing the issue");
        console.log("3. 'git checkout integration'");
        console.log("4. 'git merge master --no-ff --log");
        console.log("Integration logic goes here");
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

