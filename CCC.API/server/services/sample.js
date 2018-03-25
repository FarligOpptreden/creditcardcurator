import { konsole, CliColors } from '../../handlr';

const LOGGING_SCOPE = val => `${CliColors.BgWhite}${CliColors.FgBlue}SampleService.${val}`;

class Service {
  constructor() {
    // TODO
  }

  getEcho() {
    return new Promise((resolve, reject) => {
      konsole.log('No arguments', LOGGING_SCOPE('getEcho'));
      resolve({ success: true, data: { api: 'getEcho' } });
    });
  }

  postEcho(args) {
    return new Promise((resolve, reject) => {
      konsole.log(args, LOGGING_SCOPE('getEcho'));
      resolve({ success: true, data: args });
    });
  }
}

export const SampleService = new Service();