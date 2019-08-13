package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination
{
	WebDriver driver;


	@Given("^User is already on Login Page$")
	public void user_already_on_login_page()
	{
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.amazon.in/");
		driver.manage().window().maximize();
	}

	@When("^Title of Login Page is Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in$")
	public void check_Title()
	{
		String title = driver.getTitle();
		System.out.println("Title Is : "+title);
		Assert.assertEquals(title, "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
	}

	// 1) \"(.*)\"
	// 2) \"([^\"]*)\"
	
	@Then("^User enters \"(.*)\" as username and User enters \"(.*)\" as password$")
	public void user_enters_as_username_and_User_enters_as_password(String username, String password) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//span[@class='nav-line-2' and text()='Account & Lists']")).click();
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@id='continue']")).click();
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);

	}
	

	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button(){

		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("^User is on home page$")
	public void user_is_on_home_page() {
		
		boolean result = true;
		String accountName = driver.findElement(By.xpath("//span[contains(text(),'Hello')]")).getText();
		if(accountName.contains("Hello"))
		{
			result = true;
		}
		else
		{
			result = false;
		}
		
		Assert.assertTrue(result);

	}

	@Then("^User LogOut the application$")
	public void user_logout_the_application()
	{
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//span[@class='nav-line-2' and text()='Account & Lists']"))).build().perform();
		driver.findElement(By.xpath("//span[contains(text(),'Sign Out')]")).click();
		driver.quit();
	}


}
