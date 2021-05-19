const InvalidAccessException = use("App/Exceptions/InvalidAccessException")

class AuthorizationService{
  verifyPermission(resource, user) {
    if (resource.user_id !== user.id) {
      throw new InvalidAccessException(); // new invalidate expcetion
    }
  }
}

module.exports = new AuthorizationService();
