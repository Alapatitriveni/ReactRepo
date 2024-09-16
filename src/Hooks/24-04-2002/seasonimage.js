import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import springImage from './images/spring.jpg';
import summerImage from './images/summer.jpg';
import autumnImage from './images/autumn.jpg';
import winterImage from './images/winter.jpg';

// const seasonConfig = {
//     spring: {
//         text: "Spring",
//         image: springImage
//     },
//     summer: {
//         text: "Summer",
//         image: summerImage
//     },
//     autumn: {
//         text: "Autumn",
//         image: autumnImage
//     },
//     winter: {
//         text: "Winter",
//         image: winterImage
//     }
// };

// const getSeason = (month) => {
//     if (month >= 2 && month <= 4) return 'spring';
//     if (month >= 5 && month <= 7) return 'summer';
//     if (month >= 8 && month <= 10) return 'autumn';
//     return 'winter';
// };

const SeasonDisplay = () => {
    const month = new Date().getMonth();
    const season = getSeason(month);
    const { text, image } = seasonConfig[season];
    const seasonConfig = {
        spring: {
            text: "Spring",
            image: springImage
        },
        summer: {
            text: "Summer",
            image: summerImage
        },
        autumn: {
            text: "Autumn",
            image: autumnImage
        },
        winter: {
            text: "Winter",
            image: winterImage
        }
    };
    
    const getSeason = (month) => {
        if (month >= 2 && month <= 4) return 'spring';
        if (month >= 5 && month <= 7) return 'summer';
        if (month >= 8 && month <= 10) return 'autumn';
        return 'winter';
    };

    return (
        <div className="container mt-5 text-center">
            <h1>{text}</h1>
            <img src={image} alt={text} style={{ width: '300px', height: '200px' }} />
        </div>
    );
}

export default SeasonDisplay;
