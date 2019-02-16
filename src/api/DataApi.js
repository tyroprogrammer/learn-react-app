import CompanyDataGenerator from './CompanyDataGenerator';

export default class DataApi {
    static async getCompanyProfile(company) {
        return new Promise((resolve, reject) => {
            if (!company || company.trim().length !== 3) {
                reject('Ticker cannot be empty and must be 3 character long');
            }
            try {
                const result = CompanyDataGenerator.getCompanyProfile(company);
                resolve(result);
            } catch(e) {
                console.error(e);
                reject(e);
            }
        })
    }

    static async getCompanyFinancial(company) {
        return new Promise((resolve, reject) => {
            if (!company || company.trim().length !== 3) {
                reject('Ticker cannot be empty and must be 3 character long');
            }
            try {
                const result = CompanyDataGenerator.getCompanyFinancial(company);
                resolve(result);
            } catch(e) {
                console.error(e);
                reject(e);
            }
        })
    }
}


