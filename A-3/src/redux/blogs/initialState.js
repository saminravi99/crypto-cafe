export const initialState = {
  blogs: [
    {
      id: "1",
      title: "Component Based React Application Development with Redux",
      author: "Jhankar Mahbub",
      blogImg:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      authorImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
      category: "JavaScript",
      date: "11 Jul, 2022",
      readTime: "5 min read",
    },
    {
      id: "2",
      title: "JavaScript Debugging with Chrome DevTools",
      author: "Anisul Islam",
      blogImg:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorImg:
        "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "React",
      date: "05 Feb, 2022",
      readTime: "8 min read",
    },
    {
      id: "3",
      title: "How to use search engine optimization to drive sales",
      author: "Saidur Rahman Setu",
      blogImg:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorImg:
        "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "NodeJS",
      date: "06 Jan, 2022",
      readTime: "10 min read",
    },
    {
      id: "4",
      title:
        "Boost your conversion rate with Google Ads and Analytics - Google Adwords",
      author: "HM Nayem",
      blogImg:
        "https://images.unsplash.com/photo-1529336953128-a85760f58cb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorImg:
        "https://images.unsplash.com/photo-1585807515950-bc46d934c28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "ExpressJS",
      date: "17 Apr, 2022",
      readTime: "6 min read",
    },
    {
      id: "5",
      title: "How to use search engine optimization to drive sales",
      author: "Akash Ahmed",
      blogImg:
        "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorImg:
        "https://images.unsplash.com/photo-1617629642642-e36339a4d115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      category: "Tailwind CSS",
      date: "23 Mar, 2022",
      readTime: "4 min read",
    },
    {
      id: "6",
      title: "JavaScript Closure for Beginners - The Definitive Guide",
      author: "Sumit Saha",
      blogImg:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorImg:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Redux",
      date: "10 Sep, 2021",
      readTime: "7 min read",
    },
    {
      id: "7",
      title: "JavaScript Hoisting with Example  - The Definitive Guide",
      author: "HM Nayem",
      blogImg:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorImg:
        "https://images.unsplash.com/photo-1585807515950-bc46d934c28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Tailwind CSS",
      date: "10 Sep, 2021",
      readTime: "7 min read",
    },
    {
      id: "8",
      title: "Learn JavaScript in 10 minutes - Journey to the Web",
      author: "Saidur Rahman Setu",
      blogImg:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      authorImg:
        "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "MongoDB",
      date: "10 Sep, 2021",
      readTime: "7 min read",
    },
    {
      id: "9",
      title: "Easily create a responsive website - The Definitive Guide",
      author: "Jhankar Mahbub",
      blogImg:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
      category: "ExpressJS",
      date: "10 Sep, 2021",
      readTime: "7 min read",
    },
    {
      id: "10",
      title: "Join the React community safely - easy steps to join",
      author: "Sumit Saha",
      blogImg:
        "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      authorImg:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Redux",
      date: "10 Sep, 2021",
      readTime: "7 min read",
    },
    {
      id: "11",
      title: "Get started with React - tools and resources",
      author: "Anisul Islam",
      blogImg:
        "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80",
      authorImg:
        "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "NodeJS",
      date: "10 Sep, 2021",
      readTime: "7 min read",
    },
    {
      id: "12",
      title: "Start your own React project optimization - development",
      author: "Akash Ahmed",
      blogImg:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      authorImg:
        "https://images.unsplash.com/photo-1617629642642-e36339a4d115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      category: "React",
      date: "10 Sep, 2021",
      readTime: "7 min read",
    },
    {
      id: "13",
      title: "Code your first React component with create-react-component",
      author: "Sumit Saha",
      blogImg:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      authorImg:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "JavaScript",
      date: "10 Sep, 2021",
      readTime: "7 min read",
    },
  ],
};
