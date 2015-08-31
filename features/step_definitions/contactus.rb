Given(/^I am on the homepage$/) do
  visit 'http://127.0.0.1:4000/'
end

Given(/^that Mimic is running$/) do
  Mimic.mimic(:remote_configuration_path => '/api', :log => $stdout) do
    post("/puppyapi/contactus").returning("Message Sent", 200)
    #get("/some/other/path").returning("Redirecting...", 301, {"Location" => "somewhere else"})
  end
end

Then(/^I should see the contact us form$/) do
  expect(page).to have_content("Contact")
  expect(page).to have_field('name')
  expect(page).to have_field('email')
  expect(page).to have_field('message')
end

When(/^I complete the contact us form$/) do
  fill_in('name', :with => 'Nic Jackson')
  fill_in('email', :with => 'nic@thatlondon.com')
  fill_in('message', :with => 'This is the body')
end

When(/^press submit$/) do
  click_button('Submit Message')
end

Then(/^I should see the message sent$/) do
  expect(page).to have_content("Message Sent")
end

After do
  Mimic.cleanup!
end
