$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/akshay.shete/workspace/AmazonBDDFramework/src/main/java/Features/Tagging.feature");
formatter.feature({
  "line": 1,
  "name": "Learn tagging in Cucumber",
  "description": "",
  "id": "learn-tagging-in-cucumber",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 40,
  "name": "Mouse Movement10",
  "description": "",
  "id": "learn-tagging-in-cucumber;mouse-movement10",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@SmokeTest"
    },
    {
      "line": 39,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": ": User is on Amazon Page10",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 24
    }
  ],
  "location": "TaggingStepDefination.user_is_on_Amazon_Page(int)"
});
formatter.result({
  "status": "skipped"
});
});