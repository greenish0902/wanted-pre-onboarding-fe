/**
 * @filename : RegexHelper.js
 * @author : greenish0902@gmail.com
 * @description : 정규표현식 검사 수행
 */

import BadRequestException from '../exceptions/BadRequestException';

class RegexHelper {
  value(field, msg) {
    const content = field.value;
    if (
      content === undefined ||
      content === null ||
      (typeof content === 'string' && content.trim().length === 0)
    ) {
      throw new BadRequestException(msg, field);
    }
    return true;
  }

  field(field, msg, regexExpr) {
    this.value(field, msg);
    if (!regexExpr.test(field.value.trim())) {
      throw new BadRequestException(msg, field);
    }
    return true;
  }

  email(field, msg) {
    return this.field(field, msg, /@./i);
  }

  password(field, msg) {
    return this.field(
      field,
      msg,
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/g
    );
  }
}

export default RegexHelper;
