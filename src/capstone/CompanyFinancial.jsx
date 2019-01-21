import React, { Component } from 'react';
import style from './solution/style';

class CompanyFinancial extends Component {
    render() {
        const { companyFinancial } = this.props;
        return (
            <div style={style.financialContainer}>
                <div>
                    <div style={style.financialTitle}>Financial</div>
                    <div style={style.financialContent}>
                        {
                            Object.keys(companyFinancial)
                                .map(prop => {
                                    return <div key={prop} style={style.financialMetricRow}>
                                        <div style={style.financialMetric}>
                                            {prop}
                                        </div>
                                        <div>
                                            {companyFinancial[prop]}
                                        </div>
                                    </div>
                                })
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default CompanyFinancial;