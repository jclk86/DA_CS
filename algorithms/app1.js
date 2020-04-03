function areThereDuplicates(...theArgs) {
    if(theArgs.length < 2) {
        return false;
    }
    theArgs.sort();
    let start = 0;
    let next = 1; 
    while(next < theArgs.length) {
        if(theArgs[start] === theArgs[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false; 
}

console.log(areThereDuplicates('d', 'f', 2, 'b', 'monkey', 'a', 2));

