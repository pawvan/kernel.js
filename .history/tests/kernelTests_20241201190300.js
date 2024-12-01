function resetKernel() {
    // Reset kernel folders for each test
    kernel.folders = {
        '/': [],
        '/folder1': [],
        '/folder2': [],
    };
    kernel.commandHistory = [];
}

// Run your tests with the reset state
function testKernel() {
    let output;

    // Test 1: Start process1
    resetKernel();
    output = kernel.handleCommand('start / process1');
    console.assert(output.includes('Started process: process1'), `Test 1 Failed: ${output}`);

    // Test 2: Start process2
    output = kernel.handleCommand('start / process2');
    console.assert(output.includes('Started process: process2'), `Test 2 Failed: ${output}`);

    // Test 3: List processes in root folder
    output = kernel.handleCommand('list /');
    console.assert(output.includes('process1') && output.includes('process2'), `Test 3 Failed: ${output}`);

    // Test 4: Stop process in the root folder
    const processId = kernel.folders['/'][0].id;
    output = kernel.handleCommand(`stop / ${processId}`);
    console.assert(output.includes('Stopped process'), `Test 4 Failed: ${output}`);

    // Test 5: List processes in folder1 (should be empty)
    output = kernel.handleCommand('list /folder1');
    console.assert(output === 'No processes in folder /folder1.', `Test 5 Failed: ${output}`);

    // Test 6: Start process in folder1
    output = kernel.handleCommand('start /folder1 process3');
    console.assert(output.includes('Started process: process3'), `Test 6 Failed: ${output}`);

    // Test 7: List processes in folder1
    output = kernel.handleCommand('list /folder1');
    console.assert(output.includes('process3'), `Test 7 Failed: ${output}`);
}

testKernel();
