import { Canister, query, text, update, Void } from 'azle';

// This is a global variable that is stored on the heap
let haha = '';

export default Canister({
    // Query calls complete quickly because they do not go through consensus
    getMessage: query([], text, () => {
        return haha;
    }),
    // Update calls take a few seconds to complete
    // This is because they persist state changes and go through consensus
    setMessage: update([text], Void, (newMessage) => {
        haha = newMessage; // This change will be persisted
    }),

    getRoman: query([], text, () => {
        return 'roman';
    })
});

