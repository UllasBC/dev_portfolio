import tweetme from '../../assets/projects_images/tweetme.PNG'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import COVID from '../../assets/projects_images/COVID.jpg'
import Dev_talks from '../../assets/projects_images/Dev_talks.jpg'

const data_projects = [
    {
        name: 'COVID 19 tracker',
        image: COVID,
        deployed_url: 'https://ullasbc.github.io/COVID19_Tracker/',
        github_url: 'https://github.com/UllasBC/COVID19_Tracker',
        category: ['react.js']
    },

    {
        name: 'Dev Talks',
        image: Dev_talks,
        deployed_url: 'https://ullasbc.github.io/tech-conf/',
        github_url: 'https://github.com/UllasBC/tech-conf',
        category: ['react.js']
    },

 
    {
        name: 'Amazon Clone',
        image: tweetme,
        deployed_url: 'https://ullasbc.github.io/e-com/',
        github_url: 'https://github.com/UllasBC/e-com',
        category: ['react']
    },



    {
        name: 'Dev Portfolio',
        image: portfolio,
        deployed_url: 'http://suprateem.herokuapp.com/',
        category: ['vanilla']
    },

]

export default data_projects;