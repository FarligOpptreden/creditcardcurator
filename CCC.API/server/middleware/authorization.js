import { konsole, CliColors} from '../../handlr';

export default class Authorization {
  static get(app) {
    app.all("*", (req, res, next) => {
      konsole.log('TODO', `${CliColors.BgRed}${CliColors.FgWhite}Authorization`);
      next();
    });
  }
}