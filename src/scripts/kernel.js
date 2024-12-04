// kernel.js
const kernel = {
    folders: {
        '/': [],
        '/folder1': [],
        '/folder2': [],
    },
    commandHistory: [],

    startProcess(folder, name) {
        if (!this.folders[folder]) {
            this.folders[folder] = [];
        }

        const process = {
            id: Date.now(),
            name: name,
            status: 'running',
        };

        this.folders[folder].push(process);
        return process;
    },

    listProcesses(folder) {
        if (!this.folders[folder]) {
            return `Error: Folder does not exist.`;
        }

        if (this.folders[folder].length === 0) {
            return `No processes in folder ${folder}.`;
        }

        return this.folders[folder]
            .map((p) => `${p.name} (ID: ${p.id}, Status: ${p.status})`)
            .join('\n');
    },

    stopProcess(folder, id) {
        const process = this.folders[folder]?.find(p => p.id === id);
        if (process) {
            process.status = 'stopped';
        }
    },

    handleCommand(command) {
        this.commandHistory.push(command);
        const [cmd, ...args] = command.split(' ');

        switch (cmd) {
            case 'start':
                const folder = args[0] || '/';
                const processName = args.slice(1).join(' ') || 'Unnamed Process';
                const process = this.startProcess(folder, processName);
                return `Started process: ${process.name} (ID: ${process.id}) in folder ${folder}`;
            case 'list':
                const listFolder = args[0] || '/';
                return this.listProcesses(listFolder);
            case 'stop':
                if (args.length > 1) {
                    const stopFolder = args[0];
                    const processId = parseInt(args[1]);
                    this.stopProcess(stopFolder, processId);
                    return `Stopped process with ID: ${args[1]} in folder ${stopFolder}`;
                }
                return 'Error: No folder or process ID provided.';
            case 'clear':
                return ''; // Clear the output screen
            case 'help':
                return `Available commands:
                - start <folder> <process_name> : Start a process
                - list <folder> : List processes in folder
                - stop <folder> <process_id> : Stop a process
                - clear : Clear the terminal
                - help : Show available commands`;
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
        
        if (response) {
            output.textContent += `\n$ ${command}\n${response}`;
        }

        commandInput.value = ''; // Clear input field after execution
        output.scrollTop = output.scrollHeight; // Auto-scroll to the bottom
        e.preventDefault(); // Prevent page reload on enter
    }
});
