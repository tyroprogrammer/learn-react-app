import { sample } from 'lodash';

const PRICE = { MIN: 25, MAX: 250 };
const BETA = { MIN: 1, MAX: 2 };
const VOLAVG = { MIN: 10000, MAX: 1000000 };
const MKTCAP = { MIN: 10000000, MAX: 50000000000 };
const LASTDIV_PERC = { MIN: 0, MAX: 0.03 };
const RANGESPREAD_PERC = { MIN: 0.02, MAX: 0.05 };
const CHANGESPERC = { MIN: 0.01, MAX: 0.05 };

const SECTOR_INDUSTRY = {
    'Technology': ['Computer Hardware', 'Online Media', 'SemiConductor', 'Application Software'],
    'Consumer': ['Restaurant', 'Utilities', 'Retail', 'Entertainment', 'Apparel'],
    'Health Care': ['Medical Device'],
    'Industrial': ['Airlines', 'Manufacturing'],
    'Financial Services': ['Brokers & Exchanges', 'Banks']
};

const EXCHANGE = ['NASDAQ', 'NYSE'];

class CompanyDataGenerator {
    constructor() {

    }

    getPrice() {
        return getRandomNumberBetween(PRICE.MIN, PRICE.MAX);
    }

    getBeta() {
        return getRandomNumberBetween(BETA.MIN, BETA.MAX, true);
    }

    getVolAvg() {
        return `${getRandomNumberBetween(VOLAVG.MIN, VOLAVG.MAX).toLocaleString('US')}`;
    }

    getMktCap() {
        return `$${getRandomNumberBetween(MKTCAP.MIN, MKTCAP.MAX).toLocaleString('US')}`;
    }

    getLastDiv(price) {
        return (price * getRandomNumberBetween(LASTDIV_PERC.MIN, LASTDIV_PERC.MAX, true)).toFixed(2);
    }

    getRange(price) {
        return `$${(price - price * RANGESPREAD_PERC.MIN).toFixed(2)} 
                - $${(price + price * RANGESPREAD_PERC.MAX).toFixed(2)}`
    }

    getChangePerc() {
        return getRandomNumberBetween(CHANGESPERC.MIN, CHANGESPERC.MAX, true);
    }

    getChange(price, changePerc) {
        return (price * changePerc).toFixed(2);
    }

    getCompanyFinancial() {
        const Price = this.getPrice();
        const Beta = this.getBeta();
        const VolAvg = this.getVolAvg();
        const MktCap = this.getMktCap();
        const LastDiv = this.getLastDiv(Price);
        const Range = this.getRange(Price);
        const ChangePerc = this.getChangePerc();
        const Change = this.getChange(Price, ChangePerc);
        return {
            Price: `$${Price}`,
            Beta,
            VolAvg,
            MktCap,
            LastDiv,
            Range,
            ChangePerc: `${ChangePerc * 100}%`,
            Change
        }
    }

    getDescription(name, sector) {
        const randomYear = getRandomNumberBetween(5, 50);
        return `${name} is an excellent company in ${sector} sector for past ${randomYear} years producing outstanding results for it's shareholders.`
    }

    getExchange() {
        return sample(EXCHANGE);
    }

    getIndustry(sector) {
        return sample(SECTOR_INDUSTRY[sector]);
    }

    getSector() {
        return sample(Object.keys(SECTOR_INDUSTRY));
    }

    getWebsite(ticker) {
        return `http://www.${ticker.toLowerCase()}.com`
    }

    getCompanyProfile(ticker) {
        const companyName = ticker.toUpperCase();
        const exchange = this.getExchange();
        const sector = this.getSector();
        const industry = this.getIndustry(sector);
        const website = this.getWebsite(ticker);
        const description = this.getDescription(companyName, sector);
        return {
            companyName,
            description,
            exchange,
            industry,
            sector,
            website
        }
    }
}

function getRandomNumberBetween(min, max, floatResult) {
    if (floatResult) {
        return (Math.random() * (max - min) + min).toFixed(2);
    }
    return Math.floor(min + (max - min + 1) * Math.random());
}

export default new CompanyDataGenerator();