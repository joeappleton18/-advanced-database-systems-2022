(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{272:function(t,e,a){t.exports=a.p+"assets/img/deployment-diagram.17b304b1.png"},312:function(t,e,a){"use strict";a.r(e);var s=a(13),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"week-9-deploying-to-a-serverless-infrastructure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#week-9-deploying-to-a-serverless-infrastructure"}},[t._v("#")]),t._v(" Week 9 (Deploying to a Serverless Infrastructure)")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("strong",[t._v("Session Dependencies")])]),t._v(" "),e("p",[t._v("This week we are continuing with our wine tasting theme. Please ensure you have the latest version\nof the project")]),t._v(" "),e("p",[t._v("You can clone this version using the following command:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git clone https://github.com/joeappleton18/db-starter-project.git --single-branch --branch week-8-solutions")])]),t._v(" "),e("li",[t._v("This week we need to be working on a master branch. Run, "),e("code",[t._v("git checkout -b master")])])])]),t._v(" "),e("p",[t._v("This week marks the end of our journey in learning the basics of creating database applications. To complete this journey, we need to consider how we might deploy our application. As such, the primary question for this week is:")]),t._v(" "),e("h3",{attrs:{id:"how-can-i-deploy-my-data-driven-web-applications-to-a-secure-and-scalable-infrastructure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-deploy-my-data-driven-web-applications-to-a-secure-and-scalable-infrastructure"}},[t._v("#")]),t._v(" How can I deploy my data-driven web applications to a secure and scalable infrastructure?")]),t._v(" "),e("p",[t._v("Deploying a web application used to be a slow and painful process. You would have to physically provision multiple servers (staging and production) and then use a protocol like FTP or SSH to upload changes and patches to our codebase. The issue with this approach, due to its cumbersome nature, deployments may happen infrequently. To live up to the agile manifesto of fast iterations and quick deployments we need a more versatile solution, and this solution comes in the form of a serverless infrastructures and cloud hosting.")]),t._v(" "),e("h2",{attrs:{id:"modern-deployment-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modern-deployment-options"}},[t._v("#")]),t._v(" Modern Deployment Options")]),t._v(" "),e("p",[t._v("Both cloud hosting solutions (e.g., Digital Ocean) and serverless infrastructures (e.g., AWS, Google Cloud and Azure) circumvent the need for us to maintain any physical hardware, and both can scale along with increased application demand. The key difference between these two solutions is with cloud hosting we need to install and maintain the servers software, with a serverless solution this is handled for us. In summary, both are fine choices. However, the process of installing and patching software takes more human resource. As such, we are going to be exploring a serverless infrastructure for our wine tasting application.")]),t._v(" "),e("h2",{attrs:{id:"what-is-a-serverless-infrastructure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-serverless-infrastructure"}},[t._v("#")]),t._v(" What is a serverless infrastructure")]),t._v(" "),e("p",[t._v("According to Amazon (AWS, the largest provider of such an infrastructure, "),e("a",{attrs:{href:"https://aws.amazon.com/lambda/serverless-architectures-learn-more/",target:"_blank",rel:"noopener noreferrer"}},[t._v('"A serverless architecture is a way to build and run applications and services without having to manage infrastructure. Your application still runs on servers, but all the server management is done by AWS. "'),e("OutboundLink")],1),t._v(". They claim that a serverless infrastructure affords us the following benefits:")]),t._v(" "),e("ul",[e("li",[t._v("No operating systems to choose, secure, patch, or manage.")]),t._v(" "),e("li",[t._v("No servers to right size, monitor, or scale out.")]),t._v(" "),e("li",[t._v("No risk to your cost by over-provisioning.")]),t._v(" "),e("li",[t._v("No risk to your performance by under-provisioning.")])]),t._v(" "),e("p",[t._v("The above benefits are all well and good; however, AWS is notoriously complex, and has a steep learning curve. Case in point, consider their infrastructure diagram for a simple todo list application:")]),t._v(" "),e("img",{attrs:{src:"https://joeappleton18.github.io/data-management-2021-notes/images/aws-infrastructure.png"}}),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("A, not so simple, serverless todo list. Adapted, from a digram provided by AWS.")])])]),t._v(" "),e("p",[t._v("Notice, in the above architectural digram, we have lambda functions (denoted by the lambda greek letter). These functions are discreet units of code that are executed through triggers. Lambda functions are an interesting proposition, as we only pay for them when they are invoked. However, such a set up is overkill for our little wine tasting application. As such, we are going to opt for services that offer a simplified abstraction layer over AWS.")]),t._v(" "),e("h2",{attrs:{id:"our-infrastructure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#our-infrastructure"}},[t._v("#")]),t._v(" Our Infrastructure")]),t._v(" "),e("p",[e("img",{attrs:{src:a(272),alt:""}})]),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("The infrastructure we are setting up this week - utilising Cyclic  and MongoDB Atlas.")])])]),t._v(" "),e("p",[t._v("Rather than use AWS directly, we are going to be utilising two services that simplify its infrastructure - "),e("a",{attrs:{href:"cyclic.sh"}},[t._v("Cyclic")]),t._v(" and "),e("a",{attrs:{href:"https://www.mongodb.com/cloud/atlas/register",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Atlas"),e("OutboundLink")],1),t._v(". Cyclic allows us to quickly deploy applications to a lightweight, secure, virtualised Unix container. Cyclic allows us to deploy applications by simply pushing our codebase to a main or master branch on a GitHub repository. While Cyclic will take care of running our node application, we'll use MongoDB Atlas to host our database. MongoDB atlas if a service offered by MongoDB which simplifies the process of provisioning and deploying cloud instances of MongoDB.")]),t._v(" "),e("h2",{attrs:{id:"practical-session"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#practical-session"}},[t._v("#")]),t._v(" Practical Session")]),t._v(" "),e("p",[t._v("We'll start the practical session by, first setting up our cloud database. Next, we'll move on to deploying our Node application to Heroku.")]),t._v(" "),e("h2",{attrs:{id:"setting-up-our-cloud-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-our-cloud-database"}},[t._v("#")]),t._v(" Setting up our Cloud Database")]),t._v(" "),e("p",[t._v("Let's dive in and created a MongoDB Atlas account. This is a straight forward process:")]),t._v(" "),e("img",{attrs:{src:"https://joeappleton18.github.io/data-management-2021-notes/images/set-up-a-atlas-account.png"}}),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("The first three steps in setting up a free Atlas Account.")])])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.mongodb.com/cloud/atlas/register",target:"_blank",rel:"noopener noreferrer"}},[t._v("Register a new account"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v('On the next screen, you\'ll get the opportunity to set up a new project, name it "wine" and select JavaScript as the language choice.')]),t._v(" "),e("li",[t._v("Select select a Free, shared, cluster.")]),t._v(" "),e("li",[t._v('Finally, choose an AWS cloud provider and click "Create Cluster"')])]),t._v(" "),e("img",{attrs:{src:"https://joeappleton18.github.io/data-management-2021-notes/images/configuring-your-cluster.png"}}),t._v(" "),e("blockquote",[e("blockquote",[e("p",[t._v("Configuring a cluster")])])]),t._v(" "),e("ul",[e("li",[t._v("Next, we need to follow through the steps to configure our database cluster")]),t._v(" "),e("li",[t._v("Under database access, set up an admin user and password")]),t._v(" "),e("li",[t._v("Under network access, allow access from all IPs")]),t._v(" "),e("li",[t._v("Finally clusters, click connect to cluster, click connect using NodeJS and grab the connection string")])]),t._v(" "),e("h2",{attrs:{id:"differentiating-between-development-and-production-a-little-trip-into-dev-ops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#differentiating-between-development-and-production-a-little-trip-into-dev-ops"}},[t._v("#")]),t._v(" Differentiating Between Development and Production - A little trip into DEV Ops")]),t._v(" "),e("p",[t._v("We need a way to allow us to differentiate between- We need to be able to differentiate between our production and development environment. In other words, we need to have two databases. One to hold our development data, and another to hold our production data.")]),t._v(" "),e("p",[t._v("To begin with, we need a way to allow our database seeder to seed a production and development database. This can be achieved through injecting a "),e("code",[t._v("NODE_ENV")]),t._v(" variable into our seeder:")]),t._v(" "),e("ol",[e("li",[t._v("We are going to use "),e("code",[t._v("cross-env")]),t._v(" to allow us to dynamically set env variable in our "),e("code",[t._v("package.json")]),t._v(" file. Install it: "),e("code",[t._v("npm install -D cross-env")])]),t._v(" "),e("li",[t._v("Next, add a "),e("code",[t._v("MONGODB__PRODUCTION_URI")]),t._v(" property to your "),e("code",[t._v(".env")]),t._v(" file. You'll notice that the URI you've been using for staging contains the name of the database. As long as you've created a cluster with Atlas DB you can create several databases in this cluster by updating the database name in the connection string. Let's update our connection strings so we have tw database "),e("code",[t._v("wine")]),t._v(" and "),e("code",[t._v("wineDEV")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language-JavaScript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MONGODB__PRODUCTION_URI")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mongodb"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("srv"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("test"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("xxxx@cluster0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x08wt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mongodb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wine"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("retryWrites"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("w"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("majority\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MONGODB_URI")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mongodb"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("srv"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxxx"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("test@cluster0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x08wt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mongodb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("net"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wineDev"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("retryWrites"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("w"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("majority\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("We can now set up some environment specific node scripts in "),e("code",[t._v("package.json")]),t._v(":")])]),t._v(" "),e("div",{staticClass:"language-JavaScript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nodemon app.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"seedProduction"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cross-env NODE_ENV=production node seeder.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"seed"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node seeder.js"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("Notice how we are using "),e("code",[t._v("cross-env")]),t._v(" to set the production environment. Also not, we are not setting a "),e("code",[t._v("NODE_ENV=development")]),t._v(".\nI like to assume, unless explicitly stated, we are working in development.")]),t._v(" "),e("ul",[e("li",[t._v("Now, we can update the seeder to handle the production environment:")])]),t._v(" "),e("div",{staticClass:"language-JavaScript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MONGODB_URI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MONGODB__PRODUCTION_URI")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// don't copy and past this! It needs to be updated.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" client "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MongoClient")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MONGODB__PRODUCTION_URI")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MONGODB_URI")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("ul",[e("li",[t._v("Notice how I am using the turnery operator to distinguish between production and dev.")]),t._v(" "),e("li",[t._v("If all has gone well you should be able to seed production and development databases, by running:")])]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run seed\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run seedDevelopment\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"task-1-setting-up-atlas-db-and-seeding-the-production-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-1-setting-up-atlas-db-and-seeding-the-production-database"}},[t._v("#")]),t._v(" Task 1 - Setting up Atlas DB and Seeding the Production Database")]),t._v(" "),e("p",[t._v(":::hint\nIf you already have a Atlas DB account, you can start from the second step.\n:::")]),t._v(" "),e("ul",[e("li",[t._v("Follow the steps above to set up a new database cluster")]),t._v(" "),e("li",[t._v("From your Atlas dash, click "),e("code",[t._v("clusters/collections")]),t._v(", and delete any existing databases that are in there. You may have one called "),e("code",[t._v("myFirstDatabase")]),t._v(", delete this.")]),t._v(" "),e("li",[t._v("Follow steps above to seed a production database.")])]),t._v(" "),e("h2",{attrs:{id:"setting-up-a-cyclic-deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-cyclic-deployment"}},[t._v("#")]),t._v(" Setting up a Cyclic Deployment")]),t._v(" "),e("p",[t._v("Now we have a database set up, we are ready to deploy our application to Cyclic. This is actually a very painless process:")]),t._v(" "),e("h3",{attrs:{id:"making-our-application-deployable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#making-our-application-deployable"}},[t._v("#")]),t._v(" Making our Application Deployable")]),t._v(" "),e("p",[t._v("To make our application deployable, we only need to make a few tweaks:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Ensure you are working on a master branch (see this weeks setup instruction, above)")])]),t._v(" "),e("li",[e("p",[t._v("When our application is deployed, Cyclic will look in our "),e("code",[t._v("package.json")]),t._v(" file for a start script. It uses this script to run our app. Let's create a start command:")])])]),t._v(" "),e("div",{staticClass:"language-JavaScript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nodemon app.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"start"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node app.js"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("blockquote",[e("blockquote",[e("p",[t._v("package.json - a start script instructing cyclic how to run our application")])])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Next we need a remote repository to host our wine application:")]),t._v(" "),e("ul",[e("li",[t._v("Create an empty GitHub repository and take note of the remote address (***note, it must be empty in order to work on the Cyclic free tier).")]),t._v(" "),e("li",[t._v("Point a terminal session to the root of your wine-tasting application and push your application to your new remote repository.")]),t._v(" "),e("li",[t._v("Ensure the changes to your work are committed")])])])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" master     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ensure you are on a master branch ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote remove origin   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# removes the existing remote ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your repo address"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# set up a new remote ")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master \n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("blockquote",[e("blockquote",[e("p",[t._v("run the above in the root directory of you wine tasting application")])])]),t._v(" "),e("h3",{attrs:{id:"set-up"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-up"}},[t._v("#")]),t._v(" Set Up")]),t._v(" "),e("ul",[e("li",[t._v("We are now ready to deploy our application to Cyclic")])]),t._v(" "),e("ol",{attrs:{start:"0"}},[e("li",[e("p",[e("a",{attrs:{href:"https://cyclc.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Set up a new Cyclic Account"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://app.cyclic.sh/#/deploy?intro=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go to Cyclic - Deploy New App"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("Click on Link Your Own\n"),e("img",{attrs:{src:"https://images.tango.us/workflows/f30673c7-b697-484a-8c76-1ba657b2158a/steps/f8403484-68a9-4d23-9191-e0aa9d38132b/7b0a9fb0-0ba0-4eca-a61e-ee712ec7e772.png?crop=focalpoint&fit=crop&fp-x=0.2681&fp-y=0.3622&fp-z=2.5372&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1466%3A980",alt:"Step 2 screenshot"}})])]),t._v(" "),e("li",[e("p",[t._v("Click on Search your repositories and find your repository containing the room finder application\n"),e("img",{attrs:{src:"https://images.tango.us/workflows/f30673c7-b697-484a-8c76-1ba657b2158a/steps/c09dd3e0-1d8f-4ca7-b0c4-b69bba2504cb/fd0304c9-9bd0-40d1-98d4-0fef1fdff48b.png?crop=focalpoint&fit=crop&fp-x=0.4952&fp-y=0.5735&fp-z=1.1277&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1466%3A980",alt:"Step 3 screenshot"}})])]),t._v(" "),e("li",[e("p",[t._v("Your application is now live! Well, sort of: we still need to set up an DB environment. take note of your applications URL and click to go to your application's dash.\n"),e("img",{attrs:{src:"https://images.tango.us/workflows/f30673c7-b697-484a-8c76-1ba657b2158a/steps/2f086a4a-b08d-40bb-9568-dcde27436a66/9174fbe2-912e-4993-ba11-6ade689e4989.png?crop=focalpoint&fit=crop&fp-x=0.4792&fp-y=0.9464&fp-z=2.6235&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1466%3A980",alt:"Step 4 screenshot"}})])]),t._v(" "),e("li",[e("p",[t._v("Click on Variables\n"),e("img",{attrs:{src:"https://images.tango.us/workflows/f30673c7-b697-484a-8c76-1ba657b2158a/steps/ee55aa2a-d0c2-42c2-b6cd-d10c8ccf46b0/9c4bbb6c-3a96-4e07-8542-2fef4154db01.png?crop=focalpoint&fit=crop&fp-x=0.5341&fp-y=0.2276&fp-z=2.7259&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1466%3A980",alt:"Step 5 screenshot"}})])]),t._v(" "),e("li",[e("p",[t._v("Add the MONGODB_URI environment variable. The value should be your production database's connection string. Click Add Variable and Save, when done\n"),e("img",{attrs:{src:"https://images.tango.us/workflows/f30673c7-b697-484a-8c76-1ba657b2158a/steps/6f5069b5-f646-4477-b038-b33c95899d53/1a9c0b34-4a22-49d2-bb9a-278a01cb9bd2.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.0000&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1466%3A980",alt:"Step 6 screenshot"}})])])]),t._v(" "),e("h2",{attrs:{id:"task-2-deploying-your-web-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-2-deploying-your-web-application"}},[t._v("#")]),t._v(" Task 2 - Deploying your Web Application")]),t._v(" "),e("p",[t._v("Follow the steps above to deploy your wine tasting application to Cyclic.")]),t._v(" "),e("h2",{attrs:{id:"task-3-set-up-a-project-for-your-assessment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#task-3-set-up-a-project-for-your-assessment"}},[t._v("#")]),t._v(" Task 3 - Set up a Project for Your Assessment")]),t._v(" "),e("p",[t._v("Configure a new deployable project for your assessment")])])}),[],!1,null,null,null);e.default=n.exports}}]);