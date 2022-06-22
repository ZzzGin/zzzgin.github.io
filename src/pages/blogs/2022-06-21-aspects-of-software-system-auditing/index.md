---
path: "/blogs/aspects-of-software-system-auditing-backend"
date: "2022-06-21T20:12:36.636Z"
title: "Aspects of Software System Auditing - Backend"
description: "When we audit a backend service, what aspects should we look at?"
tags: ["blog","software","micro service"]
featuredimage: 
featuredimageAlt: ""
---

```toc
```

## Overall
* Describe the software's architecture - architecture diagram?
* Describe the software's use cases?
* Mechanisms to reduce blast radius
    * network: environments separation - podding, soak deployment - onebox
    * bad deployment: testings - unit tests, integration tests, E2E tests
* Think about the conditions which could cause catastrophes, list the cuases and how long it would take to reach the point of totally failure. Ex: 
    * High dependency API latency causing excessive timeouts
    * degenerated client call patterns
    * loss of caching solution
* List all changes recently could impact scaling, performance, dependencies or clients
* SOPs runbook, datarecovery mechanism in place?

## Security
* Is data processed by this service confidential? If yes, how is security maintained in this service?
* Do certificates have a renew policy?


## Architecture
* What is the "Unit of work"?
    * What is the basic factor of the traffic of the software
* What is the AZ redundancy?
    * AZ - Available Zone, a term used in AWS. AZ contains hosts. Hosts in different AZ are in different data center. Catastrophe (for example power loss) happens in one AZ will NOT impact other AZs.
    * AZ redundency - the software can withstand at least one AZ loss. 
    * Homogeneous is required amoung all AZs
* Any **throttling** techniques? 
    * How long it will take to change the throttling config?
* Health Check
    * Ping check
    * Carnaval test
* List down top clients. Alarms, SOPs.

## Monitoring
* Monitors are recommended to use percentage instead of count
* Is the deployment connected to auto-rollback monitors?

## Dependencies
* For data store in the software, any recovery mechanisms in place to recover from lost or corrupted data?
    * Is there a "runbook"?
    * Is it in theory? Have we tried that in practice?
    * How long it will take to execute the recovery mechanism?
* The **timeout** of API should be larger than the sum of timeout of all dependencies get called in this API
* Impacts when dependency becomes unavailable for certain timerange(5 mins, 30 mins, 3 hours, 1 day)
* Are your dependencies are able to handle the load from this software?
* Do we have dependency alarms? - Latency, timeout, throttling, Faults, Errors...
* SOP of engaging these service dependencies
* Is extra time required to "cold restart" the software?
* Is there dependency causing reoccuring issue
* For retrying on dependencies, is there mechanism to stop unnecessary retries? Any possibilities causing "retry strom"?

## Infrastructure
* Alarms on service architecture - CPU, Disk Utilization, Database latencies
* Is logging managed to reduce the risk on having issue with disk useage?
    * Logger rate limiting: BurstFilter in Log4j
    * Disk Space Log Filter: discard log events when free disk space drops below some threshold
    * Automatic log cleaning mechanism
    * Discard Policy

## Scaling
* Chaos testing: load testing against the service with fault-injection framework.
    * hijack the dependency call and create some timeout
    * increase the latency
    * CPU hog test
    * MEM hog test
* Any ACL (Access Control List)? Any whitelist/blacklist and what is the effort to change them?
* What is the network of this service? Internet? Or private network? Any special steps for cold start on new hosts in this network?
* Load Test result
    * CPU
    * MEM
    * DISK
    * Latency
    * ERROR/Failure Rate
    * Outstanding request (how many threads are running simultaneously on the same hosts? )
* Based on the reasult, what is the bottleneck?
* Scaling factor - 2x? 5x? Why?

## DynamoDB
* How did you determine your service RCU/WCU needs
* Have you verified that your GSIs are correctly scaled to handle Read and Write traffic? (Note that if a GSI runs out of WCUs it will throttle writes to the main table. For each table, if you are using a GSI how have you allocated sufficient WCUs to take this into account?)
* What are the per table and per account limits of your DynamoDB account?
* Did you review the DDB tables and their capacity modes (On-Demand or Provisioned)?

## Relational Database
* Is an RDBMS your primary data source for this Service? Which provider is it (Oracle, MySQL, Postgres, RDS, etc)?
* Have you engaged the DBA's to review your RDBMS peak requirements?
* If your service uses pods, have you confirmed that your DB can handle the total connections from each POD?

