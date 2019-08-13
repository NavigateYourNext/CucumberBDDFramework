$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/akshay.shete/workspace/AmazonBDDFramework/src/main/java/Features/loginDataDriven.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon Login Feature",
  "description": "",
  "id": "amazon-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Amazon Login Test Scenario",
  "description": "",
  "id": "amazon-login-feature;amazon-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of Login Page is Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Test Data Table"
    }
  ],
  "line": 7,
  "name": "User enters username and User enters password",
  "rows": [
    {
      "cells": [
        "akshayshete10024@gmail.com",
        "Joker#100"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User LogOut the application",
  "keyword": "Then "
});
formatter.match({
  "location": "loginDataDrivenStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8468927437,
  "status": "passed"
});
formatter.match({
  "location": "loginDataDrivenStepDefination.title_of_Login_Page_is_Online_Shopping_site_in_India_Shop_Online_for_Mobiles_Books_Watches_Shoes_and_More_Amazon_in()"
});
formatter.result({
  "duration": 19203335,
  "status": "passed"
});
formatter.match({
  "location": "loginDataDrivenStepDefination.user_enters_username_and_User_enters_password(DataTable)"
});
formatter.result({
  "duration": 2452038085,
  "status": "passed"
});
formatter.match({
  "location": "loginDataDrivenStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 4051947905,
  "status": "passed"
});
formatter.match({
  "location": "loginDataDrivenStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 100141938,
  "status": "passed"
});
formatter.match({
  "location": "loginDataDrivenStepDefination.user_LogOut_the_application()"
});
formatter.result({
  "duration": 2127197219,
  "status": "passed"
});
});