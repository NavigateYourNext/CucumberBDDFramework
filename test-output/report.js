$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/akshay.shete/workspace/AmazonBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Login Feature",
  "description": "",
  "id": "amazon-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Amazon Login Test Scenario",
  "description": "",
  "id": "amazon-login-feature;amazon-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of Login Page is Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username and User enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User LogOut the application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 9835536430,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.check_Title()"
});
formatter.result({
  "duration": 98663060,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_enters_username_and_User_enters_password()"
});
formatter.result({
  "duration": 2479434487,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3265201058,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 93776562,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_logout_the_application()"
});
formatter.result({
  "duration": 2344385323,
  "status": "passed"
});
});