import * as React from "react"
import Navbar from "@components/blog-components/Navbar"
import { Helmet } from "react-helmet"
import "./job-2022.css"
import { Orientation, TemplateName, templateExtend } from '@gitgraph/react';
import { createGitgraph } from "@gitgraph/js";
import { createText, createG, createForeignObject } from "@components/artworks/timeline/helpers";


const JobTimeline_2022 = () => {

    var renderLongMessage = function(commit) {
        return createG({
          translate: { x: 0, y: commit.style.dot.size },
          children: [
            createText({
              fill: commit.style.dot.color,
              content: commit.subject,
              font: "normal 14pt \"Noto Sans\""
            }),
            createForeignObject({
              width: 350,
              translate: { x: 10, y: 10 },
              content: commit.body
            }),
          ],
        });
      };
    
    
    React.useEffect(() => {

        const withoutHash = templateExtend(TemplateName.Metro, {
            colors: ["#EF476F", "#F78C6B", "#FFD166", "#06d6a0", "#118AB2", "#960D92", "#073B4C"],
            commit: {
                message: {
                    displayHash: false,
                    displayAuthor: false,
                },
            },
            branch: {
                label: {
                    display: false,
                },
            },
        });

        const graphContainer = document.getElementById("graph-container");
 
        // Instantiate the graph.
        const gitgraph = createGitgraph(graphContainer, {
            responsive: true,
            template: withoutHash,
            orientation: Orientation.VerticalReverse
        });

        const main = gitgraph.branch("main");
        main.commit({
            subject: "2021-12-27 Main",
            body: "Initialized. Started Leetcoding.",
            renderMessage: renderLongMessage
        });
        main.commit({
            subject: "2022-01-03 Main",
            body: "Finalized the resume.",
            renderMessage: renderLongMessage
        });
        
        const google = gitgraph.branch("Google");
        const microsoft = gitgraph.branch("Microsoft");
        google.commit({
            subject: "2022-01-13 Google",
            body: "Google recuriter reached out from Linkedin. No idea how Linkedin managed to mark me as an active job hunter because I did not make any change to my profile. If it's not coincident, Linkedin did a good job.",
            renderMessage: renderLongMessage
        });
        microsoft.commit({
            subject: "2022-01-14 Microsoft",
            body: "Microsoft recuriter reached out from Linkedin. Should not be coincident.",
            renderMessage: renderLongMessage
        });
        microsoft.commit({
            subject: "2022-01-19 Microsoft",
            body: "Told me Online Assessment will be sent by email in the next few days",
            renderMessage: renderLongMessage
        })
        google.commit({
            subject: "2022-01-20 Google",
            body: "Had a phone call with Google recruiter, scheduled the online assessment interview to 2022-02-22",
            renderMessage: renderLongMessage
        })
        microsoft.commit({
            subject: "2022-01-20 Microsoft",
            body: "Got an email to submit for hire event.",
            renderMessage: renderLongMessage
        })
        microsoft.commit({
            subject: "2022-01-31, Microsoft",
            body: "Got the email for online assessment.",
            renderMessage: renderLongMessage
        })
        microsoft.commit({
            subject: "2022-02-06 Microsoft",
            body: "OA passed",
            renderMessage: renderLongMessage
        })
        google.commit({
            subject: "2022-02-07 Google",
            body: "Good news, recruiter told me that OA can be skipped. Scheduled 2022-03-08 for onsite interview.",
            renderMessage: renderLongMessage
        })
        google.commit({
            subject: "2022-03-08 Google",
            body: "Onsite interview day. In the evening, recruiter said feedback was good.",
            renderMessage: renderLongMessage
        })
        google.commit({
            subject: "2022-03-09 Google",
            body: "Team match questionaire",
            renderMessage: renderLongMessage
        })
        microsoft.commit({
            subject: "2022-03-10 Microsoft",
            body: "Onsite day",
            renderMessage: renderLongMessage
        })
        main.commit({
            subject: "2022-03-12 Main",
            body: "Decided to do more interviews",
            renderMessage: renderLongMessage
        })

        const linkedin = gitgraph.branch("Linkedin");
        const apple = gitgraph.branch("apple");
        const meta = gitgraph.branch("meta")
        linkedin.commit({
            subject: "2022-03-14 Linkedin",
            body: "Got referral from friend in Linkedin",
            renderMessage: renderLongMessage
        })
        meta.commit({
            subject: "2022-03-14 Meta",
            body: "Got referral from friend in Linkedin",
            renderMessage: renderLongMessage
        })
        apple.commit({
            subject: "2022-03-14 Apple",
            body: "Got referral from friend in Apple",
            renderMessage: renderLongMessage
        })
        microsoft.commit({
            subject: "2022-03-15 Microsoft",
            body: "OA passed",
            renderMessage: renderLongMessage
        })
        linkedin.commit({
            subject: "2022-03-16 Linkedin",
            body: "Phone call with recruiter, scheduled 2022-03-23 for phone screen.",
            renderMessage: renderLongMessage
        })
        microsoft.commit({
            subject: "2022-03-18 Microsoft",
            body: "Phone call with hiring manager to discuss about the team.",
            renderMessage: renderLongMessage
        })
        microsoft.commit({
            subject: "2022-03-21 Microsoft",
            body: "Wanted to change a team. Recruiter put me into a waiting list for further team match.",
            renderMessage: renderLongMessage
        })
        linkedin.commit({
            subject: "2022-03-23 Linkedin",
            body: "Phone Screen day.",
            renderMessage: renderLongMessage
        })
        meta.commit({
            subject: "2022-03-23 Meta",
            body: "Phone call with recruiter, schedule 2022-03-28 for phone screen",
            renderMessage: renderLongMessage
        })
        linkedin.commit({
            subject: "2022-03-28 Linkedin",
            body: "OA paseed",
            renderMessage: renderLongMessage
        })
        google.commit({
            subject: "2022-03-28 Google",
            body: "Did 2 Team match meetings",
            renderMessage: renderLongMessage
        })
        meta.commit({
            subject: "2022-03-28 Meta",
            body: "Phone screen interview",
            renderMessage: renderLongMessage
        })
        google.commit({
            subject: "2022-03-29 Google",
            body: "Did another 2 Team match meetings",
            renderMessage: renderLongMessage
        })
        microsoft.commit({
            subject: "2022-03-29 Microsoft",
            body: "Did 2 Team match meetings",
            renderMessage: renderLongMessage
        })
        linkedin.commit({
            subject: "2022-03-29 Linkedin",
            body: "Scheduled 2022-04-04 for final interview",
            renderMessage: renderLongMessage
        })
        meta.commit({
            subject: "2022-03-30 Meta",
            body: "Phone Screen passed",
            renderMessage: renderLongMessage
        })
        microsoft.commit({
            subject: "2022-03-30 Microsoft",
            body: "Agrred to move on with one of the team",
            renderMessage: renderLongMessage
        })
        google.commit({
            subject: "2022-04-01 Google",
            body: "Had a phone call with recruiter, discussed about the numbers on the offer. It exceeds my expectation. But I believed this is because the recruiter is new so he does not have enough data points for my area.",
            renderMessage: renderLongMessage
        })
        linkedin.commit({
            subject: "2022-04-04 Linkedin",
            body: "Four final interviews",
            renderMessage: renderLongMessage
        })
        google.commit({
            subject: "2022-04-06 Google",
            body: "Agreed to move on with one team",
            renderMessage: renderLongMessage
        })
        google.commit({
            subject: "2022-04-08 Google",
            body: "Got email about the comp break down. It was 30k lower than my expectation.",
            renderMessage: renderLongMessage
        })
        linkedin.commit({
            subject: "2022-04-08 Linkedin",
            body: "Good news. Scheduled for team matching.",
            renderMessage: renderLongMessage
        })
        microsoft.commit({
            subject: "2022-04-10 Microsoft",
            body: "Phone call with recruiter. It's too low. Asked for a raise. Updated on the same day. But still lower than Google. Asked again for a raise.",
            renderMessage: renderLongMessage
        })
        microsoft.commit({
            subject: "2022-04-11 Microsoft",
            body: "Recruiter updated that that was the final offer. Turned down the offer.",
            renderMessage: renderLongMessage
        })
        main.merge(microsoft, "2022-04-11 Microsoft: End")

        linkedin.commit({
            subject: "2022-04-12 Linkedin",
            body: "First team match",
            renderMessage: renderLongMessage
        })
        meta.commit({
            subject: "2022-04-12 Meta",
            body: "Interview day, first",
            renderMessage: renderLongMessage
        })
        meta.commit({
            subject: "2022-04-13 Meta",
            body: "Interview day, second",
            renderMessage: renderLongMessage
        })
        linkedin.commit({
            subject: "2022-04-13 Linkedin",
            body: "Second team match",
            renderMessage: renderLongMessage
        })
        meta.commit({
            subject: "2022-04-14 Meta",
            body: "Interview day, third",
            renderMessage: renderLongMessage
        })
        meta.commit({
            subject: "2022-04-18 Meta",
            body: "Good news from Meta. Meta does team match after accepting offer",
            renderMessage: renderLongMessage
        })
        meta.commit({
            subject: "2022-04-19 Linkedin",
            body: "Discussed about the numbers. Asked for a raise. Recruiter returned an updated offer. Similar to my expectation.",
            renderMessage: renderLongMessage
        })
        meta.commit({
            subject: "2022-04-20 Meta",
            body: "Got email from Meta for the numbers. Higher than my expectation.",
            renderMessage: renderLongMessage
        })
        linkedin.commit({
            subject: "2022-04-20 Linkedin",
            body: "Used Meta's offer for competing. Returned higher comp.",
            renderMessage: renderLongMessage
        })
        google.commit({
            subject: "2022-04-20 Google",
            body: "Used Meta's offer for competing, returned higher comp similar to my expectation.",
            renderMessage: renderLongMessage
        })
        main.commit({
            subject: "2022-04-21 Main",
            body: "Heard the news that Meta freezed the hiring. A little worried about the company",
            renderMessage: renderLongMessage
        })
        google.commit({
            subject: "2022-04-22 Google",
            body: "Accepted the offer",
            renderMessage: renderLongMessage
        })
        meta.commit({
            subject: "2022-04-25 Meta",
            body: "Turned down the offer. Cool down for 1 year.",
            renderMessage: renderLongMessage
        })
        linkedin.commit({
            subject: "2022-04-25 Linkedin",
            body: "Turned down the offer. Cool down for 1 year.",
            renderMessage: renderLongMessage
        })
        main.merge(meta, "2022-04-25 Meta: end");
        main.merge(linkedin, "2022-04-25 Linkedin: end");
        google.merge(main, "Proceed with Google.");

        setTimeout(() => {
            const collection = document.getElementsByTagName("foreignObject");
            Array.from(collection).forEach(function (element) {
                element.setAttribute("height", "200");
                console.log("!")
            });

            const svg = document.querySelector("svg");
            svg.setAttribute("viewBox", "0 0 680 6295")
        }, 1000);
        
        return; 
    }, []);

    
    return (
        <>
            <Helmet title="Job Timeline 2022"/>
            <Navbar />
            <div className="job-2022-body">
                <div id="graph-container"></div>
            </div>
        </>
    )
}

export default JobTimeline_2022;