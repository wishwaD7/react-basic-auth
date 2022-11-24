# Building read world react application with Redux

In this project we will be building a react application where user can input and there login details and login to the application - Just like an admin page.

The focus of this project to learn basic real world use cases in practical manner. There for we will be using read backend server with authentication endpoint built using nestjs framework. You can find the repository [HERE](https://github.com/theetaz/simple-auth) for the backend service. Backend service deployed in AWS server you can find the complete postman collection below for the backend auth service.

`BASE_URL=https://ujkp2xeahs.us-east-1.awsapprunner.com`

Link to postman collection [Here](https://www.getpostman.com/collections/b43dc97f487af89db05b)

## Main Tasks
  - Build simple login page. In this application we are using ant design library as UI framework top of the react app. you can read their documentation and integrate antd to your current react application. **Important** Only user their UI component for building your react web application. [Ant Design Documentation](https://ant.design])
- Build login page with email and password as the input fields. Add the basic validations to the input fields.
  ![Login Page](https://i.postimg.cc/MHnLkQvF/Screenshot-2022-10-23-at-23-49-12.png)
- We will focus on the registration page and user activation using emails or passcode later.
- After successfully login user should redirect to the home page with welcome message. In homepage there should be logout button to logout the current user.
- We need to use redux as state management mechanism for this application.
- API calls should pass through redux thunk middleware. To Learn more about how the react redux works follow this link. [Redux Tutorials](https://www.youtube.com/watch?v=0awA5Uw6SJE&list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3&ab_channel=Codevolution)
- Each task should should raise the pull request with a proper description about what has developed. You can follow the git flow for this. To learn more about git flow please follow the link [Git flow workflow](https://www.youtube.com/watch?v=gW6dFpTMk8s&ab_channel=NickChapsas)

