import * as core from "@actions/core";
import { run } from "./run.js";

const main = async (): Promise<void> => {
    await run({
        version: core.getInput("version", { required: true }),
    });
};

main().catch((e: Error) => {
    core.setFailed(e);
    console.error(e);
});
