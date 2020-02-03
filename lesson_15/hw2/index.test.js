import { createLogger } from './index.js';


it('should return object with next methods: warn, error, log, getRecords', () => {
    const testLogger = createLogger();

    expect(Object.keys(testLogger)).toEqual(['warn', 'error', 'log', 'getRecords']);
});

it('should save in memory logged messages', () => {
    const testLogger = createLogger();

    expect(testLogger.getRecords().length).toEqual(0)

    for (let i = 0; i < 5; i++) {
        testLogger.warn(`Warn test ${i}`);
    }

    for (let i = 0; i < 5; i++) {
        testLogger.error(`Error test ${i}`);
    }

    for (let i = 0; i < 5; i++) {
        testLogger.log(`Log test ${i}`);
    }

    expect(testLogger.getRecords().length).toEqual(15)
});

it('should return warn, error or log message only by calling getRecords with a sprcial argument', () => {
    const testLogger = createLogger();

    expect(testLogger.getRecords().length).toEqual(0)

    for (let i = 0; i < 5; i++) {
        testLogger.warn(`Warn test ${i}`);
    }

    for (let i = 0; i < 4; i++) {
        testLogger.error(`Error test ${i}`);
    }

    for (let i = 0; i < 3; i++) {
        testLogger.log(`Log test ${i}`);
    }

    expect(testLogger.getRecords('warn').length).toEqual(5);
    expect(testLogger.getRecords('error').length).toEqual(4);
    expect(testLogger.getRecords('log').length).toEqual(3);
});

it('should save message, date and type of log', () => {
    const testLogger = createLogger();

    testLogger.warn('Test');

    const warnLog = testLogger.getRecords('warn')[0]

    expect(Object.keys(warnLog)).toEqual(['message', 'dateTime', 'type']);
    expect(warnLog.message).toEqual('Test');
});

it('should return messages descedently', () => {
    const testLogger = createLogger();

    testLogger.warn(`Warn test 1`);
    testLogger.error(`Error test 1`)

    const firstLog = testLogger.getRecords()[0]
    
    expect(firstLog.type).toEqual('error'); 
});