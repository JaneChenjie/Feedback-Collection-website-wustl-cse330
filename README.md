# CSE330

### Members
- Chenjie Xiong
- Ruimin Gu
### Link
- [Feedback-Collection website](https://cryptic-anchorage-34361.herokuapp.com/)
### Functionality
- User signs up via Google OAuth and log out.
- User pays for email credits via stripe in order to have enough credits to creates a new ‘campaign’.
- User creates a new ‘campaign’ by clicking at '+' button.
-	Users enters list of emails to send survey to. **The list of emails is seperated by comma.**
-	We send email to list of surveyees.
-	Surveyees click on link in email to provide feedback.
-	We tabulate feedback on the website. 
-	User can see report of all survey responses.

###Frameworks:
-	Use react-redux.
-	Use express.
-	Use MongoDB.
###Note:
-The stripe is in the test mode, so it will **not charge your money**. In the test mode, the credit card number is **4242 4242 4242 4242**. 
