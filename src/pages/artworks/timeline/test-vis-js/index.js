import * as React from "react"
import "@components/css/story-teller-template.css"
import Navbar from "@components/blog-components/Navbar"
import TimelineStory from "@components/artworks/timeline/TimelineStory";
import { Helmet } from "react-helmet"

const TestVisJs = () => {
    const groups = [
        {id: "g-amazon", content: "Amazon", tag: "Amazon"},
        {id: "g-amazon-fulfillment", content: "> Fulfillment", tag: "Amazon.Fulfillment"},
        {id: "g-amazon-kindle", content: "> Kindle", tag: "Amazon.Kindle"},
        {id: "g-google", content: "Google", tag: "Google"},
        {id: "g-microsoft", content: "Microsoft", tag: "Microsoft"}
    ];

    const events = [
        {start: '2022-04-14', end: '2022-04-15', group: 'g-amazon', title: 'title-1', desription: 'description-1', links: ['https://www.google.com', 'https://www.youtube.com'], color: 'red'},
        {start: '2022-04-21', end: '2022-04-22', group: 'g-amazon-fulfillment', title: 'title-2', desription: 'description-2', links: ['https://www.bilibili.com', 'https://www.zhihu.com'], color: 'blue'},
        {start: '2022-04-23', group: 'g-amazon-kindle', title: 'title-3', desription: 'This field is optional. When the group column is provided, all items with the same group are placed on one line. A vertical axis is displayed showing the groups. Grouping items can be useful for example when showing availability of multiple people, rooms, or other resources next to each other.', links: ['https://www.google.com', 'https://www.youtube.com'], color: 'green'},
        {start: '2022-05-01', end: '2022-05-02', group: 'g-google', title: 'title-4', desription: 'description-4', links: ['https://www.bilibili.com', 'https://www.zhihu.com'], color: 'red'},
        {start: '2022-05-03', group: 'g-microsoft', title: 'title-5', desription: 'description-5', links: ['https://www.google.com', 'https://www.youtube.com'], color: 'blue'},
        {start: '2022-05-14', end: '2022-05-15', group: 'g-google', title: 'title-6', desription: 'description-6', links: ['https://www.google.com', 'https://www.youtube.com'], color: 'green'},
        {start: '2022-05-16', group: 'g-google', title: 'title-7', desription: 'description-7', links: ['https://www.google.com', 'https://www.youtube.com'], color: 'red'},
        {start: '2022-05-17', group: 'g-google', title: 'title-8', desription: 'description-8', links: ['https://www.google.com', 'https://www.youtube.com'], color: 'blue'},
        {start: '2022-05-18', group: 'g-google', title: 'title-9', desription: 'description-9', links: ['https://www.google.com', 'https://www.youtube.com'], color: 'green'},
        {start: '2022-05-19', group: 'g-google', title: 'title-10', desription: 'description-10', links: ['https://www.google.com', 'https://www.youtube.com'], color: 'red'},
        {start: '2022-06-01', group: 'g-amazon-kindle', title: 'Shut Down China Kindle Store', desription: 'The e-commerce giant will discontinue the Kindle eBook store on June 30, 2023, a spokesperson said in an emailed statement. It promised to continue supporting Kindle readers or refund any device purchases made after January this year.', links: ["https://www.bloomberg.com/news/articles/2022-06-02/amazon-to-shut-kindle-store-in-china-after-years-long-struggle"], color: 'red'}
    ];

    return (
        <>
            <Helmet title="zzz - test vis.js"/>
            <Navbar />
            <div className="timeline-story-container" style={{zIndex: 10}}>
                <div className="timeline-story-title">Storyteller Demo</div>
                <TimelineStory
                    groups={ groups }
                    events={ events }
                />
            </div>
            
        </>
    );
}

export default TestVisJs;