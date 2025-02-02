import ValidatorService from './ValidatorService'


test('Validator service: valid', () => {
    const service = new ValidatorService();

    const sleepJson = {
        'id': 1, 
        'start': '2016-11-01T23:00:00-05:00', 
        'end': '2016-11-02T07:05:00-05:00', 
        'numberOfInteruptions': 1, 
        'comment': ''
    }

    const result = service.validateSleepJson(sleepJson)

    expect(result).toBeTruthy()
})

test('Validator service: fails', () => {
    const service = new ValidatorService();

    const sleepJson = {
        'id': 1, 
        'start': '2016-1-01T23:00:00-05:00', 
        'end': '2016-11-02T07:05:00-05:00', 
        'numberOfInteruptions': 1, 
        'comment': ''
    }

    const result = service.validateSleepJson(sleepJson)
    const errors = service.getErrors()

    expect(result).toBeFalsy()
    expect(errors).toHaveLength(1)
    expect(errors[0].dataPath).toEqual(".start")
})