# Application Manager 

# Setup 
This project uses a Ruby on Rails backend and a React-Redux frontend. Please set up this project by using the following commands: 
1. bundle install 
2. rails db:create 
3. rails db:migrate 
4. rails db:seed 

To see existing Admin and Regular User logins, please refer to the seed file. 

# Features
Users can currently create accounts, create applications, and submit coding tests. Administrators can view all existing applications. 

My apologies for this app being unfinished. Implementing these features took me over 4 hours, and I figured I shouldn't go too far over the recommended time. If this were a production-level application, my next steps would be to protect the API endpoints (to make sure that only admins can create other admins, users can't approve their own applications, etc.), then to enable Admins to approve/reject applications