# Serverless Playgroud

This project is a bit all over the place since I treated it as my personal playground to experiment with serverless functions and various Amazon Web Services, including SNS and SQS. I also explored state machines, DynamoDB, and the storage and retrieval of parameters from the Parameter Store.

## Handlers

### Handler 1: parameterStore.ts

Parameter Store, a capability of AWS Systems Manager, provides secure, hierarchical storage for configuration data management and secrets management. Here I implemented the storage of retrieval of parameters to from the Parameter Store.

[Code](URL)

### Handler 2: publishSNS.ts

AWS SNS (Simple Notification Service) is a distributed publish/subscribe solution used for application-to-application (A2A) and application-to-person (A2P) communication. SNS topics are used to enable communication: producers publish messages to topics, and consumers subscribe to these topics to receive messages. You can deliver messages to various types of subscribers, such as AWS SQS queues, AWS Lambda functions, and HTTP endpoints. You can also use SNS to send SMS messages, email, and push notifications to end-user devices.

In this handler I implemented publishing of a message to an SNS topic.

Code:

```typescript
module.exports.handler = async (event: any, context: any) => {
  try {
    var sns = new AWS.SNS();
    var params = {
      Message: "Hello Slack!! This is a test message.",
      Subject: "Test SNS message From Lambda",
      TopicArn: process.env.SNS_TOPIC,
      MessageAttributes: {
        name: { DataType: "String", StringValue: "khadija" },
      },
    };
    sns.publish(params, context.done);
  } catch (err) {
    console.log(err);
  }
  logger.info("publish to sns topic handler completed");
  return event;
};
```

### Handler 3: subscriberSNS.ts

Here I am retrieveing the message posted to the SNS topic in the previous handler. I am then posting the retrieved message to Slack through a Webhook.

[Code](URL)

### Handler 4: publishSQS.ts

AWS SQS (Simple Queue Service) is a distributed, managed queueing service used for communication between applications, microservices, and distributed systems. While SNS supports A2A and A2P communication both, SQS supports only A2A communication.

In this handler I'm posting a message to an SQS Queue.

```typescript
module.exports.handler = async (event: any, context: any) => {
  try {
    var sqs = new AWS.SQS();
    var params = {
      DelaySeconds: 0,
      MessageBody: "This is a message from the SQS publisher",
      QueueUrl: process.env.SQS_URL,
    };

    sqs.sendMessage(params, function (err: any, data: { MessageId: any }) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.MessageId);
      }
    });
  } catch (err) {
    console.log(err);
  }
  logger.info("publish sqs handler completed");
  return event;
};
```

### Handler 5: subscriberSQS.ts

This handler is just reading the message that was published into the queue in the previous handler.

```typescript
module.exports.handler = async (event: any) => {
  try {
    event.Records.forEach((record: any) => {
      const { body } = record;
      logger.debug(body);
    });
  } catch (err) {
    console.log(err);
  }
};
```

### Handler 6: postgres-to-dynamodb.ts

Here I experimented with how I can transfer data from my local postgres databse to Amazon DynamoDB Database. Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling.

[Code](URL)

### Getting Started

```typescript
// Code snippet or example usage of the handler
```

### Deployment

```typescript
// Code snippet or example usage of the handler
```

### Built With

```typescript
// Code snippet or example usage of the handler
```