## Lambda
* If using DDB/S3 as triggers, did you test with different batch and record sizes? This will help in increasing the throughput. Ref: https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html#stream-events
* If you are using provisioned concurrency, did you verify that will not brown out unpublished version of the function?Note: Provisioned concurrency counts towards a function's reserved concurrency and Regional limits. If the amount of provisioned concurrency on a function's versions and aliases adds up to the function's reserved concurrency, all invocations run on provisioned concurrency. This configuration also has the effect of throttling the unpublished version of the function ($LATEST), which prevents it from executing.
* What is the deployment package size of your Lambda function? You can find this from your AWS console. Limit ref: https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html

## Kinesis
* While scaling a service that utilizes Kinesis, do you have monitors, metrics, and alarms in place in line with the Kinesis best practices?
    * https://docs.aws.amazon.com/streams/latest/dev/introduction.html
    * https://docs.aws.amazon.com/streams/latest/dev/disaster-recovery-resiliency.html
* Did you load test your Kinesis consumer? https://docs.aws.amazon.com/streams/latest/dev/kinesis-record-processor-scaling.html
* Do you use Kinesis Client Library (KCL) or Kinesis Producer Library (KPL)?
* Did you verify the provisioned throughput capacity of your DynamoDB table? For each KCL/KPL application, a unique Amazon DynamoDB table is used to keep track of the application's state. If your application receives provisioned-throughput exceptions,it might be because of the insufficient provisioned throughput of the table.
    * https://docs.aws.amazon.com/streams/latest/dev/introduction.html
    *  https://docs.aws.amazon.com/cli/latest/reference/dynamodb/describe-table.html
* Do you have an sufficient rentention period set for your streams? The default retention period for an AWS Kinesis stream is 24 hours. To ensure that your consumers are able to read stream data before it expires if any problems occur, you can extend your data retention period up to 168 hours (7 days).
    * https://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html
* Do you have the recommended alarms configured for Amazon Kinesis Data Streams
    * https://docs.aws.amazon.com/streams/latest/dev/monitoring.html
    * https://docs.aws.amazon.com/streams/latest/dev/monitoring-with-cloudwatch.html
* Did you override the polling frequency by changing idleTimeBetweenReadsInMillis? If so, how did you verify that this is the ideal value? If this value is set improperly, there can be and increase in exceptions and latency.
    * https://docs.aws.amazon.com/streams/latest/dev/kinesis-low-latency.html

## ElasticSearch
* Load testing
* Are you deploying the domain across three Availability Zones. This configuration lets Amazon ES distribute replica shards to different Availability Zones than their corresponding primary shards. For a list of regions that have three Availability Zones and some other considerations, see [Configuring a Multi-AZ Domain](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html)

## API Gateway
* Have you reviewed your APIGateway API-level throttling limits for peak, and ensured they are adequate to meet your scaling factor for peak traffic?
    * https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html
* If the service employs a usage plan for per client and per-client-per-method throttling, please list the rate, burst limit and quota for each rule.
* If your API Gateway cache is enabled, list the cache size and TTL for each API and stage. Also list how you determined that this is the appropriate cache size/TTL. If not enabled, please explain why.
    * https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html

## SWF
* Do you have alarms in place to monitor the number of calls to SWF to handle throttling issues?
* Is your maximum execution history size more than 10k events? The best practice is to structure each workflow such that its history does not grow beyond 10,000 events. The decider has to fetch the workflow history, so a smaller history allows the decider to complete more quickly.
    * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-limits.html#swf-dg-limits-workflow-executions
    * https://docs.aws.amazon.com/cli/latest/reference/swf/get-workflow-execution-history.html
* What is the maximum number of pollers your service utilizes per task list? The maximum is 1,000 - but you can encounter LimitExceededException errors well before this quota. To reduce these errors, use multiple task lists to distribute polling.
    * https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-limits.html
* Do you have metrics and alarms configured to check if your activity and decider workers are healthy?
* Are you using workflow methods to perform long-running tasks? It is not recommended to do so. Replay can repeat that task multiple times, and even asynchronous workflow methods typically run more than once. Instead, use activities for long running tasks; replay executes activities only once.

## SQS
* Did you enable a re-drive policy for your service's SQS Queues to reduce the number of messages and mitigate the effects of poison pill messages?
    * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/working-with-messages.html#capturing-problematic-messages
* Did you configure dead-letter queue to have a longer retention period than the original queue? The expiration of a message is always based on its original enqueue timestamp.
    * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/working-with-messages.html#setting-up-dead-letter-queue-retention
* Do you have alarms in place for metrics published by SQS?
    * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-available-cloudwatch-metrics.html
    * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/set-cloudwatch-alarms-for-metrics.html

## ECS
* Did you configure your containers in the tasks to send log information to CloudWatch?
    * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#container_definition_storage
    * https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html

