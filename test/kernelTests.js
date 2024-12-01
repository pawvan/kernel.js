function resetKernel() {
    kernel.folders = {
        '/': [],
        '/folder1': [],
        '/folder2': [],
    };
    kernel.commandHistory = [];
}

function testKernel() {
    let output;

    resetKernel();
    output = kernel.handleCommand('start / process1');
    console.assert(output.includes('Started process: process1'), `Test 1 Failed: ${output}`);

    output = kernel.handleCommand('start / process2');
    console.assert(output.includes('Started process: process2'), `Test 2 Failed: ${output}`);

    output = kernel.handleCommand('list /');
    console.assert(output.includes('process1') && output.includes('process2'), `Test 3 Failed: ${output}`);

    const processId = kernel.folders['/'][0].id;
    output = kernel.handleCommand(`stop / ${processId}`);
    console.assert(output.includes('Stopped process'), `Test 4 Failed: ${output}`);

    output = kernel.handleCommand('list /folder1');
    console.assert(output === 'No processes in folder /folder1.', `Test 5 Failed: ${output}`);

    output = kernel.handleCommand('start /folder1 process3');
    console.assert(output.includes('Started process: process3'), `Test 6 Failed: ${output}`);

    output = kernel.handleCommand('list /folder1');
    console.assert(output.includes('process3'), `Test 7 Failed: ${output}`);
}

testKernel();
