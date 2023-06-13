import home from '../assets/icons/home.svg';
import compus from '../assets/icons/compus.svg';
import subscribers from '../assets/icons/subscribers.svg';
import library from '../assets/icons/library.svg';
import history from '../assets/icons/history.svg';
import videos from '../assets/icons/videos.svg';
import watchlater from '../assets/icons/watchlater.svg';
import liked from '../assets/icons/liked.svg';
import arrow from '../assets/icons/arrow-down.svg';
import webbrain from '../assets/imgs/webbrain.png';
import ibrat from '../assets/imgs/ibrat.png';
import netflix from '../assets/imgs/netflix.png';
import sardor from '../assets/imgs/sardor.png';
import akbarov from '../assets/imgs/akbarov.png.png';
import texnoplov from '../assets/imgs/texnoplov.png';
import barno from '../assets/imgs/barno.png';
import teacher from '../assets/imgs/teacher.png';
import osmon from '../assets/imgs/osmon.png'
import trending from '../assets/imgs/trending.png';
import music from '../assets/imgs/music.png';
import live from '../assets/imgs/live.png';
import gaming from '../assets/imgs/game.png';
import news from '../assets/imgs/news.png';
import sports from '../assets/imgs/sports.png';
import learning from '../assets/imgs/learning.png';
import fashion from '../assets/imgs/fashion.png';
import studio from '../assets/imgs/studio.png';
import kids from '../assets/imgs/kids.png';
import setting from '../assets/imgs/setting.png';
import report from '../assets/imgs/report.png';
import help from '../assets/imgs/help.png';
import feedback from '../assets/imgs/feedback.png';


export const sidebar = [
    {
        id: 1,
        data: [
            { id: 1, title: 'Home', icon: home },
            { id: 2, title: 'Explore', icon: compus },
            { id: 3, title: 'Subscriptions', icon: subscribers },
        ]
    },
    {
        id: 2,
        data: [
            { id: 1, title: 'Library', icon: library },
            { id: 2, title: 'History', icon: history },
            { id: 3, title: 'Your videos', icon: videos },
            { id: 4, title: 'Watch later', icon: watchlater },
            { id: 5, title: 'Liked videos', icon: liked },
        ]
    },
    {
        id: 3,
        title: 'Subscriptions',
        data: [
            { id: 1, title: 'Webbrain Academy', icon: webbrain },
            { id: 2, title: 'Ibrat Farzandlari', icon: ibrat },
            { id: 3, title: 'Netflix', icon: netflix },
            { id: 4, title: 'Sardorbek Mukhtorov', icon: sardor },
            { id: 5, title: 'CodeWithAkbarov', icon: akbarov },
            { id: 8, title: 'Teacher Azam', icon: teacher },
            { id: 9, title: 'Osmondagi bolalar', icon: osmon },
            { id: 10, title: 'Barno Askarova', icon: barno },
            { id: 11, title: 'Texnoplov', icon: texnoplov },
            { id: 12, title: 'Show more', icon: arrow },
        ]
    },
    {
        id: 4,
        title: 'Explore',
        data: [
            { id: 1, title: 'Trending', icon: trending },
            { id: 2, title: 'Music', icon: music },
            { id: 3, title: 'Live', icon: live },
            { id: 4, title: 'Gaming', icon: gaming },
            { id: 5, title: 'News', icon: news },
            { id: 6, title: 'Sports', icon: sports },
            { id: 7, title: 'Learning', icon: learning },
            { id: 8, title: 'Fashion & Beauty', icon: fashion },
        ]
    },
    {
        id: 5,
        title: 'More from YouTube',
        data: [
            { id: 1, title: 'YouTube Studio', icon: studio },
            { id: 2, title: 'YouTube Kids', icon: kids },
        ]
    },
    {
        id: 6,
        data: [
            { id: 1, title: 'Settings', icon: setting },
            { id: 2, title: 'Report history', icon: report },
            { id: 2, title: 'Help', icon: help },
            { id: 2, title: 'Send feedback', icon: feedback },
        ]
    },
]
