import { resolve } from 'path';
import { PocketIc } from '@hadronous/pic';
import { idlFactory } from './declarations/azle_hello_world';
import {_SERVICE} from "./declarations/azle_hello_world/azle_hello_world.did";

async function main() {
    const wasmPath = resolve('.azle/azle_hello_world/azle_hello_world.wasm');

    const pic = await PocketIc.create();
    const fixture = await pic.setupCanister<_SERVICE>(idlFactory, wasmPath);
    const { actor } = fixture;

    // perform tests...
    await actor.setMessage("ahoj");

    const res = await actor.getMessage();
    console.debug('res', res);

    await pic.tearDown();
}

main();

