export const createLogger = () => {
    let memory = [];

    const createLog = (loggedMessage, typeOfLog) => {
        let loggedData = {
            'message': loggedMessage,
            'dateTime': new Date(),
            'type': typeOfLog,
        };

        memory.unshift(loggedData);
    }

    const warn = (warningMessage) => {
        createLog(warningMessage, 'warn');
    };

    const error = (errorMessage) => {
        createLog(errorMessage, 'error');
    };

    const log = (loggedMessage) => {
        createLog(loggedMessage, 'log');
    };

    const getRecords = (type) => {
        switch (type) {
            case ('warn'):
                return memory.filter(element => element.type === 'warn')
            
            case ('error'):
                return memory.filter(element => element.type === 'error')
    
            case ('log'):
                return memory.filter(element => element.type === 'log')

            case (undefined):
                return memory

            default:
                return "Unknown command"
        }
    }

    return {
        warn,
        error,
        log,
        getRecords,
    }
}