const seasonConfig = [{
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
}]

const getSeason = (month) => {
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
    return 'winter';
};
export default  seasonConfig;