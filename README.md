# cloud-resume-site
My first iac build in terraform.
UPDATE ### 2/20/26
Live Site: (Tbph)

I recently decided to take up the challenge of completing the AWS Cloud Resume builder. I learned alot along the way! From HTML to deploying my resume through Cloudfront. And to be vunerable here, I've used the AWS console hands on through educational courses but never like this! There was a lot of troubleshooting like making the API configuration work or learning and tweaking Terraform in powershell for the first time. This whole experience felt like an inition phase of learning which I really aprecaited this challenge for.

This project is a static resume site deployed on AWS with serverless visitor counter, automated deployments, and infrastructure managed with Terraform.

## What's included?

1. Static Resume website hosted on Amazon S3
2. Cloudfront (CDN) in front of S3 for HTTPS/Caching
3. Visitor counter API using API GW and Lambda
4. DynamoDB table to store and updated the visitor counter
5. CI/CD using Github Actions to deploy changes Automatically
6. Iac (terraform) for repeatable setup

## Architecture build
User -> Cloudfront -> S3 (Static Site)

user -> API GW -> Lambda -> DynamoDB (How many visitors)

## Visitor Counter API

Endpoint URL: https://bwabcgv331.execute-api.us-east-1.amazonaws.com (Tbc)

Behavior: 
1. On page load, JS calls the API
2. Lambda increments and returns the current count
3. DynamoDB stores the count

## CI/CD (Github Actions)

1. On every push to the main branch:
2. Site files are uploaded and synced to the S3 bucket
3. Enabled the CF cache Invalidation so updates can show immediately

Infrustructure as Code (Terraform)

Terraform is used to define and manage AWS resources

My Key files:
1. iac/main.tf
2. iac/versions.tf

##security Notes
1. S3 bucket access is restricted so content is served through Cloudfront (which means no public bucket browsing)
2. AWS credintials are stored securely in Github Actions Secrets (not in repository)

## AWS Resources
1. S3 Bucket: chansan-cloud-resume-8392
2. Cloudfront Distrbution
3. DynamoDB Table: cloud-resume-counter
4. Lambda Function: visitor counter handler

## Future Improvements

• Add a custom domain (Route 53) + ACM certificate  
• Improve styling and layout (more modern resume design)  
• Add monitoring/alerts (CloudWatch alarms)  
• Add tests for the Lambda function (unit + integration)

## Author

Chandler Tuggles  
GitHub: https://github.com/ChansanJP  
LinkedIn: https://linkedin.com/in/chandlertuggles
