import { TProcessor } from "./processor.interface";
import { Processor } from "./processor.model";

const createProcessorIntoDB = async (payload: TProcessor) => {
    const result = await Processor.create(payload);
    return result;
}

export const ProcessorServices = {
    createProcessorIntoDB
}