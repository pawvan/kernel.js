
// kernel.js

// Simulated kernel components
const kernel = {
    processes: [],
    commandHistory: [],

    // Function to start a new process
    startProcess(name) {
        const process = {
            id: Date.now(), // Unique ID based on timestamp
            name: name,
            status: 'running',
        };
        this.processes.push(process);
        return process;
    },

    // Function to list all processes
    listProcesses() {
        return this.processes.map(p => `${p.name} (ID: ${p.id}, Status: ${p.status})`).join('\n');
    },

    stopProcess(id) {
        const process = this.processes.find(p => p.id === id);
        if (process) {
            process.status = 'stopped';
        }
    },

    handleCommand(command) {
        this.commandHistory.push(command);
        const [cmd, ...args] = command.split(' ');

        switch (cmd) {
            case 'start':
                const process = this.startProcess(args.join(' '));
                return `Started process: ${process.name} (ID: ${process.id})`;
            case 'list':
                return this.listProcesses();
            case 'stop':
                if (args.length > 0) {
                    this.stopProcess(parseInt(args[0]));
                    return `Stopped process with ID: ${args[0]}`;
                }
                return 'Error: No process ID provided.';
            default:
                return 'Error: Command not found.';
        }
    }
};


const output = document.getElementById('output');
const commandInput = document.getElementById('commandInput');


commandInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const command = commandInput.value.trim();
        const response = kernel.handleCommand(command);
        output.textContent += `\n$ ${command}\n${response}`;
        commandInput.value = '';
        e.preventDefault(); // Prevent default action
    }
});
