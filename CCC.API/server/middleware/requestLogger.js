import { konsole, CliColors} from '../../handlr';

export default class RequestLogger {
  static get(app) {
    app.all("*", (req, res, next) => {
      konsole.log('TODO', `${CliColors.BgYellow}${CliColors.FgBlack}Request logging`);
      next();
    });
  }
}