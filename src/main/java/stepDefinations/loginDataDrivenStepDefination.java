package stepDefinations;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import com.beust.jcommander.Strings;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginDataDrivenStepDefination {


	WebDriver driver;

	
	@Given("^User is already on Login Page$")
	public void user_is_already_on_Login_Page()  {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.amazon.in/");
		driver.manage().window().maximize();
	}

	@When("^Title of Login Page is Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon\\.in$")
	public void title_of_Login_Page_is_Online_Shopping_site_in_India_Shop_Online_for_Mobiles_Books_Watches_Shoes_and_More_Amazon_in()  {
	    // Write code here that turns the phrase above into concrete actions
		String title = driver.getTitle();
		System.out.println("Title Is : "+title);
		Assert.assertEquals(title, "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
	}

	@Then("^User enters username and User enters password$")
	public void user_enters_username_and_User_enters_password(DataTable credentials)  {
		List<List<String>> data = credentials.raw(); // List of List of Strings


		driver.findElement(By.xpath("//span[@class='nav-line-2' and text()='Account & Lists']")).click();
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(data.get(0).get(0)); //data.get(0).get(0) will give akshayshete10024@gmail.com
		driver.findElement(By.xpath("//input[@id='continue']")).click();
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(data.get(0).get(1)); //data.get(0).get(1) will give Joker#100 
	}

	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button()  {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("^User is on home page$")
	public void user_is_on_home_page()  {
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
	public void user_LogOut_the_application()  {
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//span[@class='nav-line-2' and text()='Account & Lists']"))).build().perform();
		driver.findElement(By.xpath("//span[contains(text(),'Sign Out')]")).click();
		driver.quit();
	}


}
