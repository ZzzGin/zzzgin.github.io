---
path: "/blogs/trigger-lambda-with-iam-user-through-function-url-using-curl"
date: "2022-07-25T03:38:57.410Z"
title: "Trigger Lambda With IAM User Through Function URL Using CURL"
description: "Using CURL to trigger AWS services is platform/evvironment irrelevant. One of my work's target is to make it easy to be deployed by an AWS zero-knowledge user. So I want to make the dependency of my solution minimum."
tags: ["blog", "bash", "aws", "lambda"]
featuredimage: 
featuredimageAlt: ""
---

Suppose you already have Lambda on AWS with Function URL enabled. You get a URL like:
```
https://mq5xgstfm3[............]tibik.lambda-url.us-west-2.on.aws/
```

If your Lambda is not authenticated by any IAM role/user, you can simply trigger it curl:

```bash
curl -X POST 'https://mq5xgstfm3[............]tibik.lambda-url.us-west-2.on.aws/' -H 'content-type: application/json' -d 'hello'
```

But if this lambda's invoke action is protected by IAM user, we can trigger it by 
```bash
curl -X POST 'https://mq5xgstfm3[............]tibik.lambda-url.us-west-2.on.aws/' -H 'content-type: application/json' -d 'hello' --user '{ACCESS KEY}:{ACCESS SECRET}' --aws-sigv4 'aws:amz:us-west-2:lambda'
```

In this way, "hello" will be placed into the `body` of the request.