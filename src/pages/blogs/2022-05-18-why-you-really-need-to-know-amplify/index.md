---
path: "/blogs/why-you-really-need-to-know-amplify"
date: "2022-05-19T02:22:42.427Z"
title: "AWS的新手大礼包——Amplify"
tags: ["blog", "checkout dash b", "ng project", "aws", "amplify"]
description: "Amplify是一个非常有活力的社区。在我看来，作为毕业生且面向软件工程师找工作的你，如果没有接触过它，尝试它会有非常新奇的体验。这种体验既可以帮助你构建作为软件工程师的‘品味’；又可以‘加速’你奇思妙想的实现；最关键的是它可以带动你去了解当下工业界的一些流行的解决方案……"
featuredimage: images/280314452b365293a02970355901d96ae00f193b5725073f50eed1cae4e6895c.png
featuredimageAlt: "Amplify Logo"
---

``` toc
```

## 何许人也
[AWS Amplify](https://aws.amazon.com/amplify/)是亚马逊云2018年推出，且当下正在蓬勃发展的[开源项目](https://github.com/aws-amplify/amplify-js)。其本身实质上是一个加速后端搭建并交互各种常见前端的**全栈**框架。它提供了命令行工具链，用以快速地创建后端设施并创建配置模版文件；它维护了一组前端库，方便各种前端与其创建的后端设施进行交互；它还原生提供了前端组件，方便一些常用需求（比如Authentication）的UI创建；最后，它还提供了项目的building和hosting的方案，一行命令部署上线，实现[CICD](https://www.redhat.com/en/topics/devops/what-is-ci-cd)。

作为一个[BaaS](https://www.hitechnectar.com/blogs/top-14-backend-as-a-service-providers/)解决方案，Amplify支持的前端框架基本涵盖了我个人目力之所及。应用于Web，它提供了对React、Angular、Vue等的支持；应用于native，它也支持iOS、Andriod原生开发。除此以外，笔者执笔之时，已距离我过去的Amplify使用经验一年有余，再次打开[它的文档](https://docs.amplify.aws/start/)，挠头于“当时确实只有4、5个选项吧。”开源社区其活跃的程度，可见一斑。

![picture 2](images/f3b5ce785ada9cbfb7a9e596b867c58f5c754e0ede3dfb6fe1af961172842a16.png)

OK，[前端，你是有的。后端呢？我凭什么相信（停顿）你能剿了“全栈”？](https://zhuanlan.zhihu.com/p/382399510?ivk_sa=1024320u#:~:text=%E8%83%86%E5%AD%90%E4%BD%A0%E6%98%AF%E6%9C%89%E7%9A%84%EF%BC%8C%E6%9C%AC%E4%BA%8B%E5%91%A2%EF%BC%8C%E6%88%91%E5%87%AD%E4%BB%80%E4%B9%88%E7%9B%B8%E4%BF%A1%E4%BD%A0%E8%83%BD%E5%89%BF%E4%BA%86%E5%BC%A0%E9%BA%BB%E5%AD%90)。

Amplify对后端的管理是对于AWS Infrastrcture as Code(IoC)理念的一层从功能出发的抽象。简单说，当你上手AWS上眼花缭乱的服务的时候，官方的教程通常是让你去AWS的控制台，也就是在网站上使用鼠标点击完成服务的创建和使用。而在实际工程中，一个应用需要你如同组合乐高积木一样组合多个AWS服务，其中涉及了大量的配置，自动化就显得格为重要。于是AWS提供了Cloud Formation，一种描述性的模版，来定义你需要的后端设施。你可以理解为你是乐高的设计师，你设计了一个房子，其中“地板”需要2*16的棕色积木，编号是“b-772”（我不玩乐高，我瞎编的），32个，逐行错开排拼在第一层。于是，你只需要制作说明书，把上面的信息记下，玩家（AWS）就能按照你的说明书（模版）搭建房子（应用）。用“模版（代码）”定义后端的设施，便是IoC。

Amplify则更进一步，它做的工作是“设计常见的模块说明书以方便其他乐高设计师”。依然用上面的例子，拥有了Amplify，你的说明书将可以从“32个棕色的b-277逐行错开拼在第一层”简化成“棕色地板:32*32的面积”。怎么拼，以及积木标号，都被抽象成了“地板”这个名词，随Amplify设计去吧，我们只关心这里需要的是地板就足够了！

有了这样的概念，我们便可以理解Amplify在后端的构建上实质是通过一定程度上牺牲灵活性，以换取便利度，方便新手入门AWS、或老手构建“常见需求”和”复杂项目的Demo“。幸运的是，AWS在设计Amplify的时候，事实上依然保留了相当的灵活性，Amplify应用可以作为一个组件，嵌在复杂的项目当中并发挥一定作用。当然那就是后话了。

正如这篇blog标题所讲的，Amplify是AWS这个手游的新手大礼包。相当合适的学习成本，你就能上手一众AWS的明星产品。从新手到角度来说，”大礼包“功能强大，能迅速拉开与不充值玩家实力的差距；而对于老玩家，”大礼包“也有其价值，你会发现总有一些小东西，用Amplify实现能做得很漂亮，很方便。而怎么拉开差距，怎么漂亮，怎么方便，容我下面慢慢到来。

![picture 5](images/280314452b365293a02970355901d96ae00f193b5725073f50eed1cae4e6895c.png)  




## Drafting
| 底层需求 | 比如 | Amplify提供方便了吗 | AWS提供了吗 |
| ----------- | ----------- | ----------- | ----------- |
| 数据存储 | 商品信息/博客文章/数据表怎么存？存在哪儿？| 是 | AppSync (DynamoDB/Aurora/AES) |
| 数据同步 | 微信聊天，我发消息如何**同步**给其他用户？| 是 | AppSync (DynamoDB) |
| 数据搜索 | 搜索框输入商品名，索引提供结果。怎么**索引**？| 是 | AppSync (AES) |
| 文件存储 | 用户上传的照片，怎么存？存在哪儿？| 是 | S3 |
| 逻辑控制与计算 | 我想自定义API功能 | 是 | Appsync/API Gateway (Lambda/ECS/EC2) |

| 中层需求 | 比如 | Amplify提供方便了吗 | AWS提供了吗 |
| ----------- | ------ | ----------- | ----------- |
| CI/CD 持续开发持续部署| 我push了代码，希望构建-测试-部署自动化 | 是 | CodeCommit, CodePipeline|
| IaC 设施即代码 | 我想自动化设施搭建 | 是 | CDK, CF |
| Availability 可用性 | 服务的提供会因为各种原因中断吗？ | 是 | AWS的立身之本 |
| Scalability 伸缩性 | 今天就10个用户，未来10万用户的时候我不希望重构 | 是 | 带无服务(Serverless)属性的服务都具备 |
| Durability 耐受性 | 墨菲定律，但是最坏情况下，我不希望数据丢失 | 是 | 带无服务(Serverless)属性的服务都具备 |
| 内部安全认证 | 只有我自己的Lambda才能调用我的ES | 否（据我所知） | 
| DNS与认证 | 用户如何抵达我的网站，并认证我的网站的真实性？| 部分 | Certificate Manager, Route 53 |

| 高层需求 | 比如 | Amplify提供方便了吗 | AWS Provider |
| ------- | -------- | -------- | -------- |
| 用户认证 | 用户注册、登陆 | 是 | Cognito |
| 用户行为分析 | 用户从哪儿来，到哪儿去，家里几口人，共有几亩地 | 是 | Pinpoint |
| 消息推送 | 你中奖了 | 是 | SNS, SMS, Pinpoint |
| 流数据 | 直播 | 否 | Firehose |
| ... | ... | ... | ...|
