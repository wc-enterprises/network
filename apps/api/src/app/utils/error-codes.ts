export const error = {
  missingMandatoryParam: (param) => `N001 - Missing ${param}`,
  unhandledError: `N002 - Unhandled error.`,
  usernameTaken: `N003 - Username taken. Try different one.`,
  isRequired: (param) => `N004 - Required ${param}`,
  invalidCred: `N005 - username or password is wrong.`,
  invalidId: (id) => `N006 - Invalid id. ${id}`,
};
