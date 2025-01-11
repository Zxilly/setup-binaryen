import { installBinaryen } from "./install";

type Inputs = {
    version: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const run = async (inputs: Inputs): Promise<void> => {
    installBinaryen(inputs.version);
};
