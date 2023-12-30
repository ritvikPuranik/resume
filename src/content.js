const startups = [
    {
        "title":"ezPark",
        "description": "A Parking management app that works based on QR technology. Vehicle owners can scan at entry and exit and get recorded by the system.",
        "img":  "../assets/ezPark.png",
        "links":{
           "linkedin": "https://www.udemy.com/certificate/UC-488ffe30-4d2b-4140-be96-dada7e295a8f/",
           "facebook": "https://www.udemy.com/certificate/UC-488ffe30-4d2b-4140-be96-dada7e295a8f/" 
        } 
    },
    {
        "title":"CommuniT",
        "description": "A whatsapp chatbot to connect residents of our apartment complex with the neighbourhood stores. The store-owner would have a unique dashboard where they can see their incoming orders in the form of cards along with resident details. The resident would interact with the platform via whatsapp, through Twilio. The frontend was made using React and backend using Flask.",
        "links":{
            "linkedin": "https://www.udemy.com/certificate/UC-488ffe30-4d2b-4140-be96-dada7e295a8f/",
            "facebook": "https://www.udemy.com/certificate/UC-488ffe30-4d2b-4140-be96-dada7e295a8f/" 
         } 
    },
    {
        "title":"DelOr",
        "description": "An intitiative in college to facilitiate food delivery amongst the students. If someone craves for maggi which is at a cafe 400m away, he/ she can rather get in touch with someone who's headed from that cafe, and request them to pick up his maggi too! We provide this visibility through the DelOr app",
        "img":  "../assets/delOr.png",
        "links":{
            "linkedin": "https://www.udemy.com/certificate/UC-488ffe30-4d2b-4140-be96-dada7e295a8f/",
            "facebook": "https://www.udemy.com/certificate/UC-488ffe30-4d2b-4140-be96-dada7e295a8f/" 
         } 
    },
    {
        "title":"Nature Pure",
        "description": "A freelance project to develop an app similar to BigBasket, with the usecase of delivering to places that mainstream delivery apps don't serve. We were contacted by a restaurant owner who originally identified this issue and served as the local BigBasket of his area. He wanted to expand his reach through the use of a formal app.",
        "img":  "../assets/naturePure.png",
        "links":{
            "linkedin": "https://www.udemy.com/certificate/UC-488ffe30-4d2b-4140-be96-dada7e295a8f/",
            "facebook": "https://www.udemy.com/certificate/UC-488ffe30-4d2b-4140-be96-dada7e295a8f/" 
         } 
    }
];


const courses = [ // The image links have to be manually added into "courseImg" array in Course.jsx
    {
        "title": "The Complete Web Design Course",
        "description": "Covered serveral key web dev topics ranging from HTML/CSS/JS to frameworks like ExpressJS. Covered Database and Security related cencepts too.",
        "certificate": "https://www.udemy.com/certificate/UC-69be8b9a-79ab-4cfe-a56b-b590e870ec50/",
        "img":"../assets/webDevBootcamp.png"
    },
    {
        "title": "Blockchain A-Z",
        "description": "Covered the basics of blockchain from how a blockchain works, to consensus mechanism of bitcoin(POW), hashing, mining, mempools and the fundamentals of the technology. Also created a simple blockchain myself using express servers and 2 nodes.",
        "certificate": "https://www.udemy.com/certificate/UC-488ffe30-4d2b-4140-be96-dada7e295a8f/",
        "img":"../assets/blockchainAZ.png"
    },
    {
        "title": "Ethereum Developer Bootcamp",
        "description": "A comprehensive course on ethereum development. Covers a wide range of concepts from solidity fundamentals to ERC20 and ERC721 protocols. Reinforced through projects during the course.",
        "certificate": "https://www.udemy.com/certificate/UC-02eab1e7-3a88-4941-907a-8eec76095544/",
        "img":"../assets/ethDevBootcamp.png"
    },
];

const projects = [
    {
        "title": "Family Wallet",
        "description": "An expense management tool coupled with a wallet, for the family. A 'Parent' authorizes a transansaction initiated by other family members. They can also add members to the family(each account is a member - parent or non-parent). All transactions are displayed on a dashboard. The application is authenticated so that only family members can login.",
        "github": "https://github.com/ritvikPuranik/Family-Wallet",
        "img": "../assets/coffee.jpeg"
    },
    {
        "title": "Vote System",
        "description": "A decentralized voting system, with features to add candidates, fund the campaign(more you fund the campaign, more the influence of your vote), compute results based on votes and weightage. Compliant with ERC20 standards.",
        "github": "https://github.com/ritvikPuranik/Vote-System-React",
        "img": "../assets/vote-system.png"
    },
    {
        "title": "To-Do-List",
        "description": "A simple tool to manage daily activities, leveraging blockchain technology. It keeps track of pending and completed items for each account connected to the site(through MetaMask). The frontend made use of Vanilla Js and web3 library, and the smart contract was in solidity hosted on ganache",
        "github": "https://github.com/ritvikPuranik/to-do-list",
        "img": "../assets/todolist.png"
    }
];

export {startups, courses, projects};