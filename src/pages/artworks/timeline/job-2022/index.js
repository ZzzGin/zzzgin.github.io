import * as React from "react"
import Navbar from "@components/blog-components/Navbar"
import { Helmet } from "react-helmet"
import "./job-2022.css"
import { Gitgraph, Orientation, TemplateName, templateExtend } from '@gitgraph/react';

const JobTimeline_2022 = () => {

    const withoutHash = templateExtend(TemplateName.Metro, {
        colors: ["#EF476F", "#F78C6B", "#FFD166", "#06d6a0", "#118AB2", "#960D92", "#073B4C"],
        commit: {
            message: {
                displayHash: false,
                displayAuthor: false,
            },
        },
    });
    
    return (
        <>
            <Helmet title="Job Timeline 2022"/>
            <Navbar />
            <div className="job-2022-body">
                <Gitgraph 
                    options={{
                        template: withoutHash,
                        orientation: Orientation.VerticalReverse
                    }

                }>
                    {
                        (gitgraph) => {
                            const main = gitgraph.branch("main");
                            main.commit({
                                subject: "Leetcode第一题，启程",
                                tag: "2021-12-27"
                            });
                            main.commit({
                                subject: "简历完成",
                                tag: "2022-01-03"
                            });
                            
                            const google = gitgraph.branch("Google");
                            const microsoft = gitgraph.branch("Microsoft");
                            google.commit({
                                subject: "Google recruiter通过Linkedin联系",
                                tag: "2022-01-13"
                            });
                            microsoft.commit({
                                subject: "Microsoft recruiter通过Linkedin联系",
                                tag: "2022-01-14"
                            });
                            microsoft.commit({
                                subject: "Microsoft Recruiter第一次通话",
                                body: "得知OA将在近日发送",
                                tag: "2022-01-19"
                            })
                            google.commit({
                                subject: "Google Recruiter第一次通话",
                                body: "约2022-02-22日OA",
                                tag: "2022-01-20"
                            })
                            microsoft.commit({
                                subject: "Microsoft正式投递简历",
                                tag: "2022-01-20"
                            })
                            microsoft.commit({
                                subject: "Microsoft 收到Online Assessment邮件",
                                tag: "2022-01-31"
                            })
                            microsoft.commit({
                                subject: "Microsoft邮件通知OA通过",
                                body: "约2022-03-10面试",
                                tag: "2022-02-06"
                            })
                            google.commit({
                                subject: "Google通知跳过OA，直接进行面试（onsite）",
                                body: "约2022-03-08日onsite",
                                tag: "2022-02-07"
                            })
                            microsoft.commit({
                                subject: "Microsoft UI immigration问卷调查",
                                tag: "2022-03-04"
                            })
                            google.commit({
                                subject: "Google面试日，当日下午6时通知‘情况不错’",
                                tag: "2022-03-08"
                            })
                            google.commit({
                                subject: "Google Team Match问卷",
                                tag: "2022-03-09"
                            })
                            microsoft.commit({
                                subject: "Microsoft面试日",
                                tag: "2022-03-10"
                            })
                            main.commit({
                                subject: "因面试情况不错，决定趁手热继续多面",
                                tag: "2022-03-12"
                            })
                            const linkedin = gitgraph.branch("Linkedin");
                            const apple = gitgraph.branch("apple");
                            const meta = gitgraph.branch("meta")
                            linkedin.commit({
                                subject: "Linkedin与朋友沟通获得内推",
                                tag: "2022-03-14"
                            })
                            meta.commit({
                                subject: "Meta与朋友沟通获得内推",
                                tag: "2022-03-14"
                            })
                            apple.commit({
                                subject: "Apple与朋友沟通获得内推",
                                tag: "2022-03-14"
                            })
                            microsoft.commit({
                                subject: "Microsoft通知面试通过",
                                tag: "2022-03-15",
                            })
                            linkedin.commit({
                                subject: "Linkedin Recruiter电话联系",
                                body: "正式投递简历，约2022-03-23 phone screen",
                                tag: "2022-03-16"
                            })
                            microsoft.commit({
                                subject: "Microsoft Hiring Event与HM沟通选组",
                                tag: "2022-03-18"
                            })
                            microsoft.commit({
                                subject: "Microsoft 告知不满意，进入TM队列",
                                tag: "2022-03-21"
                            })
                            linkedin.commit({
                                subject: "Linkedin Phone Screen",
                                tag: "2022-03-23"
                            })
                            meta.commit({
                                subject: "Meta Recruiter电话联系",
                                body: "约2022-03-28 phone screen",
                                tag: "2022-03-23"
                            })
                            linkedin.commit({
                                subject: "Linkedin 通知OA通过",
                                tag: "2022-03-28"
                            })
                            google.commit({
                                subject: "Google Team Match第一场与第二场",
                                tag: "2022-03-28"
                            })
                            meta.commit({
                                subject: "Meta 电话面试",
                                tag: "2022-03-28"
                            })
                            google.commit({
                                subject: "Google Team Match第三场与第四场",
                                tag: "2022-03-29"
                            })
                            microsoft.commit({
                                subject: "Microsoft Team Match第一场与第二场",
                                tag: "2022-03-29"
                            })
                            linkedin.commit({
                                subject: "Linkedin约2022-04-04正式面试",
                                tag: "2022-03-29"
                            })
                            meta.commit({
                                subject: "Meta通知OA通过",
                                tag: "2022-03-30"
                            })
                            microsoft.commit({
                                subject: "Microsoft 同意与其中一个team move on",
                                tag: "2022-03-30"
                            })
                            google.commit({
                                subject: "Google 沟通数字，超出预期，HR说去和Comp Team确认后发offer",
                                tag: "2022-04-01"
                            })
                            linkedin.commit({
                                subject: "Linkedin 正式面试",
                                tag: "2022-04-04"
                            })
                            google.commit({
                                subject: "Google 同意与其中一个team move on",
                                tag: "2022-04-06"
                            })
                            google.commit({
                                subject: "Google正式offer，数字远低于之前谈论的数字",
                                tag: "2022-04-08"
                            })
                            linkedin.commit({
                                subject: "Linkedin传来好消息，进入Team Match",
                                tag: "2022-04-08"
                            })
                            microsoft.commit({
                                subject: "Microsoft 口头offer",
                                body: "过低，要求update",
                                tag: "2022-04-10"
                            })
                            microsoft.commit({
                                subject: "Microsoft update的offer依然过低，拒绝offer",
                                tag: "2022-04-11"
                            })
                            main.merge(microsoft, "Microsoft终止")

                            linkedin.commit({
                                subject: "Linkedin 第一场TM",
                                tag: "2022-04-12"
                            })
                            meta.commit({
                                subject: "Meta正式面试，第一日",
                                tag: "2022-04-12"
                            })
                            meta.commit({
                                subject: "Meta正式面试，第二日",
                                tag: "2022-04-13"
                            })
                            linkedin.commit({
                                subject: "Linkedin第二场TM",
                                tag: "2022-04-13"
                            })
                            meta.commit({
                                subject: "Meta正式面试，第三日",
                                tag: "2022-04-13"
                            })
                            meta.commit({
                                subject: "Meta传来好消息",
                                tag: "2022-04-18"
                            })
                            meta.commit({
                                subject: "Linkedin沟通offer数字，要求提升，当日提升至心理预期",
                                tag: "2022-04-19"
                            })
                            meta.commit({
                                subject: "Meta沟通offer数字，直接报出对Meta的心理预期，offer超出心理预期",
                                tag: "2022-04-20"
                            })
                            linkedin.commit({
                                subject: "Linkedin, 使用Meta offer compete，一定提升",
                                tag: "2022-04-20"
                            })
                            google.commit({
                                subject: "Google, 使用Meta offer compete，获得超出预期的提升",
                                tag: "2022-04-20"
                            })
                            google.commit({
                                subject: "Google 接受offer",
                                tag: "2022-04-22"
                            })
                            meta.commit({
                                subject: "Meta 拒绝offer",
                                tag: "2022-04-25"
                            })
                            linkedin.commit({
                                subject: "Linkedin 拒绝offer",
                                tag: "2022-04-25"
                            })
                            main.merge(meta, "Meta终止");
                            main.merge(linkedin, "Linkedin终止");
                            google.commit({
                                subject: "Google启动签证转移进程",
                                tag: "2022-04-25"
                            })
                        }
                    }
                </Gitgraph>
            </div>
        </>
    )
}

export default JobTimeline_2022;