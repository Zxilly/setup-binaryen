import { installBinaryen } from "./install";

type Inputs = {
    version: string;
};

export const run = async (inputs: Inputs): Promise<void> => {
    await installBinaryen(inputs.version);
};
