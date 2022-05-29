---
path: "/blogs/detailed-steps-to-setup-diode"
date: "2022-05-28T23:43:24.503Z"
title: "Sandbox: Diode - An Amplify Hands-on Project"
tags: ["blog", "checkout dash b", "ng project", "aws", "amplify", "sandbox"]
description: "A detailed instruction targeting to provide seamless hands-on experience to readers with zero knowledge of the framwork - Amplify."
featuredimage: images/411607f2250fcac40516c496fa024de16d96c3600521e9b4799b640a6ef71d65.png
featuredimageAlt: "Diode App"
---

```toc
```

## 1. Minimum Prerequisites
1. Operating System: Windows (TODO: difference in XOS is minimal, will update when available)
2. Amplify is an service hosted on AWS. An AWS account requires a credit card / bank account and phone number to be registered. No charge is expected if you are following this instruction as AWS has [a free-tier policy](https://aws.amazon.com/amplify/pricing/) for the first year. At the end of this instruction, I will also illustrate how to delete the app from your account.
3. A Github account.
4. 30 mins free time.

## 2. Create a new AWS Account Creation
**Skip this section if you already own AWS account.**
1. Log to: https://portal.aws.amazon.com/billing/signup#/start/email, sign up for a new account. Credit card, phone number, address is required.
![picture 2](images/c2ca6d550b7ca54947ce9abb9efe6bdf4864f91ed4b862ffecc96ccdcf8e2a03.png)  

## 3. Host the App on Github
1. Log to: https://github.com/new, create a new repo named "diode". No necessary to change anything else. Note, in my screenshot, as I have already had one repo named "diode", I used "diode_" as its name. Then hit "Create Repository"!
![picture 4](images/0aea8dc1ef09888ad791c1c5aef8e54f281c16349fa8a721ede6619af3e4b70e.png)  

2. You will be able to see this page after the repository is created
![picture 5](images/538af9c32e622b30da7e9586d7aa4396acfd4e0ae5f23b1244faa9382f091dbb.png)  

3. **Skip step-3.3 to 6 if you already have Git installed on your system.** We need to install Git for version control. https://git-scm.com/download/win. Select "64-bit Git for Windows Setup" to download Git.
![picture 7](images/965c065eca4bf8f361326e79c1d617cae44eaa5db174b4de78f5a8a35ff0023e.png)  

4. Click the downloaded and "next" all the way down to install it.
![picture 8](images/1193ff3084ad45dfcac1b1b41d4a294bcf3fbcd8f89af45ad832d81c8c990b5b.png)  

5. Now we want to verify the installation. On Windows system, click [Windows logo] then type `powershell` and hit [enter], you should be able to see something like this. We call it terminal.
![picture 9](images/dd6a84f84f02d7b2e7a675b54656b1d52c4d121c6d3883e80ceaf5413908beff.png)  

6. Type `git --version` hit [enter]. If you see this, we are good!
![picture 10](images/b972587efc43294628ff2400f87f26cce0d073ce8e9ca6cbf1f817aa803f4939.png)

7. Run `mkdir diode` to create a new directory then `cd diode` to move into it. Note, still, in my screenshot, I used "diode_" instead of "diode" to avoid duplicates.
![picture 12](images/0ebd1022f394b1e04309fd86389e451fa03c00abefffdc7c5f870d1459b0f529.png)  

8. **Skip step-3.8 if you already have your local Git configured for Github.** Don't forget to setup git username and email as we are in the sandbox by running following 2 commands: `git config --global user.name "<your-github-username>"` and `git config --global user.email "<your-github-commit-email-address>"`. Note, the Github commit email address will not be your account email address because Github will keep your email private by default. You can go to your Github mainpage, to find your commit email.
![picture 19](images/f726429ea6c70227ba7bdb4a5a52df56545b124eab0daec8769c46908fdcb0d7.png)  
![picture 16](images/f52f2e5c3e5b2c9f76d4d33d0346a8186cefc78a2fd9fad2f4332d00c13a877f.png)

9. Now, go back to the browser we used to create the new repository, click the icon in red rectangle to copy all the commands listed.
![picture 11](images/1b233afab507335a89ece9f8d928ef2a477f16422e36bf86d02fa2f6d2436587.png)  

10. Copy paste them into the `powershell` and hit [enter]. It will ask you to input Github credentials to login if you don't have your Github credentials configured.
![picture 15](images/b33bdeb0dc7f9fb8afc948fafea5dfc54b0eb46ed7f360e2e717838c9f804bee.png)  

11. Then you should see this, indecating that the Git is setup!
![picture 20](images/726e46e4948cfe56ad32ed8c8b3c4adea20d61aef2906df63a8897d197654c65.png)  

## 4. Setup Develop Environment
1. **Skip Step-4.1 if you already have Node.js installed.** Diode is a Javascript application. We will use [node.js](https://nodejs.org/en/) for package management. Go to https://nodejs.org/en/ and click the version - "Recommended for most of users". Download the executable and install it.

2. **Skip Step-4.2 if you already have VSCode installed.** Download and install VSCode from here: https://code.visualstudio.com/Download. You should see the "Welcome page" after the installation. It might be different than mine but it's fine.
![picture 21](images/a657a8990db0bf7f1d95de85e9db3fb76dec037ca8546766e24e48207d0d566c.png)  

3. Click "Open Folder" and select the folder named "diode" you created above. If you followed my instruction, it should be inside your user's home (on Windows, it usually is `C:\Users\<your-user-name>\diode`).
![picture 22](images/3c13de3d6d4aace7091c902c4142c3f89df07d92020c1976b52f274b5e888317.png)  

4. Now, we can execute our command in VSCode by clicking "Terminal" > "new Terminal"
![picture 23](images/f6676f8b602a9ee61e14c81abed3b64454b96ced45c7201f44c4d1b09e085c98.png)  

5. run following commands to verify that dev env is ready: `node --version`, `npm --version`, `npx --version`. If you see similar output, we are good.
![picture 24](images/5de138b5a0a1c00b278dd480118d5aa5119b8d7b2b86c0decdc91f4e4325c834.png)  

6. run `npx create-react-app .` to create an React app. If the command is paused and asks you "OK to proceed?", simply click "y" indecating "yes" and hit [enter] to proceed.
![picture 25](images/12d7c1e1de60ac37f4e5ed7992bbb8e3b2b64addf4efb81ee18f9b9e047177ae.png)  

7. run `npm i -g @aws-amplify/cli` to install Amplify CLI.

8. run `npm i aws-amplify @aws-amplify/api @aws-amplify/auth @aws-amplify/core @aws-amplify/ui-react` to install all dependency packages.
![picture 26](images/850df35ae8332c59f3ec2e47fcefff1c8fb9eef0e8c9c307314d7075edfb4f62.png)

9. set a checkpoint using Git by running `git add .` then ` git commit -m "All requirements installed"` and `git push`.
![picture 27](images/85683b9b1bc65ef6cd816bae12646821adbfe975f052fa229e578d685082b65c.png)  

## 5. Amplify Code Changes, Finally...
1. run `npx amplify init` to initialize an Amplify project. Hit [enter] to use default selections until you see "Press Enter to continue".
![picture 28](images/682e4b1f3390a4722f5b1b139c672dc96150338202f619ebe9fd566ca809c0df.png)  

2. We should see the browser pops up an AWS login page automatically. Use the email address and password we used in Step-2.1 to login. Then go back to VSCode and press [enter].

3. You will be asked to select an AWS region. Ideally, you should check the list here and select one region near you geographically. But here, as we are doing a demo, we will select 'us-east-1' for demo consistancy.
![picture 30](images/faf82d8394a64c76b5c5de8676981e06ca56100e7f5200a0dde64dc935c3e3de.png)  

4. Hit [enter] until you see "Press Enter to continue" again and browser should pop up again.
![picture 31](images/0f6fc08988f2ce9a5aa9f4f6c9b6fcca411b21f59b879e9675b26477f18f629c.png)  

5. Make sure you select "Access Key" here. 
![picture 32](images/da9a5e7a4eb92dcf3eed3e4dd1087224156c16c9a8d680f0adc1411dd1f5cd41.png)  

6. Then "next" all the way to the end. And you should see semething like this. Note, **it is very important to keep this page open until you finish step-5.7.** Now go back to VSCode.
![picture 33](images/730f5125bc6e284252dac4e8b462480f7d94cc46dc9b395bcd3b36aee5e23fa4.png)  

7. Press [enter] and continue. It wil ask you for "accessKeyId" and "secretAccessKey". Copy paste them from the browser above in step-5.6 and click [enter] all the way down. 
![picture 34](images/535fa93e7f6ef23d1c8f3256650461f1849ce5a50a53bc80d76e9960a0de804c.png)

8. If you see this, we are great!
![picture 35](images/6198427e6edca5d0ba3ff3654eccfe354db98ab29a833c031fcba9546c796f2d.png)  

9. Then run `npx amplify add api`. Here, we need to be a little bit careful as not all selections are default
    * "Select from one of the below mentioned services" - GraphQL
    * "Here is the GraphQL API that we will create. Select a setting to edit or continue" - **DON'T CONTINUE**, use "up arrow" and select "Authorization modes: API key"
    * "Choose the default authorization type for the API" -  Amazon Cognito User Pool
    * "Do you want to use the default authentication and security configuration?" - Default configuration
    * "How do you want users to be able to sign in?" - Username
    * "Do you want to configure advanced settings?" - No, I am done.
    * "Configure additional auth types?" - N
    * continue
    * "Choose a schema template:" - Single object with fields
    * "Do you want to edit the schema now?" - Y
    * You should see a new text file named "schema.graphql" pops up
![picture 36](images/ea6480e796ed340219c15efb11bdc884805814153bc678914e9a865959497342.png)

10. Copy paste all content [from my example code](https://github.com/ZzzGin/diode/blob/main/amplify/backend/api/toggle/schema.graphql) to "schema.graphql"
![picture 37](images/30a2f336e62ff28985d17884a9a15d9f7241d61080e0a5abd6aa79e4367b0ca7.png)  

11. run `npx amplify push`, wait for a while and it will pause for your confirmation and some code generation options, hit [enter] to proceed all with default options. Then go grab a cup of coffee and enjoy 5 mins.
![picture 39](images/f83678588005557ad1d16c53f8084260ac36e59a88138ee8b8a92a8ec05c009e.png)  

12. If you see this, we are great! All backend things are built and we can start developing the frontend
![picture 40](images/b8275678e356547c19698f1826d6d4864cc36711d05b5ce9ed8e843aa6cc8903.png)  

13. Delete files in red rectangles. 
![picture 41](images/ffc271109194957e5c49daa5970c66cf3721475e16509d18a01d16d03a6c2af1.png)  

14. Remove all content in 'index.js' and copy [all content here](https://github.com/ZzzGin/diode/blob/main/src/index.js) into 'index.js'

15. Remove all content in 'App.js' and copy [all content here](https://github.com/ZzzGin/diode/blob/main/src/App.js) into 'App.js'

16. Remove all content in 'App.css' and copy [all content here](https://github.com/ZzzGin/diode/blob/main/src/App.css) into 'App.css'

17. Local testing by running `npm run start`... And... Yes it will take about 1 minute to build our code... Nice! We see our work!
![picture 42](images/501abd0240bee233a6f33e95082b39022bdb4d43cf51966e42862364e0f16171.png)  

18. Create an account and log in. Play with it to verify the function is good.
![picture 43](images/411607f2250fcac40516c496fa024de16d96c3600521e9b4799b640a6ef71d65.png)  

19. We can now go back to VSCode and [ctrl-c] to terminate the local server
![picture 44](images/2c71206446cf2c4fdd21ff47a8cdd222aa3c3967b5db7ec74e1bcebce84d4640.png)  

20. As another checkpoint, we run `git add .`, `git commit -m "all code changes for diode"`, `git push` to push our changes to Github.

## 6. Create a Deployment Pipeline
1. We are now going to link our Github code repository to the Amplify App. We navigate to: https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1#/. Note, this is for region "us-east-1", if you selected different region in the step-5.3, you need to choose the right region.
![picture 45](images/d32439eb58c5eb66f13718f8d9af6c08fbbfffd8525dbd243a1694dc91e2371c.png)  

2. Our diode app is here! Click on it, and we can see AWS console provides an UI wizard to config Github as code source for continous deployment.
![picture 46](images/de5c2237600e8e9b5181b428aeba25c94e1a442cbf2401ae00ba1fdf6447ab8f.png)  

3. UI is good but we are developers, we love terminal interface. So, let's go back to VSCode and run `npx amplify hosting add`
    * "Select the plugin module to execute" -  Hosting with Amplify Console
    * "Choose a type" - Continuous deployment
    * This step navigate you to the same page we got in step6.2

4. Select "Github" then "connect branch". Steps will be required to authorize the connection from Amplify to Github.
![picture 47](images/f184e49850722641a6b30c5fd87b0dab39d3d15f7c1ca472e4902d3694e0e2df.png)  

5. Select the code repository name and branch name - we only have one branch - "main", then click "next"
![picture 48](images/cdca350ea848722338b212da9dc5a04b99cfd36fe6c8e46390be7527abf128b1.png)  

6. In the next step, we are asked for some configurations. One question asking "Select an existing service role or create a new one so Amplify Hosting may access your resources" does not have an eligible selection. We need to create a new one. Click the "Create new role".
![picture 49](images/3efec49b7743f1e04a258461e3576d9704c5499356d8f4712106e6b5653343e1.png)  

7. Click "next" all the way down to create a new role for Amplify deployment. A role named "amplifyconsole-backend-role" will be created.
![picture 50](images/644a9054f95a4403313d42e77abf3d46bde95e139420ddf9aa4b09c108a0a556.png)  

8. Back to the page in step-6.6, refresh the list and select the newly created role. Then click "next" all the way down.
![picture 51](images/60c3a423c101f02176b0509ee461359343e3a1c7c77131fd92fc31f26664ead1.png)

9. Wait for the pipeline to refresh. It will take around 10 mins.
![picture 52](images/e2154ba6aa9db29bf79ddc2ea7af2c17c88835684f439cf7f63180213cd589ec.png)  

10. Great! Our first deployment is done! We will be able to access our public web app by clicking the URL on this page.
![picture 53](images/68aeddfee9d297c7e9b1fe29adbea89522545f6021db372b2a96248c8021972f.png)  

11. The above pipeline will be helpful when you make some futher change to the codebase. Once you push your change to Github, this pipeline will be triggered and deploy your new change to public. Try that by yourself!

## 7. Clean up
1. To delete the app you just created, simply navigate to the same page of step-6.2. You should be able to find a button for "Actions". Click it and "Delete App". Follow the instructions and the app will be deleted. With this one click, all resources you created in this hands-on cookbook is deleted. 