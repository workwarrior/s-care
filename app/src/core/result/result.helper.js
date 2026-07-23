import { Result } from "./result.js";

export async function execute(action){

    try{

        const data = await action();

        return Result.ok(data);

    }catch(err){

        return Result.fail(err);

    }

}