function ensure(value) {
    // Your code goes here
    if (value === undefined || value === "") return 'ERROR : value must be filled'
    else { return value }
    }
    try {
    console.log(ensure());
    } catch(err) {
    console.log(err);
    }