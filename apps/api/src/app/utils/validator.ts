import { error } from './error-codes';
import { responseObj } from './util';

export function throwIfMandatoryParamsMissing(
  mandatoryParams: string[],
  incomingObject: unknown
) {
  mandatoryParams.forEach((mandatoryParam) => {
    const incomingParams = Object.keys(incomingObject);
    if (
      !incomingParams.includes(mandatoryParam) ||
      !incomingObject[mandatoryParam]
    ) {
      throw responseObj('ERROR', error.missingMandatoryParam(mandatoryParam));
    }
  });
}
